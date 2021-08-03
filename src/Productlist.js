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
const Itemcard = () => {		
	const Itemcardlist = [
		{ "itemid":1,
			"itemimage":"image 43.png",
			"itemname":"Wheat Flour",
			"Description":"Brand Name and Description",
			"weight":"1kg",
			"price":"RS.115 98"
		}
	];
}



function Productlist() {
    return (
        <div className={styles.Productlist}>
					<Section />
					<div>
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
	{/* {Itemcard.map(l =>
									<div className={styles.col}>
										<div className={styles.items} id={l.itemid}>
										<img src={l.itemimage}  alt=" "/>
										
										</div>		
								</div>
								)}		 */}
</div>
	



  			</div>



    
    );
	
  }


export default Productlist;
