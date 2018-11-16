<template>
    <div>
        <div class="centre">
        <div class="content">
            <ul>
                <li><i>申请人：</i><span>古月娜</span></li>
                <li><i>工号：</i><span>123456</span></li>
                <li><i>身份证号：</i><span>110102197810106666</span></li>
                <li><i>银行：</i><span>中国交通银行</span></li>
                <li><i>银行类型：</i><span>王者荣耀联名卡</span></li>
                <li><i>手机号：</i><span>13688886666</span></li>
                <li><i>状态：</i><span>已通过</span></li>
            </ul>
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
    height: 100%;
}

.centre .content {
    box-sizing: border-box;
    width: 6.9rem;
    /* height: 4.8rem; */
    background-color: #fff;
    margin: 1.2rem auto 0;
    padding: 0.44rem 0;
}

.centre .content li {
    height: 0.55rem;
    margin-bottom: 0.2rem;
}

.centre .content li i {
    display: inline-block;
    width: 1.8rem;
    font-size: 0.3rem;
    text-align: right;
    margin-right: 0.2rem;
}

.centre .content li span {
    color: #737373;
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
.wrong img{
    width: 0.37rem;
}
.hide {
    display: none;
}
</style>
