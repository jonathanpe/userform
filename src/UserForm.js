import React from 'react';
import './UserForm.scss';
class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            alerts: {
                empty: {
                    value:false,
                    message : 'le champ user doit contenir au moins un charactere'
                },
                onlyMaj :{
                    value : false,
                    message : 'Ne doit comporter que des majsucule'
                },
                alreadyExist : {
                    value : false,
                    message : 'Cet utilisateur existe deja !'  
                }
            }
    };
        this.messages = {
            alreadyExist: 'Cet utilsiateur existe deja ! ',
            notComform :  'Ne doit comporter que des majuscule'}
        this.users = []
    }


    isMajComform = (text) => {
        return(!text.match(/^[A-Z]+$/, 'g') && text.length>0)
    }

    isTextIsEmpty = (text) =>{
        return text.length>0
    }

    isUserExist = (user) => {
        return this.users.includes(user)
    }

    handleChange = (event) => {

        this.state.alerts.onlyMaj.value = this.isMajComform(event.target.value)
        this.state.alerts.empty.value = 

        this.setState({ value: event.target.value ,alerts : this.state.alerts});
       
    }
    getErrors(){
        return Object.keys(this.state.alerts).filter(alert => {
            return this.state.alerts[alert].value===true
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.state.alerts.alreadyExist.value = this.isUserExist(this.state.value)  
        this.state.alerts.empty.value = !this.isTextIsEmpty(this.state.value)

        if(!this.getErrors.length >0)this.users.push(this.state.value)

        this.setState({alerts : this.state.alerts});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Nom d'utilisateur
                            <input type="text" onChange={this.handleChange} value={this.state.value} className="form-control" id="username-input" aria-describedby="Nom D'utilisateur" placeholder="Entrer un Username"></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </label>
                  
                    {this.getErrors().map((alert,index) =>{
                        console.log(alert)
                        return <div key={index} className="alert alert-danger" role="alert">
                            {this.state.alerts[alert].message}
                        </div>
                    })
                    }             
                    </div>
                    <input type="submit" className="btn btn-primary" value="Valider" />
                </form>
            </div>
        );
    }
}

export { UserForm }