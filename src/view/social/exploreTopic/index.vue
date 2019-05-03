<template>
	<section class="body social-explore-topic">
    <div class="nav-list">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">研发</mt-tab-item>
        <mt-tab-item id="3">产品</mt-tab-item>
        <mt-tab-item id="4">测试</mt-tab-item>
        <mt-tab-item id="5">前端</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <loadmore style="width:100%;" :commad="loadSocialExploreTopicData" :param="extend({}, params, {type: 'all'})" :topMethod="onRefreshCallback"
                    :loadMoreIconVisible="false" ref="loadmore_1" v-if="selected==1">
            <div class="wrap">
              <div class="item" v-for="it in data.list">
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
          </loadmore>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <loadmore style="width:100%;" :commad="loadSocialExploreTopicData" :param="extend({}, params, {type: 'yanfa'})" :topMethod="onRefreshCallback"
                    :loadMoreIconVisible="false" ref="loadmore_2" v-if="selected==2">
            <div class="wrap">
              <div class="item" v-for="it in data.list">
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
          </loadmore>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <loadmore style="width:100%;" :commad="loadSocialExploreTopicData" :param="extend({}, params, {type: 'chanpin'})" :topMethod="onRefreshCallback"
                    :loadMoreIconVisible="false" ref="loadmore_3" v-if="selected==3">
            <div class="wrap">
              <div class="item" v-for="it in data.list">
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
          </loadmore>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <loadmore style="width:100%;" :commad="loadSocialExploreTopicData" :param="extend({}, params, {type: 'ceshi'})" :topMethod="onRefreshCallback"
                    :loadMoreIconVisible="false" ref="loadmore_4" v-if="selected==4">
            <div class="wrap">
              <div class="item" v-for="it in data.list">
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
          </loadmore>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <loadmore style="width:100%;" :commad="loadSocialExploreTopicData" :param="extend({}, params, {type: 'qianduan'})" :topMethod="onRefreshCallback"
                    :loadMoreIconVisible="false" ref="loadmore_5" v-if="selected==5">
            <div class="wrap">
              <div class="item" v-for="it in data.list">
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
          </loadmore>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
	</section>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import {
    extend
  } from "lodash";

  export default {
    data() {
      return {
        value: "",
        result: [],
        selected: "1",
        params: {
          pageIndex: 1,
          pageSize: 10,
        },
        extend
      }
    },
    computed: {
      ...mapGetters({
        data: "getSocialExploreTopicData"
      })
    },
    methods: {
      ...mapActions({
        "loadSocialExploreTopicData": "loadSocialExploreTopicData",
      }),
      async onRefreshCallback() {
        this.$store.dispatch("clearSocialExploreTopicData");
        this.$refs["loadmore_"+this.selected].onTopLoaded(this.$refs["loadmore_"+this.selected].uuid);
      },
    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
