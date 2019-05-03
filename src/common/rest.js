import Http from './axios';

/* 动态模块 */

// 好友动态
export const TrendFriendReq = (params) => new Http().require({
  url: '/api/trend/friend',
  params: params
});

// 主题动态
export const TrendFollowReq = (params) => new Http().require({
  url: '/api/trend/follow',
  params: params
});

// 主题动态-行业头条
export const TrendFollowToutiaoReq = (params) => new Http().require({
  url: '/api/trend/followToutiao',
  params: params
});

// 主题动态-推荐感兴趣的主题
export const TrendFollowRecommandTopicReq = (params) => new Http().require({
  url: '/api/trend/followRecommandTopic',
  params: params
});

// 主题动态-猜你喜欢的动态
export const TrendFollowRecommandLoveReq = (params) => new Http().require({
  url: '/api/trend/followRecommandLove',
  params: params
});

// 主题动态-动态关注
export const TrendFollowAddReq = (params) => new Http().require({
  url: '/api/trend/followAdd',
  params: params
});

// 职言动态
export const TrendWorkReq = (params) => new Http().require({
  url: '/api/trend/work',
  params: params
});

// 动态详情
export const TrendDetailReq = (params) => new Http().require({
  url: '/api/trend/detail',
  params: params
});

// 动态发布
export const TrendSendReq = (params) => new Http().require({
  url: '/api/trend/send',
  params: params
});

// 动态点赞
export const TrendPraiseReq = (params) => new Http().require({
  url: '/api/trend/praise',
  params: params
});

// 动态评论
export const TrendCommentReq = (params) => new Http().require({
  url: '/api/trend/comment',
  params: params
});

// 动态分享
export const TrendShareReq = (params) => new Http().require({
  url: '/api/trend/share',
  params: params
});

/* 消息模块 */

// 消息中心
export const InforIndexReq = (params) => new Http().require({
  url: '/api/infor/index',
  params: params
});

// 消息详情
export const InforDetailReq = (params) => new Http().require({
  url: '/api/infor/detail',
  params: params
});

// 消息对话
export const InforChatReq = (params) => new Http().require({
  url: '/api/infor/chat',
  params: params
});

// 消息发送
export const InforSendReq = (params) => new Http().require({
  url: '/api/infor/send',
  params: params
});

/* 人脉模块 */

// 我的好友-分类
export const SocialFriendReq = (params) => new Http().require({
  url: '/api/social/friend',
  params: params
});

// 我的好友-通讯录
export const SocialBookReq = (params) => new Http().require({
  url: '/api/social/book',
  params: params
});

// 人脉推荐-按同事、校友、同乡、同行、共同好友数推荐
export const SocialExploreReq = (params) => new Http().require({
  url: '/api/social/explore',
  params: params
});

// 人脉推荐-按行业分类、共同好友数推荐
export const SocialExploreTopicReq = (params) => new Http().require({
  url: '/api/social/exploreTopic',
  params: params
});

// 人脉推荐-按二度人脉推荐
export const SocialExploreDiscoverReq = (params) => new Http().require({
  url: '/api/social/exploreDiscover',
  params: params
});

// 人脉推荐-按地理位置推荐
export const SocialExploreLocationReq = (params) => new Http().require({
  url: '/api/social/exploreLocation',
  params: params
});

/* 用户模块 */

// 用户注册
export const UserRegisterReq = (params) => new Http().require({
  url: '/api/user/register',
  params: params
});

// 用户登录
export const UserLoginReq = (params) => new Http().require({
  url: '/api/user/login',
  params: params
});

// 用户信息
export const UserInfoReq = (params) => new Http().require({
  url: '/api/user/info',
  defaultMethod: 'GET'
});

// 用户信息-详版
export const UserInfoDetailReq = (params) => new Http().require({
  url: '/api/user/infoDetail',
  defaultMethod: 'GET'
});

// 用户验证
export const UserVerifyReq = (params) => new Http().require({
  url: '/api/user/verify',
  params: params
});

// 用户登出
export const UserLogoutReq = (params) => new Http().require({
  url: '/api/user/logout',
  params: params
});

// 查看过我的人还查看了
export const UserLookRelatedReq = (params) => new Http().require({
  url: '/api/user/lookRelated',
  params: params
});
