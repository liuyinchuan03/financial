<template>
    <div>
        <!-- 信用卡-待确认  -->
        <div class="level">
            <ul>
                <li><a @click="title11" :style="title1">待确认</a></li>
                <li><a @click="title22" :style="title2">带再查</a></li>
                <li><a @click="title33" :style="title3">待审核</a></li>
                <li><a @click="title44" :style="title4">已完成</a></li>
                <li><a @click="title55" :style="title5">未通过</a></li>
                <li><a @click="title66" :style="title6">客户订单</a></li>
                <li><a @click="title77" :style="title7">回收站</a></li>
            </ul>
        </div>
        <!-- 卡信息 待确认 -->

        <div :class="card">
            <ul @click="noOrder">
                <li>
                    <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_03.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>农业银行信用卡</h4>
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
                    <div class="affirm fr">
                        <div class="affirm-top"> <a href="#">移至已完成</a></div>
                        <div class="affirm-bottom"> <a href="#">移至未通过</a></div>
                    </div>
                </li>
                <li>
                    <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_06.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>农业银行信用卡</h4>
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
                    <div class="affirm fr">
                        <div class="affirm-top"> <a href="#">移至已完成</a></div>
                        <div class="affirm-bottom"> <a href="#">移至未通过</a></div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 卡信息-待审核 -->
        <!-- examine disno -->
        <div :class="examine">
            <ul @click="noOrder">
                <li>
                    <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_03.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>农业银行信用卡</h4>
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
                    <div class="affirm fr">
                        <a href="JavaScript:;">移至回收站</a>
                    </div>
                </li>
                <li>
                    <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_06.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>农业银行信用卡</h4>
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
                    <div class="affirm fr">
                        <a href="JavaScript:;">移至回收站</a>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 客户订单 -->
        <!-- order disno -->
        <div :class="order">
            <ul>
                <li>
                    <div class="date">2018年10月</div>
                    <div class="card">
                        <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_03.png" alt=""></div>
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
                    </div>
                </li>
                <li>
                    <div class="date">2018年10月</div>
                    <div class="card">
                        <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_06.png" alt=""></div>
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
      title5: '',
      title6: '',
      title7: '',
      card: 'card',
      examine: 'examine disno',
      order: 'order disno'
    }
  },
  methods: {
    title11: function () {
      this.title1 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b; border-bottom:0.02rem solid #f4802b'
      this.title2 = ''
      this.title3 = ''
      this.title4 = ''
      this.title5 = ''
      this.title6 = ''
      this.title7 = ''
      this.card = 'card'
      this.examine = 'examine disno'
      this.order = 'order disno'
    },
    title22: function () {
      this.title1 = ''
      this.title2 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b; border-bottom:0.02rem solid #f4802b'
      this.title3 = ''
      this.title4 = ''
      this.title5 = ''
      this.title6 = ''
      this.title7 = ''
    },
    title33: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b; border-bottom:0.02rem solid #f4802b'
      this.title4 = ''
      this.title5 = ''
      this.title6 = ''
      this.title7 = ''
      this.card = 'card disno'
      this.examine = 'examine '
      this.order = 'order disno'
    },
    title44: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = ''
      this.title4 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
    },
    title55: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = ''
      this.title4 = ''
      this.title5 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.title6 = ''
      this.title7 = ''
    },
    title66: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = ''
      this.title4 = ''
      this.title5 = ''
      this.title6 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.title7 = ''
      this.card = 'card disno'
      this.examine = 'examine disno'
      this.order = 'order '
    },
    title77: function () {
      this.title1 = ''
      this.title2 = ''
      this.title3 = ''
      this.title4 = ''
      this.title5 = ''
      this.title6 = ''
      this.title7 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
    },
    noOrder: function () {
      this.$router.push('/noOrder')
    }
  }
}

</script>
<style scoped>
.card,.examine,.order{
    margin-bottom: 1.2rem;
}

.level {
    width: 7.1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #fff;
     margin: 0 auto;
}

