<template>
    <div>
        <div class="centre">
        <div class="content">
            <textarea placeholder="提示文字"></textarea>
            <div class="number">
                <div class="fail">
                    <i>0</i>
                    <em>/</em>
                    <span>150</span>
                </div>
            </div>
        </div>
        <div class="button">
            <a>确认</a>
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
.centre {
  width: 7.5rem;
  height: 100%;
  margin-bottom: 1.2rem;
}
.centre .content {
  width: 6.9rem;
  margin: 1.2rem auto 0;
  background-color: #fff;
  height: 3.5rem;
}
.centre .content textarea {
  box-sizing: border-box;
  width: 6.9rem;
  height: 3rem;
  padding: 0.2rem 0.3rem;
  font-size: 0.28rem;
  color: #666666;
}
.centre .content .number {
  box-sizing: border-box;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-right: 0.3rem;
}
.centre .content .number .fail {
  float: right;
  font-size: 0.28rem;
  color: #999999;
}
.centre .button {
  width: 4.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  margin: 2.5rem auto 0;
  background-color: #f4a12b;
  border-radius: 0.2rem;
}
.centre .button a {
  font-size: 0.3rem;
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
