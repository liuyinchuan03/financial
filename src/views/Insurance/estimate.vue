<template>
    <div>
        <div class="centre">
        <div class="content">
            <div class="tabl">
                <ul>
                    <li><span>车牌号</span>
                        <select name="" id="" class="tabl-car-sel">
                            <option value="">京</option>
                            <option value="">鲁</option>
                            <option value="">冀</option>
                        </select>
                        <input type="text" class="rook4">
                        <div class="take"><input type="checkbox"><span>尚未取得车牌</span></div>
                    </li>
                    <li><span>提车年月</span>
                        <div class="mod_select2">
                            <select name="" id="" class="tabl-car-sel2">
                                <option value="">2018年</option>
                                <option value="">2017年</option>
                                <option value="">2016年</option>
                            </select>
                        </div>
                        <div class="mod_select3">
                            <select name="" id="" class="tabl-car-sel3">
                                <option value="">10月</option>
                                <option value="">9月</option>
                                <option value="">8月</option>
                            </select>
                        </div>
                    </li>
                    <li><span>姓名</span><input type="text"></li>
                    <li><span>电话</span><input type="text"></li>
                </ul>
            </div>
            <div class="assess"><a href="#">评估</a></div>
        </div>
        <div class="footer"><span>一键呼入:</span><i><a href="#">400-000-000</a></i></div>
        <div class="cad" @click="cardActive">
            <a  :class="cadd" >卡惠</a>
            <a href="javascript:;" :class="wrong"><img src="../../assets/images/（P011_1）卡详情_11.png" alt=""></a>
            <ul :class="hides">
                <router-link tag="li" to="/">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_03.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/credit">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_06.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/loan">
                    <a href="javascript:;"><img src="../../assets/images/22.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/safe">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_19.png" alt=""></a>
                </router-link>
                <router-link tag="li" to="/user">
                    <a href="javascript:;"><img src="../../assets/images/（P011_1）卡详情_21.png" alt=""></a>
                </router-link>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      hides: 'hide',
      cadd: 'cad-k',
      wrong: 'wrong hide'
    }
  },
  methods: {
    retun: function () {
      this.$router.go(-1)
    },
    cardActive: function () {
      if (this.hides == 'hide') {
        this.hides = ''
        this.cadd = 'cad-k hide'
        this.wrong = 'wrong'
      } else {
        this.hides = 'hide'
        this.cadd = 'cad-k'
        this.wrong = 'wrong hide'
      }
    }
  }
}
</script>
<style scoped>
.centre {
    width: 7.5rem;
    height: 100%;
    margin-bottom: 1rem;
}

.centre .content {
    box-sizing: border-box;
    width: 6.3rem;
    height: 6.4rem;
    background-color: #fff;
    margin: 1.2rem auto 0;
    padding-top: 0.5rem;
}

.centre .content .tabl li {
    height: 0.6rem;
    margin-bottom: 0.3rem;
}

.centre .content .tabl li span {
    display: inline-block;
    width: 1.54rem;
    text-align: right;
    font-size: 0.28rem;
    padding-right: 0.2rem;
}

.centre .content .tabl li input {
    box-sizing: border-box;
    height: 0.6rem;
    border: 0.01rem solid #b8b8b8;
    border-radius: 0.1rem;
    font-size: 0.28rem;
    color: #999999;
    padding: 0 0.1rem;
}

.centre .content .tabl li .rook1 {
    width: 1.5rem;
    margin-right: 0.3rem;
}

.centre .content .tabl li .rook4 {
    position: absolute;
    top: 0;
    left: 3.55rem;
    width: 1.8rem;
}

.centre .content .tabl li .rook2 {
    width: 1.7rem;
    margin-right: 0.3rem;
}

.centre .content .tabl li .rook3 {
    width: 1.6rem;
}

.centre .content .tabl li:nth-child(1) {
    position: relative;
    height: 1rem;
}

.centre .content .tabl li:nth-child(1) .take {
    box-sizing: border-box;
    position: absolute;
    left: 1.8rem;
    bottom: 0;
    height: 0.25rem;
    line-height: 0.25rem;
    color: #666666;
}

.centre .content .tabl li:nth-child(1) .take input {
    position: absolute;
    left: 0;
    bottom: 0.03rem;
    width: 0.2rem;
    height: 0.2rem;
    vertical-align: middle;
    margin: auto 0;
}

.centre .content .tabl li:nth-child(1) .take span {
    text-align: left;
    font-size: 0.22rem;
    color: #666666;
    margin-left: 0.3rem;
}

.centre .content .assess {
    width: 4.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #f4a12b;
    margin: 1rem auto 0;
    border-radius: 0.2rem;
}

.centre .content .assess a {
    color: #fff;
    font-size: 0.3rem;
}

