import { useState, createContext } from "react"

export const DonationsContext = createContext()

function DonationsContextProvider(props) {
  const [amount, setAmount] = useState(0) // amount of money given
  const [count, setCount] = useState(0) // number of donations
  const [total, setTotal] = useState(0) // total amount of money given

  const calcTotal = () => {
    setTotal(amount + total)
  }

  const countUp = () => {
    setCount(count + 1)
  }

  const countAndCalcState = () => {
    calcTotal()
    countUp()
  }

  const remaining = 500 - total

  const value = {
    amount,
    setAmount,
    total,
    calcTotal,
    remaining,
    count,
    countAndCalcState,
  }

  return (
    <DonationsContext.Provider value={value}>
      {props.children}
    </DonationsContext.Provider>
  )
}

export default DonationsContextProvider
