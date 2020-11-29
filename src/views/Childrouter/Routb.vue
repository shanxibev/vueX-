<template>
  <div class="routerb">
     <h1>routera----{{this.$route.query.name}}</h1><!--路由query传参法，接收rout他表示当前路由的激活信息对象-->
     {{msg}}---{{magname}}
  </div>
</template> 

<script>

  export default {
    name:'routerb', 
    props:[''],
    data () {
      return {
         msg:"bbbbb",
         magname:this.$route.query.name
      };
    },
    created(){
     console.log(this.$route)//每个页面都有，谁激活展示谁的路由信息
    },
    components: {},

    computed: {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>