<template>
  <div>
      <div class="centre">
        <div class="content">
            <div class="broadcast" @click="tabSwiper">
                <div class="swiper-container">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item  v-for="(list,index)  in swiperData" :key="index" @click="insuranceDetail(list.id)">
                                <img :src="imgUrl()+list.image">
                                </mt-swipe-item>
                            </mt-swipe>
                </div>
            </div>
            <div class="title">
                <ul>
                    <li v-for="(list,index)  in safeDa" :key="index" @click="tabls(list.name,list.id)">
                        <a :class="{aColor : aColor == list.name}" href="JavaScript:;" >{{list.name}}</a>
                        </li>
                    <!-- <li><a :class="aColor1" href="JavaScript:;" @click="tabls">医疗保险</a></li>
                    <li><a :class="aColor2" href="JavaScript:;" @click="aColorr">重疾险</a></li>
                    <li><a :class="aColor3" href="JavaScript:;" @click="aColorra">意外险</a></li>
                    <li><a :class="aColor4" href="JavaScript:;" @click="vehicles">车险</a></li>
                    <li><a :class="aColor5" href="JavaScript:;" @click="aColorb">寿险</a></li> -->
                </ul>
            </div>
            <!-- tabl -->
            <div :class="tabl" @click="tabSwiper">
                <ul>
                    <li>
                        <div class="tabl-img fl">
                            <a href="JavaScript:;"><img src="../assets/images/2首页_35.png" alt=""></a>
                        </div>
                        <div class="tabl-con fl">
                            <h4>享受e生旗舰版</h4>
                            <p>800万医疗报销,不限医保价格亲民</p>
                            <div class="tabl-foot fl"><i>¥99</i><em>起</em><span class="fr"><a href="#">众安保险</a></span></div>
                        </div>
                    </li>

                    <li>
                        <div class="tabl-img fl">
                            <a href="JavaScript:;"><img src="../assets/images/2首页_37.png" alt=""></a>
                        </div>
                        <div class="tabl-con fl">
                            <h4>个人综合意外险</h4>
                            <p>18-65周岁高额意外保障</p>
                            <div class="tabl-foot fl"><i>¥146</i><em>起</em><span class="fr"><a href="#">众安保险</a></span></div>
                        </div>
                    </li>
                </ul>
                <!-- </a> -->
            </div>
            <!-- 车险 -->
            <!-- vehicle disno -->
            <div :class="vehicle">
                <div class="vehicle-an">
                    <div class="infer" @click="risk"><a href="javascript:;">测测车险</a></div>
                </div>
                <div class="vehicle-fot disno">
                    <p>我们还没有车险产品,敬请期待</p>
                </div>
                <div class="vehicle-con">
                    <ul>
                        <li @click="sideCar">
                        <div class="tabl-img fl">
                            <a href="JavaScript:;"><img src="../assets/images/2首页_35.png" alt=""></a>
                        </div>
                        <div class="tabl-con fl">
                            <h4>享受e生旗舰版</h4>
                            <p>800万医疗报销,不限医保价格亲民</p>
                            <div class="tabl-foot fl"><i>¥99</i><em>起</em><span class="fr"><a href="#">众安保险</a></span></div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <!-- 底部导航 -->
        </div>
            <div class="footer">
         <ul>
            <router-link tag="li" to="/" >
            <img src="../assets/images/首页1.png" alt="">
                <span>首页</span></router-link>
            <router-link tag="li" to="/credit">
           <img src="../assets/images/信用卡1.png" alt="">
                <span>信用卡</span>
            </router-link>
             <router-link tag="li" to="/loan">
                <img src="../assets/images/货代1.png" alt="">
                <span>贷款</span>
            </router-link>
            <router-link tag="li" to="/safe" style="color:#ffc250">
                <img src="../assets/images/保险2.png" alt="">
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
  name: 'App',
  data () {
    return {
      vehicle: 'vehicle disno',
      tabl: 'tabl',
      aColor: '',
       swiperData: [],
      postion:{
          postion:4
      },
      safeDa:[],
    //   保险tapid
      insuranceId:1,
    //   保险对应内容
    safeContent:[]
    }
  },
    mounted () {
    this.swiper()
    this.safeData()
    this.safeconData()
  },
  methods: {
    tabSwiper: function () {
      this.$router.push('/safeDetails')
    },
    vehicles: function () {
      this.vehicle = 'vehicle'
      this.tabl = 'tabl disno'
    },
    // tap标题
    tabls: function (name,id) {
            this.aColor = name;
            this.insuranceId=id;
    },

    risk: function () {
      this.$router.push('/estimate')
    },
    // 轮播
    swiper () {
      this.$http.post('/index/bannerList', this.postion)
        .then((res) => {
          this.swiperData = res.data.data
        })
    },
    sideCar(){
        this.$router.push('/safeDetailsCopy')
    },
    // 保险标题
    safeData(){
        this.$http.post('/insurance/categoryList')
        .then((res)=>{
            this.safeDa=res.data.data;
            this.aColor=res.data.data[0].name
            // console.log(this.safeDa);
            
        })
    },
    insuranceDetail(id){
         this.$router.push({ 
                path: '/safeDetails',
                 query:{id: id }
                 })
    },
    // 保险标题对应内容
    safeconData(){
        let obj={pageNum:1,pageSize:1,insuranceId:this.insuranceId}
        this.$http.post('/insurance/insuranceList',obj)
        .then((res)=>{
            // console.log(res);
            this.safeContent=res.data.data
        })
    }
  }
}
</script>

