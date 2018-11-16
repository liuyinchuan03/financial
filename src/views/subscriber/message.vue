<template>
    <div>
        <div class="centre">
            <div class="name">
                <div class="name-l fl">
                    <img src="../../assets/images/（P045）我的_03.png" alt="">
                </div>
                <div class="name-con fl">我是昵称</div>
                <router-link tag="div" class="name-r fr" to="/alter"><a href="javascript:;">修改</a></router-link>
            </div>
            <div class="service">
                <div class="name-l fl">
                    <img src="../../assets/images/（P045）我的_03 (2).png" alt="">
                </div>
                <div class="name-con fl">联系客服</div>
            </div>
                 <div class="return" @click="feedbackt">
                    <a href="javascript:;">
                        <div class="name-l fl">
                        <img src="../../assets/images/（P045）我的_06.png" alt="">
                    </div>
                    <div class="name-con fl">意见反馈</div>
                    <div class="name-r fr">
                        <a href="#"><img src="../../assets/images/（P045）我的_08.png" alt=""></a>
                    </div>
                    </a>
                 </div>
            <a href="javascript:;">
                <div class="we" @click="aboutUst">
                    <div class="name-l fl">
                        <img src="../../assets/images/（P045）我的_12.png" alt="">
                    </div>
                    <div class="name-con fl">关于我们</div>
                    <div class="name-r fr">
                        <a href="javascript:;"><img src="../../assets/images/（P045）我的_08.png" alt=""></a>
                    </div>
                </div>
            </a>
            <router-link tag="div" class="exit" to="/sign"><a>退出登录</a></router-link>
        </div>
        <!-- 底部 -->
        <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> &lt; </span>
            </div>
            <div class="credFoot-r fr">
                <span> &gt; </span>
            </div>
        </div>
    </div>
</template>
<script>
// import { MessageBox } from 'mint-ui'
export default {

  methods: {
    retun: function () {
      this.$router.go(-1)
    },
    aboutUst: function () {
      this.$router.push('/aboutUs')
    },
    feedbackt: function () {
      this.$router.push('/feedback')
    }
  }
}
</script>
<style scoped>
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
  box-sizing: border-box;
  width: 7.5rem;
  height: 4rem;
  margin: 0.2rem 0;
  padding: 0.2rem 0.2rem;
  background-color: #fff;
  padding-bottom:1rem;
}
.name,
.service,
.return {
  height: 0.94rem;
  border-bottom: 0.01rem solid #f2f2f2;
}
.name .name-r a:hover {
  color: #333;
}
.we {
  height: 0.94rem;
}
.name,
.service,
.return,
.we {
  line-height: 0.94rem;
}
.name .name-r {
  font-size: 0.28rem;
}
.name-con {
  font-size: 0.28rem;
  margin-left: 0.2rem;
}
.name img {
  width: 0.61rem;
}
.service img,
.return img,
.we img {
  width: 0.4rem;
  margin-left: 0.1rem;
}
.exit {
  width: 4.3rem;
  height: 0.84rem;
  background-color: #f4a12b;
  text-align: center;
  line-height: 0.84rem;
  font-size: 0.38rem;
  border-radius: 0.1rem;
  margin: 0 auto;
  margin-top: 2.6rem;
  margin-bottom: 1rem;
}
.exit a {
  color: #fff;
}

</style>
