'use strict'
const crypto = require('crypto')

class Block {
  constructor () {
    this.head = {
      createtime: new Date().getTime(),
      LBH: '256weihash',
      CHH: ''
    }
    this.body = {}
    this.init()
    this.head = new Proxy(this.head, {
      set (obj, prop, value, receiver) {
        throw new Error('不能修改区块头部信息')
      },
      get (target, prop, receiver) {
        return target[prop]
      }
    })
  }
  init () {
    let str = ''
    for (let k in this.head) {
      if (k !== 'CBH') {
        str += this.head[k]
      }
    }
    this.head.CHH = calcHash(str)
  }
}


function calcHash (str) {
  const Hash = crypto.createHash('sha256')
  Hash.update(str)
  return Hash.digest('hex')
}

let b1 = new Block()

console.log(b1.head)
