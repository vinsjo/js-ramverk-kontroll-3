import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
	return (
		<h1 className="logo">
			<Link to="/">rss</Link>
		</h1>
	);
};

export default Logo;
