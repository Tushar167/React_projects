import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { bindActionCreators } from 'redux'
// import { depositMoney, withdrawMoney } from '../state/action_creators'


export default function Shop() {
  const dispatch = useDispatch()
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
      <div className='container'>
        <button className="btnprimary mx-2" style={{backgroundColor:'blue' , color:'white'}}onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance
        <button className="btnprimary mx-2" style={{backgroundColor:'blue' , color:'white'}} onClick={()=>{depositMoney(100)}}>+</button>
      </div>
    </div>
  )
}
