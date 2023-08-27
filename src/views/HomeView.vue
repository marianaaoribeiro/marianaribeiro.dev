<template>
  <div>
    <dev-details />
    <about-me />
    <skills-with />
    <contact-me />
  </div>
</template>

<script>
import devDetails from '@/components/DevDetails.vue'
import aboutMe from '@/components/AboutMe.vue'
import skillsWith from '@/components/SkillsWith.vue'
import contactMe from '@/components/ContactMe.vue'

  export default {
    name: 'HomeWiew',
    components:{
      devDetails,
      aboutMe,
      skillsWith,
      contactMe
    }
   
  }
</script>
