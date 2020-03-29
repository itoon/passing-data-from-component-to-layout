<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="pt-5">
          <div class="text-center">
            <logo />            
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="text-center">
          <button class="btn btn-primary mt-5" @click="changeTitle">Using Store</button>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'withStoreLayout',
  components: {
    Logo
  },
  methods: {
    changeTitle(){      
      this.$store.dispatch("changeTitle", 'Using Store')
    }
  }
}
</script>
