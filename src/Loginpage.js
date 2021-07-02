import React from 'react';
import styles from './productstyles.module.css'; 
import Productpage from './Productitems';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Login extends React.Component {
	userData;
	constructor(props){
    super(props);
    this.state = {username: '', pwd: ''
    };
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	handleChangeUsername(event){
		this.setState({username: event.target.value})
		console.log('username'+ this.state.username)
	}
	handleChangePwd(event){
		this.setState({pwd: event.target.value})
		console.log('Password'+ this.state.pwd)
	}
	onSubmit(e) {
    console.log(this.state);
		e.preventDefault()
		this.setState({
			username: '',
			pwd: ''
		})
	}
	componentDidMount(){
		this.userData = JSON.parse(localStorage.getItem('user'));
		if (localStorage.getItem('user')) {
			this.setState({
					username: this.userData.username,
					pwd: this.userData.pwd
				})
			
		}else {
			this.setState({
				username: '',
				pwd: ''
			})
		}
	}
	componentDidUpdate(nextProps, nextState) {
		localStorage.setItem('user', JSON.stringify(nextState));

	}

	
    render () {
        return (
					<Router>
            <div className={styles.container}>
							<div className={styles.Login}>
								<h1>Welcome to  Online Grocesry app</h1>
								<form className={styles.forms} onSubmit={this.onSubmit}>
								<div className={styles.imgcontainer}>
									<img className={styles.avatar} src="theme-illustration.png" alt=" "/>
								</div>
									<h4>UserName</h4>
										<input type="email" value={this.state.username} onChange={this.handleChangeUsername} placeholder="Enter your Email Id" required/>
										<h4>Passwords</h4>
										<input type="password"  value={this.state.pwd} onChange={this.handleChangePwd} placeholder="Enter your Passwords" required/>
											<button className onClick={this.onSubmit}  type="submit">Login</button>
						

										
								</form>
								{/* <Switch>
								<Route path="/" exact component={Login} />
                    <Route path="/Productitems" component={Productpage} />

								</Switch> */}

							</div>

						<Productpage />
												
						</div>
						</Router>

        );
    }
}
export default Login;