<template>
	<router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/scss/var.scss';
@import './assets/scss/normalize.css';
*,
*:before,
*:after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font: 14px/1.5 Arial,Helvetica,sans-serif;
  height: 100%;
}
body {
  height: 100%;
  -webkit-font-smoothing: antialiased; 
  background-color: #F6F6F6;
}
a{
	color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
input{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
img{
  max-width: 100%;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.wrapper{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.main{
	flex: 1;
	overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.warning{
	color: $warning;
}
.bg-white{
  background-color: #fff;
}
.gray{
  color: #747474;
}
.themeColor{
  color: $themeColor;
}
.gap{
  margin-bottom: $gap;
}
.mint-tab-item-label{
  font-size: 14px !important;
}
.text-center{
  text-align: center;
}
.flex{
  display: flex;
}
.form{
  margin: 0 10%;
}
.fs12{
  font-size: 12px;
}
</style>
