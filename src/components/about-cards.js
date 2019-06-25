import React from 'react'; 
import './about.css';


const AboutCards = () => {
	return (
		<div className="about-cards-container">
			<div className="about-card">
				<img className="about-icon" role="presentation" src="assets/images/review.png" />
				<h3>View Pictures of Cats</h3>
				<hr className="short-line cards-line" />
				<p>The Cats app lets you view hundreds of pictures of cats straight from the Cat API and users like you.</p>
			</div>
			<div className="about-card">
				<img className="about-icon" role="presentation" src="assets/images/filter.png" />
				<h3>Upload Pictures of Cats</h3>
				<hr className="short-line cards-line" />
				<p>Upload your own pictures of cats; cats you own, cats your friends own, cats you find on the street, any picture of a cat!</p>
			</div>
		</div>
	);
};
export default AboutCards; 