<template>
  <div>
      <div class="centre">
        <div class="content">
            <ul>
                <li><span>申请人</span><input type="text"></li>
                <li><span>身份证</span><input type="text"></li>
                <li><span>银行</span>
                    <!-- 模拟下拉菜单 -->
                    <div class="mod_select">
                        <select name="" id="">
                            <option value="">农业银行</option>
                            <option value="">光大银行</option>
                            <option value="">银行</option>
                        </select>
                    </div>
                </li>
                <li>
                    <span>状态</span>
                    <div class="mod_select2">
                         <select name="" id="">
                            <option value="">待审核</option>
                            <option value="">未通过</option>
                            <option value="">已通过</option>
                        </select>
                    </div>
                </li>
                <li><span>工号</span><input type="text"></li>
                <li><span>手机号</span><input type="text"></li>
            </ul>
            <div class="plan" @click="queryResult">
                <a href="#">确定</a>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    queryResult: function () {
      this.$router.push('/queryResult')
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
    height: 7.3rem;
    background-color: #ffffff;
    margin: 1.1rem auto 0;
    padding-top: 0.5rem;
}

.centre .content li {
    margin-bottom: 0.2rem;
}

.centre .content li span {
    display: inline-block;
    width: 1.4rem;
    height: 0.58rem;
    line-height: 0.58rem;
    text-align: right;
    font-size: 0.26rem;
    color: #666666;
    margin-right: 0.3rem;
}

.centre .content li input {
    box-sizing: border-box;
    width: 3.6rem;
    border-radius: 0.1rem;
    height: 0.58rem;
    font-size: 0.26rem;
    color: #999999;
    border: 0.01rem solid #b8b8b8;
    padding: 0 0.2rem;
}

.centre .content li select {
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 3.6rem;
    height: 0.58rem;
    border: none;
    outline: none;
    border-radius: 0.1rem;
    font-size: 0.26rem;
    color: #999999;
    border: 0.01rem solid #b8b8b8;
    padding: 0 0.2rem 0 0.3rem;
    background: url("../../assets/images/（P009）输入进度_03.png") no-repeat scroll right center transparent;
}
.centre .content li select option {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 0.1rem;
}

.centre .content .plan {
    width: 4.3rem;
    height: 0.7rem;
    margin: 1rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4a12b;
    border-radius: 0.4rem;
}

.centre .content .plan a {
    color: #fff;
    font-size: 0.28rem;
}

.mod_select,
.mod_select2 {
    position: absolute;
    left: 2.3rem;
    top: 3.1rem;
    font-familY: Arial, Helvetica, sans-serif;
    background: url("../../assets/images/（P009）输入进度_03.png") no-repeat scroll right center transparent;
}

.content .mod_select2 {
    top: 3.9rem;
}

.mod_select ul,
.mod_select2 ul {
    margin: 0;
    padding: 0;
}

.mod_select ul li,
.mod_select2 ul li {
    list-style-type: none;
    float: left;
    margin-left: 0.2rem;
    height: 0.24rem;
}

.select_box {
    float: left;
    height: 0.62rem;
    border-radius: 0.1rem;
    font-size: 0.26rem;
    color: #999999;
    border: 0.01rem solid #b8b8b8;
    position: relative;
    cursor: pointer;
    width: 3.6rem;
}

.selet_open {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    width: 0.3rem;
    height: 0.24rem;
}

.mod_select .select_box .select_txt,
.mod_select2 .select_box .select_txt {
    display: inline-block;
    padding-left: 0.3rem;
    width: 3.6rem;
    text-align: left;
    line-height: 0.62rem;
    height: 0.62rem;
    cursor: text;
    color: #999999;
    overflow: hidden;
}

.mod_select .option {
    z-index: 3;
}

.option {
    width: 3.6rem;
    position: absolute;
    top: 0.62rem;
    left: 0;
    z-index: 2;
    overflow: hidden;
    display: none;
}

.option a {
    position: relative;
    display: block;
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: left;
    padding: 0 0.2rem;
    width: 100%;
    color: #999999;
    background: #fff;
    border-top: 0.01rem solid #f4a12b;
    border-left: 0.01rem solid #f4a12b;
    border-right: 0.01rem solid #f4a12b;
}

.option a:first-child {
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
}

.option a:last-child {
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    border-bottom: 0.01rem solid #f4a12b;
}

.option a:hover {
    background: #FDE0E5;
}
</style>
