import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import CatalogPage from '../pages/catalog.jsx';
import ProductPage from '../pages/product.jsx';
import SettingsPage from '../pages/settings.jsx';

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import History from '../pages/history.jsx';
import Deposit from '../pages/deposit.jsx';
import LiveChat from '../pages/livechat.jsx';
import Account from '../pages/account.jsx';
import Withdraw from '../pages/withdraw.jsx';
import Transfer from '../pages/transfer.jsx';
import Voucher from '../pages/voucher.jsx';
import Internet from '../pages/internet.jsx';
import Ticket from '../pages/ticket.jsx';
import Events from '../pages/events.jsx';
import Electricity from '../pages/electricity.jsx';
import Donation from '../pages/donation.jsx';
import AboutUs from '../pages/about-us.jsx';
import ContactUs from '../pages/contact-us.jsx';
import Blog from '../pages/blog.jsx';
import BlogSingle from '../pages/blog-single.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/register.jsx';
import Logout from '../pages/logout.jsx';
import Pages from '../pages/pages.jsx';
import Notification from '../pages/notification.jsx';
import Cards from '../pages/cards.jsx';
import ArticleList from '../pages/article-list.jsx';
import RestaurantList from '../pages/restaurant-list.jsx';
import RecipeList from '../pages/recipe-list.jsx';
import FoodList from '../pages/food-list.jsx';
import RestaurantDetail from '../pages/restaurant-detail.jsx';
import FoodDetail from '../pages/food-detail.jsx';
import FoodForm from "../pages/food-form.jsx";

var routes = [
  { path: '/', component: HomePage, },
  { path: '/restaurantlist/', component: RestaurantList, },
  { path: '/restaurantdetail/', component: RestaurantDetail, },
  { path: '/foodlist/', component: FoodList, },
  { path: '/food-form/', component: FoodForm, },
  { path: '/fooddetail/', component: FoodDetail, },
  { path: '/recipelist/', component: RecipeList, },
  { path: '/articlelist/', component: ArticleList, },
  
  { path: '/pages/', component: Pages, }, 
  { path: '/history/', component: History, }, 
  { path: '/deposit/', component: Deposit, }, 
  { path: '/withdraw/', component: Withdraw, }, 
  { path: '/transfer/', component: Transfer, }, 
  { path: '/voucher/', component: Voucher, }, 
  { path: '/internet/', component: Internet, }, 
  { path: '/cards/', component: Cards, }, 
  { path: '/ticket/', component: Ticket, }, 
  { path: '/events/', component: Events, }, 
  { path: '/electricity/', component: Electricity, }, 
  { path: '/donation/', component: Donation, }, 
  { path: '/notification/', component: Notification, }, 
  { path: '/livechat/', component: LiveChat, }, 
  { path: '/account/', component: Account, }, 
  { path: '/about-us/', component: AboutUs, }, 
  { path: '/contact-us/', component: ContactUs, }, 
  { path: '/blog/', component: Blog, }, 
  { path: '/blog-single/', component: BlogSingle, }, 
  { path: '/login/', component: Login, }, 
  { path: '/register/', component: Register, }, 
  { path: '/logout/', component: Logout, }, 

  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export {supabase};
export default routes;
