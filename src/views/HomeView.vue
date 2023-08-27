<template>
  <div>
    <dev-details />
    <about-me />
  </div>
</template>

<script>
import devDetails from '@/components/DevDetails.vue'
import aboutMe from '@/components/AboutMe.vue'

  export default {
    name: 'HomeWiew',
    components:{
      devDetails,
      aboutMe
    }
   
  }
</script>
