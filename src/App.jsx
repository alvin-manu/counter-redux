import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center w-100 flex-column"
        style={{ height: "100vh" }}
      >
        <div className=" d-flex justify-content-center align-items-center p-2 p-md-5 pt-3 pb-3 flex-column rounded " style={{backgroundColor:"white"}}>
          <h2 className="text-primary">Counter Application</h2>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
