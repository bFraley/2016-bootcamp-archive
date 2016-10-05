'use strict';
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

function MainController() {
    const ctrl = this;
    ctrl.userInput = '';
    ctrl.savedInputs = [];

    function getWordCount() {
        const cleanedUserInput = cleanInput(ctrl.userInput);
        return cleanedUserInput.length && cleanedUserInput.split(' ').length;
    }

    function getCharacterCount() {
        return ctrl.userInput.length;
    }

    function getMostCommonWord() {
        const cleanedUserInput = cleanInput(ctrl.userInput);
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
        const cleanedUserInput = cleanInput(ctrl.userInput);
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

    function addSavedInput () {
        ctrl.savedInputs.push({
            value: ctrl.userInput,
            time: Date.now()
        });
    }

    function setInput(value) {
        ctrl.userInput = value;
    }

    ctrl.getWordCount = getWordCount;
    ctrl.getCharacterCount = getCharacterCount;
    ctrl.getMostCommonWord = getMostCommonWord;
    ctrl.getMostCommonCharacter = getMostCommonCharacter;

    ctrl.addSavedInput = addSavedInput;
    ctrl.setInput = setInput;
}

angular.module('app', [])
    .controller('MainCtrl', MainController);

