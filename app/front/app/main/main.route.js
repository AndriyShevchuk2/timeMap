(function() {
  'use strict';

  angular
    .module('app.main')
    .config(mainRouter);

  function mainRouter($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'main/main.tpl',
        controller: 'MainCtrl as vm',
        title: 'Main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
