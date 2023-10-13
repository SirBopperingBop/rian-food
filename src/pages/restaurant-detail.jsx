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
  Card,
  PageContent,
  Popup
} from 'framework7-react';
import FollowUs from '../components/FollowUs';

const RestaurantDetail = ({ f7router }) => (
  <Page name="home">
    <Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
        Restaurant Details
			</NavTitle>
		</Navbar>
    <PageContent>
      
      <Card className='card-profile box-shadow'>
        <CardHeader style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})`}}>
          <div className="back-gradient"></div>
          <Button onClick={()=>{ f7router.navigate('/restaurantdetail/', {openIn:'popup' } ) }} className="logo box-shadow" style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})`}}></Button>
          <div className="titles">
            <div className="title">Lorem ipsum dolor sit amet</div>
            <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</div>
          </div>
        </CardHeader>
      </Card>

      <BlockTitle><h2>Breakfast</h2></BlockTitle>
      <List mediaList className='small-blog-list'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <ListItem
                key={index}
                className='small-media box-shadow'
                link="#"
                title="Yellow Submarine"
                after="$15"
                subtitle="Beatles"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
                onClick={()=>{ f7router.navigate('/fooddetail/', {openIn:'popup'}) }}
              >
                <img
                  slot="media"
                  style={{ borderRadius: '8px' }}
                  src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                  width="80"
                />
              </ListItem>
            )
          })
        }
      </List>

      <BlockTitle><h2>Lunch</h2></BlockTitle>
      <List mediaList className='small-blog-list'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <ListItem
                key={index}
                className='small-media box-shadow'
                link="#"
                title="Yellow Submarine"
                after="$15"
                subtitle="Beatles"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
                onClick={()=>{ f7router.navigate('/fooddetail/', {openIn:'popup'}) }}
              >
                <img
                  slot="media"
                  style={{ borderRadius: '8px' }}
                  src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                  width="80"
                />
              </ListItem>
            )
          })
        }
      </List>

      <BlockTitle><h2>Dinner</h2></BlockTitle>
      <List mediaList className='small-blog-list'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <ListItem
                key={index}
                className='small-media box-shadow'
                link="#"
                title="Yellow Submarine"
                after="$15"
                subtitle="Beatles"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
                onClick={()=>{ f7router.navigate('/fooddetail/', {openIn:'popup'}) }}
              >
                <img
                  slot="media"
                  style={{ borderRadius: '8px' }}
                  src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                  width="80"
                />
              </ListItem>
            )
          })
        }
      </List>

    </PageContent>

  </Page>
);
export default RestaurantDetail;