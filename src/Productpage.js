import React, { useState } from 'react';
import styles from './productstyles.module.css'; 


import { useHistory	 } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Productlist from './Productlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




	const Productpage = () => {		
			const productlist = [
				{ 
					"id": 1,
					"image":"FoodGrains.png",
					"category": "Food Grains",
				},
				{ 
					"id": 2,
					"image":"Fruits.png",
					"category": "Fruits",
				},
				{ 
					"id": 3,
					"image":"GheeOil.png",
					"category": "GheeOil",
				},
				{ 
					"id": 4,
					"image":"Diary.png",
					"category": "Diary",
				},
				{ 
					"id": 5,
					"image":"Beverages.png",
					"category": "Beverages",
				},
				{ 
					"id": 6,
					"image":"Beauty.png",
					"category": "Beauty",
				},
				{ 
					"id": 7,
					"image":"Snacks.png",
					"category": "Snacks",
				},
				{ 
					"id": 8,
					"image":"Spices.png",
					"category": "Spices",
				},
				{ 
					"id": 9,
					"image":"Vegetables.png",
					"category": "Vegetables",
				},
				{ 
					"id": 10,
					"image":"Diary.png",
					"category": "Frequently Bought",
				},
				
			];
		// 	const setData = () => {
		// 		 productlist={ id: '',image: '', category: ''} 
		// 		localStorage.setItem('myList',JSON.stringify(productlist));
		// 	 }
		// // getData = () =>{
		// // 	let productlist = localStorage.getItem('myList');
		// // 	data= JSON.parse(data);
		// // 	console.log(data)
		// // }
		// localStorage.setItem('productlist',JSON.stringify(productlist));	
		const Section = () =>(
			<div className={styles.navbar}>
			<div className={styles.logo}>
			<img  src="Group 1.png" alt=" "></img>
			<div className={styles.logotext}>
			<h2>Deva Daily Needs</h2>
				<p>Powered by Needsmart Fidisys</p>

			</div>

			</div>					
			<ul className={styles.menu}>
						<li><img src="Vector (6).png"  alt=" "></img>Search</li>
						<li><img src="Vector (10).png"  alt=" "></img>Orders</li>
						<li><img src="Vector (7).png"  alt=" "></img>Accounts</li>
						<li><img src="Vector (9).png"  alt=" "></img>Cart</li>
						<li><Link to="/login">Login</Link></li>
				</ul>

</div>

		);

        return (					
					<div className={styles.productcontainer}>
						{/* <div className={styles.navbar}>
							<div className={styles.logo}>
							<img  src="Group 1.png" alt=" "></img>
							<div className={styles.logotext}>
							<h2>Deva Daily Needs</h2>
								<p>Powered by Needsmart Fidisys</p>

							</div>

							</div>					
							<ul className={styles.menu}>
										<li><img src="Vector (6).png"  alt=" "></img>Search</li>
										<li><img src="Vector (10).png"  alt=" "></img>Orders</li>
										<li><img src="Vector (7).png"  alt=" "></img>Accounts</li>
										<li><img src="Vector (9).png"  alt=" "></img>Cart</li>
										<li><Link to="/login">Login</Link></li>
								</ul>

    </div> */}
		<Section />
		<img className={styles.offer} src="offers banner.png" alt=" "/>
							<div className={styles.row}>

            
								{productlist.map(l =>
									<div className={styles.col}>
										<div className={styles.items} id={l.id}>
										<img src={l.image}  alt=" "/>
										
											<p className={styles.name}><Link to='Productlist'>{l.category}</Link></p>
										</div>		
								</div>
								)}								
							</div>	
											
					</div>

        );
    }
export default Productpage;