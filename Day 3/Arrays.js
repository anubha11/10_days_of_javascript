/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var i;
    var max=nums[0];
    var smax=-99;
    for (i=1;i<nums.length;i++){
        if (nums[i]>max){
            smax=max;
            max=nums[i];
        }else if(nums[i]>smax && nums[i]<max){
            smax=nums[i];
        }
    }
    return smax;
}
