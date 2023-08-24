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

const History = () => (
  <Page name="home">
    <Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
        History
			</NavTitle>
		</Navbar>
    <div className="page-content">
      <div className="history margin-pages2">
        <div className="container">
          <h5 className="margin-bottom-small">March</h5>
          <div className="background-white box-shadow border-radius padding-box-middle">
            <div className="float-left margin-right-middle">
              <span className="icon-big icon-color-green">
                <i className="fa fa-wallet"></i>
              </span>
            </div>
            <div className="overflow-hidden">
              <span>20 March 2020</span>
              <h6 className="margin-bottom-5px">Deposit</h6>
              <h4>$350</h4>
            </div>
          </div>
          <div className="separator-small"></div>
          <div className="background-white box-shadow border-radius padding-box-middle">
            <div className="float-left margin-right-middle">
              <span className="icon-big icon-color-pink">
                <i className="fa fa-donate"></i>
              </span>
            </div>
            <div className="overflow-hidden">
              <span>05 March 2020</span>
              <h6 className="margin-bottom-5px">Donation to <span><a href="" className="color-primer">Health Foundation</a></span></h6>
              <h4>$50</h4>
            </div>
          </div>
          <div className="separator-small"></div>
          <h5 className="margin-bottom-small">February</h5>
          <div className="background-white box-shadow border-radius padding-box-middle">
            <div className="float-left margin-right-middle">
              <span className="icon-big icon-color-yellow">
                <i className="fa fa-lightbulb"></i>
              </span>
            </div>
            <div className="overflow-hidden">
              <span>22 February 2020</span>
              <h6 className="margin-bottom-5px">Electricity</h6>
              <h4>$25</h4>
            </div>
          </div>
          <div className="separator-small"></div>
          <div className="background-white box-shadow border-radius padding-box-middle">
            <div className="float-left margin-right-middle">
              <span className="icon-big icon-color-purple">
                <i className="fa fa-arrow-alt-circle-down"></i>
              </span>
            </div>
            <div className="overflow-hidden">
              <span>18 February 2020</span>
              <h6 className="margin-bottom-5px">Withdraw</h6>
              <h4>$100</h4>
            </div>
          </div>
          <div className="separator-small"></div>
          <div className="background-white box-shadow border-radius padding-box-middle">
            <div className="float-left margin-right-middle">
              <span className="icon-big icon-color-red">
                <i className="fa fa-redo"></i>
              </span>
            </div>
            <div className="overflow-hidden">
              <span>11 February 2020</span>
              <h6 className="margin-bottom-5px">Transfer to <span><a href="" className="color-primer">@johndoe66</a></span></h6>
              <h4>$30</h4>
            </div>
          </div>
          <div className="separator"></div>
        </div>
      </div>
    </div>

  </Page>
);
export default History;