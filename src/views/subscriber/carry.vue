<template>
    <div>
        <div class="centre">
        <!-- 提现 -->
        <div class="content">
            <!-- 提现金额 -->
            <div class="money">
                <div class="rmb fl">¥</div>
                <input type="text" placeholder="最高提现5000">
            </div>
        </div>
        <!-- 操作 -->
        <div class="handle">
            <div class="handle-h">
                <a >
                    <!-- handle-h1 handle-color fl -->
                    <div :class="handleh1" @click="weChat">微信提现</div>
                </a>
                <i class="fl">|</i>
                <a >
                    <!-- handle-h2 fl -->
                    <div :class="handleh2" @click="bankChat">银行卡提现</div>
                </a>
            </div>
            <!-- 银行卡提现 -->
            <!-- handle-con active -->
            <div :class="handlecon">
                <!-- 表格内容 -->
                <form action="">
                    <ul>
                        <li class="name ov">
                            <div class="name1 fl">开户名:</div>
                            <i class="fl">古月娜</i>
                        </li>
                        <li class="bank ov">
                            <div class="bank1 fl">银行:</div>
                            <select name="" id="" class="fl bank2" style="outline:none" >
                                <option value="">中国银行</option>
                                <option value="">农业银行</option>
                            </select>
                        </li>
                        <li class="get ov">
                            <div class="get1 fl">银行卡号:</div>
                            <input type="text" class="fl">
                        </li>
                        <li class="moblie ov">
                            <div class="moblie1 fl">手机号:</div>
                            <div class="moblie2 fl">134256261</div>
                        </li>
                        <li class="verify ov">
                            <div class="verify1 fl">验证码</div>
                            <input type="text" placeholder="验证码" class="fl">
                            <div class="verify2 fl"><a href="#">获得验证码</a></div>
                        </li>
                    </ul>
                </form>
            </div>
            <!-- 微信提现 -->
            <!-- handle-vx -->
            <div :class="handlevx">
                <ul>
                    <li><i>微信号:</i><span>VIP66</span></li>
                    <li><i>手机号:</i><span>1352566665</span></li>
                    <li><i>验证码:</i><input type="text" value="验证码"><em>获得验证码</em></li>
                </ul>
            </div>
        </div>
        <!-- 注意事项 -->
        <div class="notice">
            <h4>注意事项</h4>
            <p>1.注意事项</p>
            <p>2.注意事项注意事项注意事项注意事项</p>
        </div>
        <!-- 确认按钮 -->
        <div class="foot">
            <div class="button">确认提现</div>
            <p>预计2-3个工作日到账</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      handleh1: 'handle-h1 handle-color fl',
      handleh2: 'handle-h2 fl',
      handlecon: 'handle-con active',
      handlevx: 'handle-vx'
    }
  },
  methods: {
    retun: function () {
      this.$router.go(-1)
    },
    weChat: function () {
      this.handleh1 = 'handle-h1 handle-color fl'
      this.handleh2 = 'handle-h2 fl'
      this.handlecon = 'handle-con active'
      this.handlevx = 'handle-vx'
    },
    bankChat: function () {
      this.handleh1 = 'handle-h1 fl'
      this.handleh2 = 'handle-h2 handle-color fl'
      this.handlecon = 'handle-con'
      this.handlevx = 'handle-vx active'
    }
  }
}
</script>
<style scoped>
.centre {
    width: 7.5rem;
    margin-bottom: 1rem;
}

.content {
    width: 7.1rem;
    margin: 0 auto;
    margin-top: .2rem;
}

.money {
    box-sizing: border-box;
    width: 7.1rem;
    height: 0.94rem;
    line-height: 0.94rem;
    background-color: #fff;
    font-size: 0.5rem;
    padding-left: 0.2rem;
}

.money input {
    box-sizing: border-box;
    font-size: 0.3rem;
    vertical-align: text-bottom;
    height: 100%;
    padding-left: 0.2rem;
    font-size: 0.26rem;
    color: #999999;
}

