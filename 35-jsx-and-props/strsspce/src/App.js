import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import StressListItem from './StressListItem'

// export default function App() ===> export during the definition 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// rocket function

class App extends Component {

  // componentDidMount(){}

  renderStress(){
    // forEach returns undefined 
    // map returns a new array

    // IMPLICIT RETURN
    // return data.map(stress => ( 
    //   <div className="stresscard" id={stress.id}>
    //     <h1 >{stress.name}</h1>
    //     <p>{stress.level}</p>
    //     <img src={stress.image}/>
    //   </div>
    //   )
    // )

    // EXPLICIT RETURN 
    return data.map(stress => {
      return <StressListItem 
        id={stress.id}
        name={stress.name} 
        level={stress.level} 
        image={stress.image}
      />
      }
    )
  }

  render(){
    console.log(data)// array
    return (
      <div className="App">
        <h1>I WANNA BE STRSSSSSSSSSD</h1>
        <div className="stress-holder">
        {this.renderStress()}

        </div>
      </div>
    );
  }
}


// default export: export default App
// export { sayWassup, sayGoodbye } // named exports
export default App  // default export 
