import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import React from 'react';

const Body = ()=>{
    const [listOfRestraunts,setListOfRestraunts] = React.useState(null);
    const [filteredRestaurants,setFilteredRestaurants] = React.useState([])
    const [searchText, setSearchText] = React.useState("");
    const handleOnClick = ()=>{
        setFilteredRestaurants(listOfRestraunts.filter((item)=>{
           return (item.info.avgRating)>=4
        }))
    }
    const handeOnChange = (event)=>{
        setSearchText(event.target.value)
    }
    const handleOnClickSearchButton = ()=>{
        setFilteredRestaurants(listOfRestraunts.filter((item)=> {return (item.info.name).toLowerCase().includes(searchText.toLowerCase())}))
    }

    const fetchData =  async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log("listOfRestraunts: ", listOfRestraunts,"json: ",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      };

    React.useEffect(() => {
        fetchData();
      }, []);
    
      
    console.log("listOfRestraunts: ", listOfRestraunts)
    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={handeOnChange}  />
                    <button className='submit' onClick={handleOnClickSearchButton}>Submit</button>
                </div>
                <button className='filter-button' onClick={handleOnClick}>
                    Top rated restaurants
                </button>
            </div>
            <div className='restaurantContainer'>
                {filteredRestaurants&&filteredRestaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
                </div>
        </div>
    )
}

export default Body