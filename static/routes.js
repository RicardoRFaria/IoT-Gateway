angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.triggersList', {
      url: 'triggersList',
      component: 'triggersList'
    })
    .state('app.editTriggers', {
      url: 'editTrigger',
      component: 'editTrigger'
    })
    .state('app.dispositivosList', {
      url: 'dispositivosList',
      component: 'dispositivosList'
    })
    .state('app.editDispositivo', {
      url: 'editDispositivo',
      component: 'editDispositivo'
    });

}
