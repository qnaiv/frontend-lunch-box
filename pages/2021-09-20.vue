<template>
  <detail-component
    title="Google検索オプション"
    created-date="2021-09-20"
    :description="description"
  >
    <google-search-options />
  </detail-component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      description: `
      ツールを押したらさらなるオプションが出るようにした。<br />
      モバイル表示のときに検索カテゴリが横スクロールになる仕様が地味にめんどかった。<br />
      「::-webkit-scrollbar」でモバイル時にスクロールバー無効化できた
      `,
    }
  },
})
</script>

<style scoped>
#component {
  background-color: white !important;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
</style>
