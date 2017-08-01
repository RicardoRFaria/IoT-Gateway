angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.home', {
      url: 'home',
      component: 'home'
    })
    .state('app.triggersList', {
      url: 'triggersList',
      component: 'triggersList'
    })
    .state('app.editTriggers', {
      url: 'editTrigger/?id',
      component: 'editTrigger'
    })
    .state('app.dispositivosList', {
      url: 'dispositivosList',
      component: 'dispositivosList'
    })
    .state('app.editDispositivo', {
      url: 'editDispositivo/?id',
      component: 'editDispositivo'
    })
    .state('app.configuracoesList', {
      url: 'configuracoesList',
      component: 'configuracoesList'
    })
    .state('app.editConfiguracaoSMS', {
      url: 'editConfiguracaoSMS',
      component: 'editConfiguracaoSMS'
    });

}
