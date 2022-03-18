import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
	return (
		<div className="page-wrapper">
			<Header />
			<main className="content">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
