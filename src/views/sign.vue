<template>
    <div>
        <div class="centre">
        <div class="content">
            <div class="phone">
                <i>手机号</i>
                <input type="text" placeholder ="手机号">
            </div>
            <div class="code">
                <i>验证码</i>
                <input type="text"  placeholder ="验证码">
                <span><a href="#">获取验证码</a></span>
            </div>
            <div class="http">
                <i></i>
                <router-link to="/userHttp" tag="span"><img src="../assets/images/（P014）立即申请_13.png" alt=""><a>用户协议</a></router-link>
            </div>
            <div @click="put" class="button"><a href="javascript:;">登录</a></div>
        </div>
    </div>
    <!-- 底部 -->
        <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> <img src="../assets/images/left.png" alt=""></span>
            </div>
            <div class="credFoot-r fr">
                <span><img src="../assets/images/right.png" alt=""> </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    retun: function () {
      this.$router.go(-1)
    },
    put: function () {
      this.$router.push('/put')
    }
  }
}
</script>
<style scoped>
.centre {
  width: 7.5rem;
  height: 11.5rem;
  background-image: url(../assets/images/（P004）登录_02.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  overflow: hidden;
}
.centre .content {
  width: 6.3rem;
  height: 5.1rem;
  background-color: #fff;
  margin: 1rem auto 0;
  padding-top: 1rem;
}
.centre .phone {
  height: 0.6rem;
  margin-bottom: 0.1rem;
}
.centre .phone i {
  display: inline-block;
  width: 1.45rem;
  text-align: right;
  margin-right: 0.2rem;
  font-size: 0.28rem;
}
.centre .phone input {
  box-sizing: border-box;
  width: 3.6rem;
  height: 0.5rem;
  font-size: 0.24rem;
  color: #888888 ;
  border: 0.01rem solid #cacac9;
  border-radius: 0.05rem;
  padding: 0 0.2rem;
 box-shadow: 0 0 0.03rem #cacac9 inset;
}
.centre .code {
  height: 0.6rem;
  margin-bottom: 0.1rem;
}
.centre .code i {
  display: inline-block;
  width: 1.45rem;
  text-align: right;
  margin-right: 0.2rem;
  font-size: 0.28rem;
}
.centre .code input {
  box-sizing: border-box;
  width: 1.8rem;
  height: 0.5rem;
  font-size: 0.24rem;
  color: #888888 ;
  border: 0.01rem solid #cacac9  ;
  border-radius: 0.05rem;
  padding: 0 0.2rem;
  box-shadow: 0 0 0.03rem #cacac9 inset;
  margin-right: 0.1rem;
}
.centre .code span {
  box-sizing: border-box;
  display: inline-block;
  width: 1.6rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: #f4a12b;
  font-size: 0.24rem;
  border-radius: 0.05rem;
}
.centre .code span a {
  color: #fff;
}
.centre .http {
  height: 0.6rem;
  line-height: 0.6rem;
}
.centre .http i {
  display: inline-block;
  width: 1.45rem;
  text-align: right;
  margin-right: 0.2rem;
  font-size: 0.28rem;
}
.centre .http span {
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
}
.centre .http span img {
  width: 0.3rem;
  vertical-align: text-bottom;
}
.centre .http span a {
  font-size: 0.26rem;
  margin-left: 0.05rem;
}
.centre .button {
  width: 4.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  font-size: 0.3rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  background-color: #f4a12b;
  border-radius: 0.1rem;
}
.centre .button a {
  color: #fff;
}
/* 底 */
.credFoot{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
   background-color: #e6e9f0;
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
.credFoot img{
    width: 0.14rem;
    height: 0.27rem;
}
</style>
