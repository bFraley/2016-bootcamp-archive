angular.module('app', [])
    .controller('AddressCtrl', addressController);



function addressController($scope) {

    $scope.addressBook = [
        {
            name:'gary',
            title:'boss',
            phone:'345423523',
            email:'g@g.com'
        }
    ];

    $scope.contactForm = {
        name = '',
        title = '',
        phone = '',
        email = ''
    };

    // Add a new contact on new form input.
    $scope.addNewContact = function() {

        var person = {
            name:$scope.contactForm.name,
            title:$scope.contactForm.title,
            phone:$scope.contactForm.phone,
            email:$scope.contactForm.email
        }

        $scope.addressBook.push(person);

        console.log($scope.addressBook.length);

    }

    $scope.getAddressBook = function() {
        return $scope.addressBook;
    }

    // We call this to display a specific contact.
    $scope.viewContact = function() {


    }

} // end addressController
