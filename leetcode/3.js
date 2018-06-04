/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = s.split('')
  return GetLongest(arr).length
}

function GetLongest (strArr) {
  let lastLongestStr = ''
  return (function cal(strArr) {
    if (strArr.length) {
      let ss = strArr.shift()
      for(let i = 0, length = strArr.length; i < length ; i ++) {
        let letter = strArr[i]
        if (ss.includes(letter)) {
          break
        } else {
          ss += letter
        }
      }
      if (ss.length > lastLongestStr.length) {
        lastLongestStr = ss
      }
      return cal(strArr)
    } else {
      return lastLongestStr
    }
  })(strArr)
}
