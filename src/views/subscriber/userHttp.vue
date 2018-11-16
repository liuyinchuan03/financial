<template>
    <div>
        <div class="centre">
            <div class="content">
                <div class="title">我是协议标题</div>
                <p>我是协议内容我是协议内容我是协议内容我是协议内容我是协议内容我是协议内容我是协议内容</p>
            </div>
        </div>
        <!-- 底部 -->
        <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> &lt;
		</span>
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
  margin-bottom: 1.2rem;
}
.centre .content {
  width: 6.8rem;
  margin: 0.46rem auto;
}
.centre .content .title {
  font-size: 0.3rem;
  margin-bottom: 0.2rem;
}
.centre .content p {
  font-size: 0.26rem;
  color: #333333;
}

</style>
<template>
    <div>
        <div class="centre">
            <div class="content">
                <div class="title">我是协议标题</div>
                <p>我是协议内容我是协议内容我是协议内容我是协议内容我是协议内容我是协议内容我是协议内容</p>
            </div>
        </div>
        <!-- 底部 -->
        <div class="credFoot">
            <div class="credFoot-l fl" >
                <span @click="retun"> &lt;

		</span>
            </div>
            <div class="credFoot-r fr">
                <span> &gt; </span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    methods:{
        retun:function(){
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
  margin-bottom: 1.2rem;
}
.centre .content {
  width: 6.8rem;
  margin: 0.46rem auto;
}
.centre .content .title {
  font-size: 0.3rem;
  margin-bottom: 0.2rem;
}
.centre .content p {
  font-size: 0.26rem;
  color: #333333;
}

</style>
