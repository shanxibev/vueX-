<template>
  <div class="info">
       <router-link to="/routa/12">aa</router-link><!--修改路由-->   -------
       <router-link to="/routb?id=1&name='lili'">bb</router-link>
        <router-view/>
        <button @click="goabout">abouta</button><!--点击跳转到About页面-->
       {{msg}}
  </div>
</template>

<script>

  export default {
    name:'Info',
    props:[''],
    data () {
      return { 
            msg: "11111"
      }
    },

    components: {},

    computed: {},

    methods: {
      goabout(){
        this.$router.push({"name":"About",query:{id:"18"}})//会添加一个新的历史记录
      }
    },

    watch: {}

  }

</script>
<style scoped>
   .info .router-link-active{/*设置高亮*/
      color:yellow;
   }
</style>