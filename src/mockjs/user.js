import { mockFun } from "../common/Fn";

export default {
  "api_user_register": mockFun(),
  "api_user_login": mockFun(),
  "api_user_info": mockFun({
    "uid": 1,
    "username": "wang",
    "nickname": "王湾",
    "avatar": "/static/img/avatar.3727a9e.png",
    "sex": 1,
    "mobile": "15689658845",
    "email": "wang123@qq.com",
    "company": "阿里巴巴",
    "position": "技术专家",
    "country": "中国",
    "province": "浙江",
    "city": "杭州",
    "profession": "互联网",
    "part": "研发",
    "homeplace": "湖北",
    "hometown": "宜昌",
    "school": "武汉大学",
    "tags": "技术牛人,成熟稳重",
    "friend_num": 272,
    "influence_num": 62,
    "visited_num": 236,
    "grade": 3,
    "signature": "梦想还是要有的，万一实现了呢"
  }),
  "api_user_infoDetail": mockFun({
    "uid": 1,
    "username": "wang",
    "nickname": "王湾",
    "avatar": "/static/img/avatar.3727a9e.png",
    "sex": 1,
    "mobile": "15689658845",
    "email": "wang123@qq.com",
    "company": "阿里巴巴",
    "position": "技术专家",
    "country": "中国",
    "province": "浙江",
    "city": "杭州",
    "profession": "互联网",
    "part": "研发",
    "homeplace": "湖北",
    "hometown": "宜昌",
    "school": "武汉大学",
    "tags": "技术牛人,成熟稳重",
    "friend_num": 272,
    "influence_num": 62,
    "visited_num": 236,
    "grade": 3,
    "signature": "梦想还是要有的，万一实现了呢",
    "trend_num": 3,
    "work_num": 2,
    "comment_num": 15,
    "credit_num": 3,
    "expriences": [
      {
        "company": "阿里巴巴集团",
        "time_period": "2016.06.30-至今",
        "desc": "电商系统中间件研发，电商系统中间件研发，电商系统中间件研发，电商系统中间件研发，电商系统中间件研发",
        "worker_friend": 60
      }
    ],
    "impress": [
      "靠谱", "技术大拿", "成熟大方", "进取心强"
    ]
  }),
  "api_user_verify": mockFun(),
  "api_user_logout": mockFun(),
  "api_user_lookRelated": mockFun({
    "list": [
      {
        "uid": 2,
        "username": "chaneel",
        "nickname": "Lucy",
        "avatar": "/static/img/avatar.3727a9e.png",
        "company": "腾讯科技有限公司",
        "position": "前端经理",
        "cofriend_num": 8
      },
      {
        "uid": 3,
        "username": "tweeed",
        "nickname": "张明",
        "avatar": "/static/img/avatar2.bca33e9.png",
        "company": "锤子科技有限公司",
        "position": "前端工程师",
        "cofriend_num": 3
      }
    ]
  }),
}
