<template>
  <div id="detail-container">
    <NuxtLink id="go-to-backward" to="/">
      <i class="material-icons md-18">arrow_backward</i>
    </NuxtLink>
    <span class="created-date">{{ createdDate }}</span>
    <h2 class="title">{{ title }}</h2>
    <div id="component">
      <slot />
    </div>
    <p class="description" v-html="description"></p>
  </div>
</template>
<script lang="ts">
import 'material-icons/iconfont/material-icons.css'
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'title',
    },
    createdDate: {
      type: String,
      default: '1999-11-11',
    },
    description: {
      type: String,
      default: 'none',
    },
  },
})
</script>
<style scoped>
#detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
}
#go-to-backward {
  display: block;
  color: gray;
}
#component {
  background-color: white !important;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.title {
  margin-top: 2px;
}
.created-date {
  text-align: right;
  font-size: 0.8em;
  color: gray;
}
.description {
  font-size: 0.9em;
  min-height: 60px;
}
</style>
