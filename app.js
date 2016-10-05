/* app.js - Copyright 2016 by Gary Ditsch and Brett Fraley */

// Define Angular module and our addressController.
angular.module('app', [])
    .controller('AddressCtrl', addressController);

function addressController($scope) {

    $scope.addressBook = [];

    // Define input values, and reset function.
    $scope.contactForm = {
        name: '',
        title: '',
        phone: '',
        email: ''
    };

    $scope.resetContactForm = function() {
        $scope.contactForm.name = '';
        $scope.contactForm.title = '';
        $scope.contactForm.phone = '';
        $scope.contactForm.email = '';
    };

    // Add a new contact to addressBook on new form input.
    $scope.addNewContact = function() {

        var person = {
            name:$scope.contactForm.name,
            title:$scope.contactForm.title,
            phone:$scope.contactForm.phone,
            email:$scope.contactForm.email
        };

        $scope.addressBook.push(person);

        // Reset the contact form.
        $scope.resetContactForm();
    };

    // Return addressBook array.
    $scope.getAddressBook = function() {
        return $scope.addressBook;
    };

    // We call this to display a specific contact.
    $scope.viewContact = function() {
    

    };

} // end addressController
