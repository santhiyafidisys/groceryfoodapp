import React from 'react';
import styles from './productstyles.module.css'; 
import Login from './Loginpage';
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

		
        return (
					
					<div className={styles.productcontainer}>
							<div className={styles.row}>
								{productlist.map(l =>
									<div className={styles.col}>
										<div className={styles.items} id={l.id}>
										<img src={l.image}  alt=" "/>
											<p className={styles.name}>{l.category}</p>

										</div>		
								</div>

									)}
								
							</div>
							

						
					</div>

        );
    }


export default Productpage;