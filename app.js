angular.module('app', [])
    .controller('MainCtrl', function ($scope) {
        $scope.userInput = '';

        function getWordCount(argument) {
            return 0;
        }

        function getCharacterCount(argument) {
            return $scope.userInput.length;
        }

        function getMostCommonWord(argument) {
            return 'n/a';
        }

        function getMostCommonCharacter(argument) {
            return 'n/a';
        }

        $scope.getWordCount = getWordCount;
        $scope.getCharacterCount = getCharacterCount;
        $scope.getMostCommonWord = getMostCommonWord;
        $scope.getMostCommonCharacter = getMostCommonCharacter;

    });