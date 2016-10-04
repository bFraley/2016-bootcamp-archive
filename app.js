angular.module('app', [])
    .controller('AddressCtrl', addressController);



function addressController($scope) {

    $scope.adressBook = [];
    $scope.name = ''
    $scope.title = ''
    $scope.phone = ''
    $scope.phone = ''

    // Add a new contact on new form input.
    $scope.addNewContact = function(name, title, phone, email) {

        $scope.adressBook.push(
            {
                name:name,
                title:title,
                phone:phone,
                email:email
            }
        );

        console.log($scope.adressBook.length)
        console.log($scope.addressBook[0])
    }

    $scope.getAddressBook = function() {
        return $scope.addressBook;
    }

    // We call this to display a specific contact.
    $scope.viewContact = function() {


    }









}
// *******************