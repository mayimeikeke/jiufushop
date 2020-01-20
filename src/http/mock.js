var Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
  // "user|5-10": [{
  //   'name': '@cname', //中文名称
  //   'age|1-100': 100, //100以内随机整数  属性值100只用来确定类型
  //   'birthday': '@date("yyyy-MM-dd")', //日期
  //   'city': '@city(true)'//中国城市
  // }],
  "swiper|4":[
    {
      'imgPath|1':['static/1.png','static/2.png','static/3.png','static/4.png'],
      'id':'@id'
    }
  ],

  'section1':{
    'list|4':[{
      'imgPath|1':['static/cate.png','static/cate1.png','static/cate2.png','static/cate3.png'],
      'id':'@id'
    }],
    'banner':'static/banner2.jpg'
  },
  'section2|10':{
    'list|10':[{
      'title|1': ['桂林桂花糕伴手礼 广西桂林特产零食小吃 绿豆糕传统糕点正宗手工','芋头酥传统糕点 香芋酥点心 中秋月饼礼盒台湾特产 ','绿豆糕正宗老式绿豆糕传统手工糕点心 休闲零食整箱包邮 ','青团豆沙艾草 清明果 艾草麻糍糍粑 蛋黄馅艾草青团','老字号万家灯火点心糕点礼盒饼干上海送礼零食年货大礼包'],
        'price|99-300':100,
        'intro': Random.paragraph(),
        'imgPath|1':['static/cate.png','static/cate1.png','static/cate2.png','static/cate3.png'],
        'id':'@id'
      }],
    'banner':'static/banner2.jpg'
  },
  'section4':{
    'list|120':[{
      'title|1': ['桂林桂花糕伴手礼 广西桂林特产零食小吃 绿豆糕传统糕点正宗手工','芋头酥传统糕点 香芋酥点心 中秋月饼礼盒台湾特产 ','绿豆糕正宗老式绿豆糕传统手工糕点心 休闲零食整箱包邮 ','青团豆沙艾草 清明果 艾草麻糍糍粑 蛋黄馅艾草青团','老字号万家灯火点心糕点礼盒饼干上海送礼零食年货大礼包 '
    ],
      'imgPath|1':['static/cate.png','static/cate1.png','static/cate2.png','static/cate3.png'],
      'price|99-300':100,
      'intro': Random.paragraph(),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
  }
});

var detail = Mock.mock('http://api.com/detail', {
  "view|1": [{
    'title|1': ['桂林桂花糕伴手礼 广西桂林特产零食小吃 绿豆糕传统糕点正宗手工','芋头酥传统糕点 香芋酥点心 中秋月饼礼盒台湾特产 ','绿豆糕正宗老式绿豆糕传统手工糕点心 休闲零食整箱包邮 ','青团豆沙艾草 清明果 艾草麻糍糍粑 蛋黄馅艾草青团','老字号万家灯火点心糕点礼盒饼干上海送礼零食年货大礼包 '
    ],
    'intro':  Random.cparagraph(2),
    'id|1':['001','002','003','003','004','005','006','007','008','009','010'],
    'price|99-300':100,
    'chose|3':[{
      'col|+1':['红豆味','原味','绿豆味'],
      'size|+1':['24g*12个','24g*24个','24g*32个']
    }],
    'count':0
  }],

  'swiper|3':[{
    'imgSrc|1':['static/cate.png','static/cate1.png','static/cate2.png','static/cate3.png'],
    'id':'@id'
  }],

  'contentImgSrc|8':[{
    'imgSrc|1':['static/detail1.png','static/detail2.png','static/detail3.png','static/detail4.png'],
  }]
});
 
var category = Mock.mock('http://api.com/category', {
    'aside|16':[{
      'title|1':['热门','女装','男装','童装'],
      'list|60':[{
        'title|1':['T恤','长袖','短袖','冬装','夏装'],
        'imgPath|1':['static/cate.png','static/cate1.png','static/cate2.png','static/cate3.png'],
      }]
    }]
});
 
export {index,detail,category}
