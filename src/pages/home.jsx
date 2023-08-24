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
  Button,
  CardHeader,
  CardContent,
  CardFooter,
  Card
} from 'framework7-react';
import FollowUs from '../components/FollowUs';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    {/*
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Joy</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Joy</NavTitleLarge>
    </Navbar>
    */}

    {/* imported */}
    <Block className="title-apps padding-middle background-primer">
        <div className="grid grid-cols-2">
            <h3 className="color-white">Joy</h3>
            <a href="/notification/">
              <span className="icon-middle margin-left-small float-right color-white">
                <i className="fas fa-bell"></i>
              </span>
            </a>
        </div>
    </Block>

    <div className="border-radius-style background-circle background-primer">
      <div className="container">
        <div className="background-white border-radius padding-box-middle box-shadow">
          <div className="grid grid-cols-2 grid-gap">
            <div>
              <div className="float-left margin-right-small">
                <img className="people" src="images/author.jpg" alt=""></img>
              </div>
              <div className="overflow-hidden">
                <h6>John Doe</h6>
                <p>@johndoe97</p>
              </div>
            </div>
            <Button small className="buttons letter-spacing margin-top-small" text="$ 650"></Button>
          </div>
        </div>
      </div>
    </div>

    <div className="separator"></div>

    <Block>
      <div className="grid grid-cols-3 grid-gap">
        <a href="/withdraw/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-green"><i className="fa fa-arrow-alt-circle-down"></i></span>
            <h6 className="font-weight-500">Withdraw</h6>
          </div>
        </a>
        <a href="/transfer/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-red"><i className="fa fa-redo"></i></span>
            <h6 className="font-weight-500">Transfer</h6>
          </div>
        </a>
        <a href="/voucher/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-purple"><i className="fa fa-gift"></i></span>
            <h6 className="font-weight-500">Voucher</h6>
          </div>
        </a>
        <a href="/cards/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-teal"><i className="fa fa-id-card"></i></span>
            <h6 className="font-weight-500">Cards</h6>
          </div>
        </a>
        <a href="/ticket/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-orange"><i className="fa fa-ticket-alt"></i></span>
            <h6 className="font-weight-500">Ticket</h6>
          </div>
        </a>
        <a href="/events/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-blue"><i className="fa fa-calendar-alt"></i></span>
            <h6 className="font-weight-500">Events</h6>
          </div>
        </a>
        <a href="/electricity/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-yellow"><i className="fa fa-lightbulb"></i></span>
            <h6 className="font-weight-500">Electricity</h6>
          </div>
        </a>
        <a href="/donation/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-pink"><i className="fa fa-donate"></i></span>
            <h6 className="font-weight-500">Donation</h6>
          </div>
        </a>
        <a href="/pages/">
          <div className="background-white text-center border-radius padding-box box-shadow">
            <span className="icon-big icon-color-lime"><i className="fa fa-bars"></i></span>
            <h6 className="font-weight-500">All Pages</h6>
          </div>
        </a>
      </div>
    </Block>
    
    <FollowUs></FollowUs>

  </Page>
);
export default HomePage;