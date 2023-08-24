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

const Donation = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Donation
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="donation margin-pages2">
				<div className="container">
					<h5 className="margin-bottom-small">Donate to  <span className="color-primer">Health Foundation</span></h5>
					<div className="background-white border-radius box-shadow">
						<form action="#">
							<input type="text" value="$50" />
							<button className="buttons">Send</button>
						</form>
					</div>
					<h5 className="margin-bottom-small">Choose you want to Donate</h5>
					<div className="grid grid-cols-1 grid-gap">
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box border-active">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-red">
										<i className="fas fa-medkit"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Health Foundation</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-blue">
										<i className="fas fa-child"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Children Science</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-green">
										<i className="fas fa-tree"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Go Green</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-pink">
										<i className="fa fa-heart"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Love Foundation</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-red">
										<i className="fa fa-spider"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Spider Foundation</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-teel">
										<i className="fa fa-cat"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Cat Foundation </div>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Donation;