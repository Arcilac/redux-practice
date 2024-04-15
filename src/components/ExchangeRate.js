import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RateTable } from "./RateTable"
import { CurrencyCodePicker } from "./CurrencyCodePicker"
import { AmountField } from "./AmountField"
import { getAmount, 
  getCurrencyData, 
  supportedCurrencies, 
  changeCurrencyCode,
  getCurrencyCode,
} from "../store/rates"

export function ExchangeRate() {
  const dispach = useDispatch()
  const amount =useSelector(getAmount)
  const currencyCode =useSelector(getCurrencyCode)
  const currencyData = useSelector(getCurrencyData)
  //const [currencyData, setCurrencyData] = useState({ USD: 1.0 })

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode))
  //   getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
  //     setCurrencyData(rates)
  //   })
   }, []) 

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  )
}
