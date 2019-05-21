<template>
  <div>
      <!-- {{verb}} -->
      <!-- {{JSON.stringify(verb)}} -->
    <div class="event-header">
      <span class="eyebrow">ID {{ verb.id }} Spanish infinitive {{ verb.s_inf }}</span>
      <h1 class="title">{{ verb.title }}</h1>
      <h5>Organized by {{ verb.organizer }}</h5>
      <h5>Category: {{ verb.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ verb.location }}</address>
    <h2>Event details</h2>
    <p>{{ verb.description }}</p>
    <h2>Attendees
      <span class="badge -fill-gradient">{{ verb.attendees ? verb.attendees.length : 0}}</span>
    </h2>
    <!-- <ul class="list-group">
      <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul> -->
  <!-- <button v-on:click="doModifyTest">Edit</button> -->
  </div>
</template>
<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data(){
    return {
      verb:{}
    }
  },
  created(){
    EventService.getVerb(this.id)
      .then(response =>{
        //   console.log("++++" + this.id)
        this.verb = response.data
      })
      .catch(error => {
        console.log("There was an error_Verb Show: " + error.response)
      })
  },
  methods: {
    // doModifyTest(){
    //   // alert("goat")
    //   EventService.modEvent(this.id)
    //     .then(response => {
    //       console.log("modEvent in EventShow")
    //       console.log(response.data)
    //     })
    //     .catch(error => {
    //       if(error == null) {                                       // do not log error if none returned (undefined)
    //         console.log("There was an error_2: " + error.response)
    //       }
          
    //     })
    // }
  }
}
</script>

<style scoped>
  .location {
    margin-bottom: 0;
  }
  .location > .icon {
    margin-left: 10px;
  }
  .event-header > .title {
    margin: 0;
  }
  .list-group {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list-group > .list-item {
    padding: 1em 0;
    border-bottom: solid 1px #e5e5e5;
  }
</style>
