//Task 4
function removeDuplicates(nums) {
    if (nums.length === 0) return [0, []];

    let k = 0;
    let lastNum = null;

    for (const num of nums) {
        if (num !== lastNum) {
            nums[k] = num;
            lastNum = num;
            k++;
        }
    }

    return nums.slice(0, k);
}
