<template>
  <div>
        <div class="centre">
        <div class="content">
            <!-- 输入 -->
            <div class="import" @click="progress">
                <a href="javascript:;"><input type="text" value="输入我的办卡进度"></a>
            </div>
            <!-- 银行 -->
            <div class="bank">
                <h3>银行</h3>
                <div class="con" @click="bankProgress">
                    <ul>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_03.png" alt=""><span>工商银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_05.png" alt=""><span>广发银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_07.png" alt=""><span>交通银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_07.png" alt=""><span>农业银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_14.png" alt=""><span>兴业银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_16.png" alt=""><span>中国银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_20.png" alt=""><span>华夏银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_22.png" alt=""><span>光大银行</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="@/assets/images/（P007）查询进度_23.png" alt=""><span>上海银行</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    progress: function () {
      this.$router.push('/progress')
    },
    bankProgress(){
        this.$router.push('/bankProgress')
    }
  }
}
</script>

<style scoped>
    .centre {
            overflow: hidden;
    width: 7.5rem;
    height: 100%;
    margin-bottom: 0.5rem;
    margin-bottom: 0.5rem;
}

.centre .content {
    width: 6.9rem;
    margin: 0.3rem auto 0.5rem;
}

.centre .content .import input {
    width: 100%;
    height: 0.54rem;
    border: 0.01rem solid #b8b8b8;
    text-align: center;
    font-size: 0.26rem;
    border-radius: 0.1rem;
}

.bank {
    width: 6.8rem;
    margin: 0.5rem auto 0;
}

.bank h3 {
    height: 0.5rem;
    font-size: 0.26rem;
    font-weight: normal;
}

.bank .con li {
    float: left;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: 0.3rem;
    margin-right: 0.3rem;
}

.bank .con li img {
    width: 0.7rem;
    margin-top: 0.3rem;
}

.bank .con li span {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.28rem;
    height: .3rem;
    color: #130707;
}

.bank .con li:nth-child(3n) {
    margin-right: 0;
}
.bank .con li:nth-child(8) img{
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
}
    .bank .con li:nth-child(5) img{
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }
</style>
