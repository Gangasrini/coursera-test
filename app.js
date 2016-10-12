(function() {

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function($scope)
  {
    $scope.output = ""
    $scope.items = ""; //declare a string to get the input from user
    $scope.itemcount = 0; //declare an integer and initialize it to 0. We will use this for calculating the number of items
    $scope.btnmessage = "Check if Too Much"; //This text is displayed as a message in the button
    $scope.textmessage = "List comma separated dishes that you usually have for lunc"; //


    //function to cunt the number of items in the string
    $scope.countitems = function ()
    {
      if ($scope.items == 0)
      {
        $scope.output = "Please enter the items";
      }
      else
      {

        var arrayOfStrings = $scope.items.split(","); //split the string (string.split) using the separator ','
        arrayOfStrings = arrayOfStrings.filter(a=>a!='');
        arrayOfStrings = arrayOfStrings.filter(v=>v!=' ');
        $scope.itemcount = arrayOfStrings.length; //count the number of items within the array using (array.length) method

        if($scope.itemcount > 0 && $scope.itemcount <= 3) //if number of items is less than or equal to 3
        {
          $scope.output = "Enjoy!";
        }
        else if($scope.itemcount > 3)
        {
          $scope.output = "Too Much!";
        }

      }
     $scope.items = null;



    };

    //function to display the result on screen
    $scope.displaymessage = function()
    {
      return $scope.output; //return the message
    };
/* $scope.makezero = 0;
 $scope.resetcount = function()
    {
      $scope.itemcount = angular.copy($scope.makezero);
    }; */
  });



})();
