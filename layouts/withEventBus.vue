<template>
  <div class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>    
    <nuxt/>    
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'With Store Layout'
    }
  },
  created(){
    if (process.client) {
      this.$bus.$on("changeTitle", (title) => {
        this.changeTitle(title)
      })
		}
  },
  beforeDestroy() {
    this.$bus.$off('changeTitle')
  },
  methods: {
    changeTitle(title){
      alert(title)
      this.title = title
    }
  }
}
</script>