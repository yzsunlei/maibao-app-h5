import { mockFun } from "../common/Fn";

export default {
  "api_social_friend": mockFun({
    "list": [
      {
        "c_id": 10,
        "c_name": "全部好友",
        "c_num": 36,
        "c_list": [
          {
            "c_id": 2,
            "c_name": "熟识好友",
            "c_num": 8,
          },
          {
            "c_id": 3,
            "c_name": "相识好友",
            "c_num": 18,
          },
          {
            "c_id": 4,
            "c_name": "初识好友",
            "c_num": 10,
          },
        ]
      },
      {
        "c_id": 20,
        "c_name": "学校",
        "c_num": 28,
        "c_list": [
          {
            "c_id": 21,
            "c_name": "北京大学",
            "c_num": 8,
          },
          {
            "c_id": 22,
            "c_name": "清华大学",
            "c_num": 18,
          },
          {
            "c_id": 23,
            "c_name": "武汉大学",
            "c_num": 10,
          },
        ]
      },
      {
        "c_id": 30,
        "c_name": "行业方向",
        "c_num": 16,
        "c_list": [
          {
            "c_id": 31,
            "c_name": "IT互联网|研发",
            "c_num": 8,
          },
          {
            "c_id": 32,
            "c_name": "IT互联网|产品",
            "c_num": 18,
          },
          {
            "c_id": 33,
            "c_name": "IT互联网|测试",
            "c_num": 10,
          },
        ]
      },
    ]
  }),
  "api_social_book": mockFun({
    "list": [
      {
        "uid": 2,
        "username": "chaneel",
        "nickname": "无双",
        "first_letter": "W"
      },
      {
        "uid": 3,
        "username": "Alco",
        "nickname": "阿兰",
        "first_letter": "A"
      },
      {
        "uid": 4,
        "username": "chang",
        "nickname": "常远",
        "first_letter": "C"
      },
      {
        "uid": 5,
        "username": "cashu",
        "nickname": "蔡叔",
        "first_letter": "C"
      },
      {
        "uid": 6,
        "username": "huang",
        "nickname": "黄忠",
        "first_letter": "H"
      },
      {
        "uid": 7,
        "username": "zhna",
        "nickname": "章程",
        "first_letter": "Z"
      },
      {
        "uid": 8,
        "username": "hua",
        "nickname": "华健",
        "first_letter": "H"
      },
      {
        "uid": 9,
        "username": "sijiang",
        "nickname": "四将",
        "first_letter": "S"
      },
    ]
  }),
  "api_social_explore": mockFun({
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
      },
      {
        "uid": 4,
        "username": "sijiang",
        "nickname": "四将",
        "avatar": "/static/img/avatar.3727a9e.png",
        "company": "华为信息科技有限公司",
        "position": "技术工程师",
        "cofriend_num": 5
      },
    ]
  }),
  "api_social_exploreTopic": mockFun({
    "list": [
      {
        "uid": 3,
        "username": "tweeed",
        "nickname": "张明",
        "avatar": "/static/img/avatar2.bca33e9.png",
        "company": "锤子科技有限公司",
        "position": "前端工程师",
        "cofriend_num": 3
      },
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
        "uid": 4,
        "username": "sijiang",
        "nickname": "四将",
        "avatar": "/static/img/avatar.3727a9e.png",
        "company": "华为信息科技有限公司",
        "position": "技术工程师",
        "cofriend_num": 5
      },
    ]
  }),
  "api_social_exploreDiscover": mockFun({
    "list": [
      {
        "c_id": 12,
        "c_name": "互联网圈",
        "c_list": [
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
            "uid": 4,
            "username": "sijiang",
            "nickname": "四将",
            "avatar": "/static/img/avatar.3727a9e.png",
            "company": "华为信息科技有限公司",
            "position": "技术工程师",
            "cofriend_num": 5
          },
          {
            "uid": 3,
            "username": "tweeed",
            "nickname": "张明",
            "avatar": "/static/img/avatar2.bca33e9.png",
            "company": "锤子科技有限公司",
            "position": "前端工程师",
            "cofriend_num": 3
          },
          {
            "uid": 4,
            "username": "woha",
            "nickname": "卧张",
            "avatar": "/static/img/avatar2.bca33e9.png",
            "company": "网易科技有限公司",
            "position": "数据分析师",
            "cofriend_num": 8
          },
        ]
      }
    ]
  }),
  "api_social_exploreLocation": mockFun({
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
        "uid": 4,
        "username": "sijiang",
        "nickname": "四将",
        "avatar": "/static/img/avatar.3727a9e.png",
        "company": "华为信息科技有限公司",
        "position": "技术工程师",
        "cofriend_num": 5
      },
    ]
  }),
}
