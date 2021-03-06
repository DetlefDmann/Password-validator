const { expect, describe } = require("@jest/globals");
const checks = require("./index.js");

describe("Checks if password is the right length.",()=> {
    test("Password to long should result in false.", ()=> {
        expect(checks.hasRightLength("wronglength")).toBe(false)
    })
    test("Password with right length should result in pass.", ()=> {
        expect(checks.hasRightLength("good")).toBe(true)
    })
})

describe("Checks if password isn't null", ()=> {
    test("When password is Null don't pass", ()=> {
        expect(checks.isNotNull()).toBe(false);
    })
    test("When password is not null pass.", ()=> {
        expect(checks.isNotNull("x")).toBe(true);
    }) 
})

describe("Checks for one or more uppercase characters", ()=> {
    test("When password doesn't have uppercase characters: fail.", ()=> {
        expect(checks.hasUpperCaseCharacter("nono")).toBe(false);
    })
    test("When password does have uppercase characters: pass.", ()=> {
        expect(checks.hasUpperCaseCharacter("Yes")).toBe(true);
    })
})

describe("Checks for one or more lowercase characters", ()=> {
    test("When password doesn't have lowercase then fail", ()=> {
        expect(checks.hasLowerCaseCharacter("HIGHHI")).toBe(false);
    })
    test("When password does have lowercase then pass", ()=> {
        expect(checks.hasLowerCaseCharacter("hello")).toBe(true);
    })
})

describe("Checks for one or more numbers", ()=> {
    test("When there's no number then fail", ()=> {
        expect(checks.hasDigit("nope")).toBe(false);
    })
    test("When there's a number, then pass.", ()=> {
        expect(checks.hasDigit("1bit")).toBe(true);
    })
})

describe("Check total function", ()=> {
    test("Condition 4 not met results in fail", ()=> {
        expect(checks.verifyPassword("HELLO4")).toBe(false);
    })
    test("Not enough conditions met results in fail", ()=> {
        expect(checks.verifyPassword("hellohellow")).toBe(false);
    })
    test("Condition 4 and enough other conditions met results in pass", ()=> {
        expect(checks.verifyPassword("hello4")).toBe(true);
    })
    test("Condition 4 and enough other conditions met results in pass", ()=> {
        expect(checks.verifyPassword("hellohello4")).toBe(true);
    })
    test("Condition 4 and enough other conditions met results in pass", ()=> {
        expect(checks.verifyPassword("hello")).toBe(true);
    })
    test("All conditions met results in pass", ()=> {
        expect(checks.verifyPassword("Hello4")).toBe(true);
    })
    
})