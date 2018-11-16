<template>
    <div>
            <div class="centre">
            <div class="content">
                <div class="header"><img src="../../assets/images/（P048）关于我们_03.png" alt=""></div>
                <div class="con">我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议</div>
            </div>
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
    width: 6.4rem;
    height: 4.3rem;
    margin: 1rem auto 0;
    background-color: #fff;
    border-top: 0.01rem solid #fff;
    padding-bottom: 0.2rem;
}

.centre .content .header {
    width: 1.2rem;
    margin: 0.5rem auto 1rem;
}

.centre .content .header img {
    width: 100%;
}

.centre .content .con {
    padding: 0 0.3rem;
    font-size: 0.28rem;
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
