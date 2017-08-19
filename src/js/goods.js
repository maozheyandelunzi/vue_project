
//引入
import storage from './storage.js';

//声明一个常量来存储
const goods = 'goodsnumber';

//获取已有的数据并存起来
let storeGoods = storage.get(goods) || {};

//向外暴漏方法
export default {
    
    //设置  数据的形式({id号:'条数'})
   
   set(id,num){
    //设置
     storeGoods[id] = num;
    //储存
    storage.set(goods,storeGoods);
   },
  
  //获取 有参数时获取当前的id条数 没参数时获取全部条数
  get(id){
     if(id){
         //这里要写成[]中括号
         return storeGoods[id] || 0;
     }else{
         //获取所有条数的数组
         let goodsTotal = this.getValue();

         return goodsTotal.length && goodsTotal.reduce((v1,v2) =>(+v1)+(+v2));

     }
  },


  remove(id){
      //删除数据
      delete storeGoods[id];
      //同步loacalStorage
      
      storage.set(goods,storeGoods);
  },
  getKey(){
    return Object.keys(storeGoods);
  },
  getValue(){
     
     return  Object.values(storeGoods);
     
  }

}