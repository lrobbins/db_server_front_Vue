<template>
<div>
  <!-- <h5> {{verb}}</h5> -->
  <!-- <ul>
  <li></li>
  </ul> -->
  
  
  <router-link
    class="event-link"
    :to="{ name: 'verb-show', params: { id: verb.id } }"
  >
    <div class="event-card -shadow">
      <BaseIcon name="arrow-right-circle"/>
      <span class="eyebrow">{{ verb.e_inf }} and {{ verb.s_inf }}  and {{ verb.id }}</span>
      <!-- <h4 class="title">{{ event.title }}</h4> -->
      <BaseIcon name="users"/>
      <!-- <span>{{ event.attendees.length }} attending</span> -->
    </div>
  </router-link>

</div>
</template>

<script>
export default {
  props: {
    verb: Object
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
