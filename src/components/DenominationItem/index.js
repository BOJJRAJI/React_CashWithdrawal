// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountDetails, removeAmount} = props
  const {value} = amountDetails

  const onDelete = () => {
    removeAmount(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
