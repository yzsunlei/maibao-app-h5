<template>
	<section class="body social-explore">
    <div class="nav-head">
      <div class="search">
        <mt-search autofocus v-model="value" :result="result"></mt-search>
      </div>
      <div class="tabs">
        <div class="item" @click="$router.push({name: 'social_explore_topic'})">
          <div class="pic">
            <img class="img" src="../../../asset/image/explore1.png" />
          </div>
          <div class="title">主题推荐</div>
        </div>
        <div class="item" @click="$router.push({name: 'social_explore_discover'})">
          <div class="pic">
            <img class="img" src="../../../asset/image/explore2.png" />
          </div>
          <div class="title">人脉发现</div>
        </div>
        <div class="item" @click="$router.push({name: 'social_explore_location'})">
          <div class="pic">
            <img class="img" src="../../../asset/image/explore3.png" />
          </div>
          <div class="title">附近的人</div>
        </div>
      </div>
    </div>

    <div class="nav-list">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">同事</mt-tab-item>
        <mt-tab-item id="3">校友</mt-tab-item>
        <mt-tab-item id="4">同乡</mt-tab-item>
        <mt-tab-item id="5">同行</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <loadmore style="width:100%;" :commad="loadSocialExploreData" :param="extend({}, params, {type: 'recommand'})" :topMethod="onRefreshCallback"
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
          <loadmore style="width:100%;" :commad="loadSocialExploreData" :param="extend({}, params, {type: 'cowork'})" :topMethod="onRefreshCallback"
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
          <loadmore style="width:100%;" :commad="loadSocialExploreData" :param="extend({}, params, {type: 'coschool'})" :topMethod="onRefreshCallback"
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
          <loadmore style="width:100%;" :commad="loadSocialExploreData" :param="extend({}, params, {type: 'cocity'})" :topMethod="onRefreshCallback"
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
          <loadmore style="width:100%;" :commad="loadSocialExploreData" :param="extend({}, params, {type: 'cotrade'})" :topMethod="onRefreshCallback"
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
        data: "getSocialExploreData"
      })
    },
    methods: {
      ...mapActions({
        "loadSocialExploreData": "loadSocialExploreData",
      }),
      async onRefreshCallback() {
        this.$store.dispatch("clearSocialExploreData");
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
