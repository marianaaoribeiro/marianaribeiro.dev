<template>
  <div>
    <dev-details />
    <about-me />
    <skills-with />
  </div>
</template>

<script>
import devDetails from '@/components/DevDetails.vue'
import aboutMe from '@/components/AboutMe.vue'
import skillsWith from '@/components/SkillsWith.vue'

  export default {
    name: 'HomeWiew',
    components:{
      devDetails,
      aboutMe,
      skillsWith
    }
   
  }
</script>
