export default {
  'index': {
    title: '用户中心',
    path: '/',
    component: require('./user/home/index.vue')
  },

  //trend
  'trend_friend': {
    title: '动态',
    path: '/trend/friend',
    component: require('./trend/friend/index.vue')
  },
  'trend_follow': {
    title: '动态',
    path: '/trend/follow',
    component: require('./trend/follow/index.vue')
  },
  'trend_work': {
    title: '动态',
    path: '/trend/work',
    component: require('./trend/work/index.vue')
  },
  'trend_detail': {
    title: '详情',
    path: '/trend/detail',
    component: require('./trend/detail/index.vue')
  },
  'trend_send': {
    title: '发布',
    path: '/trend/send',
    component: require('./trend/send/index.vue')
  },

  //info
  'infor_index': {
    title: '消息中心',
    path: '/infor/index',
    component: require('./infor/index/index.vue')
  },
  'infor_chat': {
    title: '消息互动',
    path: '/infor/chat',
    component: require('./infor/chat/index.vue')
  },

  //social
  'social_index': {
    title: '人脉',
    path: '/social/index',
    component: require('./social/index/index.vue')
  },
  'social_friend': {
    title: '好友',
    path: '/social/friend',
    component: require('./social/friend/index.vue')
  },
  'social_book': {
    title: '通讯录',
    path: '/social/book',
    component: require('./social/book/index.vue')
  },
  'social_explore': {
    title: '人脉探索',
    path: '/social/explore',
    component: require('./social/explore/index.vue')
  },
  'social_explore_topic': {
    title: '主题搜索',
    path: '/social/explore_topic',
    component: require('./social/exploreTopic/index.vue')
  },
  'social_explore_discover': {
    title: '人脉发现',
    path: '/social/explore_discover',
    component: require('./social/exploreDiscover/index.vue')
  },
  'social_explore_location': {
    title: '附近人脉',
    path: '/social/explore_location',
    component: require('./social/exploreLocation/index.vue')
  },

  //user
  'user_login': {
    title: '用户登录',
    path: '/user/login',
    component: require('./user/login/index.vue')
  },
  'user_register': {
    title: '用户注册',
    path: '/user/register',
    component: require('./user/register/index.vue')
  },
  'user_home': {
    title: '用户中心',
    path: '/user/home',
    component: require('./user/home/index.vue')
  },
  'user_info': {
    title: '用户信息',
    path: '/user/info',
    component: require('./user/info/index.vue')
  },
  'user_code': {
    title: '用户二维码',
    path: '/user/code',
    component: require('./user/code/index.vue')
  },
}
