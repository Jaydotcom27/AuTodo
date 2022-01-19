import {PLATFORM} from 'aurelia-pal';
import moment from '../node_modules/moment/moment';
export class App {
  message = `Hello World! It is the year ${moment().format('YYYY')}`; //back ticks for expressions inside of text 
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('index'), title:'Home' },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('about'), title:'About Us' },
      { route: 'post/:slug', name: 'post', moduleId: PLATFORM.moduleName('post'), title:'View Post' }, //: to pass variable on link
    ]);
  }
}
