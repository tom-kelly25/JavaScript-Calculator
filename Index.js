function App() {
  const [expression, setExpression] = React.useState("");

  const displayscreen = () => {
    setExpression.prev;
  };

  return (
    <div className="container">
      <div className="grid">
        <div onClick={displayscreen} className="display"></div>
        <div onClick={displayscreen} className="padButton AC">
          AC
        </div>
        <div onClick={displayscreen} className="padButton C">
          C
        </div>
        <div onClick={displayscreen} className="padButton div">
          /
        </div>
        <div onClick={displayscreen} className="padButton times">
          *
        </div>
        <div onClick={displayscreen} className="padButton seven dark">
          7
        </div>
        <div onClick={displayscreen} className="padButton eight dark">
          8
        </div>
        <div onClick={displayscreen} className="padButton nine dark">
          9
        </div>
        <div onClick={displayscreen} className="padButton minus">
          -
        </div>
        <div onClick={displayscreen} className="padButton four dark">
          4
        </div>
        <div onClick={displayscreen} className="padButton five dark">
          5
        </div>
        <div onClick={displayscreen} className="padButton six dark">
          6
        </div>
        <div onClick={displayscreen} className="padButton plus">
          +
        </div>
        <div onClick={displayscreen} className="padButton one dark">
          1
        </div>
        <div onClick={displayscreen} className="padButton two dark">
          2
        </div>
        <div onClick={displayscreen} className="padButton three dark">
          3
        </div>
        <div onClick={displayscreen} className="padButton equal ">
          =
        </div>
        <div onClick={displayscreen} className="padButton zero dark">
          0
        </div>
        <div onClick={displayscreen} className="padButton dot dark">
          .
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
