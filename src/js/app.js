(function(){

  'use strict';

  angular
    .module('myApp',[
      //3rd party modules
      'chart.js',
      'firebase',
      'ui.router',


      //modules
      'app.question',
      'app.answer'
    ]);
})();
