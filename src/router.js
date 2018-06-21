import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import Browse from './components/Browse';
import User from './components/User';
import Community from './components/Community';
// import CommunityDetail from './components/CommunityDetail';
import CommunityPage from './components/CommunityPage';
import News from './components/News';
import Login from './components/Login';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/browse', component: Browse },
    { path: '/user', component: User },
    { path: '/community', component: Community },
    { 
      path: '/community/:id', 
      component: CommunityPage, 
    },
    { path: '/news', component: News },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
  ]
});