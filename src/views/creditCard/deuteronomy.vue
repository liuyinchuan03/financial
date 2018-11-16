<template>
    <div>
        <div class="centre">
            <div class="header">
                <a href="#">招商银行信用卡办理流程</a>
            </div>
            <div class="cad" @click="cardActive">
            <a href="javaScript:;" :class="cadd" >卡惠</a>
            <a href="javascript:;" :class="wrong"><img src="../../assets/images/（P011_1）卡详情_11.png" alt=""></a>
            <ul :class="hides">
                <router-link tag="li" to="/">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_03.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/credit">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_06.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/loan">
                    <a href="javascript:;"><img src="../../assets/images/22.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/safe">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_19.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/user">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_21.png" alt=""></a>
                </router-link>
            </ul>
        </div>
            <div class="apply">
                <a>查看视频教程</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      hides: 'hide',
      cadd: 'cad-k',
      wrong: 'wrong hide'
    }
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
    }
  }
}
</script>
<style scoped>
.centre {
    width: 7.5rem;
    height: 11.8rem;
  position: relative;
  overflow: hidden;
  background: url(../../assets/images/（P011）卡详情_02.png) no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  margin-bottom: 0.5rem;
}
.centre .header {
  width: 7.1rem;
  height: 0.9rem;
  line-height: 0.9rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  text-align: center;
  background-color: #f4a12b;
  border-radius: 0.2rem;
}
.centre .header a {
  color: #fff;
  font-size: 0.3rem;
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
    bottom: 1.9rem;
}
.wrong img{
    width: 0.37rem;
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
    bottom: 0.01rem;
}

.hide {
    display: none;
}
.apply {
   position: absolute;
  bottom: 0.1rem;
  left: 1.2rem;
  width: 4.9rem;
  height: 0.9rem;
  text-align: center;
  margin: 0 auto;
  line-height: 0.9rem;
  border-radius: 0.2rem;
  background-color: #f4a12b;
  padding-left: 0.1rem;
}
 .apply a {
  font-size: 0.3rem;
  color: #fff;
}

</style>
