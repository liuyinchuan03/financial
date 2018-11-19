<template>
    <div>
        <div class="father">
        <!-- 头部轮播 -->
        <div class="broadcast">
            <div class="swiper-container" >
                        <mt-swipe :auto="4000">
                            <mt-swipe-item  v-for="(list,index)  in swiperData " :key="index"><img @click="tapSwiper(list.id)" :src="imageUrl+list.image"></mt-swipe-item>
                            </mt-swipe>
                </div>
        </div>
        <!-- 详情 -->
        <div class="details">
            <ul>
                <li v-for="(list,index)  in loanArr" :key="index" 
                 @click="loanClick(list.name,list.id)"> <a href="JavaScript:;"  :class="{active : loanTap == list.name}">{{list.name}}</a></li>
            </ul>
            <ol>
                <li>
                    <select v-model="couponSelected" @change="getCouponSelected">
                        <option value ="贷款金额">贷款金额</option>
                        <option :value="list.id" v-for="(list,index)  in downMney" :key="index" >{{list.min+' - '+list.max}}</option>

                    </select>
                </li>
                <li>
                    <select v-model="couponSelected2" @change="getCouponSelected2">
                        <option value="预计期限">预计期限</option>
                        <option :value="list.id" v-for="(list,index)  in downMonth" :key="index">{{list.min+' - '+list.max}}</option>
                    </select>
                </li>
                <li>
                    <select v-model="couponSelected3" @change="getCouponSelected3">
                        <option value ="利率范围">利率范围</option>
                        <option :value="list.id" v-for="(list,index)  in rate" :key="index">{{list.value}}</option>
                    </select>
                </li>
            </ol>
        </div>
        <!-- 分类 -->
        <div class="main">
            <ul>
                <li class="list" @click="tapSwiper(list.id)" v-for="(list,index)  in safeList" :key="index">
                    <div class="box">
                        <div class="list1 bgc1"><img :src="imgUrl()+list.cover" alt=""></div>
                        <h2>{{list.name}}</h2>
                    </div>
                    <div class="container">
                        <p>{{list.minAmount +'-'+ list.maxAmount+'万'}}</p>
                        <i>{{list.description}}</i>
                        <span>{{'参考日息'+list.interest}}</span>
                        <span>{{'借款限期:'+list.minMonth+'月'+'-'+list.maxMonth+'月'}}</span>
                        <a @click.stop="tabT">一键申请</a>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 底部导航 -->
<div class="footer">
         <ul>
            <router-link tag="li" to="/" >
            <img src="../assets/images/首页1.png" alt="">
                <span>首页</span></router-link>
            <router-link tag="li" to="/credit">
           <img src="../assets/images/信用卡1.png" alt="">
                <span>信用卡</span>
            </router-link>
             <router-link tag="li" to="/loan" style="color:#ffc250">
                <img src="../assets/images/货代2.png" alt="">
                <span>贷款</span>
            </router-link>
            <router-link tag="li" to="/safe" >
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
    </div>
</template>
<script>
export default {
  data () {
    return {
       swiperData: [],
      imageUrl:'',
    //   tap颜色切换
      loanTap:'',
      postion:{
          postion:3
      },
    //   贷款类别id
      loanId:'1',
    //   贷款类别
      loanArr:[],
    //   下拉金额
    downMney:[],
    //   下拉月份
    downMonth:[],
    //   下拉利率
    rate:[],
        // 最小金额
        minAmount:'',
        //最大金额
        maxAmount:'',
        // 月份
        minMonth:'',
        maxMonth:'',
        // 利率
        rates:'',
    // 下拉金额选中
    couponSelected:'',
    couponSelected2:'',
    couponSelected3:'',
    // 贷款列表
    safeList:[]
    }
  },
  created(){
    //   this.downMney[-1].id
      this.couponSelected = '贷款金额';
      this.couponSelected2 = '预计期限';
      this.couponSelected3 = '利率范围';
          // 贷款列表

  },
    mounted () {
    // 轮播
    this.swiper()
    // 贷款类别
    this.loanList()
    // 贷款下拉框
    this.loanScreenList()
    // 贷款列表
    this.loansList()
  },
  methods: {
    tapSwiper: function (id) {
      this.$router.push({ 
                path: '/loanDetails',
                 query:{id: id }
                 })
    },
    tabT: function () {
      this.$router.push('/apply')
    },
    swiper () {
      this.$http.post('/index/bannerList', this.postion)
        .then((res) => {
          this.swiperData = res.data.data
          this.imageUrl=this.imgUrl()
        })
    },
    // 贷款类别
    loanList(){
        this.$http.post('/loan/loanList')
        .then((res)=>{
            // console.log(this.loanArr);
            this.loanArr=res.data.data
            this.loanTap=res.data.data[0].name
        })
    },
    loanClick(name,id){
        this.loanTap = name;
        this.loanId=id
    },
    // 贷款下拉框
    loanScreenList(){
        let con1={loanId:this.loanId,
                    type:1}
        let con2={loanId:this.loanId,
                    type:2}
        let con3={loanId:this.loanId,
                    type:3}
        this.$http.post('/loan/loanScreenList',con1)
        .then((res)=>{
            this.downMney=res.data.data
            // console.log(this.downMney);
        })
        this.$http.post('/loan/loanScreenList',con2)
        .then((res)=>{
            this.downMonth=res.data.data
            //  console.log(this.downMonth);
        })
        this.$http.post('/loan/loanScreenList',con3)
        .then((res)=>{
            this.rate=res.data.data
        })
    },
    // 下拉选
    getCouponSelected(){
        let id=this.couponSelected;
        for(var i=0;i<this.downMney.length;i++){
            if(this.downMney[i].id==id){
            this.minAmount=this.downMney[i].min;
            this.maxAmount=this.downMney[i].max;
            }else{
            this.minAmount='';
            this.maxAmount='';
            }
        }
            this.loansList()
    },
    getCouponSelected2(){
        let id=this.couponSelected2;
        for(var i=0;i<this.downMonth.length;i++){
            if(this.downMonth[i].id==id){
            this.minMonth=this.downMonth[i].min;
            this.maxMonth=this.downMonth[i].max;
            }else{
            this.minMonth='';
            this.maxMonth='';
            }
        }
            this.loansList()
    },
    getCouponSelected3(){
        let id=this.couponSelected3;
        for(var i=0;i<this.rate.length;i++){
            if(this.rate[i].id==id){
            this.rates=this.rate[i].value;
            }else{
            this.rates='';
            }
        }
            this.loansList()
    },
    // 贷款列表
    loansList(id){
        let loanListData={
            loanId:this.loanId,
            minAmount:this.minAmount,
            maxAmount:this.maxAmount,
            minMonth:this.minMonth,
            maxMonth:this.maxMonth,
            rate:this.rates,
            pageNum:1,
            pageSize:9,
        }
        this.$http.post('/loan/loanProductList',loanListData)
        .then((res)=>{
            this.safeList=res.data.data.records
            // console.log(this.safeList);
            
        })
    }
  }
}
</script>
<style scoped>
@import '../assets/font_8gzgd2giybe/iconfont.css';
@import '../assets/font_39zdlgji454/iconfont.css';
    html {
    font-size: 100px;
}

