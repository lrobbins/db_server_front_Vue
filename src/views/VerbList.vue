<template>
  <div>
    <h1>Verb Listing in Cards</h1>
    <VerbCard v-for="verb in verbs" :key="verb.id" :verb="verb"/>

    <ul>
      <li v-for="v in verbs">{{v.s_inf}} ID: {{ v.id }}</li>
    </ul>
    <!-- <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/> -->
  </div>
</template>

<script>
// import EventCard from '@/components/EventCard.vue'
import VerbCard from '@/components/VerbCard.vue'

import EventService from '@/services/EventService.js'

export default {
  components: {
    VerbCard
  },
  data(){
    return {
      verbs: []
    }
  },
  created(){
    EventService.getVerbList()
    .then(response => {
      this.verbs = response.data
      // console.log(JSON.stringify(response.data))
    })
    .catch(error => {
      console.log('There was an error_4: ' + JSON.stringify(error.response))
    })
    // ,
    // EventService.getEvents()
    // .then(response => {
    //   this.events = response.data
    // })
    // .catch(error => {
    //   console.log('There was an error_3: ' + JSON.stringify(error.response))
    // })
  }
}
</script>
