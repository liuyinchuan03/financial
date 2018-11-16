<template>
  <div>
    <div class="centre">
            <img class="centreimg" :src="imgUrl()+creditNum.cover" alt="">
        <div class="cad">
            <!-- @click="cardActive" -->
            <a  class="cad-k" @click="cardActive" >卡惠</a>
            <a href="javascript:;" :class="wrong"><img src="../assets/images/（P011_1）卡详情_11.png" alt=""></a>
            <ul :class="hides">
                <router-link tag="li" to="/">
                    <a href="javascript:;"><img src="../assets/images/（P011_1）卡详情_03.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/credit">
                    <a href="javascript:;"><img src="../assets/images/（P011_1）卡详情_06.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/loan">
                    <a href="javascript:;"><img src="../assets/images/22.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/safe">
                    <a href="javascript:;"><img src="../assets/images/（P011_1）卡详情_19.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/user">
                    <a href="javascript:;"><img src="../assets/images/（P011_1）卡详情_21.png" alt=""></a>
                </router-link>
            </ul>
        </div>
        <div class="apply">
            <ul>
                <li @click="extension"><a>我要推广</a></li>
                <router-link tag="li" to="/deuteronomy"><a >申请指南</a></router-link>
                <li><a>一键呼入</a></li>
                <router-link tag="li" to="/apply"><a >立即申请</a></router-link>
            </ul>
        </div>
    </div>
    <div :class="extensionDis">
        <div class="extension-con"><img :src="imgsrc" alt=""></div>
        <div class="extension-fot">
            <p>你可以选择长按推广海报发送至客户，或是复制以下推广链接给客户申请信用卡。</p>
            <div class="httper">
                <input type="text" value="https：//zb.ew1.cn/xinyongka/creditAppl">
                <div class="httperc chen fr">复制链接</div>
            </div>
            <div class="httpfot">
                <div class="httpfot-l chen fl">保存成图片</div>
                 <!-- @click="change" -->
                <div  @click="change" class="httpfot-r chen fr">换风格</div>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
import c1 from '../assets/images/c111.png'
import c2 from '../assets/images/c222.png'
import c3 from '../assets/images/c333.png'
import c4 from '../assets/images/c444.png'
import { throws } from 'assert'
export default {
  data () {
    return {
      hides: 'hide',
       cadd: 'cad-k',
      wrong: 'wrong hide',
      extensionDis: 'extension disno',
      imgsrc: c1,
      src1: [
        {txt: c1, index: 0},
        {txt: c2, index: 2},
        {txt: c3, index: 3},
        {txt: c4, index: 4}
      ],
      // 银行卡对应信用卡id
      creditId:{},
      //信用卡详情
      creditNum:{}
    }
  },
  mounted () {
    this.cardDetail()
  },
  methods: {
    cardActive: function () {
      if (this.hides == 'hide') {
        this.hides = ''
        this.cadd = 'cad-k hide'
        this.wrong = 'wrong'
      } else {
        this.hides = 'hide'
        this.cadd = 'cad-k'
        this.wrong = 'wrong hide'
      }
    },
    extension: function () {
      this.extensionDis = 'extension'
    },
    change: function () {
      var num = Math.floor(Math.random() * 4)
      this.imgsrc = this.src1[num].txt
    },
    cardDetail(){
         this.creditId={productId:this.$route.query.id};
         console.log(this.$route.query.id);
         
      this.$http.post('/card/cardDetail',this.creditId)
      .then((res)=>{
        this.creditNum=res.data.data
        console.log(this.creditNum);
      })
    }
  }
}
</script>

<style scoped>
.disno{
    display: none;
}
.centre {
    width: 7.5rem;
    height: 11.5rem;
    position: relative;
    /* background: url(../assets/images/（P011）卡详情_02.png) no-repeat; */
    /* -moz-background-size: 100%; */
    /* background-size: 100%; */
    margin-bottom: 0.5rem;
}
.centreimg{
    width: 100%;
    height: 100%;
}
.centre .cad {
    position: fixed;
    width: 0.9rem;
    height: 0.9rem;
    background-color: #f4a12b;
    border-radius: 50%;
    text-align: center;
    line-height: 0.9rem;
    right: 0.3rem;
    bottom: 2.3rem;
}

.centre .cad li {
    position: absolute;
    right: 0.3rem;
    bottom: 2rem;
    float: left;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 50%;
}

.centre .cad li img {
    width: 0.3rem;
}

.centre .cad li:nth-child(1) {
    right: 0.2rem;
    bottom: 1rem;
}

.centre .cad li:nth-child(2) {
    right: 0.8rem;
    bottom: 0.7rem;
}

.centre .cad li:nth-child(3) {
    right: 1rem;
    bottom: 0.14rem;
}

.centre .cad li:nth-child(4) {
    right: 0.8rem;
    bottom: -0.4rem;
}

.centre .cad li:nth-child(5) {
    right: 0.2rem;
    bottom: -0.6rem;
}

.centre .cad a {
    font-size: 0.3rem;
    color: #fff;
}

.centre .cad .wrong {
    position: relative;
    right: 0rem;
    bottom: 0.95rem;
    display: none;
}

.centre .apply {
    position: fixed;
    bottom: 0.7rem;
    left: 0.2rem;
    width: 7.1rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-radius: 0.2rem;
    background-color: #f4a12b;
    padding-left: 0.1rem;
}

.centre .apply li {
    width: 1.6rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    float: left;
}

.centre .apply li a {
    color: #fff;
    font-size: 0.3rem;
}

.centre .apply li:nth-child(4) {
    float: right;
    width: 1.8rem;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #fff;
    margin-right: 0.3rem;
    margin-top: 0.15rem;
    border-radius: 0.1rem;
}

.centre .apply li:nth-child(4) a {
    color: #f4a12b;
}

.hide {
    /* opacity: 0; */
    /* transition: all 0.5s linear; */
    display: none;
}
/* 弹框 */
html,
body {
    width: 100%;
    height: 100%;
}

.extension {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
}

.extension-con {
    position: fixed;
    top: 0;
    left: 1.25rem;
    width: 5rem;
    margin: 0.3rem auto;
}

.extension-con img {
    width: 5rem;
}

.chen {
    font-size: 0.3rem;
    color: #ffffff;
    background-color: #f4a12b;
    text-align: center;
    border-radius: 0.1rem;
    height: 0.7rem;
    line-height: 0.7rem;
}

.extension-fot {
    position: fixed;
    bottom: 0.5rem;
    overflow: hidden;
    width: 6.9rem;
    padding: 0 0.3rem;
    background-color: #fff;
    padding-bottom: 0.2rem;
}

.extension-fot p {
    font-size: 0.28rem;
    margin-top: 0.2rem;
}

.httper {
    overflow: hidden;
    margin: 0.1rem auto;
}

.httper input {
    font-size: 0.24rem;
    width: 4.9rem;
    height: 0.7rem;
    line-height: 0.7rem;
    box-sizing: border-box;
    padding: 0 0.2rem;
    border: 0.01rem solid #a6a6a6;
    border-radius: 0.1rem;
    color: #a6a6a6;
}

.httper .httperc,
.httpfot .httpfot-r {
    width: 1.7rem;
    height: 0.7rem;
}

.httpfot .httpfot-l {
    width: 4.9rem;
    height: 0.7rem;
}
</style>
