# JavaScript New Features
## ES6(ES2015)
- **let与const**
```js
{
    /* 
        不存在变量提升
        报错 Cannot access 'a' before initialization
    */
    console.log(a)
    let a = 0;
    a   // 0
    /* 
        不能重复声明
        SyntaxError: Identifier 'a' has already been declared
    */
    let a = 1
}
{
    /*
        常量不允许改变
        TypeError: Assignment to constant variable
    */
    const a = 1
    a = 1
    /*
        const声明变量必须初始化值
        SyntaxError: Missing initializer in const declaration
    */
    const b
}
/* 
    只在let与const代码块内有效
    ReferenceError: a is not defined
*/
a
{
    /* var 会存在变量提升，但是值不会提升，所以 a = undefined */
    console.log(a)
    /* var 声明后变量会绑定在window全局对象上 */
    var a = 1
}
/* var不会形成代码块作用域 */
a // 1
```
- **解构赋值**
```js
let [a,b,c] = [1,2,3] // a=1,b=2,c=3
let [a,[b,c]] = [1,[2,3]] // a=1,b=2,c=3
let [a,  ,c] = [1,2,3] // a=1,c=3
let [a = 1,b] = [] // a=1,b=undefined
let [a, ...b] = [1,2,3] // 剩余运算符 a=1,b=[2,3]
let [a,b,c,d] = 'qwer' // a='q',b='w',c='e',r='d'
let [a = 2] = [undefined] // 解构默认值 a=2
let [a = 3, b = a] = [] // a=3,b=3
let [a = 3, b = a] = [1] // a=1,b=1
let [a = 3, b = a] = [1,2]// a=1,b=2

// 对象模型的解构
let {a,b} = {a:'aaa', b:'bbb'} // a='aaa',b='bbb'
let {a:b} = {a:'bbb'} // b='bbb'

let obj = {p: ['hello', {y:'world'}] }     
let {p: [x, { y }] } = obj // x="hello",y="world"
let {p: [x] } = obj // x="hello"

let {a,b,...rest} = {a:10,b:20,c:30,d:40} // a=10,b=20,rest={c:30,d:40}

let {a=10,b=5} = {a:3} // a=3,b=5
let {a:aa=10,b:bb=5} = {a:3} // aa=3,bb=5
```
- **Symbol**
```js
// 原始数据类型Symbol，表示独一无二的值，最大的用法是用来定义对象的唯一属性名
const sy = Symbol();
typeof sy // symbol

const sy1 = Symbol(42);
sy1 === 42 // false

const sy2 = Symbol('foo');
Symbol('foo') === sy2 // false

// 1. 使用场景，作为属性名
let sy = Symbol("key1");
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}
// 取值可以用Object.getOwnPropertySymbols() 和 Reflect.ownKeys()

// 2. 使用场景，定义常量
const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        default:
            throw new ColorException("Can't find this color");
    }
}
getConstantName(COLOR_YELLOW)

// 3. 全局Symbol注册表
let yellow1 = Symbol.for("Yellow");
// 获取全局 symbol 注册表中某个symbol关联的键
Symbol.keyFor(yellow1);    // "Yellow"
```
- **Map与Set**
```js
/* 
    Maps 和 Objects 的区别
    1. 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
    2. Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
    3. Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
    4. Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
*/
var map = new Map()
map.set('key','value')
map.get('key')
// Map迭代
for(var [key, value] of Map)
Map.forEach((value,key)=>{})
// Map与Array互转
var kvArray = [["key1", "value1"], ["key2", "value2"]];
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var myMap = new Map(kvArray);
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
var outArray = Array.from(myMap);
// Map合并
new Map([...new Map(), ...new Map()])

/*
    Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：
    1. +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
    2. undefined 与 undefined 是恒等的，所以不重复；
    3. NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。
*/
var set = new Set()
set.add('value')
set.has('value')
set.keys()
set.values()
set.forEach()
set.entries()
set.delete()
set.clear()

// Array 转 Set
var arr = ["value1", "value2", "value3"]
var mySet = new Set(arr);
// Set 转 Array
[...mySet]
```
- **Proxy与Reflect**
```js
/* 
    Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
    它不直接操作对象，而是像代理模式。
    通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
*/
let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    // 用于拦截对象的读取属性操作
    get: function(target, key) { return target[key] },
    // 设置属性值操作的捕获器
    set: function(target, key, value) { target[key] = value },
    // 用于拦截函数的调用
    apply: function(target, thisArg, argumentsList) { return target(argumentsList) },
    // 用于拦截 new 操作符
    construct: function(target, args) { return new target(...args) }
}
let proxy = new Proxy(target, handler)
proxy.name     // 实际执行 handler.get
proxy.age = 25 // 实际执行 handler.set

/*
    Reflect 提供操作JavaScript的方法
*/
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1
Reflect.has(obj, "x")
Reflect.set(obj, "prop", "value"); // true
// 一个由目标对象自身的属性键组成的数组
Reflect.ownKeys(obj)
```
- **字符串**
```js
var str = 'string'
// 判断是否找到参数字符串
str.includes('str') // true
// 判断参数字符串是否在字符串头部
str.startsWith('str') // true
// 判断参数字符串是否在字符串尾部
str.endsWith('ing') // true
// 将指定字符串重复指定参数次数
str.repeat(2) // stringstring
// 返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串
str.padStart(10,'o') // oooostring
// 返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串
str.padEnd(10,'o') // stringoooo
// 模板字符串
`hello, ${str}` // hello, string
```
- **对象**
```js
// 对象字面量
const [age,name] = [12,'join']
const person = {age, name} // {age: 12, name: 'join'}

const person = {
  * myGenerator() {
    yield 'hello world';
  },
  sayHi(){
    console.log("Hi");
  },
  ["he"+"llo"](){
    return "Hi";
  }
}
// 拓展运算符
let age = {age: 15};
let name = {name: "Amy"};
let person = {...age, ...name}; // {age: 15, name: 'Amy'}
// 对象新方法
let target = {a: 1};
let object2 = {b: 2};
Object.assign(target,object2); // {a: 1, b: 2}

Object.is("q","q");      // true
Object.is(1,1);          // true
Object.is([1],[1]);      // false
Object.is({q:1},{q:1});  // false

Object.entries({name: 2}) // [['name',2]]
Object.fromEntries([['name',2]]) // {name: 2}
```
- **数组**
```js
// 将参数中所有值作为元素形成数组
Array.of(1, 2, 3, 4); // [1, 2, 3, 4]
// 将类数组对象或可迭代对象转化为数组
Array.from([1, 2], (n) => n * 2); // [2, 4]
// 转换 Map
let map = new Map();
map.set('key0', 'value0');
map.set('key1', 'value1');
console.log(Array.from(map)); // [['key0', 'value0'],['key1', 'value1']]
// 转换 set
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(Array.from(set)); // [1, 2, 3]
// 转换字符串
let str = 'abc';
console.log(Array.from(str)); // ["a", "b", "c"]
// 扩展方法
arr.find(item => item > 2)
arr.findIndex(item => item = 1)
arr.fill(0,1,2)
arr.copyWithin(0,2,4)
arr.entries()
arr.keys()
arr.values()
arr.includes('arr')
// 嵌套数组转一维数组
arr.flat(1)
// 先处理再转换
arr.flatMap(n => [n * 2])

// 创建数组缓冲区
new ArrayBuffer(10)
// 操作视图，视图是用来操作内存的接口
let buffer = new ArrayBuffer(10);
dataView = new DataView(buffer); 
dataView.setInt8(0,1);
dataView.getInt8(0); // 1
// 定型数组，制使用特定的数据类型
let buffer = new ArrayBuffer(10),
new Int8Array(buffer);
```
- **函数**
```js
// 默认参数
function fn(name,age=17){
 console.log(name+","+age);
}
fn("Amy",18);  // Amy,18
// 剩余参数接收
function f(...values){
    console.log(values.length);
}
f(1,2);      //2

// 箭头函数
var f = function(x) { return x };
var f = x => x
```
- **Class类**
```js
/*
    class 的本质是 function。
    它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。
*/
// 匿名类
let example = class {}
// 命名类
let example = class Example {}

// target指向class本身
function testable(target) {
    target.isTestable = true;
}
// 装饰器，还在提案中
@testable
class Example extends Person { // 类声明，继承父类
    // 静态属性
    static a = 2;
    // 静态方法
    static getName() {
        console.log('name')
    }
    // 实例属性，定义在实例对象（ this ）上的属性
    a = 3
    // constructor 方法是类的默认方法，创建类的实例化对象时被调用
    constructor () {
    /*
    子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，
    得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。
    如果不调用super方法，子类就得不到this对象
    */
        super()
        console.log(this.a);
        console.log(this.name)
    }
    // getter / setter
    get a(){
        console.log('getter');
        return this.a;
    }
    set a(a){
        console.log('setter');
        this.a = a;
    }
}
Example.a
Example.getName()
// 类只能通过new实例化
new Example()
```
- **模块**
```js
/*
    每一个模块只加载一次（是单例的）， 若再去加载同目录下同文件，直接从内存中读取
    每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域
    自动开启严格模式
*/

let name = 'join'
let pwd = '123456'
// 导出 export.js
export { name, pwd }
// 导入 export.js
import { name, pwd } from 'export.js'

// export default 只能暴露出单个属性
let a = "My name is Tom!";
export default a;
// 不需要加{}， 使用任意变量接收
import b from "./xxx.js"; 

// 使用 as 重新定义导出变量名
import { name as Name, pwd as Pwd } from 'export.js'

// 单例模式，多次重复执行同一句 import 语句，那么只会执行一次
import { a } "./xxx.js";
import { a } "./xxx.js";
// 相当于 import { a } "./xxx.js";
import { a } from "./xxx.js";
import { b } from "./xxx.js";
// 相当于 import { a, b } from "./xxx.js";
```
- **Promise对象**
```js
/*
Promise的状态：
    pending(进行中) - fulfilled(已成功)
    pending(进行中) - rejected(已失败)
    除了异步操作的结果，任何其他操作都无法改变这个状态
*/
const p1 = new Promise((resolve,reject) => {
    resolve('success1');
    resolve('success2');
    reject('reject');
});
p1.then(
    // 接收 resolve 的结果
    (res) => {  console.log(res) },
    // 接收 reject 的结果
    (rej) => {  console.log(rej) }
);

const p2 = new Promise((resolve,reject) => {
    resolve('success1');
    resolve('success2');
    reject('reject');
});
p2.then(res => console.log(res) )
  .catch(error => console.log(error) )
  .finally(() => { console.log('Experiment completed') })
/*
状态的缺点：
    无法取消 Promise ，一旦新建它就会立即执行，无法中途取消。
    如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
    当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
*/
```
- **Generator 函数**
```js
/*
其中 * 用来表示函数为 Generator 函数
yield 用来定义函数内部的状态
通过 yield 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程提供解决方案
通过next()调用函数执行至下一个yield
*/
function* callee() {
    console.log('callee: ' + (yield));
}
function* func(){
    console.log("one");
    yield '1';
    console.log("two");
    yield '2'; 
    console.log("three");
    let x = yield '3'; 
    console.log("four" + x);
    /* 
        yield* 表达式表示 yield 返回一个Generator对象，
        用于在 Generator 函数内部，调用另一个 Generator 函数
    */
    yield* callee();
    return '4';
}
let f = func()
f.next()
f.next()
f.next()
// 可以传参数并获取
f.next(33)
f.next('value')
```
## ES7(ES2016)
```js
let arr = [1,2,3]
arr.includes(1) // true

let cubed = 2 ** 3;
// same as: 2 * 2 * 2
```
## ES8(ES2017)
```js
// 操作对象
Object.values / Object.entries
let arr = { name: 'join', pwd: '123' }
/* 获取对象的value组成的数组 */
Object.values(arr) // ['join', '123']
/* 获取对象的key与value组成的数组 */
Object.entries(arr) // [['name', 'join'], ['pwd', '123']]

// 获取对象的所有自身属性的描述符
Object.getOwnPropertyDescriptors
const obj = {
    a: 123,
    [Symbol('foo')]: 123,
    get bar() { return 'abc' },
};
/*
    返回对象属性的描述
    configurable: true
    enumerable: true
    value: 123
    writable: true
*/
Object.getOwnPropertyDescriptors(obj)

// 操作String，字符串头部和尾部填充字符串
String.prototype.padStart / String.prototype.padEnd
let str = 'hello'
str.padStart(10, 'o') // ooooohello
str.padEnd(10, 'o') // helloooooo

// 操作函数，逗号可以添加到函数的参数列表后面
function foo( param1, param2, ) { console.log(param1, param2) }
foo('abc', 'def', )

// 共享内存(SharedArrayBuffer)和原子(Atomics)
const worker = new Worker('worker.js');
// To be shared
var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
// get shared
new Int32Array(sab);

// Atomics对 SharedArrayBuffer 和 ArrayBuffer 对象进行原子操作
const buffer = new ArrayBuffer(16);
const int32 = new Int32Array(buffer);
int32[0] = 5;
// 将指定位置上的数组元素与给定的值相加，并返回相加前该元素的值
Atomics.add(int32, 0, 2)  // int32[0] = 7
// 返回数组中指定元素的值
Atomics.load(int32, 0)
// 将给定的值存储在数组中的指定位置
Atomics.store(int32, 0, 2)
```
- **async/await**
```js
/*
    async 函数返回的是一个 Promise 对象，可以使用 then 方法添加回调函数
*/
async function helloAsync() {
    return "helloAsync";
}
console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
helloAsync().then(v=>{
   console.log(v);         // helloAsync
})

function testAwait() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve('testAwait');
          reject('reject')
       }, 1000);
   });
}
async function helloAsync(){
/*
    必须等待await的函数返回Promise，处理完成后才会继续执行async function
    await会解析Promise对象返回处理后的对象
*/
    try {
        const res = await testAwait();
        console.log('testAwait ' + res);
    } catch(e) {
        console.log(e)
    }
}
helloAsync();
// testAwait testAwait
```
参考链接：https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md