//
import ExpenseInput from "./containers/ExpenseInput/ExpenseInput";
import ExpenseList from "./containers/ExpenseList/ExpenseList";
import IncomeInput from "./components/IncomeInput/IncomeInput";
import ExpenseTotal from "./components/ExpenseTotal/ExpenseTotal";
import "./App.css"
function App() {
  return (
      <>
        <header><h1>용돈기입장</h1></header>
        <main>
          
          <div className="income flex-col">
            <h2 className="a11y-hidden">수입</h2>
            <IncomeInput />
          </div>
          
          <div className="expense">
            <h2 className="a11y-hidden">지출</h2>
            <ExpenseInput />
            <ExpenseList />
            <ExpenseTotal />
          </div>

        </main>

        <footer></footer>
      </>
  );
}
export default App;
