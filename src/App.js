import "./App.scss"
import { useContext } from "react"
import { DonationsContext } from "./context/DonationsContext"

function App() {
  const { amount, setAmount, countAndCalcState, total, remaining, count } =
    useContext(DonationsContext)

  return (
    <div className="container">
      <header>
        <h1>Give us all the money!</h1>
      </header>

      <section className="donation-wrapper">
        <div className="donation-update">
          <span className="font-bold">${remaining}</span> still needed for this
          project
        </div>

        <div className="donation-content">
          <progress className="progress-bar" value={total} max="500" />
          <p>
            <span className="font-bold highlight">Only 3 days left</span> to
            fund this project.
          </p>
          <p>
            Join the <span className="font-bold">{count || "0"}</span> other
            donors who have already supported this project. Every dollar helps.
          </p>

          <div className="options-row">
            <input
              className="options-row__input"
              value={amount}
              onChange={(e) => {
                setAmount(+e.target.value)
              }}
            />

            <button
              disabled={!amount || amount > remaining || amount < 0}
              className="options-row__btn"
              onClick={countAndCalcState}
            >
              Give Now
            </button>
          </div>
          <p className="donation-content__question">
            Why give ${amount || "0"}?
          </p>
        </div>

        <div className="options-row">
          <button className="btn">Save for later</button>
          <button className="btn">Tell your friends</button>
        </div>
      </section>
    </div>
  )
}

export default App
