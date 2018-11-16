<template>
    <div>
        <div class="centre">
        <div class="content">
            <div class="header">金融用户</div>
            <div class="content-img"><img src="../../assets/images/（P002）上传完毕_03.png" alt=""></div>
            <p>请上传从业资格证、名片、工作证等可证明金融从业者身份的图片</p>
        </div>
        <!-- 按钮 -->
        <router-link tag="div" class="button" to="/message"> <a>确定</a> </router-link>
        </div>
        <!-- 底部 -->
        <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> &lt;</span>
            </div>
            <div class="credFoot-r fr">
                <span> &gt; </span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  methods: {
    retun: function () {
      this.$router.go(-1)
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
  width: 6.3rem;
  height: 4.6rem;
  background-color: #fff;
  margin: 1.2rem auto 0;
}
.centre .content .header {
  font-size: 0.3rem;
  text-align: center;
  color: #f4a12b;
  margin-bottom: .2rem;
  padding-top: 0.3rem;
}
.centre .content .content-img {
  height: 1.8rem;
  width: 2.9rem;
  margin: 0 auto;
  text-align: center;
}
.centre .content .content-img img {
  width: 100%;
}
.centre .content p {
  font-size: 0.26rem;
  margin: 0.36rem 0.3rem 0;
  text-align: center;
  color: #666666;
}
.centre .button {
  width: 3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border: 0.02rem solid #f4a12b;
  border-radius: 0.2rem;
  text-align: center;
  margin: 1.2rem auto 0;
  font-size: 0.3rem;
}
.centre .button a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #f4a12b;
}
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

</style>
