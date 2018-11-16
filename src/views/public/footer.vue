<template>
    <div>
        <router-view v-bind:postion='postion'></router-view>

        <div class="footer">
         <ul>
            <li :style="fontColor1"  @click="index">
                <div class="ioc iconfont icon-shouye "></div>
                <span >首页</span>
            </li>
            <li :style="fontColor2" @click="credit">
           <div class="ioc iconfont icon-xinyongqia"></div>
                <span>信用卡</span>
            </li>
             <li :style="fontColor3" @click="loan">
                <div class="ioc iconfont icon-A-daikuanjisuanqi"></div>
                <span>贷款</span>
            </li>
            <li :style="fontColor4" @click="safe">
                <div class="ioc iconfont icon-anquandunpai"></div>
                <span>保险</span>
            </li>
            <li :style="fontColor5" @click="user">
                <div class="ioc iconfont icon-yonghu"></div>
                <span>用户中心</span>
            </li>
            </ul>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      fontColor1: 'color:#f17420',
      fontColor2: '',
      fontColor3: '',
      fontColor4: '',
      fontColor5: '',
      transitionName: 'slide-left',
      postion: 1
    }
  },

  methods: {
    index: function () {
      this.$router.push('/')
      this.fontColor1 = 'color:#f17420'
      this.fontColor2 = ''
      this.fontColor3 = ''
      this.fontColor4 = ''
      this.fontColor5 = ''
      this.postion = 1
    },
    credit: function () {
      this.$router.push('/credit')
      this.fontColor1 = ''
      this.fontColor2 = 'color:#f17420'
      this.fontColor3 = ''
      this.fontColor4 = ''
      this.fontColor5 = ''
      this.postion = 2
    },
    loan: function () {
      this.$router.push('/loan')
      this.fontColor1 = ''
      this.fontColor2 = ''
      this.fontColor3 = 'color:#f17420'
      this.fontColor4 = ''
      this.fontColor5 = ''
      this.postion = 3
    },
    safe: function () {
      this.$router.push('/safe')
      this.fontColor1 = ''
      this.fontColor2 = ''
      this.fontColor3 = ''
      this.fontColor4 = 'color:#f17420'
      this.fontColor5 = ''
      this.postion = 4
    },
    user: function () {
      this.$router.push('/user')
      this.fontColor1 = ''
      this.fontColor2 = ''
      this.fontColor3 = ''
      this.fontColor4 = ''
      this.fontColor5 = 'color:#f17420'
    }
  }
}
</script>
<style scoped>
/* 底部 */

@import '../../assets/font_8gzgd2giybe/iconfont.css';
@import '../../assets/font_39zdlgji454/iconfont.css';
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 0.2rem;
    width: 100%;
    height: 1rem;
    background-color: #fff;
        padding-bottom: 0.1rem;
}

.footer li {
    float: left;
    width: 20%;
    color: #999999;
}

.footer .ioc {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    font-size: 0.4rem;
    text-align: center;
    margin: 0.15rem auto 0.1rem;
}

.footer span {
    display: block;
    text-align: center;
    font-size: 0.22rem;
}

.swiper-container{
    width: 7.1rem;
    height: 3.9rem;
}

 .footer a{
    color: #999999;
}
.footColor{
    color: #f17420;
}
</style>
