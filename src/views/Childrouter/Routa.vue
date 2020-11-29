<template>
  <div class="routera">
    <h1>routerb----{{this.$route.params}}</h1>
    {{msg}}
  </div>
</template>

<script>

  export default {
    name:'routera',
    props:[''],
    data () {
      return {
          msg:"aaaa"
      };
    },
    components: {},

    computed: {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>