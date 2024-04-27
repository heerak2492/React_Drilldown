import  {CDN_URL} from '../utils/constants';
import {LOGO_URL} from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.info
    return (
        <div className='res-card'>
            <img className='res-logo' alt='res-logo' src={LOGO_URL} />
            <h3>
                {name}
            </h3>
            <h4> 
                {cuisines.join(',')}
            </h4>
            <h4>
                {avgRating} stars
            </h4>
            <h4>
                {costForTwo}
            </h4>
            <h4>
                {deliveryTime} minutes
            </h4>
        </div>
    )
}

export default RestaurantCard