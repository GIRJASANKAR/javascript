function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        const mid = Math.floor((left+right)/2)
        const midVal = nums[mid]
        if (midVal === target) {
            return mid
        }
        // left portion sorted
        if (nums[left] <= midVal) {
            if (target > midVal || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } 
        // right portion sorted
        else {
            if (target > nums[right] || target < midVal) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
};