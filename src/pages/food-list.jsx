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
  PageContent
} from 'framework7-react';
import FollowUs from '../components/FollowUs';

const FoodList = () => (
  <Page name="home">
    <Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
        Food
			</NavTitle>
		</Navbar>
    <PageContent>
      
      {
        [1,2,3,4,5,6,7,8,9].map((item, index)=>{
          return (
            <Card className='card-type-1 box-shadow'>
              <CardHeader style={{ backgroundImage: `url(${'img/slides/slide_home_1.jpg'})`}}>
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
          )
        })
      }

      <Block className='swiper-last'>
        <Button onClick={()=>{ f7router.navigate('/') }} outline round text="View more..."></Button>
      </Block>

    </PageContent>

    {/* TODO: popover for food detail */}

  </Page>
);
export default FoodList;