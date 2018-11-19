<template>
    <div>
        <div class="con">
            <div class="content">
                <!-- 头部 -->
                <div class="header">
                <div class="header-img" >
                    <!-- 轮播图 -->

                    <div class="swiper-container">
                            <mt-swipe :auto="4000">
                                <mt-swipe-item  v-for="(list,index)  in swiperData " :key="index"><img @click="recom(list.categoryId)" :src="imageUrl+list.image"></mt-swipe-item>
                                <!-- <mt-swipe-item><img src="../assets/images/2首页_03.png"></mt-swipe-item>
                                <mt-swipe-item><img src="../assets/images/2首页_03.png"></mt-swipe-item> -->
                                </mt-swipe>
                    </div>
                </div>
                <!-- 进度 -->
                <!-- <div class="enter">
                    <a href="JavaScript:;">查询进度</a>
                </div> -->
            </div>
                <!-- 信用卡 -->
                <div class="card">
                    <div class="card-font">
                        <div class="cardFont-l">推荐信用卡</div>
                        <!-- <div class="cardFont-r">更多 <i class="iconfont icon-jiantou"></i></div> -->
                </div>
                <div class="bank-c">
                    <ul>
                        <li v-for="(val,index) in recomList" :key="index" @click="recom(val.categoryId)">
                            <a href="javaScript:;"><img :src="imgUrl()+val.cover" alt=""></a>
                            <p>{{val.name}}</p>
                            <span>终身免费</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 银行 -->
            <div class="bank">
                <h3>推荐银行</h3>
                <div class="con">
                    <ul>
                        <li  
                        v-for="(val,index) in bankArr" :key="index"
                        @click.stop="banInformation(val.id)"
                          >
                          <a><img :src="imageUrl+val.path" alt="">
                            <span>{{val.bankName}}</span>
                                <em>{{val.description}}</em></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 底 -->
    </div>
    <div class="footer">
        <ul>
            <router-link tag="li" to="/" >
            <img src="../assets/images/首页1.png" alt="">
                <span>首页</span></router-link>
            <router-link tag="li" to="/credit" style="color:#ffc250">
           <img src="../assets/images/信用卡2.png" alt="">
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
            <router-link tag="li" to="/user" >
                <img src="../assets/images/用户中心1.png" alt="">
                <span>用户中心</span>
            </router-link>
            </ul>
    </div>
    </div>

</template>
<script>
export default {
  data () {
    return {
        // 轮播
        swiperData: [],
        imageUrl:'',
        postion:{
          postion:2
        },
        // 信用卡推荐银行
        bankArr:[],
        bank:{
            pageNum:1,
            pageSize:9
        },
        // 今日推荐
        recomList:[]
    }
  },
  created(){
  },
  mounted () {
    this.bankList()
    this.swiper()
    this.recommendList()
  },
  methods: {
    jump: function () {
      this.$router.push('/card')
    },
    // 轮播图
    swiper () {
      this.$http.post('/index/bannerList', this.postion)
        .then((res) => {
          this.swiperData = res.data.data
          this.imageUrl=this.imgUrl()
        })
    },
    // 信用卡推荐银行
    bankList(){
        this.$http.post('/card/bankList',this.bank)
        .then((res)=>{
            this.bankArr=res.data.data.records
        })
    },
    banInformation(id){
        this.$router.push({ 
                path: '/banInformation',
                 query:{id: id }
                 })
    },
    // 今日列表
    recommendList(){
        this.$http.post('/card/recommendList')
        .then((res)=>{
            // console.log(res.data.data);
            this.recomList=res.data.data
        })
    },
    // 今日列表点击跳转
    recom(id){
this.$router.push({ 
                path: '/card',
                 query:{id: id }
                 })
    }
  },

}
</script>
<style scoped>
/* 字体图标css样式 */
@import '../assets/font_8gzgd2giybe/iconfont.css';
@import '../assets/font_39zdlgji454/iconfont.css';
.swiper-container{
    margin: 0 auto;
    text-align: center;
}

.mint-swipe-indicator.is-active {
    /* background: #fff; */
    opacity: 0.4 !important;
}

.centre {
    width: 7.5rem;
    height: 100%;
    margin-bottom: 1.3rem;
}

.centre .content {
    width: 6.9rem;
    margin: 0.3rem auto 0;
}

.centre .content .import input {
    width: 100%;
    height: 0.54rem;
    border: 0.01rem solid #b8b8b8;
    text-align: center;
    font-size: 0.26rem;
    border-radius: 0.1rem;
}

.bank {
    width: 6.8rem;
    margin: 0.5rem auto 0;
}

.bank h3 {
    height: 0.5rem;
    font-size: 0.26rem;
    font-weight: normal;
}
.con{
    margin-bottom: 0.5rem;
}
.bank .con li {
    float: left;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: 0.3rem;
    margin-right: 0.3rem;
}

.bank .con li img {
    margin-top: 0.3rem;
}

.bank .con li span {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.28rem;
    height: .3rem;
    color: #130707;
}

.bank .con li:nth-child(3n) {
    margin-right: 0;
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
}

.header {
    position: relative;
    overflow: hidden;
    height: 4.2rem;
    margin: 0 auto;
    background:none;
}

.swiper-container img {
    width: 7.1rem;
    height: 3.5rem;
}

.header-img {
    background-image: linear-gradient(to right, #fbb653, #fc9b41);
    height: 2.7rem;
}

.header-img img {
    width: 7.1rem;
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
    height: 5rem;
    margin: 0 auto;
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

.bank-c li {
    box-sizing: border-box;
    float: left;
    width: 2.3rem;
    height: 2.26rem;
}
.bank-c li  span{
    width: 100%;
    display: inline-block;
}
.bank-c li  p,.bank-c li  span{
    text-align: center;
}

.bank .con li img {
    width: 0.68rem;
    height: 0.7rem;
}
.bank-c{
    overflow: hidden;
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
    font-size: 0.28rem;
    color: #666;
    margin-top: 0.1rem;
}
.bank-c span {
    font-size: 0.24rem;
    color: #999999 ;
}
.bank .con li:nth-child(8) img{
    width: 1.1rem;
    margin-bottom: 0.1rem;
}
.bank .con li:nth-child(5) img{
    width: 1.1rem;

}

/* 贷款 */

.loans {
    width: 7.1rem;
    height: 4.5rem;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
}

.loans img {
    width: 0.68rem;
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
    border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
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
    height: 7rem;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 0.3rem;
}

.insure img {
    width: 1.8rem;
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
}

.insure-con li {
    width: 7.1rem;
    height: 1.56rem;
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

.plan {
    position: absolute;
    bottom: 0.2rem;
    left: 2.24rem;
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

.font-color {
    color: #f17420;
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
    /* margin-left: 0.4rem; */
}

.card {
    height: 3.1rem;
}

.bank {
    height: 8.2rem;
}

.bank li {
    height: 2.1rem;
}

.bank em {
    display: block;
    color: #999999;
    font-size: 0.22rem;
    margin-top: 0.1rem;
     text-overflow:ellipsis; white-space:nowrap; overflow:hidden;
}
/* 轮播图 */
.swiper-container{
    width: 7.1rem;
    height: 3.9rem;
}

</style>