.centre .footer {
    width: 6.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    background-color: #fff;
    margin: 0.3rem auto 0;
    font-size: 0.3rem;
}

.centre .footer i {
    margin-left: 0.2rem;
}

.centre .footer i a {
    color: #1878e7;
    font-size: 0.3rem;
}

.mod_select,
.mod_select3,
.mod_select2 {
    position: absolute;
    left: 1.55rem;
    top: 0;
    height: 0.6rem;
    /* background: url("../../assets/images/（P009）输入进度_03.png") no-repeat scroll 1rem center transparent; */
    /* background-size: contain; */
    font-familY: Arial, Helvetica, sans-serif;
}

.mod_select2 {
    top: 2.9rem;
    left: 2.34rem;
}

.mod_select3 {
    left: 4.26rem;
    top: 2.9rem;
}

.mod_select ul,
.mod_select3 ul,
.mod_select2 ul {
    margin: 0;
    padding: 0;
}

.mod_select ul li,
.mod_select3 ul li,
.mod_select2 ul li {
    list-style-type: none;
    float: left;
    margin-left: 0.2rem;
    height: 0.24rem;
}

.select_box {
    float: left;
    height: 0.6rem;
    border-radius: 0.1rem;
    font-size: 0.26rem;
    color: #999999;
    border: 0.01rem solid #b8b8b8;
    position: relative;
    cursor: pointer;
    width: 1.5rem;
}

.mod_select2 .select_box {
    width: 1.7rem;
}

.mod_select3 .select_box {
    width: 1.6rem;
}

.selet_open {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    width: 0.3rem;
    height: 0.24rem;
}

.centre .mod_select .select_box .select_txt,
.centre .mod_select2 .select_box .select_txt,
.centre .mod_select3 .select_box .select_txt {
    display: inline-block;
    padding-left: 0.1rem;
    width: 3.6rem;
    text-align: left;
    line-height: 0.6rem;
    height: 0.6rem;
    cursor: text;
    color: #999999;
    overflow: hidden;
}

.mod_select .option {
    z-index: 3;
}

.option {
    width: 1.5rem;
    position: absolute;
    top: 0.6rem;
    left: 0;
    z-index: 2;
    display: none;
}

.option a {
    position: relative;
    display: block;
    box-sizing: border-box;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: left;
    padding: 0 0.2rem;
    width: 100%;
    color: #999999;
    background: #fff;
    border-top: 0.01rem solid #f4a12b;
    border-left: 0.01rem solid #f4a12b;
    border-right: 0.01rem solid #f4a12b;
}

.mod_select2 .option a {
    width: 1.7rem;
}

.mod_select3 .option a {
    width: 1.6rem;
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
    background: #fde0e5;
}

/* 添加 */

.tabl-car-sel,
.tabl-car-sel2,
.tabl-car-sel3 {
    box-sizing: border-box;
    width: 1.5rem;
    height: 0.6rem;
    border: 0.01rem solid #b8b8b8;
    padding: 0 .1rem;
    border-radius: 0.1rem;
    font-size: 0.28rem;
    color: #999999;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("../../assets/images/11.png") no-repeat scroll 1.2rem center transparent;
        background-size: 15%;
}
.tabl-car-sel{
    background: url("../../assets/images/11.png") no-repeat scroll 1rem center transparent;
        background-size: 15%;
}
.tabl-car-sel2,
.tabl-car-sel3 {
    width: 1.7rem;
    height: 0.6rem;
}
/* 卡 */
.centre .cad {
    position: fixed;
    width: 0.9rem;
    height: 0.9rem;
    background-color: #f4a12b;
    border-radius: 50%;
    text-align: center;
    line-height: 0.9rem;
    right: 0.3rem;
    bottom: 1.9rem;
}

.centre .cad li {
    position: absolute;
    right: 0.3rem;
    bottom: 2rem;
    float: left;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background-color: #f4a12b;
    border-radius: 50%;
}

.centre .cad li img {
    width: 0.3rem;
}

.centre .cad li:nth-child(1) {
    right: 0.2rem;
    bottom: 1rem;
}

.centre .cad li:nth-child(2) {
    right: 0.8rem;
    bottom: 0.7rem;
}

.centre .cad li:nth-child(3) {
    right: 1rem;
    bottom: 0.14rem;
}

.centre .cad li:nth-child(4) {
    right: 0.8rem;
    bottom: -0.4rem;
}

.centre .cad li:nth-child(5) {
    right: 0.2rem;
    bottom: -0.6rem;
}

.centre .cad a {
    font-size: 0.3rem;
    color: #fff;
}

.centre .cad .wrong {
    position: relative;
    right: 0rem;
    bottom: 0.01rem;
}

.hide {
    display: none;
}
</style>
