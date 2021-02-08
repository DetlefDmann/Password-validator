// Utility functions
const isNotNull = (str) => str !=null;

const hasRightLength = (str) => str.length < 9;

const hasUpperCaseCharacter = (str) => {
    let reg = new RegExp(/[A-Z]/);
    return reg.test(str);
};

const hasLowerCaseCharacter = (str) => {
    let reg = new RegExp(/[a-z]/);
    return reg.test(str);
}

const hasDigit = (str) => {
    let reg = new RegExp(/[0-9]/);
    return reg.test(str);
}

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};