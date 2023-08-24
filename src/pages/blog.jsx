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
	PageContent
} from 'framework7-react';

const Blog = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Blog
			</NavTitle>
		</Navbar>
		<PageContent>
			<BlockTitle>News</BlockTitle>
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
				<ListItem
					className='small-media box-shadow'
					link="#"
					title="Don't Stop Me Now"
					after="$22"
					subtitle="Queen"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
				>
					<img
						slot="media"
						style={{ borderRadius: '8px' }}
						src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
						width="80"
					/>
				</ListItem>
				<ListItem
					className='small-media box-shadow'
					link="#"
					title="Billie Jean"
					after="$16"
					subtitle="Michael Jackson"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
				>
					<img
						slot="media"
						style={{ borderRadius: '8px' }}
						src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
						width="80"
					/>
				</ListItem>
			</List>
		</PageContent>
	</Page>
);
export default Blog;