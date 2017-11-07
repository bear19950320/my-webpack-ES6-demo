//moduleTest.js
function say(){

    console.log('我引用了一个模块-.- jim Bear');
    // 调用下面呼唤的方法
    test();
}
//呼唤test.js的方法 通过路径
import {demo} from './test.js';
// 封装为一个方法方便调用
    function test(){
        demo();
    }
// 传送方法
export {say}