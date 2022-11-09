/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;
    secondInteger = 5;

    const firstDecimal = 4.0;
    secondDecimal=5.0;

    const firstString = 'HackerRank ';
    secondString = "Burcu";

    console.log(firstInteger + parseInt(secondInteger));
    console.log(firstDecimal + parseFloat(secondDecimal));
    console.log(firstString + secondString);

}