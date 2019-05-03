<template>
	<section class="body user-info">
    <div class="uinfo">
      <div class="top-bg">
      </div>
      <div class="avatar">
        <img class="img" :src="user.avatar" />
      </div>
      <div class="detail">
        <h3 class="name">{{user.nickname || user.username}}</h3>
        <p class="company">{{user.company}}</p>
        <p class="position">{{user.position}}</p>
        <p class="tags">
          <span class="span">{{user.profession}}</span>
          <span class="span">{{user.part}}</span>
          <span class="span">影响力<strong class="num">{{user.influence_num}}</strong></span>
        </p>
        <p class="location">{{user.province}}-{{user.city}}</p>
        <p class="signature">{{user.signature}}</p>
      </div>
      <div class="distinct">
        <div class="item">
          <div class="pic">
            <img class="img" src="../../../asset/image/avatar1.png" />
          </div>
          <p class="desc">动态<span class="num">{{user.trend_num}}</span> </p>
        </div>
        <div class="item">
          <div class="pic">
            <img class="img" src="../../../asset/image/avatar2.png" />
          </div>
          <p class="desc">观点<span class="num">{{user.work_num}}</span> </p>
        </div>
        <div class="item">
          <div class="pic">
            <img class="img" src="../../../asset/image/avatar3.png" />
          </div>
          <p class="desc">互动<span class="num">{{user.comment_num}}</span> </p>
        </div>
        <div class="item">
          <div class="pic">
            <img class="img" src="../../../asset/image/avatar.png" />
          </div>
          <p class="desc">信用<span class="num">{{user.credit_num}}</span> </p>
        </div>
        <div class="item">
          <div class="pic">
            <img class="img" src="../../../asset/image/default.png" />
          </div>
          <p class="desc">更多<span class="num">...</span> </p>
        </div>
      </div>
    </div>

    <div class="experience">
      <h2 class="title">工作经历</h2>
      <div class="wrap">
        <div class="item" v-for="it in user.expriences">
          <div class="avatar">
            <img class="img" src="../../../asset/image/avatar.png" />
          </div>
          <div class="content">
            <div class="company">{{it.company}}</div>
            <div class="time">{{it.time_period}}</div>
            <div class="desc">{{it.desc}}</div>
            <div class="connect">
              我有<span class="num">{{it.worker_friend}}</span>个好友在此公司 <i class="iconfont icon-more"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="edit">
        <i class="iconfont icon-add"></i>
        <span class="text">添加工作经历</span>
      </div>
    </div>

    <div class="impression">
      <h2 class="title">
        <span class="tit">好友印象</span>
        <span class="more">全部<strong class="num">{{user.impress.length}}</strong>个 <i class="iconfont icon-more"></i> </span>
      </h2>
      <div class="wrap">
        <div class="item" v-for="it in user.impress">{{it}}</div>
      </div>
    </div>

    <div class="recommand">
      <h2 class="title">看了我的人还看了</h2>
      <div class="wrap">
        <div class="item" v-for="it in look_related">
          <div class="avatar">
            <img class="img" :src="it.avatar" />
          </div>
          <div class="info">
            <h3 class="name">{{it.nickname || it.username}}</h3>
            <p class="position">{{it.company}} {{it.position}}</p>
            <p class="connect">
              <i class="iconfont icon-account"></i>
              <span class="text"><strong>{{it.cofriend_num}}</strong>个共同好友</span>
            </p>
          </div>
          <div class="button">
            <i class="iconfont icon-add"></i>
            <span class="text">好友</span>
          </div>
        </div>
      </div>
    </div>

    <div class="action">
      <div class="button contact">我的联系方式</div>
      <div class="button share">分享名片</div>
    </div>
	</section>
</template>

<script>
  import {
    UserInfoDetailReq,
    UserLookRelatedReq
  } from '../../../common/rest';

  export default {
    data() {
      return {
        user: {},
        look_related: []
      }
    },
    methods: {
      loadUserInfo() {
        UserInfoDetailReq()
          .then((data) => {
            this.user = data.data;
          });
      },
      loadLookRelated() {
        UserLookRelatedReq()
          .then((data) => {
            this.look_related = data.data.list;
          });
      },
    },
    created() {
      this.loadUserInfo();

      this.loadLookRelated();
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
