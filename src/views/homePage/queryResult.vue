<template>
    <div>
        <div class="centre">

        <div class="examine" @click="recordDetails">
            <ul>
                <li>
                    <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_03.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>农业银行信用卡</h4>
                        <div class="card-c-name">
                            <div class="card-c-name-l fl">申请人:</div>
                            <div class="card-c-name-r fl">赵**</div>
                        </div>
                        <div class="card-c-number">
                            <div class="card-c-name-l fl">订单编号：</div>
                            <div class="card-c-name-r fl">123456</div>
                        </div>
                        <div class="card-c-moblie">
                            <div class="card-c-name-l fl">手机号：</div>
                            <div class="card-c-name-r fl">138****6666</div>
                        </div>
                    </div>

                </li>
                <li>
                    <div class="card-l fl"><img src="../../assets/images/（P028）订单明细_06.png" alt=""></div>
                    <div class="card-c fl">
                        <h4>农业银行信用卡</h4>
                        <div class="card-c-name">
                            <div class="card-c-name-l fl">申请人:</div>
                            <div class="card-c-name-r fl">赵**</div>
                        </div>
                        <div class="card-c-number">
                            <div class="card-c-name-l fl">订单编号：</div>
                            <div class="card-c-name-r fl">123456</div>
                        </div>
                        <div class="card-c-moblie">
                            <div class="card-c-name-l fl">手机号：</div>
                            <div class="card-c-name-r fl">138****6666</div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>

    </div>
    </div>
</template>
<script>
export default {
  methods: {
    recordDetails: function () {
      this.$router.push('/recordDetails')
    }
  }
}
</script>
<style scoped>
    .centre {
    width: 7.5rem;
    padding: 0.2rem;
}

.examine {
    margin-top: 0.2rem;
}

.examine li {
    box-sizing: border-box;
    width: 7.1rem;
    height: 1.8rem;
    background-color: #fff;
    margin-bottom: 0.2rem;
    padding: 0.3rem 0.35rem;
}

.examine li .card-l {
    margin-right: 0.35rem;
}

.examine li .card-l img {
    width: 1rem;
}

.examine li .card-c {
    height: 1rem;
}

.examine li .card-c h4 {
    font-size: 0.28rem;
}

.examine li .card-c .card-c-name,
.examine li .card-c .card-c-number,
.examine li .card-c .card-c-moblie {
    overflow: hidden;
    width: 100%;
    height: 0.3rem;
    font-size: 0.22rem;
    color: #999999;
}

.examine li .card-c .card-c-name .card-c-name-l,
.examine li .card-c .card-c-number .card-c-name-l,
.examine li .card-c .card-c-moblie .card-c-name-l {
    margin-right: 0.1rem;
}

.colors {
    color: #f4802b;
}
</style>
