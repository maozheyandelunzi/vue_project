

const demain = 'http://139.199.192.48:8888';


export default {
     imgDemain : "http://ofv795nmp.bkt.clouddn.com/",

     getlunbo:demain + '/api/getlunbo',
     

     getnewList:demain + '/api/getnewslist',
     

     getnewsDetail:demain + '/api/getnew/',
    
    //评论
     getComment:demain + '/api/getcomments/',
     pushComment:demain + '/api/postcomment/',

     //图片
     getTitle:demain + '/api/getimgcategory',

     getImglist:demain + '/api/getimages/',

     getImginfo:demain + '/api/getimageInfo/',

     getImgmin:demain + '/api/getthumimages/',

    //  商品
    getGoodslist:demain + '/api/getgoods?pageindex=',
    getGoodsText:demain + '/api/goods/getdesc/',
    getGoodsInfo:demain + '/api/goods/getinfo/',


    //购物车
    getShopcartlist: demain + '/api/goods/getshopcarlist/'
}