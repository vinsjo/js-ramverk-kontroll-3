import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
	return (
		<h1 className="logo">
			<Link to="/" title="Home">
				rss
			</Link>
		</h1>
	);
};

export default Logo;
