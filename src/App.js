import React, { Component } from 'react';
import Logo from './Logo';
import { Provider } from './Provider';
import './App.css';

export default class App extends Component {
  render() {    
    return (
      <div className="App">              
        <header className="App-header">
          <Provider>
            <Logo/>
          </Provider>            
        </header>
      </div>      
    );
  }
}


// import React, { Component } from 'react';
// import Logo from './Logo';
// import TextContext from './context';
// import './App.css';
// import {Provider, Consumer} from './Provider';



// const  Nav = () => <LoginForm/>

// class LoginForm extends  Component {
//   render() {
//     return (
//     <Consumer>
//       {(value) => {
//         console.log('###',value);
//         const {viewer} = value.state;
//         const {logIn, logOut} = value.actions;
//       return viewer? 
//       <React.Fragment>
//         <h3>Logged in as: {viewer}</h3>
//         <button onClick={logOut}>logout</button>
//       </React.Fragment>:
//         <React.Fragment>
//           <input placeholder="Login in please" ref={r => this.inputRef = r}/>
//           <button type='submit' onClick={() =>{
//             logIn(this.inputRef.value);
//           }}>
//           Login
//           </button>
//         </React.Fragment>}}
//     </Consumer>
//     )
//   }
// }


// export default class App extends Component {  
//   render() {
//     const text = "of my company";
//     return (
//       <Provider>
//         <div className="App">
//         <Consumer>
//           {({state: {viewer}}) =>(
//             <h1>{viewer?`Welcome: ${viewer}`: "Login!!!"}
//             </h1>
//           )}
//         </Consumer>         
//         <header className="App-header">
//         <Nav />

//         </header>
//       </div>      
//       </Provider>      
//     );
//   }
// }
// console.log("***",TextContext);
// export const TextContextConsumer = TextContext.Consumer;
