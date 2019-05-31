import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/' exact>
			Burger Builder
		</NavigationItem>
		<NavigationItem link='/orders'>Orders</NavigationItem>
		{props.authenticated ? (
			<NavigationItem link='/logout' onClick={props.logout}>
				Logout
			</NavigationItem>
		) : (
			<NavigationItem link='/auth'> Login </NavigationItem>
		)}
	</ul>
);

export default navigationItems;
