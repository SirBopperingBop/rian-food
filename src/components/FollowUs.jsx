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

const FollowUs = () => (
	<Block>
		<div className="background-white border-radius box-shadow padding-box-middle text-center">
			<h4 className="margin-bottom-small">Follow us on :</h4>
			<ul>
				<li>
					<a href=""><span className="icon-small icon-width socmed-bg-facebook color-white">
						<i className="fab fa-facebook-f"></i>
					</span></a>
				</li>
				<li>
					<a href=""><span className="icon-small icon-width socmed-bg-twitter color-white">
						<i className="fab fa-twitter"></i>
					</span></a>
				</li>
				<li>
					<a href=""><span className="icon-small icon-width socmed-bg-whatsapp color-white">
						<i className="fab fa-whatsapp"></i>
					</span></a>
				</li>
				<li>
					<a href=""><span className="icon-small icon-width socmed-bg-google color-white">
						<i className="fab fa-google"></i>
					</span></a>
				</li>
			</ul>
		</div>
	</Block>
);
export default FollowUs;