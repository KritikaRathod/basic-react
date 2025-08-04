import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>This is App</h1>
        <Comp1 data={"kritika"} />
      </div>
    );
  }
}

function Comp1(props) {
  return (
    <div>
      <h1>Component1</h1>
      <Comp2 data={props.data} />
    </div>
  );
}

function Comp2(props) {
  return (
    <div>
      <h1>Component2</h1>
      <Comp3 data={props.data} />
      <p>Data: {props.data}</p>
    </div>
  );
}

function Comp3(props) {
  return (
    <div>
      <h1>Component3</h1>
      <p>Data: {props.data}</p>
    </div>
  );
}

export default App;
