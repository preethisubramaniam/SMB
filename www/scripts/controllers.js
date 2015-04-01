angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Login) {
	 $scope.loginSuccess = Login.isSuccessful();
})

.controller('RecvsCtrl', function($scope, Recvs, Login) {
  $scope.recvs =  Recvs.all();
  $scope.loginSuccess = Login.isSuccessful();


        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.recvs = Recvs.all();
        }

        $scope.search = function () {
            $scope.recvs = Recvs.search(  $scope.searchKey);
        }

       

})


.controller('RecvDetailCtrl', function($scope, $stateParams, $state, Recvs) {
  $scope.recv = Recvs.get( $stateParams.recvId);

  $scope.remove = function(recv) {
    Recvs.remove(recv);
     $scope.recvs = Recvs.all();
  	 $state.go('tab.recvs');
  	};
  	
 /* $scope.remove = function(recv) {
    Recvs.remove({recvId: $stateParams.recvId});
    $state.go('tab.recvs');
  };*/
 $scope.back = function(){
  	  $state.go('tab.recvs');
  };
   $scope.sendEmail= function(recv) {

   	    var subject = "Payment Reminder";
   	    var body = "This is to remind that the payment of Rs:" + recv.amountDue + " has been pending since: " + recv.dueDate + ". Kindly make the payments at the earliest.";
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            subject, // Subject
            "",                      // Body
            [recv.email],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
        else
        {
        	 window.location.href = "mailto:" + recv.email +"?subject=" + subject + "&body=" + body;
        }
    };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MailFormatsCtrl', function($scope, MailFormat, Login){

 $scope.mailFormats = MailFormat.all();
 $scope.loginSuccess = Login.isSuccessful();

})

.controller('MailFormatCtrl', function($scope,$stateParams, $state, MailFormat){
 $scope.mailFormat = MailFormat.get($stateParams.mailFormatId);
 $scope.mailFormat.mailData = $scope.mailFormat.contents;
  $scope.remove = function(mailFormat) {
    MailFormat.remove(mailFormat);
    $state.go('tab.mailFormats');
  };

  $scope.editMailFormat = function(mailFormat){
  	mailFormat.contents = $scope.mailFormat.mailData;

     MailFormat.edit(mailFormat);
       $state.go('tab.mailFormats');
  }

  $scope.back = function(){
  	  $state.go('tab.mailFormats');
  }

} )
 
.controller('SignInCtrl', function($scope, $ionicModal, $timeout, $state, Login ) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

    Login.setLoginState(true);
    $state.go('tab.dash');
  };
})


 








