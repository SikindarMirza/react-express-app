import React from 'react';
import { Consumer } from './Provider'
import './index.css';


export default class Logo extends React.Component {
    constructor(){
        super();
        this.state={
            status: "Allhamdulillah huge success",
            customers: [],
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, 
                () => console.log(`Fetching the data from api ${customers}`)));
    }

    render() {
        console.log("###",Consumer);
        return(
            <div>
                <Consumer>            
                    {(value)=> {
                        console.log("1 consumer check",value);
                        const {companyName} = value.state.companyName;
                        return (                            
                            <div>
                                <h1>{"companyName: " + value.state.companyName}</h1>
                                <h1>{`Name: ${value.state.name}`}</h1>
                                <button onClick={value.action.save}>Save</button>
                                <ul>
                                    {this.state.customers.map(customer =>
                                        <li key={customer.id}>
                                            {customer.firstName} {customer.lastName}
                                        </li>
                                    )}
                                </ul>
                            </div>
                            
                        );
                    }}
                </Consumer>

                <h2>{this.state.status}</h2>
            </div>
            
        )
    }
}

// Logo.contextType = TextContext;

// function Logo(context) {
//     console.log(context);
//     return (
//         <h1> {`This is the Logo ${context.companyName}`}</h1>
//     );

// }
//  export default Logo;