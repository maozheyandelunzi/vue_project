
      //引入vue
      import Vue from 'vue';

  
        Vue.filter('formatD',function (source,arg) { 
            
            // console.log(arguments);
            
             let date = new Date(source);
             let y = date.getFullYear();
             let m = date.getMonth()+1;
             let d = date.getDate();
             
             let yreg = /YYYY/i;   //这里的i指不区分大小写
             let mreg = /MM/i;
             let dreg = /DD/i;

             return arg.replace(yreg,y).replace(mreg,m).replace(dreg,d);
         })