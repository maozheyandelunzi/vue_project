

//对localStorage 进行封装
//由于设置localStorage 只能设置成字符串 所以先把对象JSON.stringify变成字符串样子的
//对象,获取的时候现将字符串JSON.parse转成对象

export default {

    //设置localStorage
    set(key, option) {

        try {
            option = JSON.stringify(option);
        } finally {
            localStorage.setItem(key, option);
        }
    },
    //获取值
    get(key) {
        let data = localStorage.getItem(key);
        try {
            data = JSON.parse(data);
        } finally {
            return data || {}
        }
    }
}