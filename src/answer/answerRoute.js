(function(){
  angular
    .module('app.answer')
    .config(configFunction);

    configFunction.$inject = ['$stateProvider','$urlRouterProvider'];

    function configFunction($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('answer', {
          url:'/answer/:id',
          templateUrl: 'answer/answer.html',
          controller: 'answerController',
          controllerAs: 'answer'
        });
    }
})();
