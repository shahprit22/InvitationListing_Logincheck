import React,{ Component } from 'react';
import CryptoJS from 'crypto-js';

class Login extends Component {
    
    state={
        users: [{
            user_id: 1,
            first_name: "andrew",
            last_name: "user1",
            email: "andrew@test.com",
            password: "andrew@123"
        },{
            user_id: 2,
            first_name: "mike",
            last_name: "user2",
            email: "mike@test.com",
            password: "mike@123"
        },{
            user_id: 3,
            first_name: "jeet",
            last_name: "user3",
            email: "jeet@test.com",
            password: "jeet@123"
        }],

        data:{
            userName:"",
            password:""
        },
        successful : "false" 
        }

    changehandler = (e) => {
        let data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let users = [...this.state.users]
        let data = {...this.state.data}
        for(const user of users){
            if(user.email===data.userName && user.password===data.password){
                console.log("hello")
                user.password = CryptoJS.SHA1(user.password).toString();
                localStorage.setItem("token",JSON.stringify(user))
                window.location="/";
                break;
            }
        }
        data.userName = "";
        data.password = "";
        this.setState({data})        
    }

    render() { 
        // console.log(this.state)
        const {data} = this.state;
        return ( 
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type="email" name="userName" value={data.userName} onChange={this.changehandler} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" name="password" value={data.password} onChange={this.changehandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;