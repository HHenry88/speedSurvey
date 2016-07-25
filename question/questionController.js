(function(){

  angular
    .module('app.question')
    .controller('questionController', questionController);


      questionController.$inject = ['$firebaseArray', '$location'];

      function questionController($firebaseArray, $location){
        var vm = this;

        var fireQuestions = new Firebase('https://quizpoll-d8e4a.firebaseio.com/question');

        function Question(){
          this.aQuestion ='';
          this.option1 = {
            option: '',
            vote: 0
          };
          this.option2 = {
            option: '',
            vote: 0
          };
          this.option3 = {
            option: '',
            vote: 0
          };
          this.option4 = {
            option: '',
            vote: 0
          };
        }

        vm.newQuestion = new Question();
        vm.Question = $firebaseArray(fireQuestions);
        vm.buttonQuestionClicked = buttonQuestionClicked;

        function buttonQuestionClicked(index){
          vm.Question.$add(vm.newQuestion)
            .then(function(ref){
              var id = ref.key();

              $location.path('/answer/' + id);

              alert('Survey link: ' + 'http://speedsurvey.rf.gd/?ckattempt=1#/answer/' + id);

            });




        }
      }
})();
