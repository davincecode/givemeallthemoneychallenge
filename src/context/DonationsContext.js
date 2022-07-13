import { useState, createContext } from "react"

export const DonationsContext = createContext()

function DonationsContextProvider(props) {
  const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const calcTotal = () => {
    if (total >= 500) {
      return "You have reached the goal!"
    } else {
      setTotal(amount + total)
    }
  }

  const countUp = () => {
    if (value === 0) {
      fireClick().disabled = true
    } else {
      setCount(count + 1)
    }
  }

  const fireClick = () => {
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
    fireClick,
  }

  return (
    <DonationsContext.Provider value={value}>
      {props.children}
    </DonationsContext.Provider>
  )
}

export default DonationsContextProvider
