import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>This is App</h1>
        <MenuItem name={"pizza"} price={200} disc={10}/>
        <MenuItem name={"jgklj"}/>
      </div>
    );
   
  }
}
  
     function MenuItem(props) {
      return(
        <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.disc}</p>
        </div>
      );
      
    }
  


export default App;
