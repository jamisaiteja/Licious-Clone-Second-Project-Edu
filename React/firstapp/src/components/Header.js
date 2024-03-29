import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        // console.log("inside constructor");
        super();//must be called in constructor
        this.state = {
            title:"React App Code",
            keyword:"User Input Here"
        }
    }

    change = (event)=>{
        // console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:"User Input Here"})
        this.props.userInput(event.target.value)
    }

    render(){
        // console.log("inside render");
        return(
            <>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <input onChange={this.change}/>
                    {/* inline style */}
                    <div style={{color:'white',fontSize:"20px"}}>{this.state.keyword}</div>
                </header>
                <hr/>
            </>
        )
    }
}

export default Header;
