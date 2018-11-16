<template>
    <div>
        <div class="centre">
        <div class="cad" @click="cardActive">
            <a  :class="cadd" >卡惠</a>
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
        <router-view></router-view>
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
    height: 11.5rem;
    position: relative;
    background: url(../../assets/images/（P011）卡详情_02.png) no-repeat;
    -moz-background-size: 100%;
    background-size: 100%;
        margin-bottom: 0.5rem;
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
z
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
.centre .cad .wrong img{
    width: 0.37rem;
}

.hide {
    display: none;
}
</style>
