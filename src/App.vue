<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- <router-link to="/bar">柱状图</router-link> |
      <router-link to="/line">折线图</router-link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    let html = document.getElementsByTagName('html')[0]
    let settingFs = 0
    let settedFs = 0
    settedFs = settingFs = parseInt(html.style.fontSize)
    let realFs = parseInt(window.getComputedStyle(html).fontSize)
    if(settedFs != realFs){
      settingFs = settedFs*settedFs/realFs
      html.setAttribute('style', 'font-size:'+settingFs + 'px!important');
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
