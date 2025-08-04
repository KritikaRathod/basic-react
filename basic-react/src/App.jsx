import React from "react";

let ctx = React.createContext();

class App extends React.Component {
  render() {
    return (
      <ctx.Provider value={"data from context"}>
        <h1>This is App</h1>
        <Comp1 />
      </ctx.Provider>
    );
  }
}

function Comp1() {
  return (
    <div>
      <h1>Component1</h1>
      <Comp2 />
    </div>
  );
}

function Comp2() {
  return (
    <div>
      <h1>Component2</h1>
      <Comp3 />
    </div>
  );
}

function Comp3() {
  return (
    <ctx.Consumer>
      {(value) => (
        <div>
          <h1>Component3</h1>
          <p>Data: {value}</p>
        </div>
      )}
    </ctx.Consumer>
  );
}

export default App;
