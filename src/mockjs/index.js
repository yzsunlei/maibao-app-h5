import Mock from "mockjs"
import trendMock from "./trend"
import inforMock from "./infor"
import socialMock from "./social"
import userMock from "./user"

// trend
Mock.mock("/api/trend/friend", trendMock.api_trend_friend);
Mock.mock("/api/trend/follow", trendMock.api_trend_follow);
Mock.mock("/api/trend/followToutiao", trendMock.api_trend_followToutiao);
Mock.mock("/api/trend/followRecommandTopic", trendMock.api_trend_followRecommandTopic);
Mock.mock("/api/trend/followRecommandLove", trendMock.api_trend_followRecommandLove);
Mock.mock("/api/trend/followAdd", trendMock.api_trend_followAdd);
Mock.mock("/api/trend/work", trendMock.api_trend_work);
Mock.mock("/api/trend/detail", trendMock.api_trend_detail);
Mock.mock("/api/trend/send", trendMock.api_trend_send);
Mock.mock("/api/trend/praise", trendMock.api_trend_praise);
Mock.mock("/api/trend/comment", trendMock.api_trend_comment);
Mock.mock("/api/trend/share", trendMock.api_trend_share);

// infor
Mock.mock("/api/infor/index", inforMock.api_infor_index);
Mock.mock("/api/infor/detail", inforMock.api_infor_detail);
Mock.mock("/api/infor/chat", inforMock.api_infor_chat);
Mock.mock("/api/infor/send", inforMock.api_infor_send);

// social
Mock.mock("/api/social/friend", socialMock.api_social_friend);
Mock.mock("/api/social/book", socialMock.api_social_book);
Mock.mock("/api/social/explore", socialMock.api_social_explore);
Mock.mock("/api/social/exploreTopic", socialMock.api_social_exploreTopic);
Mock.mock("/api/social/exploreDiscover", socialMock.api_social_exploreDiscover);
Mock.mock("/api/social/exploreLocation", socialMock.api_social_exploreLocation);

// user
Mock.mock("/api/user/register", userMock.api_user_register);
Mock.mock("/api/user/login", userMock.api_user_login);
Mock.mock("/api/user/info", userMock.api_user_info);
Mock.mock("/api/user/infoDetail", userMock.api_user_infoDetail);
Mock.mock("/api/user/verify", userMock.api_user_verify);
Mock.mock("/api/user/logout", userMock.api_user_logout);
Mock.mock("/api/user/lookRelated", userMock.api_user_lookRelated);
