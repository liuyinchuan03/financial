<template>
    <div>
        <div class="centre">
        <div class="content">
            <div class="search">
                <input type="text" placeholder="搜索">
            </div>
            <div class="title">推广费用一览表</div>
            <div class="goods">
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>产品</th>
                            <th>推广费</th>
                            <th>附加信息</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>BX01</td>
                            <td>4.5%</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>BX01</td>
                            <td>4.5%</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .centre {
  width: 7.5rem;
  height: 100%;
}
.centre .content {
  width: 7rem;
  margin: 0.3rem auto 0;
}
.centre .content .search {
  text-align: center;
}
.centre .content .search input {
  width: 6.3rem;
  height: 0.5rem;
  color: #666;
  font-size: 0.26rem;
  text-align: center;
}
.centre .content .search input::after {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  content: 'enenen';
}
.centre .content .title {
  font-size: 0.26rem;
  color: #f4802b;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
}
.centre .content .goods thead tr {
  height: 0.8rem;
  line-height: 0.8rem;
}
.centre .content .goods thead tr th {
  width: 0.25%;
  font-size: 0.26rem;
  border-top: 0.01rem solid #e3e3e3;
  border-bottom: 0.01rem solid #e3e3e3;
}
.centre .content .goods tbody td {
  width: 0.25%;
  font-size: 0.26rem;
  color: #666666;
  text-align: center;
  height: 0.6rem;
  border-bottom: 0.01rem solid #e3e3e3;
}

</style>
