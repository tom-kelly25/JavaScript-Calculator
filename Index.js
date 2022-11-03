function App() {
  const [expression, setExpression] = React.useState("");

  const displayscreen = (symbol) => {
    setExpression((prev) => prev + symbol);
  };

  return (
    <div className="container">
      <div className="grid">
        <div onClick={displayscreen} className="display">
          <input
            type="text"
            value={expression}
            placeholder="0"
            disabled
          ></input>
        </div>
        <div onClick={() => displayscreen("AC")} className="padButton AC">
          AC
        </div>
        <div onClick={() => displayscreen("C")} className="padButton C">
          C
        </div>
        <div onClick={() => displayscreen("/")} className="padButton div">
          /
        </div>
        <div onClick={() => displayscreen("*")} className="padButton times">
          *
        </div>
        <div
          onClick={() => displayscreen("7")}
          className="padButton seven dark"
        >
          7
        </div>
        <div
          onClick={() => displayscreen("8")}
          className="padButton eight dark"
        >
          8
        </div>
        <div onClick={() => displayscreen("9")} className="padButton nine dark">
          9
        </div>
        <div onClick={() => displayscreen("-")} className="padButton minus">
          -
        </div>
        <div onClick={() => displayscreen("4")} className="padButton four dark">
          4
        </div>
        <div onClick={() => displayscreen("5")} className="padButton five dark">
          5
        </div>
        <div onClick={() => displayscreen("6")} className="padButton six dark">
          6
        </div>
        <div onClick={() => displayscreen("+")} className="padButton plus">
          +
        </div>
        <div onClick={() => displayscreen("1")} className="padButton one dark">
          1
        </div>
        <div onClick={() => displayscreen("2")} className="padButton two dark">
          2
        </div>
        <div
          onClick={() => displayscreen("3")}
          className="padButton three dark"
        >
          3
        </div>
        <div onClick={() => displayscreen("=")} className="padButton equal ">
          =
        </div>
        <div onClick={() => displayscreen("0")} className="padButton zero dark">
          0
        </div>
        <div onClick={() => displayscreen(".")} className="padButton dot dark">
          .
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
