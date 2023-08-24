import React from 'react';
import {
	Page,
	Navbar,
	NavLeft,
	NavTitle,
	NavTitleLarge,
	NavRight,
	Link,
	Toolbar,
	Block,
	BlockTitle,
	List,
	ListItem,
	Button
} from 'framework7-react';

const Logout = () => (
	<Page name="home">
		<div className="page-content">
			<div className="container margin-pages">
				<div className="background-white padding-box border-radius box-shadow text-center">
					<h6 className="margin-bottom-small">Are you want to?</h6>
					<h1 className="margin-bottom-middle">Logout</h1>
					<div className="separator-small"></div>
					<a href="#" className="link back buttons margin-right-small">Cancel</a><a href="#" className="link back buttons buttons-red margin-left-small">Logout</a>
				</div>
			</div>
		</div>
	</Page>
);
export default Logout;