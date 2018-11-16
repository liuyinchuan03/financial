<template>
    <div>
                <div class="title2">
            <ul>
                <li><a @click="title11" :style="title1">待确认</a></li>
                <li><a @click="title22" :style="title2">已完成</a></li>
                <li><a @click="title33" :style="title3">未通过</a></li>
                <li><a @click="title44" :style="title4">客户订单</a></li>
            </ul>
        </div>
        <!-- 主题 -->
        <!-- theme active -->
        <div :class="theme">
            <ul>
                <li>
                    <div class="card-l fl"><img src="../../assets/images/2首页_35.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>尊享e生旗舰版</h4>
                        <div class="card-c-name">
                            <div class="card-c-name-l fl">申请人:</div>
                            <div class="card-c-name-r fl">赵**</div>
                        </div>
                        <div class="card-c-number">
                            <div class="card-c-name-l fl">订单编号：</div>
                            <div class="card-c-name-r fl">123456</div>
                        </div>
                        <div class="card-c-moblie">
                            <div class="card-c-name-l fl">手机号：</div>
                            <div class="card-c-name-r fl">138****6666</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 客户订单 -->

        <div :class="client">
            <h6>2018年10月</h6>
            <ul>
                <li>
                    <div class="card-l fl"><img src="../../assets/images/2首页_35.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>尊享e生旗舰版</h4>
                        <div class="card-time">
                            <div class="card-h">个人综合意外险</div>
                            <div class="card-apply">
                                <i>申请时间:</i>
                                <span>2018-10-15  15:10</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      title1: 'color:#f4802b; border-bottom:0.02rem solid #f4802b',
      title2: '',
      title3: '',
      title4: '',
      client: 'client active',
      theme: 'theme'
    }
  },
  methods: {
    title11: function () {
      this.title1 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.title2 = ''
      this.title3 = ''
      this.title4 = ''
      this.theme = 'theme'
      this.client = 'client active'
    },
    title22: function () {
      this.title1 = ''
      this.title2 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.title3 = ''
      this.title4 = ''
    },
    title33: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.title4 = ''
    },
    title44: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = ''
      this.title4 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.theme = 'theme active'
      this.client = 'client'
    }
  }
}
</script>
<style scoped>
a{
        color: #999;
}
.title2 {
  width: 7.1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #fff;
  margin: 0 auto;
}
.title2 li {
  position: relative;
  float: left;
  width: 1.7rem;
  font-size: 0.24rem;
  border-bottom: 0.02rem solid #fff;
}
.title2 li a {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0.8rem;
}
.title2-tap {
  color: #333;
  font-weight: 700;
  border-bottom: 0.02rem solid #333;
}
.theme {
        width: 7.1rem;
    margin: 0 auto;
  margin-top: 0.2rem;
}
.theme li {
      -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 7.1rem;
    /* height: 1.8rem; */
    background-color: #fff;
    margin-bottom: 0.1rem;
    padding: 0.3rem 0.35rem;
    overflow: hidden;
}
.theme li .card-l {
  margin-right: 0.35rem;
}
.theme li .card-l img {
  width: 1.8rem;
}
.theme li .card-c {
  height: 1rem;
}
.theme li .card-c h4 {
  font-size: 0.28rem;
  font-weight: normal;
}
.theme li .card-c .card-c-name,
.theme li .card-c .card-c-number,
.theme li .card-c .card-c-moblie {
  overflow: hidden;
  width: 100%;
  height: 0.3rem;
  font-size: 0.22rem;
  color: #999999;
}
.theme li .card-c .card-c-name .card-c-name-l,
.theme li .card-c .card-c-number .card-c-name-l,
.theme li .card-c .card-c-moblie .card-c-name-l {
  margin-right: 0.1rem;
}
.active {
  display: none;
}
.client {
        width: 7.1rem;
    margin: 0 auto;
  margin-top: 0.2rem;
}
.client h6 {
  font-size: 0.24rem;
  color: #f4802b;
  font-weight: normal;
  margin-bottom: 0.1rem;
}
.client li {
  box-sizing: border-box;
  width: 7.1rem;
  height: 1.8rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  padding: 0.3rem 0.35rem;
}
.client li .card-l {
  margin-right: 0.35rem;
}
.client li .card-l img {
  width: 1.8rem;
}
.client li .card-c {
  height: 1rem;
}
.client li .card-c h4 {
  font-weight: normal;
  font-size: 0.28rem;
}
.client li .card-c .card-h {
  font-size: 0.24rem;
  color: #999;
  margin-top: 0.2rem;
}
.client li .card-c .card-apply {
  font-size: 0.24rem;
  color: #999;
}
.actives{
    color: #f4802b
}
</style>
