<template>
	<section class="body social-friend">
    <div class="links">
      <div class="group" v-for="i in list">
        <mt-cell is-link :to="{name: 'social_book'}">
          <div class="title" slot="title">
            <span class="text">{{i.c_name}}</span>
          </div>
        </mt-cell>
        <mt-cell is-link v-for="j in i.c_list" :value="j.c_num">
          <div class="title" slot="title">
            <span class="text">{{j.c_name}}</span>
          </div>
        </mt-cell>
      </div>
    </div>
	</section>
</template>

<script>
  import {
    SocialFriendReq,
  } from '../../../common/rest';

  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      loadFriendCate() {
        SocialFriendReq()
          .then((data) => {
            this.list = data.data.list;
          });
      }
    },
    created() {
      this.loadFriendCate();
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
