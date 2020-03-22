### 课后作业 3
#### 2
- javascript
- language
#### 3
- window
#### 5
- undefined
- 11
#### 7
- 不能实现
- 只输出 4 字符
- 将`
		for(var i=0;i<l;i++){
        	inputs[i].onclick=function(){
            	alert(i);
       	 }
    	}`里的var改成let即可实现
- let 会形成块作用域
#### 8
- 闭包具有保护和存储两份作用，保护作用是保护其内代码不会受全局代码的污染；存储作用是使获得的值不会被释放出去存储下来继续使用。
#### 9
- var声明的变量是全局变量，具有变量提升，可被再次定义
- let 会形成块作用域，没有变量提升，不可被再次定义
#### 10
- `
		let num = Math.round(Math.random()*(10-1)+1);
		setTimeout(()=>{
			console.log(num);
		},1000);
`
#### 11
- 10 ,因为闭包不可再全局调用
- ` 
  var b = 10;
  let fn = (function b() {
    b = 20;
    console.log(b);
})();
console.log(fn,b);
 `