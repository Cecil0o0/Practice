/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return walkLinkedList(add(l1, l2))
}

// 递归相加并且进位
function add(l1, l2) {
  let l3 = null
  let tmpNode = null
  function inner(l1, l2) {
    // l1 + l2 + 进位
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (tmpNode ? tmpNode.val : 0)
    let baseNum = sum % 10
    let carryNumber = Math.floor(sum / 10)

    if (tmpNode) {
      tmpNode.val = baseNum
    } else {
      tmpNode = new ListNode(baseNum)
    }

    if (!l3) {
      l3 = tmpNode
    }

    // 没有进位且l1和l2都无next时终止

    if (carryNumber) {
      tmpNode.next = new ListNode(carryNumber)
    } else if ((l1 && l1.next) || (l2 && l2.next)) {
      tmpNode.next = new ListNode(0)
    }
    if ((l1 && l1.next) || (l2 && l2.next)) {
      tmpNode = tmpNode.next
      inner((l1 ? l1.next : null), (l2 ? l2.next : null))
    }
  }
  inner(l1, l2)
  return l3
}

function ListNode(val) {
  this.val = val
  this.next = null
}

// linkedlist to array
function walkLinkedList(l) {
  let arr = []
  let tmpNode = l
  return (function pushValueOrReturn() {
    arr.push(tmpNode.val)
    if (tmpNode.next) {
      tmpNode = tmpNode.next
      return pushValueOrReturn()
    } else {
      return arr
    }
  })()
}

// array to linkedlist
function generateLinkedList(arr) {
  let linkedListArr = arr.map(v => new ListNode(v)).map((v, i, list) => {
    if (list[i + 1]) {
      v.next = list[i + 1]
    }
    return v
  })
  return linkedListArr[0]
}

let linkedlist1 = generateLinkedList([2, 4, 3])
let linkedlist2 = generateLinkedList([5, 6, 4])
// console.log(addTwoNumbers(linkedlist1, linkedlist2))
