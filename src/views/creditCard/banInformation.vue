<template>
  <div>
      <div class="centre">
        <div class="content">
            <div class="header">
                <div class="header-img fl"><img :src="imgUrl()+bankCollect.path" alt=""></div>
                <div class="header-l fl">
                    <h4>{{bankCollect.bankName}}</h4>
                    <div class="state">申请数目: <i>{{banArr.data}}</i></div>
                </div>
            </div>
            <div class="con">
                <ul  >
                    <!-- <li v-for="(val,index) in banArr" :key="index">
                        <div class="li-img fl"><img src="@/assets/images/2首页_06.png" alt=""></div>
                        <div class="li-l fl">
                            <h4>境外优惠卡</h4>
                            <p>积分兑换唯品币</p>
                            <p>十元享美食、看大片</p>
                        </div>
                        <div class="li-r fr">
                            <a href="javaScript:;">立即申请</a>
                        </div>
                    </li> -->
                    <li v-for="(val,index) in creditNumbe" :key="index" @click="tapCard(val.categoryId)">
                        <div class="li-img fl"><img :src="imgUrl()+val.cover" alt=""></div>
                        <div class="li-l fl">
                            <h4>{{val.name}}</h4>
                            <p>111111</p>
                        </div>
                        <div class="li-r fr">
                            <a href="javaScript:;">立即申请</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
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

<script >
import { log } from 'util';
export default {
  name: 'app',
  data () {
    return {
      // 银行卡id
      bankId:{},

      // 银行发送
      bankHair:{
            pageNum:1,
            pageSize:9
        },
      // 银行卡收
      bankCollect:[],
        // 信用卡发送数据
      creditNum:{},
      // 信用卡申请数量
      banArr:{},
      // 信用卡数据   
      creditNumbe:[]                                                   
    }
  },
  created(){
    },
  mounted () {
    this.banInf()
    this.creditNumber()
    this.addA()
  },
  methods: {
     retun () {
      this.$router.go(-1)
    },
        // 信用卡详情
    tapCard (id) {
      // console.log(id);
      
      this.$router.push({ 
                path: '/card',
                 query:{id: id }
                 })
    },
    // 申请数量
    banInf(){
      this.bankId={bankId:this.$route.query.id};
      this.$http.post('/card/cardCount',this.bankId)
      .then((res)=>{
         this.banArr = res.data.data
        //  console.log(this.banArr);
      })
    },
   // 信用卡
    creditNumber(){
      this.creditNum={pageNum:1,pageSize:6,bankId:this.$route.query.id}
      this.$http.post('/card/cardList',this.creditNum)
      .then((res)=>{
          this.creditNumbe=res.data.data.cardList.records
          console.log(this.creditNumbe);
      })
      // this.creditId={productId:this.$route.query.id};
      // this.$http.post('/card/cardDetail',this.creditId)
      // .then((res)=>{
      //   this.creditNum=res.data.data
      //   console.log(this.creditNum);
      // })
    },
    // 信用卡头部银行卡
    addA(){
      var newsID=this.$route.query.id;
      this.$http.post('/card/bankList',this.bankHair)
      .then((res)=>{
        this.banArr=res.data.data.records
        for(var i=0; i<this.banArr.length;i++){
          if(this.banArr[i].id===newsID){
            this.bankCollect=this.banArr[i]
          }
        }
      })
    },
  }
}
</script>

<style scoped>
/* 底 */
.credFoot{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background-color: #e6e9f0;
}
.credFoot img{
    width: 0.14rem;
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

.centre {
  width: 7.5rem;
  height: 100%;
  padding-top: 0.2rem;
}
.centre .content {
  width: 7.2rem;
  height: 6.4rem;
  margin: 0.3rem auto 0;
}
.centre .header {
  box-sizing: border-box;
  width: 7.2rem;
  height: 1.5rem;
  background-color: #fff;
  padding-left: 0.44rem;
  border-radius: 0.2rem;
}
.centre .header .header-img {
  height: 1.5rem;
  background-image: none;
  line-height: 1.5rem;
}
.centre .header .header-img img {
  width: 1.55rem;
}
.centre .header .header-l {
  margin-top: 0.36rem;
  margin-left: 0.3rem;
}
.centre .header .header-l h4 {
  font-size: 0.3rem;
  font-weight: normal;
}
.centre .header .header-l .state {
  font-size: 0.26rem;
  color: #666666;
}
.centre .con {
  box-sizing: border-box;
  margin-top: 0.3rem;
}
.centre .con li {
  position: relative;
  box-sizing: border-box;
  width: 7.2rem;
  height: 2.2rem;
  background-color: #fff;
  margin-bottom: 0.3rem;
  border-radius: 0.2rem;
  padding: 0.35rem 0.25rem;
}
.centre .con li .li-img {
  width: 2.3rem;
  margin-right: 0.2rem;
}
.centre .con li .li-img img {
  width: 2.3rem;
  height: 1.46rem;
}
.centre .con li .li-l h4 {
  font-size: 0.32rem;
  font-weight: normal;
  margin-bottom: 0.36rem;
}
.centre .con li .li-l p {
  font-size: .23rem;
  color: #999999;
}
.centre .con li .li-r {
  position: absolute;
  right: 0.35rem;
  bottom: 0.25rem;
  width: 1.3rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: #f4a12b;
  border-radius: 0.3rem;
}
.centre .con li .li-r a {
  font-size: 0.24rem;
  color: #fff;
}

</style>
