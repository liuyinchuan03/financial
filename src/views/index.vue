<template>
  <div >
        <div class="con">
        <!-- 头部 -->
        <div class="header">
            <div class="header-img" >
                <!-- 轮播图 -->

                <div class="swiper-container" >
                        <mt-swipe :auto="4000">
                            <mt-swipe-item  v-for="(list,index)  in swiperData" :key="index"><img @click="card(list.id)" :src="imgUrl()+list.image"></mt-swipe-item>
                        
                            </mt-swipe>
                </div>
            </div>
        </div>
        <!-- 信用卡 -->
        <div class="card">
            <div class="card-font">
                <div class="cardFont-l">推荐信用卡</div>
                <router-link tag="div" to="/credit" class="cardFont-r">更多 <i class="iconfont icon-jiantou"></i></router-link>
            </div>
            <div class="bank-c">
                <ul>
                    <li @click="card(val.id)"  v-for="(val,index) in creditArr" :key="index"><a href="#"><img :src="imgUrl()+val.cover" alt=""></a>
                        <p>{{val.name}}</p>
                        </li>
                </ul>
            </div>
        </div>
        <!-- 贷款 -->
        <div class="loans">
            <div class="loans-fontt">
                <div class="loansFont-l">推荐贷款</div>
                <router-link tag="div" to="/loan" class="loansFont-r"><a href="#">更多 <i class="iconfont icon-jiantou"></i></a></router-link>
                <!-- <div >推荐贷款</div> -->

            </div>
            <div class="loans-con">
                <ul>
                    <router-link tag="li" to="/card" v-for="(val,index) in loanArr" :key="index">
                        <div class="tu"><img :src="imgUrl()+val.cover" alt=""></div>
                        <div class="num">{{val.maxAmount}}</div>
                        <div class="loans-font">微小贷款</div>
                    </router-link>
                </ul>
            </div>
        </div>
        <!-- 保险 -->
        <div class="insure" >
            <div class="insure-fontt">
                <div class="insureFont-l">推荐保险</div>
                <router-link tag="div" to="/safe" class="insureFont-r"><a href="#">更多 <i class="iconfont icon-jiantou"></i></a></router-link>
                <!-- <div class="insureFont-r"></div> -->
            </div>
            <div class="insure-con" >
                <ul>
                    <li v-for="(val,index) in safeArr" :key="index"  @click="safeDetails(val.id)">
                        <div class="insure-img fl"><img :src="imgUrl()+val.cover" alt=""></div>
                        <div class="insure-font fl">
                            <p>{{val.name}}</p>
                            <h4>{{val.amount}}<i>起</i></h4>
                        </div>
                        <div class="insure-keep fr">{{val.description}}</div>
                    </li>
                </ul>
            </div>
        </div>
            <div class="plan2">
                <router-link tag="a" to="/enter">
                    查询进度
                </router-link>
            </div>
    </div>
    <!-- 底 -->
    <div class="footer">
         <ul>
            <router-link tag="li" to="/" style="color:#ffc250" >
            <img src="../assets/images/首页2.png" alt="">
                <span>首页</span></router-link>
            <router-link tag="li" to="/credit">
           <img src="../assets/images/信用卡1.png" alt="">
                <span>信用卡</span>
            </router-link>
             <router-link tag="li" to="/loan">
                <img src="../assets/images/货代1.png" alt="">
                <span>贷款</span>
            </router-link>
            <router-link tag="li" to="/safe">
                <img src="../assets/images/保险1.png" alt="">
                <span>保险</span>
            </router-link>
            <router-link tag="li" to="/user">
                <img src="../assets/images/用户中心1.png" alt="">
                <span>用户中心</span>
            </router-link>
            </ul>
    </div>
  </div>
</template>

