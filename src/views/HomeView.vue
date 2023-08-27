<template>
  <div>
    <dev-details />
    <about-me />
    <skills-with />
    <experiences-with />
    <academic-education />
    <contact-me />
  </div>
</template>

<script>
import devDetails from '@/components/DevDetails.vue'
import aboutMe from '@/components/AboutMe.vue'
import skillsWith from '@/components/SkillsWith.vue'
import academicEducation from '@/components/AcademicEducation.vue'
import contactMe from '@/components/ContactMe.vue'
import experiencesWith from '@/components/ExperiencesWith.vue'

  export default {
    name: 'HomeWiew',
    components:{
      devDetails,
      aboutMe,
      skillsWith,
      contactMe,
      experiencesWith,
      academicEducation
    }
   
  }
</script>
