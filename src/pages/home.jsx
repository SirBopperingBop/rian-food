/*
TODO:
#BUILD DATABASE:
  -- Create the User table
  CREATE TABLE User (
      UserID INT PRIMARY KEY,
      Username VARCHAR(255),
      -- Add other user-related fields here
  );

  -- Create the ItemAttributes table to store common attributes
  CREATE TABLE ItemAttributes (
      ItemID INT PRIMARY KEY,
      ItemType VARCHAR(50),
      Title VARCHAR(255),
      Description TEXT,
      Price DECIMAL(10, 2),
      -- Add other common item attributes here
  );

  -- Create tables for specific item types (e.g., Food, Real Estate)
  CREATE TABLE Food (
      ItemID INT PRIMARY KEY,
      Meat BOOLEAN,
      Vegan BOOLEAN,
      Lunch BOOLEAN,
      -- Add other food-specific attributes here
  );

  CREATE TABLE RealEstate (
      ItemID INT PRIMARY KEY,
      NumRooms INT,
      NumBathrooms INT,
      Amenities TEXT,
      -- Add other real estate-specific attributes here
  );

  -- Create the Business table
  CREATE TABLE Business (
      BusinessID INT PRIMARY KEY,
      -- Add business-related fields here
  );

  -- Create a table to establish the relationship between Business and Items
  CREATE TABLE BusinessItem (
      BusinessID INT,
      ItemID INT,
      FOREIGN KEY (BusinessID) REFERENCES Business (BusinessID),
      FOREIGN KEY (ItemID) REFERENCES ItemAttributes (ItemID)
  );

  -- Create tables for audience interactions (e.g., Likes, Comments, Orders, Inquiries)
  CREATE TABLE Like (
      LikeID INT PRIMARY KEY,
      UserID INT,
      ItemID INT,
      -- Add timestamp and other relevant fields
      FOREIGN KEY (UserID) REFERENCES User (UserID),
      FOREIGN KEY (ItemID) REFERENCES ItemAttributes (ItemID)
  );

  CREATE TABLE Comment (
      CommentID INT PRIMARY KEY,
      UserID INT,
      ItemID INT,
      CommentText TEXT,
      -- Add timestamp and other relevant fields
      FOREIGN KEY (UserID) REFERENCES User (UserID),
      FOREIGN KEY (ItemID) REFERENCES ItemAttributes (ItemID)
  );

  CREATE TABLE Order (
      OrderID INT PRIMARY KEY,
      UserID INT,
      ItemID INT,
      Quantity INT,
      -- Add timestamp and other relevant fields
      FOREIGN KEY (UserID) REFERENCES User (UserID),
      FOREIGN KEY (ItemID) REFERENCES ItemAttributes (ItemID)
  );

  CREATE TABLE Inquiry (
      InquiryID INT PRIMARY KEY,
      UserID INT,
      ItemID INT,
      InquiryText TEXT,
      -- Add timestamp and other relevant fields
      FOREIGN KEY (UserID) REFERENCES User (UserID),
      FOREIGN KEY (ItemID) REFERENCES ItemAttributes (ItemID)
  );

#ADD DETAIL PAGE FOR
  • business
  • item
*/

/*
FAROOKH TODO: when user is logged in, add "Add | Edit" buttons in the cards
FAROOKH TODO: create forms similar to LakeJohnson for admin to add/edit items
FAROOKH TODO: for now use static JSON. Working on table structure now.
FAROOKH TODO: after user login, place name or email in the home page
*/

