'use strict';
angular.module('app', [])
    .controller('MainCtrl', function ($scope) {
        $scope.userInput = '';

        function cleanInput(input) {
            return input
                .replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .replace(/\s{2,}/g," ");
        }

        function getWordCount() {
            const cleanedUserInput = cleanInput($scope.userInput);
            return cleanedUserInput.length && cleanedUserInput.split(' ').length;
        }

        function getCharacterCount() {
            return $scope.userInput.length;
        }

        function getMostCommonWord() {
            const cleanedUserInput = cleanInput($scope.userInput);
            if (cleanedUserInput.length === 0) {
                return 'n/a';
            }

            const words = cleanedUserInput.split(' ');
            const wordCount = R.countBy(R.toLower)(words);
            const wordCountPairs = R.toPairs(wordCount);
            const sortedWordCountPairs = R.pipe(R.sortBy(R.prop(1)), R.reverse)(wordCountPairs)
            return sortedWordCountPairs.length > 1 ? 
                (
                    sortedWordCountPairs[0][1] === sortedWordCountPairs[1][1] ? 
                        'multiple matches' : sortedWordCountPairs[0][0]
                ): sortedWordCountPairs[0][0];
        }

        function getMostCommonCharacter() {
            const cleanedUserInput = cleanInput($scope.userInput);
            if (cleanedUserInput.length === 0) {
                return 'n/a';
            }

            const characters = cleanedUserInput.replace(' ', '');
            const characterCount = R.countBy(R.toLower)(characters);
            const characterCountPairs = R.toPairs(characterCount);
            const sortedCharacterCountPairs = R.pipe(R.sortBy(R.prop(1)), R.reverse)(characterCountPairs)
            return sortedCharacterCountPairs.length > 1 ? 
                (
                    sortedCharacterCountPairs[0][1] === sortedCharacterCountPairs[1][1] ? 
                        'multiple matches' : sortedCharacterCountPairs[0][0]
                ): sortedCharacterCountPairs[0][0];
        }

        $scope.getWordCount = getWordCount;
        $scope.getCharacterCount = getCharacterCount;
        $scope.getMostCommonWord = getMostCommonWord;
        $scope.getMostCommonCharacter = getMostCommonCharacter;

    });