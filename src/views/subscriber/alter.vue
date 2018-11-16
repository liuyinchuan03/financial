<template>
    <div>
        <div class="centre">
        <div class="content">
            <!-- 头像 -->
            <div class="header">
                <img src="../../assets/images/（P045）我的_03.png" alt="">
                <a href="#">
                    <div class="header-f">修改头像</div>
                </a>
            </div>
            <div class="table">
                <ul>
                    <!-- <li>
                        <div class="name">工号</div> <input type="text" value="测试"></li> -->
                    <li>
                        <div class="name">姓名</div> <input type="text" value="测试"></li>
                    <li>
                        <div class="name">身份证号</div> <input type="text" value="测试"></li>
                    <li>
                        <div class="name">手机号</div> <input type="text" value="测试"></li>
                    <li>
                        <div class="name">微信号</div> <input type="text" value="测试"></li>
                    <li>
                        <div class="name">用户类型</div>
                        <div class="banking fl">
                            <i>金融用户</i>
                            <router-link tag="a" to="/upload"><img src="../../assets/images/（P047）修改个人信息_03.png" alt=""></router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 按钮 -->
            <router-link tag="div" class="button" to="/message">确定</router-link>
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
}

.content {
    width: 6.3rem;
    height: 9.5rem;
    background-color: #fff;
    margin: 0.3rem auto;
}

.header {
    height: 2.1rem;
    text-align: center;
}

.header-f {
    margin-top: 0.1rem;
    font-size: 0.26rem;
}

.header img {
    margin-top: 0.3rem;
    width: 0.61rem;
}

.table li {
    box-sizing: border-box;
    height: 0.56rem;
    margin-bottom: 0.2rem;
}

.table li .name {
    float: left;
    width: 1.6rem;
    height: 0.56rem;
    line-height: 0.56rem;
    text-align: right;
    font-size: 0.28rem;
}

.table li input {
    width: 3.6rem;
    height: 0.56rem;
    margin-left: 0.2rem;
    font-size: 0.26rem;
    color: #b8b8b8;
    padding: 0 0.2rem;
    border: 0.01rem solid #b8b8b8;
    border-radius: 0.05rem;
}

.banking {
    width: 3.6rem;
    height: 0.56rem;
    line-height: 0.56rem;
    margin-left: 0.2rem;
    font-size: 0.26rem;
    color: #f4a12b;
    padding: 0 0.2rem;
}

.banking i {
    padding-right: 0.1rem;
}

.button {
    width: 4.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #fff;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 0.1rem;
    margin-bottom: 1rem;
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
