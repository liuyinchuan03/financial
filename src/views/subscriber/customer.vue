<template>
    <div>
        <div class="centre">
        <!-- 头 -->
        <div class="header">
            <div class="num">
                <div class="num1">
                    <div class="num1-l fl">客户总量</div>
                    <div class="num1-r fl">0.00</div>
                </div>
                <div class="num2">
                    <div class="num2-l fl">本月新增</div>
                    <div class="num2-r fl">0.00</div>
                </div>
            </div>
            <div class="count">
                <ul>
                    <li>
                        <div class="count-s">初级合伙人</div>
                        <div class="count-y">0</div>
                    </li>
                    <li>
                        <div class="count-s">中级合伙人</div>
                        <div class="count-y">0</div>
                    </li>
                    <li>
                        <div class="count-s">高级合伙人</div>
                        <div class="count-y">0</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 搜索按钮 -->
        <div class="button">
          <input type="text" placeholder="快速找财神">
        </div>
        <!-- 用户等级 -->
        <div class="user">
            <ul>
                <!-- user-tap -->
                <li :class="user1" @click="ordinary1">普通用户</li>
                <li :class="user2" @click="ordinary2">初级合伙人</li>
                <li :class="user3" @click="ordinary3">中级合伙人</li>
                <li :class="user4" @click="ordinary4">高级合伙人</li>
            </ul>
        </div>
        <!-- 用户信息 普通 -->
        <div :class="info">
            <div class="info-l fl"><img src="../../assets/images/（P037）客户管理_03.png" alt=""></div>
            <div class="info-r fl">用户微信名称</div>
        </div>
        <!-- 中级用户 -->
        <!-- initial disno -->
        <div :class="initial">你还没有合伙人</div>
    </div>
    <!-- 底部 -->
        <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> &lt;

		</span>
            </div>
            <div class="credFoot-r fr">
                <span> &gt; </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user1: 'user-tap',
      user2: '',
      user3: '',
      user4: '',
      info: 'info',
      initial: 'initial disno'
    }
  },
  methods: {
    retun: function () {
      this.$router.go(-1)
    },
    ordinary1: function () {
      this.user1 = 'user-tap'
      this.user2 = ''
      this.user3 = ''
      this.user4 = ''
      this.info = 'info'
      this.initial = 'initial disno'
    },
    ordinary2: function () {
      this.user1 = ''
      this.user2 = 'user-tap'
      this.user3 = ''
      this.user4 = ''
      this.info = 'info disno'
      this.initial = 'initial'
    },
    ordinary3: function () {
      this.user1 = ''
      this.user2 = ''
      this.user3 = 'user-tap'
      this.user4 = ''
      this.info = 'info disno'
      this.initial = 'initial'
    },
    ordinary4: function () {
      this.user1 = ''
      this.user2 = ''
      this.user3 = ''
      this.user4 = 'user-tap'
      this.info = 'info disno'
      this.initial = 'initial'
    }
  }
}
</script>
<style scoped>
.button{
  width: 6.4rem;
  margin:0 auto;
  /* height: 0.6rem; */
  margin-top: 0.2rem;
}
.button input{
      width: 5.8rem;
  border: 0.01rem solid #888888 ;
  height: 0.5rem;
  box-shadow: darkgrey 0.1rem;
  border-radius: 0.1rem;
  font-size: 0.24rem;
  text-align: center;
  color: #999;
  padding: 0 0.2rem;
  vertical-align:top;
}
.button span{
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../assets/images/放大镜.png) no-repeat;
  background-size: 100%;
  color:#333;
  margin-left: 0.4rem;
  /* box-shadow: 0 0 #333 initial; */
  }
.disno{
    display: none;
}
li {
  color: #b8b8b8;
}
.centre {
  box-sizing: border-box;
  width: 7.5rem;
  height: 100%;
  padding: 0.2rem;
  margin-bottom: 1rem;
}
.header {
  position: relative;
  overflow: hidden;
  width: 7.1rem;
  height: 4.3rem;
  border-radius: 0.2rem;
  background-image: linear-gradient(135deg, #f4a12b, #f48d79);
}
.search {
  position: relative;
  text-align: center;
}
.search input {
  width: 6.3rem;
  height: 0.5rem;
  margin-top: 0.1rem;
  background-color: #c75705;
  text-align: center;
  border-radius: 0.05rem;
}
.sou {
  font-size: 0.28rem;
  color: #f5f5f5;
  font-weight: 400;
}
.souImg img {
  width: 0.3rem;
}
.cont {
  position: absolute;
  top: 0.12rem;
  left: 50%;
  transform: translateX(-50%);
}
.cont .sou {
  font-size: 0.26rem;
}
.cont .souImg {
  margin-top: 0.05rem;
  margin-left: 0.1rem;
}
.cont .sou,
.cont .souImg {
  float: left;
}
.num {
  width: 100%;
  height: 0.8rem;
  text-align: center;
  margin-top: 1rem;
}
.num1 {
  width: 2.4rem;
  height: 0.56rem;
  margin: 0 auto;
  font-size: 0.36rem;
  color: #fff;
}
.num1 .num1-l {
  margin-right: 0.1rem;
}
.num2 {
  width: 2.4rem;
  height: 0.56rem;
  margin: 0 auto;
  font-size: 0.36rem;
  color: #fff;
}
.num2 .num2-l {
  margin-right: 0.1rem;
}
.count {
  padding-top: 0.2rem;
  position: absolute;
  bottom: 0;
  width: 7.1rem;
  height: 1.08rem;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
}
.count li {
  float: left;
  width: 2.25rem;
  text-align: center;
}
.count .count-s {
  font-size: 0.24rem;
  color: #fff;
}
.count .count-y {
  font-size: 0.28rem;
  color: #fff;
}
.user-tap {
  color: #333;
  border-bottom: 0.03rem solid #333;
}
.user {
  width: 7.1rem;
  height: 0.8rem;
  background-color: #fff;
  margin-top: 0.2rem;
}
.user li {
  box-sizing: border-box;
  float: left;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.24rem;
  margin: 0 0.3rem;
}
.info {
  box-sizing: border-box;
  width: 7.1rem;
  height: 1.45rem;
  padding-left: 0.4rem;
  line-height: 1.45rem;
  margin-top: 0.2rem;
  background-color: #fff;
}
.info .info-l img {
  width: 0.84rem;
}
.info .info-r {
  font-size: 0.3rem;
  margin-left: 0.2rem;
}
.initial {
  box-sizing: border-box;
  width: 7.1rem;
  height: 1rem;
  padding-left: 0.4rem;
  line-height: 1rem;
  margin-top: 0.2rem;
  background-color: #fff;
  font-size: 0.3rem;
  color: #999999;
}
.active {
  display: none;
}
/* 底 */
.credFoot{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background-color: #fff;
}
.credFoot-l{
    width: 40%;
    height: 0.5rem;
    text-align: right;
}
.credFoot-r{
    width: 40%;
    height: 0.5rem;
}
.credFoot-l span{
    font-size: 0.2rem;
    color: #101010;
    display:block;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: right;
}
.credFoot-r span{
    font-size: 0.2rem;
    display:block;
    color: #999999 ;
    height: 0.5rem;
    line-height: 0.5rem;
}
</style>
