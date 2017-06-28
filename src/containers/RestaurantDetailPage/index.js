import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import Reviews from '../Reviews';
import GoogleMapReact from 'google-map-react';
import { Rating } from 'material-ui-rating';
import { calcAverageRating } from '../../utils';
import { Link } from 'react-router-dom';
import Map from '../../components/GoogleMaps';

const styles = {
	marker: {
		backgroundColor: 'red',
		height: 40,
		width: 40,
		padding: 10,
		borderRadius: 35,
		textAlign: 'center',
	},
	span: {
		color: 'white',
		fontSize: 13,
	},
	info: {
		paddingLeft: 15,
		paddingRight: 15,
	},
	content: {
		paddingLeft: 15,
		paddingRight: 15,
	},
};
const Marker = ({ text }) => <div style={styles.marker}><span style={styles.span}>{text}</span></div>;


class RestaurantDetailPage extends Component {
	render(){
		const {restaurant} = this.props;
		const {reviews} = this.props;
		const reviewsSize = Object.keys(reviews).length;
		const srcText = `http://maps.google.com/maps/api/staticmap?center=${restaurant.address}&maptype=roadmap&zoom=14&size=500x350&sensor=false&maptype=HYBRID&markers=color:red|label:${restaurant.address}|${restaurant.address}`

		return(
			<div className="restaurantDetailPage">
				<div className="info" style={styles.info}>
					<img src={restaurant.img} alt={restaurant.name} width="100%"/>
					<p><strong>{restaurant.name}</strong></p>
					<Rating
	          value={calcAverageRating(Object.values(reviews))}
	          max={5}
						readOnly={true}
	        />
					<p>{reviewsSize} reviews</p>
					<p>{restaurant.address}</p>
					<p>{restaurant.phone}</p>
					<p><Link to={'http://' + restaurant.website}>{restaurant.website}</Link></p>

					<Link to={'/restaurants/' + restaurant.id + '/review/new'} >
						<RaisedButton
							label="Write a Review"
							backgroundColor="red"
							fullWidth={true}
							labelColor="white"
						/>
					</Link>

					<br />
					<br />
					<Map address={restaurant.address}
							 name={restaurant.name}/>
				</div>
				<div className="reviews" style={styles.content}>
					<Reviews restaurant={restaurant} />
				</div>
			</div>
		);
	}
}

export default RestaurantDetailPage;
