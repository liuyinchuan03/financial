<template>
  <div>
      <div class="centre">
        <div class="content">
            <div class="card">
                <i>身份证号</i>
                <input type="text" value="">
            </div>
            <div class="phone">
                <i>手机号</i>
                <input type="text" value="">
            </div>
            <div class="code">
                <i>验证码</i>
                <input type="text" value="">
                <span><a href="#">获取验证码</a></span>
            </div>
             <router-link tag="div" to="/queryResult" class="button"><a href="javascript:;">登录</a></router-link>
            <!-- <div class="button"></div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.centre {
  width: 7.5rem;
  height: 100%;
  overflow: hidden;
}
.centre .content {
  width: 6.3rem;
  height: 5.1rem;
  background-color: #fff;
  margin: 1rem auto 0;
  padding-top: 1rem;
}
.centre .phone,
.centre .card {
  height: 0.6rem;
  margin-bottom: 0.1rem;
}
.centre .phone i,
.centre .card i {
  display: inline-block;
  width: 1.45rem;
  text-align: right;
  margin-right: 0.2rem;
  font-size: 0.28rem;
}
.centre .phone input,
.centre .card input {
  box-sizing: border-box;
  width: 3.6rem;
  height: 0.5rem;
  font-size: 0.24rem;
  color: #cacac9;
  border: 0.01rem solid #cacac9;
  border-radius: 0.05rem;
  padding: 0 0.2rem;
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
  color: #cacac9;
  border: 0.01rem solid #cacac9;
  border-radius: 0.05rem;
  padding: 0 0.2rem;
  margin-right: 0.14rem;
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

</style>
