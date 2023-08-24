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

const Transfer = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Transfer
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="transfer margin-pages">
				<div className="container">
					<div className="background-circle">
						<div className="no-container">
							<div className="background-white border-radius padding-box-middle box-shadow">
								<div className="grid grid-cols-2 grid-gap grid grid-cols-2 grid-gap-no-margin-bottom">
									<div className="col-60">
										<div className="float-left margin-right-small">
											<img className="people" src="images/author.jpg" alt=""/>
										</div>
										<div className="overflow-hidden">
											<h6>John Doe</h6>
											<p>@johndoe97</p>
										</div>
									</div>
									<div className="col-40">
										<button className="buttons float-right letter-spacing margin-top-small">$ 650</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<h5 className="text-center margin-bottom-small">Amount $</h5>
					<div className="background-white border-radius box-shadow content">
		
						<form action="#">
							<input type="number"/>
						</form>
					</div>
					<div className="separator-small"></div>
					<h5 className="text-center margin-bottom-small">Transfer to</h5>
					<form>
						<input type="text" placeholder="Email/Username"/>
					</form>
					<button className="buttons buttons-full margin-top-small box-shadow">Transfer Now</button>
				</div>
			</div>
		</div>
	</Page>
);
export default Transfer;