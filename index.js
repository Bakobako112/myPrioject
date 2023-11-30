// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

const assert = function (condition, message) {
    if (!condition)
        throw Error('Assert failed: ' + (message || ''));
};

// IGNORE THIS STUFF, IT WILL TEST UR CODE
assert(validateCred(valid1) == true);
assert(validateCred(valid2) == true);
assert(validateCred(valid3) == true);
assert(validateCred(valid4) == true);
assert(validateCred(valid5) == true);
assert(validateCred(invalid1) == false);
assert(validateCred(invalid2) == false);
assert(validateCred(invalid3) == false);
assert(validateCred(invalid4) == false);
assert(validateCred(invalid5) == false);

console.log('IT WORKS');

/**
 * @param {array<number>} arr array containing numbers in credit card
 * @returns {boolean}
 */
function validateCred(arr) {

    let sum = 0;
    // needsDouble is NOT const for a reason
    let needsDouble = false;

    for (var i = arr.length - 1; i >= 0; i--) {
        const currentNumber = arr[i];
        if (needsDouble === true) {
            let thatNum = currentNumber * 2;
            if (thatNum > 9) {
                thatNum -= 9;
            }

            sum += thatNum;
            needsDouble = false;

        } else {
            sum += currentNumber;
            needsDouble = true;
        }

    }

    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }



}

/**
 * @param {array<array<number>>} cards array containing numbers in credit card
 * @returns {array<array<number>>}
 */
function findInvalidCards(cards) {

    const ret = [];

    // for every card in the cards array
    for (var i = 0; i < cards.length; i++) {
        const currentCard = cards[i];

        if (validateCred(currentCard) == false) {
            ret.push(currentCard);
        }
    } // omgggggg 😢 :D LOL

    return ret;

}

/**
 * @param {array<array<number>>} invalidNumbers array of invalid cards
 * @returns {array<string>} array of company names for each invalid card
 */
function idInvalidCardCompanies(invalidNumbers) {
    const cardCompanies = [];

    let foundAmex = false;
    let foundVisa = false;
    let foundMasterCard = false;
    let foundDiscover = false;

    for (var i = 0; i < invalidNumbers.length; i++) {
        const currentCard = invalidNumbers[i];

        // if card is an Amex card
        if (currentCard[0] === 3 && !foundAmex) {
            cardCompanies.push('Amex (American Express)');
            foundAmex = true;
            console.log('Amex (American Express)');
        } else if (currentCard[0] === 4 && !foundVisa) {
            cardCompanies.push('Visa');
            foundVisa = true;
            console.log('Visa');
        } else if (currentCard[0] === 5 && !foundMasterCard) {
            cardCompanies.push('Mastercard');
            foundMasterCard = true;
            console.log('Mastercard');
        } else if (currentCard[0] === 6 && !foundDiscover) {
            cardCompanies.push('Discover');
            foundDiscover = true;
            console.log('Discover');
        } else {
            console.log('Company Not Found');
        }
    }

    return cardCompanies;
}

const invalidCards = [invalid1, invalid2, invalid3, invalid4, invalid5];

const invalidCardCompanies = idInvalidCardCompanies(invalidCards);

console.log(invalidCardCompanies);
