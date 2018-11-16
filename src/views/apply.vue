<template>
    <div>
         <div class="centre">
            <div class="content">
            <!-- 申请信息 -->
            <div class="info">
                <div class="info-x">申请人信息</div>
                <div class="name">
                    <div class="name-i fl">
                        <img src="@/assets/images/（P014）立即申请_03.png" alt="">
                    </div> 古月娜</div>
                <div class="phone">
                    <div class="phone-i fl"><img src="@/assets/images/（P014）立即申请_06.png" alt=""></div>
                    122151521</div>
                <div class="id">
                    <div class="id-i fl"><img src="@/assets/images/（P014）立即申请_09.png" alt=""></div> 1241455161661616</div>
                    <router-link class="read" tag="div" to="/agreement">
                        <a href="javascript:;"> <img src="@/assets/images/（P014）立即申请_13.png" alt=""> 我已认证阅读并同意《平台服务协议》</a>
                    </router-link>
            </div>
        </div>
        <div class="notice">
            <h4>注意事项</h4>
            <ul>
                <li>1、必须准确填写申请人真实个人信息</li>
                <li>2、收到办卡审核通知短信，2个工作日后查到进度并提示“等待工作人员审核”，将有机会获得现金奖励。</li>
                <li>3、在卡惠申请信用卡不收取任何费用，凡是索取均为欺诈，请不要相信</li>
                <li>平台监督举报电话: <i>010-13241521</i></li>
            </ul>
        </div>
        <!-- 下一步按钮 -->
        <div class="step" @click="confirmAct"><a href="JavaScript:;">下一步</a></div>
        <!-- 底部 -->
        <div class="credFoot">
            <router-link class="credFoot-l fl" tag="div" to="/credit">
                <span> &lt; </span>
            </router-link>
            <div class="credFoot-r fr">
                <span> &gt; </span>
            </div>
        </div>
    </div>
    <!-- 弹框 -->
    <!-- check disno -->
    <div :class="check">
        <div class="che-con">
            <div class="header">请仔细核实您的身份信息</div>
            <div class="tit">卡惠公众号申请信用卡完全免费，凡索取费用的均为欺诈行为，请不要相信！</div>
            <div class="c-name">
                <div class="name-i fl">
                    <img src="@/assets/images/（P014）立即申请_03.png" alt="">
                </div> 古月娜</div>
            <div class="c-phone">
                <div class="phone-i fl"><img src="@/assets/images/（P014）立即申请_06.png" alt=""></div>
                122151521</div>
            <div class="c-id">
                <div class="id-i fl"><img src="@/assets/images/（P014）立即申请_09.png" alt=""></div> 1241455161661616</div>
            <div class="footer"></div>
            <div class="affirm" @click="confirm"><a href="JavaScript:;">确认无误</a></div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      check: 'check disno'
    }
  },
  methods: {
    confirmAct: function () {
      if (this.check === 'check disno') {
        this.check = 'check'
      }
    },
    confirm: function () {
      this.$router.push('/orderHead/orderDetails')
    }
  }
}
</script>
<style  scoped>
/* 底 */
.credFoot{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background-color: #fff;
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
    margin-bottom: 1.2rem;
}

.content {
    width: 7.1rem;
    margin: 0 auto;
    margin-top: .2rem;
}

.info {
    width: 7.1rem;
    height: 3.6rem;
    background-color: #fff;
    font-size: 0.24rem;
    color: #7a7a7a;
}

.info-x {
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    color: #333;
    font-size: 0.32rem;
}

.name-i img,
.phone-i img {
    width: 0.26rem;
}

.id-i img {
    width: 0.45rem;
}

.name-i,
.phone-i,
.id-i {
    width: 0.5rem;
    text-align: center;
    margin: 0 0.2rem;
    font-size: 0.3rem;
    color: #555;
}

.name,
.phone,
.id {
    height: 0.6rem;
    margin: 0 0.5rem;
    font-size: 0.28rem;
}

.id {
    border-bottom: 0.01rem solid #f2f2f2;
}

.read {
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.26rem;
}

.read img {
    width: 0.3rem;
    margin-right: 0.1rem;
}

.notice {
    width: 7.1rem;
    height: 3.6rem;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 0.3rem;
}

.notice h4 {
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.32rem;
    font-weight: normal;
}

.notice li {
    margin: 0 0.2rem;
    font-size: 0.28rem;
    color: #666666;
}

.notice li i {
    color: #1878e7;
    margin-left: 0.05rem;
}

.step {
    width: 4.3rem;
    height: 0.8rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 1.2rem;
    line-height: 0.8rem;
    background-color: #f4a12b;
    border-radius: 0.2rem;
}

.step a {
    font-size: 0.3rem;
    color: #fff;
}

.check {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.3);
}

.check .che-con {
    width: 6.9rem;
    height: 5.4rem;
    background-color: #fff;
    margin: 2.2rem auto;
}

.check .che-con .header {
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.3rem;
}

.check .che-con .tit {
    width: 6.3rem;
    height: 0.8rem;
    margin: 0 auto;
    text-align: center;
    font-size: 0.28rem;
    color: #f5a738;
}

.check .che-con .c-name,
.check .che-con .c-phone,
.check .che-con .c-id {
    width: 5rem;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #282828;
}

.check .che-con .c-name {
    margin-top: 0.4rem;
}

.check .che-con .c-id {
    margin-bottom: 0.4rem;
}

.check .che-con .footer {
    width: 100%;
    height: 0.01rem;
    background-color: #f2f2f2;
}

.check .che-con .affirm {
    width: 4.3rem;
    height: 0.68rem;
    background-color: #f4a12b;
    line-height: 0.68rem;
    text-align: center;
    margin: 0.2rem auto 0;
    border-radius: 0.2rem;
}

.check .che-con .affirm a {
    font-size: 0.3rem;
    color: #fff;
}

.disno {
    display: none;
}
</style>