.father {
    margin: 0 auto;
    position: relative;
    width: 7.1rem;
    height: 100%;
    padding: 0 0.2rem;
        padding-bottom: 0.1rem;
}

.father .broadcast {
    width: 100%;
    padding: .33rem 0;
}

.father .broadcast img {
    width: 100%;
}

.father .broadcast ul {
    overflow: hidden;
    width: 1rem;
    margin: 0 auto;
    padding-top: .3rem;
}

.father .broadcast ul :nth-child(2) {
    background-color: #ababab;
}

.father .broadcast ul li {
    background-color: #d0d0d0;
    float: left;
    width: 0.14rem;
    height: 0.14rem;
    margin-left: .1rem;
    border-radius: 50%;
}

.father .details {
    box-sizing: border-box;
    width: 7.1rem;
    height: 1.68rem;
    background-color: #ffffff;
    padding: 0 0.2rem;
}

.father .details ul {
    overflow: hidden;
    border-bottom: 1px solid #f2f2f2;
}

.father .details ul li {
    text-align: center;
    float: left;
    font-size: .27rem;
    width: 25%;
    height: 0.79rem;
    line-height: 0.79rem;
}
.list1 img{
    width: 0.54rem;
    height: 0.54rem;
}
.father a {
    box-sizing: border-box;
    display: block;
    color: #877e78;
    width: 100%;
    height: 100%;
    font-weight: 700;
}


.father .details ol {
    overflow: hidden;
    margin: 0;
    padding-top: .23rem;
    padding-left: 0;
}

.father .details ol li {
    box-sizing: border-box;
    text-align: center;
    float: left;
    font-size: .27rem;
    width: 33%;
    /* height: .32rem; */
}
ol li select{
    box-sizing: border-box;
    width: 1.8rem;
    height: 0.45rem;
    border-radius: 0.1rem;
    box-shadow:0 0 0.01rem 0.01rem #aaa ;
    padding: 0 0.1rem;
    border:0.01rem solid #aaa;
    outline: none;
        font-size: .24rem;
}
.father .list {
    margin-top: .07rem;
    background-color: #ffffff;
    overflow: hidden;
    padding: 0 .2rem;
    padding-bottom: .2rem;
}

.mint-swipe-indicator.is-active {
    background: #ababab;
}
.father .list .box {
    overflow: hidden;
    margin-top: .20rem;
    height: .59rem;
    border-bottom: 1px solid #ccc;
}

.father .list .box .list1 {
    float: left;
    border: 1px solid #ccc;
    height: .5rem;
    width: .5rem;
    border-radius: 50%;
    background-size: contain;
    margin-right: .13rem;
}

.father .list .box h2 {
    font-size: .25rem;
    line-height: .59rem;
}

.father .list .container {
    position: relative;
    padding-top: .2rem;
}

.father .list .container p {
    font-size: .3rem;
}

.father .list .container i {
    font-size: .2rem;
    color: #f8ba59;
    font-style: italic;
}

.father .list .container span {
    display: block;
    color: #999;
    font-size: .2rem;
}

.father .list .container a {
    position: absolute;
    box-sizing: border-box;
    right: .2rem;
    top: 50%;
    width: 1.6rem;
    height: .50rem;
    background-color: #f6a213;
    border-radius: 6%;
    color: #ffffff;
    line-height: .50rem;
    text-align: center;
    font-size: .28rem;
}

/* 底部 */
.main{
    width: 7.1rem;
    margin-bottom: 1.2rem;
}
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
    font-size: 0.18rem;
    margin-top: 0.1rem;
}
/* 轮播调试 */
.swiper-container{
    width: 7.1rem;
    height: 3.9rem;
}
.swiper-container img {
    width: 7.1rem;
    height: 3.5rem;
}
.mint-swipe-indicator{
width: 0.14rem;
height: 0.14rem;
}
.mint-swipe-indicator.is-active{
    background: #000;
    opacity: 0.3;
}
.active{
    border-bottom: 0.02rem solid #1f2a32;
    color: #1f2a32 !important; 
}
</style>
