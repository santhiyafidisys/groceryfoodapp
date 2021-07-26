import React, { useState } from 'react';
import styles from './productstyles.module.css'; 

import { useHistory	 } from "react-router-dom";




	function Login() {
		let history = useHistory();

		const [username, setName] = useState('');
		const [pwd, setPwd] = useState('');
 
		const handle = () => {
			 localStorage.setItem('username', username);
			 history.push("/");
		};  
		// const openpage = () => {
		// 	history.push("/Productpage");
		// };
	
        return (
					
            <div className={styles.container}>
							<div className={styles.Login}>
								<h1>Welcome to  Online Grocesry app</h1>
								<form className={styles.forms}>
								<div className={styles.imgcontainer}>
									<img className={styles.avatar} src="theme-illustration.png" alt=" "/>
								</div>
									<h4>UserName</h4>
									<input type="email"  placeholder="Username" value={username} onChange={(e) => setName(e.target.value)} />									
										<h4>Passwords</h4>
										<input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} />	
								<button onClick={handle}  type="submit">Login</button>
								</form>						
							</div>	
						
	
						</div>
				
						
						
);

};
export default Login;