.ov {
    overflow: hidden;
}

.handle {
    width: 7.1rem;
    margin: 0 auto;
    margin-top: .2rem;
    background-color: #fff;
}

.handle i {
    font-size: 0.22rem;
    color: #e8e8e8;
}

.handle-h {
    overflow: hidden;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 0 0.2rem;
    border-bottom: 0.01rem solid #e8e8e8;
    padding: .1rem 0;
}

.handle-h1,
.handle-h2 {
    width: 3.2rem;
    text-align: center;
    font-size: 0.26rem;
}

.handle-h1 a,
.handle-h2 a {
    color: #999;
}

.handle-color {
    color: #f4a12b;
}

.name1,
.get1,
.moblie1,
.bank1,
.verify1 {
    width: 2.2rem;
    text-align: right;
    margin-right: 0.2rem;
}

.name i {
    color: #999;
    font-size: 0.28rem;
}

.handle-con {
    padding: 0.1rem 0;
}

.handle-con li {
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.28rem;
    margin: 0.05rem 0;
}

.bank .bank2 {
    width: 3.5rem;
    height: 0.5rem;
    border: 0.01rem solid #e8e8e8;
    font-size: 0.28rem;
    color: #999;
    padding: 0 0.2rem;
    border-radius: 0.1rem;
    appearance:none;
}

.bank .bank2 option {
    display: inline-block;
    box-sizing: border-box;
}

.get input {
    box-sizing: border-box;
    width: 3.5rem;
    height: 0.5rem;
    border: 0.01rem solid #e8e8e8;
    font-size: 0.28rem;
    color: #999;
    padding: 0 0.2rem;
    border-radius: 0.1rem;
}

.moblie2 {
    font-size: 0.28rem;
    color: #999;
}

.moblie input,
.verify input {
    box-sizing: border-box;
    width: 3.5rem;
    height: 0.5rem;
    color: #999;
    padding: 0 0.2rem;
}

.verify input {
    width: 1.8rem;
    height: 0.56rem;
    border: 0.01rem solid #e8e8e8;
    font-size: 0.28rem;
}

.verify .verify2 {
    width: 1.6rem;
    height: 0.56rem;
    line-height: 0.56rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 0.1rem;
    margin-left: 0.1rem;
}

.verify .verify2 a {
    color: #fff;
    font-size: 0.24rem;
}

.notice {
    width: 7.1rem;
    margin: 0 auto;
    margin-top: .2rem;
}

.notice h4 {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    font-weight: normal;
}

.notice p {
    color: #929292;
    font-size: 0.24rem;
}

.foot {
    height: 1.3rem;
    text-align: center;
    margin-top: 1.2rem;
}

.foot .button {
    text-align: center;
    margin: 0 auto;
    width: 4.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #f4a12b;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    color: #fff;
}

.foot p {
    color: #999999;
    font-size: 0.24rem;
}

.active {
    display: none;
}

.handle-vx {
    box-sizing: border-box;
    height: 2.2rem;
    background-color: #fff;
    padding-top: 0.3rem;
}

.handle-vx li {
    height: 0.54rem;
}

.handle-vx li i {
    display: inline-block;
    width: 1.8rem;
    height: 0.54rem;
    text-align: right;
    padding-right: 0.2rem;
    color: #333;
}

.handle-vx li span {
    color: #999999;
    font-size: 0.28rem;
}

.handle-vx li input {
    box-sizing: border-box;
    width: 1.8rem;
    height: 0.53rem;
    border: 0.01rem solid #b8b8b8;
    border-radius: 0.05rem;
    padding: 0 0.2rem;
    vertical-align: top;
    color: #b8b8b8;
    font-size: 0.24rem;
}

.handle-vx li em {
    display: inline-block;
    width: 1.6rem;
    height: 0.54rem;
    line-height: 0.54rem;
    text-align: center;
    background-color: #f4a12b;
    color: #fff;
    font-size: 0.24rem;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
}

</style>