<style scoped>
@import '../assets/font_8gzgd2giybe/iconfont.css';
@import '../assets/font_39zdlgji454/iconfont.css';
a{
color: #999999;
}
.centre {
    width: 7.5rem;
}
.disno{
    display: none;
}
.centre .content {
    width: 7.1rem;
    margin: 0.3rem auto 0;
}

.centre .content .broadcast {
    width: 100%;
    /* padding: .33rem 0; */
    padding-bottom: 0.3rem;
}

.centre .content .broadcast img {
    width: 100%;
}

.centre .content .broadcast ul {
    overflow: hidden;
    width: 1rem;
    margin: 0 auto;
    padding-top: .3rem;
}

.centre .content .broadcast ul :nth-child(2) {
    background-color: #ababab;
}

.centre .content .broadcast ul li {
    background-color: #d0d0d0;
    float: left;
    width: 0.14rem;
    height: 0.14rem;
    margin-left: .1rem;
    border-radius: 50%;
}
.footer li:nth-child(2) img {
    width: 0.5rem;
}

.centre .content .title {
    overflow: hidden;
    width: 7.1rem;
    height: 0.8rem;
    background-color: #fff;
}

.centre .content .title li {
    box-sizing: border-box;
    float: left;
    width: 20%;
    height: 0.8rem;
        height: 0.77rem;
    text-align: center;
}

.centre .content .title li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height:0.77rem;
    font-size: 0.28rem;
    /* color: #999999; */
}

.aColor {
    color: #f4a12b;
    border-bottom: 0.03rem solid #f4a12b;
}

.centre .content .tabl li,.vehicle-con li {
    box-sizing: border-box;
    width: 7.1rem;
    height: 1.8rem;
    background-color: #fff;
    padding: 0.3rem 0.2rem;
}
.vehicle-con{
    margin-bottom: 1.5rem;
    margin-top: 0.2rem;
}
.centre .content .tabl li .tabl-img img,.centre .content .vehicle-con li .tabl-img img {
    width: 1.8rem;
}

.centre .content .tabl li .tabl-con,.centre .content .vehicle-con li .tabl-con {
    margin-left: 0.2rem;
}

.centre .content .tabl li .tabl-con h4,.centre .content .vehicle-con li .tabl-con h4 {
    font-size: 0.28rem;
    font-weight: normal;
}

.centre .content .tabl li .tabl-con p,.centre .content .vehicle-con li .tabl-con p {
    font-size: 0.20rem;
    color: #999;
}

.centre .content .tabl li .tabl-con .tabl-foot,.centre .content .vehicle-con li .tabl-con .tabl-foot {
    width: 4.6rem;
    margin-top: 0.1rem;
}

.centre .content .tabl li .tabl-con .tabl-foot i,.centre .content .vehicle-con li .tabl-con .tabl-foot i {
    display: inline-block;
    font-size: 0.26rem;
}

.centre .content .tabl li .tabl-con .tabl-foot em,.centre .content .vehicle-con li .tabl-con .tabl-foot em {
    font-size: 0.24rem;
    color: #666666;
}

.centre .content .tabl li .tabl-con .tabl-foot span,.centre .content .vehicle-con li .tabl-con .tabl-foot span {
    display: inline-block;
    width: 1.3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 0.2rem;
}

.centre .content .tabl li .tabl-con .tabl-foot span a,.centre .content .vehicle-con li .tabl-con .tabl-foot span a {
    font-size: 0.20rem;
    color: #fff;
}

.centre .content .vehicle .vehicle-an {
    margin-top: 0.1rem;
    padding-top: 0.3rem;
    height: 1rem;
    text-align: center;
    background-color: #fff;
}

.centre .content .vehicle .vehicle-an .infer {
    width: 2.5rem;
    margin: 0 auto;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border: 0.01rem solid #f5a738;
    border-radius: 0.1rem;

}

.centre .content .vehicle .vehicle-an .infer a {
    color: #f5a738;
    font-size: 0.3rem;
}

.centre .content .vehicle .vehicle-fot {
    margin-top: 0.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
    text-align: center;
    background-color: #fff;
    font-size: 0.3rem;
    color: #999999;
        margin-bottom: 0.2rem;
}

.tabl {
    padding-bottom: 1.2rem;
}
.active{
    color: #999999;
}

/* 底部 */

.footer {
    position: fixed;
    bottom: 0;
    margin-top: 0.2rem;
        width: 7.5rem;
    height: 1.1rem;
    background-color: #fff;
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

</style>
