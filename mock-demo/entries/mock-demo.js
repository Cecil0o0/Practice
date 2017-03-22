let Mock = require('mockjs'),
    data = Mock.mock('http://127.0.0.1:8080/getJSON',{
    'list|1-10':[
        {
            'id|+1':1
        }
    ]
});
// 练习测试promise
let $ = require('jquery');
let promise = new Promise(function(resolve,reject){
    $.getJSON('http://127.0.0.1:8080/getJSON',{},function(data){
        resolve(data);
    });
    $.ajax({
        url:'http://127.0.0.1:8080/getJSON1',
        success:function(data){
            resolve(data);
        },
        error:function(XHR){
            reject(XHR);
        }
    })
});

console.log(promise);
promise.then(function(data){
    console.log(data);
},function(XHR){
    console.log(XHR);
});

let promise2 = new Promise(function(resolve,reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',"http://127.0.0.1:8080/getJSON");
    xhr.onreadystatechange = handler;
    xhr.responseType = 'JSON';
    xhr.setRequestHeader('Accpet','application/json');
    xhr.send();

    function handler(){
        if(this.readyState !== 4){
            return;
        }
        if(this.status === 200){
            resolve(this.response);
        }else{
            reject(new Error(this.statusText));
        }
    }
});

promise2.then(function(data){
    console.log(data);
},function(XHR){
    console.log(XHR);
})





