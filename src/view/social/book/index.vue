<template>
	<section class="body social-book">
    <div class="wrapper">
      <p class="desc">通讯录</p>
      <mt-index-list>
        <mt-index-section v-for="i, k in sortList" :index="k">
          <mt-cell v-for="j in i" :title="j.nickname || j.username"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
	</section>
</template>

<script>
  import {
    SocialBookReq,
  } from '../../../common/rest';

  export default {
    data() {
      return {
        list: [],
      };
    },
    methods: {
      loadFriendBook() {
        SocialBookReq()
          .then((data) => {
            this.list = data.data.list;
          });
      }
    },
    computed: {
      sortList() {
        let result = {};
        for (let i = 0, len = this.list.length; i < len; i++) {
          let currLetter = this.list[i]['first_letter'];
          if (!result[currLetter]) {
            result[currLetter] = [];
          }
          result[currLetter].push(this.list[i]);
        }
        return result;
      }
    },
    created() {
      this.loadFriendBook();
    }
  };
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
