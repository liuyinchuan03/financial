<template>
    <div>
    <div class="centre">
        <!-- 头部开始 -->
        <div class="header">
            <div class="num">
                <div class="num1">0.00</div>
                <div class="num2">订单总数</div>
            </div>
            <div class="count">
                <ul>
                    <li>
                        <div class="count-s">信用卡</div>
                        <div class="count-y">0</div>
                    </li>
                    <li>
                        <div class="count-s">贷款</div>
                        <div class="count-y">0</div>
                    </li>
                    <li>
                        <div class="count-s">保险</div>
                        <div class="count-y">0</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 说明 -->
        <p class="state">以下明细为用户进入相关申请页面时的浏览器记录，不能视为申请订单记录</p>
        <!-- 搜索按钮 -->
        <div class="button">
          <input type="text" placeholder="搜索订单">
        </div>
        <!-- 标题 -->
        <div class="title">
            <ul>
                <li :class="borbot1" @click="order"><a :style="colors1">信用卡</a> <i >|</i></li>
                <li :class="borbot2" @click="loanDetailed"><a :style="colors2">贷款</a><i>|</i></li>
                <li :class="borbot3" @click="safeDetailed"><a :style="colors3">保险</a></li>
            </ul>
        </div>
        <router-view></router-view>
        </div>
        <!-- 底部 -->
         <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> <img src="../../assets/images/left.png" alt=""> </span>
            </div>
            <div class="credFoot-r fr">
                <span> <img src="../../assets/images/right.png" alt=""> </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      colors1: 'color: #f4802b',
      colors2: '',
      colors3: '',
      borbot1: 'borbot',
      borbot2: '',
      borbot3: ''

    }
  },
  methods: {
    retuns: function () {
      this.$router.go(-1)
    },
    loanDetailed: function () {
      this.$router.push('/orderHead/loanDetailed')
      this.colors1 = ''
      this.colors2 = 'color: #f4802b'
      this.colors3 = ''
      this.borbot1 = ''
      this.borbot2 = 'borbot'
      this.borbot3 = ''
    },
    order: function () {
      this.$router.push('/orderHead/orderDetails')
      this.colors1 = 'color: #f4802b'
      this.colors2 = ''
      this.colors3 = ''
      this.borbot1 = 'borbot'
      this.borbot2 = ''
      this.borbot3 = ''
    },
    safeDetailed: function () {
      this.$router.push('/orderHead/safeDetailed')
      this.colors1 = ''
      this.colors2 = ''
      this.colors3 = 'color: #f4802b'
      this.borbot1 = ''
      this.borbot2 = ''
      this.borbot3 = 'borbot'
    }
  }
}
</script>
<style scoped>
.button{
  width: 6.4rem;
  margin:0.3rem  auto;
  /* height: 0.6rem; */
  /* margin-top: 0.2rem; */
}
.button input{
    text-align: center;
  width: 5.8rem;
  border: 0.01rem solid #888888 ;
  height: 0.5rem;
  box-shadow: darkgrey 0.1rem;
  border-radius: 0.1rem;
  font-size: 0.24rem;
  color: #999;
  padding: 0 0.2rem;
  vertical-align:top;
}
.credFoot img{
    width: 0.14rem;
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
    .centre {
        box-sizing: border-box;
    width: 7.5rem;
    padding: 0.2rem;
    margin: 0 auto;
    margin-bottom: 1.2rem;
}

.header {
    position: relative;
    overflow: hidden;
    width: 7.1rem;
    height: 4.2rem;
    border-radius: 0.2rem;
    background-image: linear-gradient(135deg, #f4a12b, #f48d79);
    margin: 0 auto;
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
.borbot{
        border-bottom: 0.03rem solid #f4802b;
}
.num1 {
    font-size: 0.36rem;
    color: #fff;
}

.num2 {
    font-size: 0.36rem;
    color: #fff;
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

.state {
    width: 7.1rem;
    color: #666;
    font-size: 0.26rem;
    margin: 0.26rem auto;
}

.title {
    overflow: hidden;
    width: 7.1rem;
    height: 0.84rem;
    line-height: 0.84rem;
    background-color: #fff;
     margin: 0 auto;
    margin-bottom: 0.2rem;
}

.title li {
    position: relative;
    box-sizing: border-box;
    float: left;
width: 2.36rem;
    text-align: center;
    font-size: 0.32rem;

}

.title a {
    /* display:inline-block; */
    /* width: 2.35rem; */
    width: 100%;
    height: 100%;
    color: #999;
}

/* .title a:hover {
    color: #f4802b;
} */

.title i {
    position: absolute;
    width: 0.01rem;
    right: 0;
    color: #999;
}
/* 底 */
.credFoot{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background-color: #e6e9f0;
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
