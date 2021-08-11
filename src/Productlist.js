import { render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './productstyles.module.css'; 
import { useParams } from 'react-router-dom';
import Productpage from './Productpage';
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
			<li><Link to="/productpage">Home</Link></li>
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
			"imageid": 2,
			"image":"image 42.png",
			"itemname": "Toor Dal/Athar Dal",
			"description":"Brand Name and Description",
			"weight":"1kg",
			"price":"RS.115 ",
			"strike":"98",
			"button":"ADD",
		},
		{ 
			"imageid": 3,
			"image":"image 42.png",
			"itemname": "Toor Dal/Athar Dal",
			"description":"Brand Name and Description",
			"weight":"1kg",
			"price":"RS.115 ",
			"strike":"98",
			"button":"ADD",
		},
		{ 
			"imageid": 4,
			"image":"image 43.png",
			"itemname": "Tata salt",
			"description":"Brand Name and Description",
			"weight":"5kg",
			"price":"RS.115 ",
			"strike":"98",
			"button":"ADD",
		},	
	];
	let { id } = useParams();
	return (
		<div className={styles.Productlist}>
			<Section />
			<div className={styles.card}>
				<nav>
					<ol>
						<li key={id}><Link to={`${id}`}></Link></li>
					</ol>
					<ol className={styles.list}>
						<li>All</li>
						<li key={id}><Link to={`/1`}>Food Grains</Link></li>
						<li key={id}><Link to={`${id}`}>Oil & Ghee</Link></li>
						<li key={id}><Link to={`${id}`}>Spices</Link></li>
						<li key={id}><Link to={`${id}`}>Vegetables</Link></li>
						<li key={id}><Link to={`${id}`}>FRUITS</Link></li>
						<li key={id}><Link to={`${id}`}>diary</Link></li>
						<li key={id}><Link to={`${id}`}>beverages</Link></li>
						<li key={id}><Link to={`${id}`}>beauty</Link></li>
						<li key={id}><Link to={`${id}`}>households</Link></li>
						<li key={id}><Link to={`${id}`}>watercan</Link>s</li>
						<li key={id}><Link to={`${id}`}>frequenty bought</Link></li>   
					</ol>						
				</nav>
			<div className={styles.cardbox}>
				{itemcardlist.map(x =>
					<div className={styles.cardlist}>
						<img src={x.image}  alt=" "/>
						<div className={styles.description}>
							<h5>{x.itemname}</h5>										
							<p>{x.description}</p>
							<p>{x.weight}</p>
							<p>{x.price}<span style={{textDecoration:"line-through"}}>{x.strike}</span></p>
						</div>	
						<button  type="submit" className={styles.carbbt}>{x.button}</button>	
					</div>
					)}	
			</div>
			</div>
		</div>	
);
}
export default  Productlist;
