
# 第二周正式课-课后作业（1）
### 1、
`
		function fn() {
			let res = null;
			for (let i of arguments) {
				res += i;
			}
			return function () {
				for (let i of arguments) {
					res += i;
				}
				return res;
			}
		}
		let res = fn(1, 2)(3);
		console.log(res); //=>6  1+2+3
`
### 5
- 'Tom'+'Tom'+'join'
### 8
`Number.prototype.plus = function (num) {
            num = Number(num);
            if (isNaN(num)) {
                num = 0;
            }
            return this + num;
        }
        Number.prototype.minus = function (num) {
            num = Number(num);
            if (isNaN(num)) {
                num = 0;
            }
            return this - num;
        }
        let n = 10;
        let m = n.plus('10').minus(5);
        console.log(m);//=>15（10+10-5）`
### 9
	let prop=Array.prototype;
        prop.unique=function () {
                let obj = {};
                for (let i = 0; i < this.length; i++) {
                    let item = this[i];
                    if (typeof obj[item] !== 'undefined') {
                        this[i]= this[this.length-1];
                        this.length--;
                        i--;
                        continue;
                    }
                    obj[item] = item;
                }
                obj = null;
                return this;
            }   
        
        let ary = [12, 23, 12, 13, 13, 12, 23, 14, 8];
        ary.unique().sort((a, b) => a - b); 
        console.log(ary);
### 10

# 附加题
### 1
`function Dog(name) {
    this.name = name;
}
Dog.prototype.bark = function () {
    console.log('wangwang');
}
Dog.prototype.sayName = function () {
    console.log('my name is ' + this.name);
}
/*
let sanmao = new Dog('三毛');
sanmao.sayName();
sanmao.bark();
*/
//=>基于内置的new关键词，我们可以创建Dog的一个实例sanmao，实例可以调取原型上的属性和方法，现在的需求是：自己实现一个_new方法，也能模拟出内置new后的结果
function _new() {
    //=>完成你的代码

}
let sanmao = _new(Dog, '三毛');
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true`
### 2
在 a = 3 时
### 3

### 4
- 1 4 2 4 2 3 5