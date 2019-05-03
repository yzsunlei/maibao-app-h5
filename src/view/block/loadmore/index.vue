<template>
  <div class="loadmore"
        id="scrollLoadMore"
        v-infinite-scroll="onloadMoreScroll"
        :infinite-scroll-disabled="loadMoreLoading"
        :infinite-scroll-distance="0"
        v-if="!loadMoreError"
    >
    <div class="loadmore-content" :class="{ 'is-dropped': topDropped || bottomDropped}" :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
      <slot name="top">
        <div class="loadmore-top" v-if="topMethod">
          <div v-if="topStatus !== 'loading'" :class="topStatus === 'drop' ? 'drop' : 'pull'">
            <i v-if="loadMoreIconVisible" :class="['iconfont',topStatus === 'drop'? 'icon-less':'icon-moreunfold']" name="long-arrow-down"></i>
            <span>{{topText}}</span>
          </div>
          <div v-if="topStatus === 'loading'">
            <mt-spinner :size="20" type="fading-circle"></mt-spinner>
            <span>{{topText}}</span>
          </div>
        </div>
      </slot>
      <slot></slot>
      <slot name="loadmoreText">
          <div v-if="!allLoaded && loadMoreLoading" class="loadmoreText">
            <mt-spinner v-if="loadMoreIconVisible" :size="20" type="fading-circle"></mt-spinner>
            <span>加载中...</span>
          </div>
          <div v-if="allLoaded" class="loadmoreText allLoaded">
            <span>没有更多了</span>
          </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import { Spinner, InfiniteScroll  } from 'mint-ui';

  export default {
    name: 'mt-loadmore',
    props: {
      maxDistance: {
        type: Number,
        default: 0
      },
      loadMoreIconVisible: {
        type: Boolean,
        default: true
      },
      autoFill: {
        type: Boolean,
        default: true
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadingText: {
        type: String,
        default: '加载中...'
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      bottomPullText: {
        type: String,
        default: '上拉刷新'
      },
      bottomDropText: {
        type: String,
        default: '释放更新'
      },
      commad: {
        type: Function
      },
      param: {
        type: Object,
        default: ()=>{
          return {
            pageIndex: 1,
            pageSize: 10
          }
        }
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomallLoaded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        uuid: null,
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        loadMoreError:false,
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: '',
        bottomStatus: '',
        loadMoreLoading: false,
        allLoaded:false
      };
    },
    components:{
        Spinner,
        InfiniteScroll
    },
    watch: {
      translate(val){
        this.$emit('translate-change',val);
      },
      topStatus(val) {
        this.$emit('top-status-change', val);
        switch (val) {
          case 'pull':
            this.topText = this.topPullText;
            break;
          case 'drop':
            this.topText = this.topDropText;
            break;
          case 'loading':
            this.topText = this.topLoadingText;
            break;
          default:
            this.topText = "";
        }
      },
      bottomStatus(val) {
        this.$emit('bottom-status-change', val);
        switch (val) {
          case 'pull':
            this.bottomText = this.bottomPullText;
            break;
          case 'drop':
            this.bottomText = this.bottomDropText;
            break;
          case 'loading':
            this.bottomText = this.bottomLoadingText;
            break;
          default:
            this.bottomText = "";
        }
      }
    },
    methods: {
      async onloadMoreScroll(){
          if(this.allLoaded || this.loadMoreLoading || !this.commad)return;
          this.loadMoreLoading = true;
          let response = await this.commad(this.param).catch(()=>{
            this.loadMoreError = true;
            this.loadMoreLoading = false;
            throw new Error('the commad is Error !')
          });
          try {
            if(response.data.length<=0 /*|| response.total <= (this.param.pageIndex*this.param.pageSize)*/){
                this.allLoaded = true;
                return this.loadMoreLoading = false;
            };
          } catch (error) {
              this.allLoaded = true;
              return this.loadMoreLoading = false;
          }
          setTimeout(() => {
            this.$emit('loadMore',response);
            this.param.pageIndex +=1;
            this.loadMoreLoading = false;
          }, 500);
      },
      async onTopLoaded(id) {
        if (id === this.uuid) {
          this.translate = 0;
          this.topStatus = '';
          this.allLoaded = false;
          this.loadMoreLoading = false;
          await this.onloadMoreScroll();
        }
      },
      onBottomLoaded(id) {
        this.bottomStatus = '';
        this.bottomDropped = false;
        if (id === this.uuid) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              document.body.scrollTop += 50;
            } else {
              this.scrollEventTarget.scrollTop += 50;
            }
            this.translate = 0;
          });
        }
        if (!this.bottomallLoaded && !this.containerFilled) {
          this.fillContainer();
        }
      },
      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' &&
        currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },
      getScrollTop(element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
        } else {
          return element.scrollTop;
        }
      },
      bindTouchEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      },
      init() {
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        this.bindTouchEvents();
        this.onloadMoreScroll();
      },
      fillContainer() {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                  document.documentElement.getBoundingClientRect().bottom;
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                  this.scrollEventTarget.getBoundingClientRect().bottom;
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading';
              this.bottomMethod(this.uuid);
            }
          });
        }
      },
      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight;
        } else {
          return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom;
        }
      },
      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull';
          this.bottomDropped = false;
        }
      },
      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;
        this.direction = distance > 0 ? 'down' : 'up';
        if (typeof this.topMethod === 'function'  && this.direction === 'down' &&
            this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
          } else {
            this.translate = distance - this.startScrollTop;
          }
          if (this.translate < 0) {
            this.translate = 0;
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
        }
        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached();
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
            this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomallLoaded) {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.translate = Math.abs(distance) <= this.maxDistance
                ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate;
          } else {
            this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;
          }
          if (this.translate > 0) {
            this.translate = 0;
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
        }
      },
      handleTouchEnd() {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = '50';
            this.topStatus = 'loading';
            this.topMethod(this.uuid);
          } else {
            this.translate = '0';
            this.topStatus = '';
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true;
          this.bottomReached = false;
          if (this.bottomStatus === 'drop') {
            this.translate = '-50';
            this.bottomStatus = 'loading';
            this.bottomMethod(this.uuid);
          } else {
            this.translate = '0';
            this.bottomStatus = '';
          }
        }
        this.direction = '';
      }
    },
    mounted() {
      this.uuid = Math.random().toString(36).substring(3, 8);
      this.init();
    }
  };
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