<script>
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID
// &redirect_uri=REDIRECT_URI&
// response_type=code&
// scope=snsapi_userinfo&
// state=STATE
// #wechat_redirect

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60
// &redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&
// response_type=code&
// scope=snsapi_userinfo&
// state=STATE
// #wechat_redirect
export default {
  data () {
    return {
      swiperData: [],
      postion:{
          postion:1
      },
      creditArr:[],
      // 推荐信用卡
      creditCrd:{
          type:1,
          nominateIndex:1
      },
      loanArr:[],
      // 推荐贷款
      loanCrd:{
          type:2,
          nominateIndex:1
      },
      safeArr:[],
      // 推荐保险
      safeCrd:{
          type:3,
          nominateIndex:1
      }
    }
  },
  mounted () {
    this.swiper()
    this.creditCr()
    this.loanCr()
    this.safeCr()
  },
  methods: {

    card(id){
        this.$router.push({ 
                path: '/card',
                 query:{id: id }
                 })
    },
    safeDetails (id) {
      this.$router.push({ 
                path: '/safeDetails',
                 query:{id: id }
                 })
    },
    // 轮播
    swiper () {
      this.$http.post('/index/bannerList', this.postion)
        .then((res) => {
          this.swiperData = res.data.data
        })
        .catch((err)=>{
            console.log(err.data.msg);
        })
    },
    // 推荐信用卡
    creditCr(){
        this.$http.post('/index/recommendList', this.creditCrd)
        .then((res)=>{
           this.creditArr=res.data.data
        })
        .catch((err)=>{
            console.log(err.data.msg);
            
        })
    }, 
    // // 推荐贷款
    loanCr(){
        this.$http.post('/index/recommendList', this.loanCrd)
        .then((res)=>{
           this.loanArr=res.data.data
        })
        .catch((err)=>{
            console.log(err.data.msg);
        })
    }, 
    // // 推荐保险
    safeCr(){
        this.$http.post('/index/recommendList', this.safeCrd)
        .then((res)=>{
            this.safeArr=res.data.data
        })
        .catch((err)=>{
            console.log(err.data.msg);
        })
    },
    // teach(){
    //     this.$router.push('http://localhost:8080//cgi-bin/token?appid=wx05b03263167c2545&grant_type=client_credential&secret=8324258736fb6f1d563aae89397a8f38')
    // }
  }
}
</script>

<style scoped>

.swiper-container{
    margin: 0 auto;
}
a{
        color: #999;
}
html {
    font-size: 100px;
    box-sizing: border-box;
}

body {
    background-color: #f5f5f5;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.con {
    width: 7.5rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    position: relative;
}

.header {
    position: relative;
    overflow: hidden;
        height: 4.3rem;
    margin: 0 auto;
}

.swiper-container img {
    width: 100%;
}

