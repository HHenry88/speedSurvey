(function(){
  angular
    .module('app.question')
    .config(configFunction);

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configFunction($stateProvider, $urlRouterProvider){

      $urlRouterProvider.when('','/');

      $stateProvider
        .state('question', {
          url:'/',
          templateUrl: 'question/question.html',
          controller: 'questionController',
          controllerAs: 'question'
        });
    }

})();
