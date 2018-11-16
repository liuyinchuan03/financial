<template>
    <div>
        <div class="centre">
        <div class="content">
            <div class="table-header">
                <div class="table-h1 fl" @click="user"><a :class="aColor">普通用户</a></div>
                <div class="table-h2 fl">|</div>
                <div class="table-h3 fl" @click="userC"><a :class="aColor2">金融从业者</a></div>
            </div>
            <div class="table-con">
                <ul>
                    <li>
                        <div class="font fl">真实姓名</div><input type="text"></li>
                    <li>
                        <div class="font fl">身份证号</div><input type="text"></li>
                    <li :class="filer">
                        <div class="font fl">上传证件</div><input type="text" disabled></li>
                    <li>
                        <div class="font fl">手机号</div><input type="text"></li>
                    <li>
                        <div class="font fl">验证码</div><input type="text" value="验证码" class="code">
                        <div class="conde fl"><a href="#">获得验证码</a></div>
                    </li>
                </ul>
            </div>
             <router-link tag="div" to="/" class="button">确定</router-link>
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
  data () {
    return {
      aColor: 'aColor',
      aColor2: '',
      filer: 'filer disno'
    }
  },
  methods: {
    retun: function () {
      this.$router.go(-1)
    },
    user: function () {
      this.aColor = 'aColor'
      this.aColor2 = ''
      this.filer = 'filer disno'
    },
    userC: function () {
      this.aColor = ''
      this.aColor2 = 'aColor'
      this.filer = 'filer'
    }
  }
}
</script>
<style scoped>
.centre {
    width: 7.5rem;
}

.centre .content {
    box-sizing: border-box;
    width: 6.3rem;
    height: 6.9rem;
    background-color: #fff;
    margin: 1rem auto;
    margin-bottom: 1.2rem;
    padding-top: 0.2rem;
}

.centre .content .table-header {
    padding-top: 0.2rem;
    height: 0.7rem;
    border-bottom: 0.01rem solid #e5e5e5;
}

.centre .content .table-header .table-h1 {
    width: 3.1rem;
    text-align: center;
}

.centre .content .table-header .table-h1 a {
    font-size: 0.26rem;
}

.aColor {
    color: #f4a12b;
}

.centre .content .table-header .table-h2 {
    display: inline-block;
    color: #e5e5e5;
    font-size: 0.24rem;
    height: 0.5rem;
    line-height: 0.4rem;
}

.centre .content .table-header .table-h3 {
    width: 3.1rem;
    text-align: center;
}

.centre .content .table-header .table-h3 a {
    font-size: 0.26rem;
}

.centre .content .table-con {
    margin-top: 0.3rem;
}

.centre .content .table-con li {
    height: 0.56rem;
    line-height: 0.56rem;
    margin-bottom: 0.2rem;
}
.disno{
    display: none;
}
.filer input {
    height: 0.6rem;
    background: url("../../assets/images/（P003_1）完善信息_03.png") no-repeat scroll 2.8rem center transparent;
    /* background-size: contain; */
}

.centre .content .table-con li .font {
    width: 1.6rem;
    height: 0.56rem;
    text-align: right;
    font-size: 0.28rem;
    margin-right: 0.2rem;
}

.centre .content .table-con li .code {
    width: 1.62rem;
}

.centre .content .table-con li .conde {
    width: 1.6rem;
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 0.1rem;
    margin-left: 0.15rem;
}

.centre .content .table-con li .conde a {
    color: #fff;
    font-size: 0.24rem;
}

.centre .content .table-con li input {
    box-sizing: border-box;
    float: left;
    height: 0.56rem;
    line-height: 0.56rem;
    font-size: 0.24rem;
    border: 0.01rem solid #b8b8b8;
    border-radius: 0.1rem;
    padding: 0 0.2rem;
    color: #999;
    box-shadow: 0 0 0.03rem #cacac9 inset;
}

.centre .content .button {
    width: 4.3rem;
    height: 0.8rem;
    margin: 0 auto;
    margin-top: 1rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.3rem;
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
