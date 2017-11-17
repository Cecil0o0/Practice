/**
 * jquery全局ajax请求拦截器
 */
var requestMap = {}
$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (/POST|PUT|DELETE/.test(settings.type)) {
      xhr.key = settings.type + '+++' + settings.url + '+++' + settings.data
      // var keyList = []
      // for(var key in requestMap) {
      //   keyList.push(key)
      // }
      // if (keyList.length) {
      //   console.group('requestMap的中暂存的key值')
      //   for (var index in keyList) {
      //     console.log(keyList[index])
      //   }
      //   console.groupEnd()
      // }
      if (requestMap[xhr.key] && xhr.key) {
        // console.log('abort此请求')
        xhr.key = null
        xhr.abort()
      } else {
        // console.log('暂存key:' + xhr.key)
        requestMap[xhr.key] = xhr
      }
    }
  },
  complete: function(xhr, result) {
    var key = xhr.key
    if (key) {
      // console.log('删除key：' + key)
      delete requestMap[key]
    }
  }
})
