//Task 2
function twoSum(nums, target) {
    const map = new Map();

    for (const [index, num] of nums.entries()) {
        const complement = target - num;

        if (map.has(complement)) {
            return [map.get(complement), index];
        }

        map.set(num, index);
    }

    return [];
}