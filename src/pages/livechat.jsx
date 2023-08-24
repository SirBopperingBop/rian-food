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

const LiveChat = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				<img src="images/author.jpg" alt="" />
				<div className="content">
					<h6>John Doe</h6>
					<p>Online</p>
				</div>
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="livechat margin-pages">
				<div className="container">
					<div className="grid grid-cols-1 grid gap">
						<div className="col">
							<div className="content-right">
								<p>How to deposit?</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 grid gap">
						<div className="col">
							<img src="images/author.jpg" alt="" />
							<div className="content">
								<p>You just click deposit icon</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 grid gap">
						<div className="col">
							<div className="content-right">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 grid gap">
						<div className="col">
							<img src="images/author.jpg" alt="" />
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, possimus.</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 grid gap">
						<div className="col">
							<div className="content-right">
								<p>Lorem ipsum dolor sit lrem lorem.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="fast-live toolbar tabbar tabbar-labels toolbar-bottom">
			<div className="toolbar-inner">
				<form action="#">
					<i className="fa fa-link fast-ti-left"></i>
					<input type="text" placeholder="Type a message" />
					<i className="fa fa-paper-plane fast-ti-right"></i>
				</form>
			</div>
		</div>
	</Page>
);
export default LiveChat;