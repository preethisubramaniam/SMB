angular.module('starter.services', ['ngResource'])

.factory('Login', function(){
var loginSuccess = false;

return{
  isSuccessful: function(){
      return loginSuccess;
  },
  setLoginState: function(success){
        loginSuccess = success;
  }
}
})

.factory('MailFormat', function(){

 var mailFormats = [
 {
   id:0,
   subject: 'Urgent Reminder',
   contents:'This is a urgent reminder. If this mail is ignored, interest at the rate of 10% will be charged on payment dues. Please pay the due amount of: Rs.'

 }, {

   id:1,
   subject: 'Payment Reminder',
   contents:'This is a payment reminder. If this mail is ignored, interest at the rate of 5% will be charged on payment dues. Please pay the due amount of: Rs.'

 }, {
   id:2,
   subject: 'Gentle Reminder',
   contents:'This is a gentle reminder. If this mail is ignored, interest at the rate of 2% will be charged on payment dues. Please pay the due amount of: Rs.'
 }];

return {
    all: function() {
      return mailFormats;
    },
    remove: function(mailFormat) {
      mailFormats.splice(mailFormats.indexOf(mailFormat), 1);
    },
    add: function(mailFormat){
      mailFormats.push(mailFormat);
    },
    edit: function (mailFormat){
      var temp = this.get(mailFormat.id);
      temp.subject = mailFormat.subject;
      temp.contents = mailFormat.contents;
    },
    get: function(mailId) {
      for (var i = 0; i < mailFormats.length; i++) {
        if (mailFormats[i].id === parseInt(mailId)) {
          return mailFormats[i];
        }
      }
      return null;
    }
  };

}) 

.factory('Recvs', function($resource) {
   //return $resource('http://localhost:5000/recvs/:recvId/:data');


   var creditors = [
    {"id": 0, "firstName": "James", "lastName": "King", "amountDue": "20,00,000", "dueDate": "5 February 2015", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking"},
    {"id": 1, "firstName": "Julie", "lastName": "Taylor",  "amountDue": "2,00,000", "dueDate": "5 February 2015", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor"},
    {"id": 2, "firstName": "Eugene", "lastName": "Lee",  "amountDue": "10,00,000", "dueDate": "15 January 2015", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee"},
    {"id": 3, "firstName": "John", "lastName": "Williams",  "amountDue": "2,00,000", "dueDate": "5 February 2015", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams"},
    {"id": 4, "firstName": "Ray", "lastName": "Moore",  "amountDue": "5,00,000", "dueDate": "3 January 2015", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore"},
    {"id": 5, "firstName": "Paul", "lastName": "Jones",  "amountDue": "5,00,000", "dueDate": "2 June 2014", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones"},
    {"id": 6, "firstName": "Paula", "lastName": "Gates",  "amountDue": "2,00,000", "dueDate": "5 April 2014", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates"},
    {"id": 7, "firstName": "Lisa", "lastName": "Wong",  "amountDue": "2,00,000", "dueDate": "7 February 2015", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong"},
    {"id": 8, "firstName": "Gary", "lastName": "Donovan",  "amountDue": "1,80,000", "dueDate": "2 February 2015", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan"},
    {"id": 9, "firstName": "Kathleen", "lastName": "Byrne",  "amountDue": "1,50,000", "dueDate": "1 February 2015", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne"},
    {"id": 10, "firstName": "Amy", "lastName": "Jones",  "amountDue": "1,00,000", "dueDate": "5 February 2015", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones"},
    {"id": 11, "firstName": "Steven", "lastName": "Wells", "amountDue": "50,000", "dueDate": "5 February 2015", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells"}
];

return {
    all: function() {
      return creditors;
    },
    remove: function(recv) {
      creditors.splice(creditors.indexOf(recv), 1);
    },
    
    get: function(recv) {
      for (var i = 0; i < creditors.length; i++) {
        if (creditors[i].id == parseInt(recv)) {
          return creditors[i];
        }
      }
    },
    search: function(name){
      var newArray =[];
        if (name) {
        creditors.filter(function(creditor) {
            if ((creditor.firstName + ' ' + creditor.lastName).toLowerCase().indexOf((name + '').toLowerCase()) > -1){
              
              newArray.push(creditor);
              return true;
            }
        });
        return newArray;
        } else {
         return creditors;
        }

    }

  }

});
