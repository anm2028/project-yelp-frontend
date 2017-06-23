import React from 'react';
import './index.css';
import { Rating } from 'material-ui-rating';

const ReviewItem = (props) => {
	const {review} = props;

	return (
		<div className="reviewItem">
			<div className="reviewName">
				<p>{review.firstName}</p>
				<p>{review.date}</p>
			</div>
			<div className="reviewContent">
				<Rating
          value={review.rating}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
				<p>{review.text}</p>
			</div>
		</div>
	);
};


export default ReviewItem;