.header-img {
    background-image: linear-gradient(to right, #fbb653, #fc9b41);
    height: 2.7rem;
}

.header-img img {
    width: 7.1rem;
    height: 3.5rem;
    margin-top: 0.4rem;
}

.enter {
    position: absolute;
    bottom: 0;
    left: 0.7rem;
    width: 6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    margin: 0 auto;
    background-color: #F0438A;
    border-radius: 0.2rem;
}

.enter a {
    font-size: 0.28rem;
    color: #fff;
}

.enter a:hover {
    color: #fff;
}

/* 信用卡 */

.card {
    width: 7.1rem;
       /* height: 4rem; */
    margin: 0.1rem auto;
}

.card img {
    width: 2.3rem;
}

.card-font {
    height: 0.5rem;
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
}

.cardFont-l {
    float: left;
    font-size: 0.28rem;
}

.cardFont-r {
    float: right;
    font-size: 0.28rem;
    color: #999;
}

.cardFont-r i {
    font-size: 0.2rem;
}

.bank-c {
    /* height: 4.7rem; */
}

.bank-c li {
    box-sizing: border-box;
    float: left;
    width: 2.3rem;
    height: 2.26rem;
}

.bank-c li img {
    width: 2.3rem;
    height: 1.46rem;
}

.bank-c li:nth-child(2),
.bank-c li:nth-child(5) {
    margin: 0 0.1rem;
}

.bank-c p {
    text-align: center;
    font-size: 0.28rem;
    color: #666;
    margin-top: 0.2rem;
}

/* 贷款 */

.loans {
    width: 7.1rem;
    height: 4.6rem;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
}

.loans img {
    width: 0.68rem;
    height: 0.3rem;
}

.loans-fontt {
    height: 0.5rem;
    margin: 0.2rem;
    border-bottom: 1px solid #f2f2f2;
    padding: 0 0.2rem;
}

.loans-fontt i {
    color: #d6d6d6;
}

.loans .loansFont-l {
    float: left;
    font-size: 0.28rem;
}

.loans .loansFont-r {
    float: right;
    color: #d6d6d6;
    font-size: 0.28rem;
}

.loans .loans-con {
    margin: 0.2rem;
}

.loans .loans-con li {
    width: 2.1rem;
    height: 1.6rem;
    float: left;
    text-align: center;
    border-right: 1px solid #d6d6d6;

    padding-bottom: 0.1rem;
}
.loans .loans-con li:nth-child(1) {
        border-bottom: 1px solid #d6d6d6;
}
.loans .loans-con li:nth-child(2) {
        border-bottom: 1px solid #d6d6d6;
}
.loans .loans-con li:nth-child(3) {
        border-bottom: 1px solid #d6d6d6;
}

.loans .loans-con li .num {
    color: #f17420;
    font-size: 0.32rem;
}

.loans .loans-con li .tu {
    margin: 0.2rem 0;
}

.loans .loans-con li .loans-font {
    color: #999;
    font-size: 0.23rem;
}

/* 保险 */

.insure {
    position: relative;
    width: 7.1rem;
    /* height: 7rem; */
    margin: 0 auto;
    background-color: #fff;
    margin-top: 0.5rem;
}

.insure img {
    width: 1.8rem;
    height: 1.2rem;
}

.insureFont-l {
    float: left;
    font-size: 0.28rem;
}

.insureFont-r {
    float: right;
    font-size: 0.28rem;
    color: #d6d6d6;
}

.insureFont-r i {
    font-size: 0.2rem;
}

.insure-fontt {
    height: 0.5rem;
    margin: 0.2rem;
    padding: 0.2rem 0.2rem;
    border-bottom: 1px solid #f2f2f2;
}

.insure-con {
    margin: 0.2rem;
        margin-top: 0.4rem;
}

.insure-con li {
    width: 7.1rem;
    height: 1.56rem;
    margin-top: 0.2rem;
    overflow: hidden;
}

.insure-con li .insure-font p {
    font-size: 0.32rem;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
}

.insure-con li .insure-font h4 {
    font-size: 0.3rem;
    margin-left: 0.2rem;
    font-weight: 400;
}

.insure-con li .insure-font i {
    font-size: 0.26rem;
    color: #666;
        margin-left: 0.1rem;
}

.insure-keep {
    width: 1.34rem;
    height: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4a12b;
    font-size: 0.24rem;
    color: #fff;
    font-weight: 400;
    border-radius: 0.5rem;
    margin-right: 0.4rem;
}

.plan2 {
     position: fixed;
    bottom: 1.4rem;
        left: 2.5rem;
    width: 2.22rem;
    height: 0.7rem;
    font-size: 0.28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    background-color: #fff;
    border-radius: 0.4rem;
    box-shadow: 0.01rem 0.01rem 0.02rem #999;
    opacity: 0.9;
}
.loans-con li:nth-child(3n){
    border-right: none;
}

/* 底部 */

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

.footer img {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    font-size: 0.4rem;
    text-align: center;
    margin: 0.15rem auto 0.1rem;
}
.footer li:nth-child(2) img {
    width: 0.5rem;
}

.footer span {
    display: block;
    text-align: center;
    font-size: 0.22rem;
}
/* 轮播图 */
.swiper-container{
    width: 7.1rem;
    height: 3.9rem;
}
/* 底边字体颜色 */

.footer a{
    color: #999999;
}
.footer a:hover{
    color: #f17420;
}
</style>