import React, { useState, useEffect } from 'react';
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
  List,
  ListItem,
  Button,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
  AccordionContent,
  ListInput
} from 'framework7-react';
import FollowUs from '../components/FollowUs';
import { supabase } from '../js/routes';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const HomePage = ({ f7router }) => {

  const [session, setSession] = useState(null)

  useEffect(() => {
    // https://supabase.com/docs/guides/auth/quickstarts/react
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log({session});
      setSession(session)
    })
    
    if (typeof(session)!=='undefined') { return }
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function signInWithEmail() {
    const url = window.location.href.split('#');
    const { data: { user }, error } = await supabase.auth.signInWithOtp({
      email: loginEmail,
      options: {
        emailRedirectTo: url[0],
      },
    })
    if (error) {
      f7.dialog.alert(error.message, 'Error')
      return;
    };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    f7.dialog.alert(`Check your email from sender berelatablepro@gmail.com`)
  }

  async function signInWithGoogle() {
    /*
    NOTE: setup redirect after supabase google login
    https://supabase.com/dashboard/project/hpxvsmvzotsfojvsugxn/auth/url-configuration
    https://relatable.pro 
    http://localhost:3000

    NOTE: google login
    loging with berelatablepro@gmail.com
    https://developers.google.com/identity/gsi/web/reference/js-reference
    https://console.cloud.google.com/apis/credentials?project=relatable-1667304366112
    https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
    https://developers.google.com/identity/gsi/web/guides/client-library
    https://www.youtube.com/watch?v=roxC8SMs7HU

    redirect_to=http%3A%2F%2Flocalhost%3A3001%2F%3F68d4abac-4bc8%26u%3Drianmatawi%2540gmail.com2
    */

    const url = window.location.href.split('#');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // redirectTo: removeHashAtEnd(window.location.href),
        redirectTo: url[0],
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    if (data) {
      console.log({ data });
    }
  }

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem('user');
    setSession();
  }

  return (
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
          <h3 className="color-white">Food</h3>
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

      {
        !session &&
        <Block>
          <GoogleLoginButton className='social-button' align='center' text="Continue with Google" onClick={() => { signInWithGoogle() }} ></GoogleLoginButton>
          <List accordionList className='loginwith-accordion'>
            <ListItem
              className='title-accordion'
              accordionItem
              title={
                <div style={{ alignItems: 'center', display: 'flex', height: '100%' }}>
                  <div className='email-icon' style={{ display: 'flex', justifyContent: 'center', minWidth: '26px' }}>
                    <i className='bi bi-envelope'></i>
                  </div>
                  <div style={{ width: '10px' }}></div>
                  <div style={{ textAlign: 'center', width: '100%', color: 'black', fontSize: '19px' }}>Continue with Email</div>
                </div>
              }>
              <AccordionContent className='loginwith-accordioncontent'>
                <Block>
                  <ul>
                    <div className="row">
                      <div className="col-100">
                        <ul>
                          <ListInput
                            className="question-input"
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={(e) => {
                              // setLoginEmail(e.target.value)
                              // setUser({ ...user, email: e.target.value });
                            }}
                          ></ListInput>
                        </ul>
                      </div>
                      <div className="col-50">
                        <ul>
                          {/* <li><div className='form-description small' style={styles?.text}>First Name</div></li> */}
                          <ListInput
                            className="question-input"
                            type='text'
                            name='firstname'
                            placeholder='Enter Firstname'
                            onChange={(e) => {
                              // setUser({ ...user, fname: e.target.value });
                            }}
                          ></ListInput>
                        </ul>
                      </div>
                      <div className="col-50">
                        <ul>
                          {/* <li><div className='form-description small' style={styles?.text}>Last Name</div></li> */}
                          <ListInput
                            className="question-input"
                            type='text'
                            name='lastname'
                            placeholder='Enter Lastname'
                            onChange={(e) => {
                              // setUser({ ...user, lname: e.target.value });
                            }}
                          ></ListInput>
                        </ul>
                      </div>
                    </div>
                    <a className={`button button-round button-large elevation-8 question-button`}
                      href='#'
                      /*
                      style={{
                        backgroundColor: Float2Hex(form_data.form_front.colors.button_color?.hex, form_data.form_front.colors.button_color?.alpha),
                        color: form_data.form_front.textsizes.buttontext?.color?.hex,
                        fontSize: form_data.form_front.textsizes.buttontext.size,
                      }}
                      */
                      onClick={() => {
                        signInWithEmail();
                      }}>Continue</a>
                  </ul>
                </Block>
              </AccordionContent>
            </ListItem>
          </List>
        </Block>
      }
      {
        session &&
        <Block>
          <Button outline text='Log Out' onClick={signOutUser}></Button>
        </Block>
      }

      <div className='group-header'>
        <div className="group-title">Restaurants</div>
        <Button small className='group-btn' onClick={() => { f7router.navigate('/restaurantlist/') }} text='View All'><i className="fa fa-chevron-right"></i></Button>
      </div>
      <swiper-container pagination space-between="50">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <swiper-slide key={index}>
                <Card className='card-profile box-shadow'>
                  <CardHeader style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})` }}>
                    <div className="back-gradient"></div>
                    <Button onClick={() => { f7router.navigate('/restaurantdetail/') }} className="logo box-shadow" style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})` }}></Button>
                    <div className="titles">
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    </div>
                  </CardHeader>
                </Card>
              </swiper-slide>
            )
          })
        }
      </swiper-container>

      <div className='group-header'>
        <div className="group-title">Food</div>
        <Button small className='group-btn' onClick={() => { f7router.navigate('/restaurantdetail/') }} text='View All'><i className="fa fa-chevron-right"></i></Button>
      </div>
      <swiper-container pagination space-between="50">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <swiper-slide key={index}>
                <Card className='card-type-1 box-shadow'>
                  <CardHeader style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})` }}>
                    <div className="back-gradient"></div>
                    <div className="float-left">10 Views</div>
                    <div className="float-right">5 Comments</div>
                    <div className="titles">
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    </div>
                  </CardHeader>
                  <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, in amet, aperiam enim laboriosam eum officiis dolorem cumque ad consequatur nemo. Pariatur quos soluta aliquam nostrum cum fugiat illo illum.</CardContent>
                  <CardFooter>
                    <Button round outline text="More..."></Button>
                    {/* <Button round outline text="Confirm"></Button> */}
                    {/* <Button round outline text="Cancel"></Button> */}
                  </CardFooter>
                </Card>
              </swiper-slide>
            )
          })
        }
      </swiper-container>

      <div className='group-header'>
        <div className="group-title">Recipes</div>
        <Button small className='group-btn' onClick={() => { f7router.navigate('/recipelist/') }} text='View All'><i className="fa fa-chevron-right"></i></Button>
      </div>
      <swiper-container pagination space-between="50">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <swiper-slide key={index}>
                <Card className='card-type-2'>
                  <CardHeader style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})` }}>
                    <div className="back-gradient"></div>
                    <div className="float-left">10 Views</div>
                    <div className="float-right">5 Comments</div>
                  </CardHeader>
                  <CardContent>
                    <div className="titles">
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, in amet, aperiam enim laboriosam eum officiis dolorem cumque ad consequatur nemo. Pariatur quos soluta aliquam nostrum cum fugiat illo illum.
                  </CardContent>
                  <CardFooter>
                    <Button round outline text="More..."></Button>
                    {/* <Button round outline text="Confirm"></Button> */}
                    {/* <Button round outline text="Cancel"></Button> */}
                  </CardFooter>
                </Card>
              </swiper-slide>
            )
          })
        }
      </swiper-container>

      <div className='group-header'>
        <div className="group-title">Articles</div>
        <Button small className='group-btn' onClick={() => { f7router.navigate('/articlelist/') }} text='View All'><i className="fa fa-chevron-right"></i></Button>
      </div>
      <swiper-container pagination space-between="50">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <swiper-slide key={index}>
                <Card className='card-type-2'>
                  <CardContent>
                    <div className="titles">
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, in amet, aperiam enim laboriosam eum officiis dolorem cumque ad consequatur nemo. Pariatur quos soluta aliquam nostrum cum fugiat illo illum.
                  </CardContent>
                  <CardFooter>
                    <Button round outline text="More..."></Button>
                    {/* <Button round outline text="Confirm"></Button> */}
                    {/* <Button round outline text="Cancel"></Button> */}
                  </CardFooter>
                </Card>
              </swiper-slide>
            )
          })
        }
      </swiper-container>

      <div className='group-header'>
        <div className="group-title">Blog</div>
        <Button small className='group-btn' onClick={() => { f7router.navigate('/foodlist/') }} text='View All'><i className="fa fa-chevron-right"></i></Button>
      </div>
      <swiper-container pagination space-between="50">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <swiper-slide key={index}>
                <List mediaList className='small-blog-list'>
                  <ListItem
                    className='small-media box-shadow'
                    link="#"
                    title="Yellow Submarine"
                    after="$15"
                    subtitle="Beatles"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
                  >
                    <img
                      slot="media"
                      style={{ borderRadius: '8px' }}
                      src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                      width="80"
                    />
                  </ListItem>
                </List>
              </swiper-slide>
            )
          })
        }
      </swiper-container>

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
}
export default HomePage;