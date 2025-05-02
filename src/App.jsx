import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  return (
    <div className="App">
      <Hello name="Kim" message="Hi there!" emoji="sdsvvsdvsdvsdv" seatNumberr={seatNumbers} />
    </div>
  );
}

export default App;
