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
        <!-- 无数据 -->
        <!-- <div class="theme-null">暂无数据</div> -->
        <!-- 主题 -->
        <div class="theme">
            <ul :class="disno1">
                <li>
                    <a>
                        <div class="matter">
                            <div class="brand"><img src="../../assets/images/（P050）客户订单_06.png" alt="">拍拍贷</div>
                            <div class="matter-con">
                                <h4>10万</h4>
                                <i>申请人 : 赵**</i>
                                <p>编号 : 152161612</p>
                                <p>手机 : 152*****2</p>
                            </div>
                            <div class="affirm fr">
                                <!-- <a href="#"></a> -->
                                <div class="affirm-top"> <a >移至已完成</a></div>
                                <div class="affirm-bottom"> <a >移至未通过  </a></div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a >

                        <div class="matter">
                            <div class="brand"><img src="../../assets/images/（P050）客户订单_06.png" alt="">拍拍贷</div>
                            <div class="matter-con">
                                <h4>10万</h4>
                                <i>申请人 : 赵**</i>
                                <p>编号 : 152161612</p>
                                <p>手机 : 152*****2</p>
                            </div>
                            <div class="affirm fr">
                                <div class="affirm-top"> <a >移至已完成</a></div>
                                <div class="affirm-bottom"> <a >移至未通过</a></div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <ul :class="disno2">
                <li>
                    <a>
                        <div class="time">2018年9月</div>
                        <div class="matter">
                            <div class="brand"><img src="../../assets/images/（P050）客户订单_06.png" alt="">拍拍贷</div>
                            <div class="matter-con">
                                <h4>10万</h4>
                                <p>拍拍贷</p>
                                <p>申请时间：2018-10-15  15:16</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a >
                        <div class="time">2018年9月</div>
                        <div class="matter">
                            <div class="brand"><img src="../../assets/images/（P050）客户订单_06.png" alt="">拍拍贷</div>
                            <div class="matter-con">
                                <h4>10万</h4>
                                <p>拍拍贷</p>
                                <p>申请时间：2018-10-15  15:16</p>
                            </div>
                        </div>
                    </a>
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
      disno1: '',
      disno2: 'disno'
    }
  },
  methods: {
    title11: function () {
      this.title1 = 'color:#f4802b; border-bottom:0.02rem solid #f4802b'
      this.title2 = ''
      this.title3 = ''
      this.title4 = ''
      this.disno1 = ''
      this.disno2 = 'disno'
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
      this.disno1 = 'disno'
      this.disno2 = ''
    }
  }
}
</script>
<style scoped>
.disno{
  display: none;
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
  color: #999;
  width: 100%;
  height: 100%;
  text-align: center;
}
/* .title2 a:hover {
  color: #333;
}
.title2 a:hover {
  border-bottom: 0.02rem solid #333;
} */
.theme{
    width: 7.1rem;
     margin: 0 auto;
}
.theme li{
  margin-top: 0.2rem;
}
.theme .time {
  font-size: 0.24rem;
  color: #f4802b;
  margin: 0.1rem;
}
.theme-null {
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  background-color: #fff;
  margin-top: 0.2rem;
  font-size: 0.24rem;
  color: #999;
}
.matter {
     position: relative;
    /* height: 2.6rem; */
    background-color: #fff;
    padding:0  0.3rem 0.2rem;
}
.matter .matter-con {
  width: 3.5rem;
}
.matter-con {
  width: 3.2rem;
}
.brand {
  box-sizing: border-box;
  width: 6.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 0.01rem solid #f5f5f5;
  font-size: 0.24rem;
}
.brand img {
  width: 0.54rem;
  margin-right: 0.1rem;
}
.matter h4 {
  font-size: 0.3rem;
  margin: 0.1rem 0;
}
.matter i,
.matter p {
  font-size: 0.24rem;
  color: #999;
}
.affirm {
  position: absolute;
  right: 0.3rem;
  top: 1rem;
}
.affirm .affirm-top {
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: #f4a12b;
  border-radius: 0.1rem;
  margin-bottom: 0.2rem;
}
.affirm .affirm-top a {
  font-size: 0.24rem;
  color: #fff;
}
.affirm .affirm-bottom {
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.24rem;
  background-color: #fff;
  border-radius: 0.1rem;
  border: 0.01rem solid #f4a12b;
}
.affirm .affirm-bottom a {
  font-size: 0.24rem;
  color: #f4a12b;
}

</style>
