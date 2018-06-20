import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import Public from './components/Public';
import User from './components/User';
import Explore from './components/Explore';
import News from './components/News';
import Login from './components/Login';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/public', component: Public },
    { path: '/user', component: User },
    { path: '/explore', component: Explore },
    { path: '/news', component: News },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
  ]
});