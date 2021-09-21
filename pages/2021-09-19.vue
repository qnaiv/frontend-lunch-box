<template>
  <detail-component
    title="Twitterトレンド欄"
    created-date="2021-09-19"
    :description="description"
  >
    <twitter-trend />
  </detail-component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      description: 'flexboxの練習。',
    }
  },
})
</script>
