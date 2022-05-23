import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import RestaurantCard from './RestaurantCard';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState();
    useEffect(() => {
         // fetch our API 
         fetch('http://my-first-firestore-hs.web.app/restaurants')
         .then (response => response.json())
         .then (data => setRestaurants(data))
         .catch(console.error)
    }, [])
  
    return (
        <section style={{margin: '60px'}}>
            <Row >
            {!restaurants
                ? <h2>Loading...</h2>
            : restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id} />)}
            </Row>
        </section>
    )
}

export default RestaurantList;