.level li {
    float: left;
    width: 1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
        text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.level li a {
    box-sizing: border-box;
    display: inline-block;
    font-size: 0.24rem;
    color: #999999;
    height: 100%;
    border-bottom: 0.05rem solid #fff;
}

.card {
    width: 7.1rem;
     margin: 0 auto;
    margin-top: 0.2rem;
}

.card li {
    box-sizing: border-box;
    width: 7.1rem;
    height: 1.8rem;
    background-color: #fff;
    margin-bottom: 0.3rem;
    padding: 0.3rem 0.35rem;
}

.card li .card-l {
    margin-right: 0.35rem;
}

.card li .card-l img {
    width: 1rem;
}

.card li .card-c {
    height: 1rem;
}

.card li .card-c h4 {
    font-size: 0.28rem;
}

.card li .card-c .card-c-name,
.card li .card-c .card-c-number,
.card li .card-c .card-c-moblie {
    overflow: hidden;
    width: 100%;
    height: 0.3rem;
    font-size: 0.22rem;
    color: #999999;
}

.card li .card-c .card-c-name .card-c-name-l,
.card li .card-c .card-c-number .card-c-name-l,
.card li .card-c .card-c-moblie .card-c-name-l {
    margin-right: 0.1rem;
}

.card li .affirm .affirm-top {
    width: 1.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 0.1rem;
    margin-bottom: 0.2rem;
}

.card li .affirm .affirm-top a {
    font-size: 0.24rem;
    color: #fff;
}

.card li .affirm .affirm-bottom {
    width: 1.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.24rem;
    background-color: #fff;
    border-radius: 0.1rem;
    border: 0.01rem solid #f4a12b;
}

.card li .affirm .affirm-bottom a {
    font-size: 0.24rem;
    color: #f4a12b;
}

.examine {
    width: 7.1rem;
    margin: 0 auto;
    margin-top: 0.2rem;
}

.examine li {
    box-sizing: border-box;
    width: 7.1rem;
    height: 1.8rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
    padding: 0.3rem 0.35rem;
}

.examine li .card-l {
    margin-right: 0.35rem;
}

.examine li .card-l img {
    width: 1rem;
}

.examine li .card-c {
    height: 1rem;
}

.examine li .card-c h4 {
    font-size: 0.28rem;
}

.examine li .card-c .card-c-name,
.examine li .card-c .card-c-number,
.examine li .card-c .card-c-moblie {
    overflow: hidden;
    width: 100%;
    height: 0.3rem;
    font-size: 0.22rem;
    color: #999999;
}

.examine li .card-c .card-c-name .card-c-name-l,
.examine li .card-c .card-c-number .card-c-name-l,
.examine li .card-c .card-c-moblie .card-c-name-l {
    margin-right: 0.1rem;
}

.examine li .affirm {
    margin-top: 0.3rem;
    width: 1.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.24rem;
    background-color: #fff;
    border-radius: 0.1rem;
    border: 0.01rem solid #f4a12b;
}

.examine li .affirm a {
    font-size: 0.24rem;
    color: #f4a12b;
}
.order{
    box-sizing: border-box;
    width: 7.1rem;
    margin:0 auto;
}
.order li {
    box-sizing: border-box;
    width: 7.1rem;
    margin-top: 0.2rem;
}

.order li .date {
    color: #f4802b;
    font-size: 0.24rem;
}

.order li .card {
    box-sizing: border-box;
    width: 7.1rem;
    height: 2rem;
    background-color: #fff;
    padding: 0.3rem 0.35rem 0;
}

.order li .card .card-l {
    margin-right: 0.35rem;
}

.order li .card .card-l img {
    width: 1rem;
}

.order li .card .card-c {
    height: 1rem;
}

.order li .card .card-c h4 {
    font-weight: normal;
    font-size: 0.28rem;
}

.order li .card .card-c .card-h {
    font-size: 0.24rem;
    color: #999;
    margin-top: 0.2rem;
}

.order li .card .card-c .card-apply {
    font-size: 0.24rem;
    color: #999;
}
.disno{
    display: none;
}
.colors {
    color: #f4802b;
}

</style>
