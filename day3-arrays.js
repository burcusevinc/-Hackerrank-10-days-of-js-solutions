/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  let maxNumber = 0;
  let secondMaxNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      secondMaxNumber = maxNumber; //secondMax içine MaxNumberın değeri atılır.
      maxNumber = nums[i]; // maxNumber artık arraydeki karşılaştırılan büyük sayı olur.
    } else {
      if (nums[i] > secondMaxNumber && nums[i] !== maxNumber) { 
        // eğer bakılan sayı, maxNumber'dan küçükse ve secondMaxNumber bakılan sayıdan küçükse
        //bakılan sayı, 2. en büyük sayı olmuş olur
        secondMaxNumber = nums[i];
      }
    }
  }
  return secondMaxNumber;
}
