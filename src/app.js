import {PLATFORM} from 'aurelia-pal';

export class App {
  message = 'Hello World!';
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('index') },
      { route: 'users',            name: 'users',      moduleId: 'users/index', nav: true, title: 'Users' },
      { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail' },
      { route: 'files/*path',      name: 'files',      moduleId: 'files/index', nav: 0,    title: 'Files', href:'#files' }
    ]);
  }
}
