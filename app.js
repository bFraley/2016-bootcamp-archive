'use strict';
angular.module('app', [])
    .controller('MainCtrl', mainController);

function cleanInput(input) {
    return input
        .replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .replace(/\s{2,}/g," ");
}

const countMap = R.countBy(R.toLower);

const sortPairsDescending = R.pipe(
    R.sortBy(R.prop(1)),
    R.reverse
);

const countPairs = R.toPairs;

function mainController($scope) {
    $scope.userInput = '';

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
        const wordCount = countMap(words);
        const wordCountPairs = countPairs(wordCount);
        const sortedWordCountPairs = sortPairsDescending(wordCountPairs)
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

        const characters = cleanedUserInput.replace(/\s+/g, '');
        const characterCount = countMap(characters);
        const characterCountPairs = countPairs(characterCount);
        const sortedCharacterCountPairs = sortPairsDescending(characterCountPairs)
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
}

