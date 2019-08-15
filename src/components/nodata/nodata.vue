<template>
<div class="no-data">
    <img src="../../assets/images/nodata.png" alt="">
    <div class="gray"><slot>暂无数据</slot></div>
</div>
</template>

<style>
.no-data{
    text-align: center;
    margin-top: 50px;
}
.no-data img{
    width: 50%;;
}
</style>

<script>
export default {
  name: 'appNoData'
}
</script>
