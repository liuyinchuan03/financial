<template>
    <div>
        <div class="centre">
        <div class="content">
            <h4>还未有申请记录</h4>
            <ul>
                <li>未记录原因</li>
                <li>1、还未公开申请记录</li>
                <li>2、请确认是否已收到银行下发的申请卡成功短信</li>
                <li>3、还未公开申请记录</li>
                <li>4、请确认是否已收到银行下发的申请卡成功短信</li>
            </ul>
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
}

.centre .content {
    box-sizing: border-box;
    width: 6.9rem;
    height: 3rem;
    background-color: #fff;
    margin: 1.2rem auto;
    padding: 0.3rem;
}

.centre .content h4 {
    font-size: 0.3rem;
    color: #f4802b;
    text-align: center;
    margin-bottom: 0.1rem;
    font-weight: normal;
}

.centre .content li {
    font-size: 0.24rem;
    color: #999;
}
</style>
