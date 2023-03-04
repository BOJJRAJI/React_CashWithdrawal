import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onWithdrawAmount = value =>
    this.setState(prevState => ({cash: prevState.cash - value}))

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state
    console.log({cash})
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="userDetails-container">
            <div className="user-profile">
              <p>S</p>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="heading">Your Balance</p>
            <div className="remaining-amount-container">
              <p className="amount">{cash}</p>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                amountDetails={eachAmount}
                removeAmount={this.onWithdrawAmount}
                key={eachAmount.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
