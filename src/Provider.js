// import React,{Component} from 'react';


// const  MyContext = React.createContext();

// export class Provider extends Component {
//     state = {
//       viewer: null,
//     }
//     logIn = (name) => {
//       this.setState({viewer: name})
//     }
  
//     logOut = () =>{
//       console.log("logiut check");
//       this.setState({viewer: null})
//     }
//     render() {
//       return(
//         <MyContext.Provider value={{
//           state:this.state,
//           actions: {
//             logIn: this.logIn,
//             logOut: this.logOut,
//           }
//         }}>
//           {this.props.children}
//         </MyContext.Provider>
//       );
//     }
//   }

// export const Consumer = MyContext.Consumer;

import React,{Component} from 'react';

const TextContext = React.createContext();

export class Provider extends Component {

    state={
        companyName: "Sikindar Mirza",
        name: "Mohammed Umar",
    }
    
    save=() =>{
    console.log("Save button clickeed");
    alert("Saving the details");
    }

    render() {
        return(
            <TextContext.Provider 
                value={{
                    state: this.state,
                    action: {
                        save: this.save
                    }                    
                }}
            >
                {this.props.children}
            </TextContext.Provider>
        );
    }
}

export const Consumer = TextContext.Consumer;