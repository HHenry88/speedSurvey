(function(){

  angular
    .module('app.answer')
    .controller('answerController', answerController);

    answerController.$inject = ['$stateParams','$firebaseObject'];

    function answerController($stateParams, $firebaseObject){
      var vm = this;

      vm.id = $stateParams.id;
      vm.addVote = addVote;
      vm.options = {
        responsive: true,
        maintainAspectRatio: true
      };

      var fireQuestions = new Firebase('https://quizpoll-d8e4a.firebaseio.com/question/' + vm.id);
       vm.Answer = $firebaseObject(fireQuestions);



      $firebaseObject(fireQuestions).$watch(function(){
        vm.Answer.$loaded().then(function(){

          vm.data = [vm.Answer.option1.vote, vm.Answer.option2.vote, vm.Answer.option3.vote, vm.Answer.option4.vote];
          vm.labels = [vm.Answer.option1.option,vm.Answer.option2.option, vm.Answer.option3.option, vm.Answer.option4.option];

          vm.sum = vm.Answer.option1.vote + vm.Answer.option2.vote + vm.Answer.option3.vote + vm.Answer.option4.vote;
        });
      });


       function addVote(vote){
        vote.vote++;
        console.log(vote.vote);
        vm.Answer.$save();

        alert('Thank you for voting! Your vote has been added');

        vm.Answer.$loaded().then(function(){

          vm.data = [vm.Answer.option1.vote, vm.Answer.option2.vote, vm.Answer.option3.vote, vm.Answer.option4.vote];
          vm.labels = [vm.Answer.option1.option,vm.Answer.option2.option, vm.Answer.option3.option, vm.Answer.option4.option];
        });

        vm.hide=true;
       }

    }

})();
