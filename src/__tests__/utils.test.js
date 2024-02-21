// Your tests here
import {isPalindrome} from "../utils";

describe("isPalindrome", () => {
    it("doubles points for palindromes", () => {
        const word1 = "racecar";
        const word2 = "airship";

        const palindrome = isPalindrome(word1);
        const normal = isPalindrome(word2);

        expect(palindrome).toBe(true);
        expect(normal).toBe(false)
    })
})