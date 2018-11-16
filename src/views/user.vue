<template>
  <div>
      <div class="centre">
        <!-- 头部 -->
        <div class="header">
            <div class="name">
                <div class="name-img">
                    <router-link to="/message" tag="a"><img src="../assets/images/2用户中心_06.png" alt=""></router-link>
                </div>
                <div class="name-wx">
                    <h4>微信昵称</h4>
                    <p>UID:123456</p>
                </div>
            </div>
            <div class="plan">
                <div class="plan-x"></div>
                <div class="plan-peo">
                    <ul>
                        <li>
                                <div class="circle">
                                    <div class="circle-n"></div>
                                </div>
                                <p>初级合伙人</p>
                        </li>
                        <li>
                                <div class="circle">
                                    <div class="circle-n"></div>
                                </div>
                                <p>中级合伙人</p>
                        </li>
                        <li>
                                <div class="circle">
                                    <div class="circle-n"></div>
                                </div>
                                <p>高级合伙人</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="count">
                <ul>
                    <li>
                        <div class="count-s">累计收入</div>
                        <div class="count-y">¥7.23</div>
                    </li>
                    <li>
                        <div class="count-s">已结算</div>
                        <div class="count-y">¥0.00</div>
                    </li>
                    <li>
                        <div class="count-s">可结算</div>
                        <div class="count-y">¥0.00</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 订单 -->
        <div class="indent">
            <ul>
                <li @click="order">
                    <a>
                        <img src="../assets/images/2用户中心_11.png" alt="">
                        <p>订单明细</p>
                    </a>
                </li>

                <li @click="customer">
                    <a>
                        <img src="../assets/images/2用户中心_13.png" alt="">
                        <p>客户管理</p>
                    </a>
                </li>

                <li @click="carry">
                    <a>
                        <img src="../assets/images/2用户中心_15.png" alt="">
                        <p>我要提现</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../assets/images/2用户中心_17.png" alt="">
                        <p>卡惠商城</p>
                    </a>
                </li>
                <li @click="extension">
                    <a>
                        <img src="../assets/images/2用户中心_23.png" alt="">
                        <p>推广费用</p>
                    </a>
                </li>
                <li @click="subCard">
                    <a>
                        <img src="../assets/images/2用户中心_24.png" alt="">
                        <p>分销机制</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 通知 -->
        <div class="inform">
            <ul>
                <li @click="system">
                    <a>
                        <img src="../assets/images/2用户中心_28.png" alt="">
                        <p>消息通知</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../assets/images/2用户中心_29.png" alt="">
                        <p>邀请好友</p>
                    </a>
                </li>
                <li @click="createCardT">
                    <a href="javascript:;">
                        <img src="../assets/images/2用户中心_30.png" alt="">
                        <p>推荐办卡须知</p>
                    </a>
                </li>
                <li @click="help">
                    <a href="javascript:;">
                        <img src="../assets/images/2用户中心_31.png" alt="">
                        <p>帮助中心</p>
                    </a>
                </li>
            </ul>
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
            <router-link tag="li" to="/safe">
                <img src="../assets/images/保险1.png" alt="">
                <span>保险</span>
            </router-link>
            <router-link tag="li" to="/user" style="color:#ffc250">
                <img src="../assets/images/用户中心2.png" alt="">
                <span>用户中心</span>
            </router-link>
            </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createCardT: function () {
      this.$router.push('/createCard')
    },
    order: function () {
      this.$router.push('/orderHead/orderDetails')
    },
    customer: function () {
      this.$router.push('/customer')
    },
    system: function () {
      this.$router.push('/foot/system')
    },
    extension: function () {
      this.$router.push('/foot/extension')
    },
    help: function () {
      this.$router.push('/foot/help')
    },
    subCard: function () {
      this.$router.push('/foot/subCard')
    },
    carry: function () {
      this.$router.push('/foot/carry')
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

.centre {
    width: 7.1rem;
    margin: 0.2rem 0.2rem;
    text-align: center;
    background: none;
}

.indent {
    width: 7.1rem;
    height: 4.5rem;
    background-color: #fff;
    margin-top: 0.2rem;
    padding-top: 0.2rem;
}

.indent li {
    text-align: center;
    float: left;
    width: 1.1rem;
    height: 1.6rem;
    margin: .2rem .3rem;
}

.indent img,
.inform img {
    width: 1rem;
}

.indent li p {
    color: #333;
    text-align: center;
    margin: 0.2rem 0;
    font-size: 0.26rem;
    color: #b6b6b6;
}
.footer li:nth-child(2) img {
    width: 0.5rem;
}

.inform {
    width: 7.1rem;
    height: 2.2rem;
    background-color: #fff;
    margin-top: 0.2rem;
    padding-top: 0.2rem;
    margin-bottom: 1.2rem;
}

.inform li {
    text-align: center;
    float: left;
    width: 1.1rem;
    height: 1.6rem;
    margin: .2rem .3rem;
}

.inform li p {
    color: #333;
    text-align: center;
    margin: 0.2rem 0;
    font-size: 0.26rem;
    color: #b6b6b6;
}

/* 底 */

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

.header {
    position: relative;
    overflow: hidden;
    width: 7.1rem;
       height: 4.2rem;
    border-radius: 0.2rem;
    background-image: linear-gradient(135deg, #f4a12b, #f48d79);
}

.header .name {
    margin-top: 0.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
}

.name-wx {
    margin-left: 0.2rem;
    font-size: 0.28rem;
    color: #fff;
}

.name-img img {
    width: 0.93rem;
}

.name-wx h4 {
    font-weight: normal;
}

.name-wx p {
    font: 400 "SimSun";
}

.plan-x {
    width: 3.4rem;
    background-color: #fff;
    height: 0.02rem;
    margin: 0 auto;
}

.plan-peo {
    position: relative;
    width: 5rem;
    height: 1rem;
    margin: 0 auto;
}

.plan-peo ul {
    position: absolute;
    top: -0.12rem;
}

.plan-peo li {
    float: left;
    width: 1.66rem;
}
.plan-peo li:nth-child(1) {
    color:#fce6da;
}
.plan-peo li:nth-child(2) {
    color:#fff;
}
.plan-peo li:nth-child(3) {
    color:#fce6da;

}

.plan-peo li .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.36rem;
    width: 0.24rem;
    height: 0.24rem;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #fff;
}
.plan-peo li:nth-child(3) .circle-n {
    background-color: #e0ccc0;

}

.plan-peo li .circle-n {
    width: 0.12rem;
    height: 0.12rem;
    border-radius: 50%;
    background-color: #f4a12b;
}

.plan-peo li p {
    text-align: center;
    font-size: 0.24rem;
    margin-top: 0.1rem;
}

.count {
    padding-top: 0.2rem;
    position: absolute;
    bottom: 0;
    width: 7.1rem;
    height: 1.08rem;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.3);
}

.count li {
    float: left;
    width: 2.3rem;
    text-align: center;
}

.count .count-s {
    font-size: 0.24rem;
    color: #fff;
}

.count .count-y {
    font-size: 0.28rem;
    color: #fff;
}
/* 底边字体颜色 */

.footer a{
    color: #999999;
}
.footer a:hover{
    color: #f17420;
}
</style>
