import { useSelector, useDispatch } from "react-redux";
import { getAmount, amountChanged } from "../reducers/RateReducer";

export function AmountField() {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  function onChange(e) {
    let newAmount = e.target.value;
    dispatch(amountChanged(newAmount));
  }
  return (
    <form className="ExchangeRate-form">
      <input type="text" value={amount} onChange={onChange} />
    </form>
  );
}


// export function AmountField({ amount }) {
//   const dispach = useDispatch()
//   function onChange(e) {
//     dispach(changeAmounte(.target.value) )
//   }
//   return (
//     <form className="ExchangeRate-form">
//       <input
//         aria-label="Amount in base currency"
//         type="text"
//         value={amount}
//         onChange={onChange}
//       />
//     </form>
//   )
// }