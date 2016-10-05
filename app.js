/* app.js - Copyright 2016 by Gary Ditsch and Brett Fraley */

// Define Angular module and our addressController.
angular.module('app', [])
    .controller('AddressCtrl', addressController);

function addressController($scope) {

    $scope.addressBook = [];
    $scope.contactDisplay = {};
    $scope.showingForm = false;
    $scope.showingSaveNewContactButton = false;
    $scope.showingSaveEditContactButton = false;

    // Define input values, and reset function.
    $scope.contactForm = {
        name: '',
        title: '',
        phone: '',
        email: ''
    };

    $scope.resetContactForm = function() {
        $scope.contactForm = {};
        $scope.showingForm = false;
    };

    // Displays form so user can add new contact
    $scope.showContactForm = function() {
        $scope.showingForm = true;
        $scope.showingSaveNewContactButton = true;
        $scope.showingSaveEditContactButton = false;
    }

    // Add a new contact to addressBook on new form input.
    $scope.addNewContact = function() {

        var person = {
            name:$scope.contactForm.name,
            title:$scope.contactForm.title,
            phone:$scope.contactForm.phone,
            email:$scope.contactForm.email
        };

        $scope.addressBook.push(person);

        $scope.showingForm = false;

        // Reset the contact form.
        $scope.resetContactForm();
    };

    // Return addressBook array.
    $scope.getAddressBook = function() {
        return $scope.addressBook;
    };

    // We call this to display a specific contact.
    $scope.chosenContact = function(selectedContact) {
        $scope.contactDisplay = $scope.addressBook[selectedContact]
        // $scope.contactForm = $scope.contactDisplay
    };

    $scope.editContact = function() {
        // Populate form with data to edit
        $scope.contactForm = $scope.contactDisplay;
        // Show form
        $scope.showingForm = true;
        $scope.showingSaveNewContactButton = false;
        $scope.showingSaveEditContactButton = true;
    }

} // end addressController
