import { render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './productstyles.module.css'; 

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

const Productlist = () => {		
	const itemcardlist = [
		{ 
			"imageid": 1,
			"image":"image 41.png",
			"itemname": "Food Grains",
			"description":"Brand Name and Description",
			"weight":"1kg",
			"price":"Rs.115 ",
			"strike":"98",
			"button":"ADD",

		},
		{ 
			"idimage": 2,
			"image":"image 42.png",
			"itemname": "Toor Dal/Athar Dal",
			"description":"Brand Name and Description",
			"weight":"1kg",
			"price":"RS.115 ",
			"strike":"98",
			"button":"ADD",


		},
		{ 
			"idimage": 3,
			"image":"image 42.png",
			"itemname": "Toor Dal/Athar Dal",
			"description":"Brand Name and Description",
			"weight":"1kg",
			"price":"RS.115 ",
			"strike":"98",
			"button":"ADD",


		},
		{ 
			"idimage": 4,
			"image":"image 43.png",
			"itemname": "Tata salt",
			"description":"Brand Name and Description",
			"weight":"5kg",
			"price":"RS.115 ",
			"strike":"98",
			"button":"ADD",


		},
	
	];
	
	return (
		<div className={styles.Productlist}>
			<Section />
			<div className={styles.card}>
				<nav>
					<ol className={styles.list}>
						<li>All</li>
						<li>Food Grains</li>
						<li>Oil & Ghee</li>
						<li>Spices</li>
						<li>Vegetables</li>
						<li>FRUITS</li>
						<li>diary</li>
						<li>beverages</li>
						<li>beauty</li>
						<li>households</li>
						<li>watercans</li>
						<li>frequenty bought</li>   
					</ol>						
				</nav>
				<div className={styles.cardbox}>
					{itemcardlist.map(l =>
						<div className={styles.cardlist}>
							<img src={l.image}  alt=" "/>
							<div className={styles.description}>
								<h5>{l.itemname}</h5>										
								<p>{l.description}</p>
								<p>{l.weight}</p>
								<p>{l.price}<span style={{textDecoration:"line-through"}}>{l.strike}</span></p>
							</div>	
							<button  type="submit" className={styles.carbbt}>{l.button}</button>	
						</div>
					)}	
				</div>
			</div>
		</div>	
						
		
);
}
export default  Productlist;
