import React from 'react';
import ReactDOM from 'react-dom';
 class ContactForm extends React.Component {

    state={}

    setValue(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    displayContactInfo() {
        this.setState({
        n: this.state.fullname,
        p: this.state.phoneNumber,
        e: this.state.email

        })
    }


     render() {
         return(
             <div>

                <input type="text" 
                placeholder="Your name here" 
                name="fullname"
                onChange={(e)=> this.setValue(e)}/>
                <br/>
                <input type="text" 
                placeholder="Phone Number" 
                name="phoneNumber"
                onChange={(e)=> this.setValue(e)}/>

                <br/>

                <input type="text" 
                placeholder="Email" 
                name="email"
                onChange={(e)=> this.setValue(e)}/>

                <br/>


                <button onClick={()=>this.displayContactInfo()}>Submit</button>
                
                <h5>{this.state.n}</h5>
                <h5>{this.state.e}</h5>
                <h5>{this.state.p}</h5>

             </div>
         )
     }
 }

 ReactDOM.render(
     <ContactForm/>,
     document.getElementById('root')
 )