/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var lts = nums.map((v, i) => i)
  return cal(nums, lts, target)
}

function cal(nums, lts, target) {
  let leftIndex = lts.shift()
  let rightArr = lts.filter(rightIndex => {
    return nums[leftIndex] + nums[rightIndex] === target
  })
  if (rightArr.length === 0) {
    if (lts.length > 0) {
      return cal(nums, lts, target)
    } else {
      return '无可用值'
    }
  } else if (rightArr.length === 1) {
    return [leftIndex, rightArr[0]]
  } else {
    return '不考虑多个解的情况'
  }
}

console.log(twoSum([-3,4,3,90], 0))
