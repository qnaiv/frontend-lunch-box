<template>
  <div id="index">
    <div id="hero">
      <!-- <img src="lunchbox-logo.png" /> -->
      模写したもの
    </div>
    <div id="gallery">
      <NuxtLink to="/2021-09-19" class="gallery-item">
        <div class="created-date">2021-09-19</div>
        <!-- <div class="header">
          <div class="title">Twitterトレンド欄</div>
        </div> -->
        <img src="~/static/2021-09-19.png" class="thumbnail" />
        <div class="go-to-detail">
          <i class="material-icons md-18">arrow_forward</i>
        </div>
      </NuxtLink>
      <NuxtLink to="/2021-09-20" class="gallery-item">
        <div class="created-date">2021-09-19</div>
        <!-- <div class="header">
          <div class="title">Google検索オプション</div>
          <div class="created-date">2021-09-20</div>
        </div> -->
        <img src="~/static/2021-09-20.png" class="thumbnail" />
        <div class="go-to-detail">
          <i class="material-icons md-18">arrow_forward</i>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#hero {
  font-size: 1.5em;
  font-weight: 200;
  text-align: center;
  padding: 50px;
  font-family: 'M PLUS Rounded 1c';
}
#hero img {
  height: 1.5em;
  vertical-align: middle;
}
#gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 10px;
  justify-content: center;
  align-items: flex-start;
}

.gallery-item {
  max-width: 600px;
  flex-grow: 1;
  background-color: transpa;
  border-radius: 10px;
  filter: drop-shadow(3px 3px 10px #cccccc);
  text-decoration: none;
  color: black;
}
.gallery-item .created-date {
  text-align: right;
  font-size: 0.8em;
  color: gray;
  margin-bottom: 4px;
}
.gallery-item:hover {
  transition: 0.3s;
  filter: drop-shadow(0px 0px 1px #cccccc);
}

.gallery-item .header .created-date {
  text-align: right;
  font-size: 0.8em;
  color: gray;
}
.gallery-item .thumbnail {
  width: 100%;
  border-radius: 10px;
}

.go-to-detail {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: gray;
}

@media (max-width: 40rem) {
  #hero {
    font-size: 1.5em;
    text-align: center;
    padding: 50px 0px;
  }
  #hero img {
    height: 1.5em;
    display: block;
    margin: 0 auto;
  }

  .gallery-item {
    overflow-x: auto;
  }
}
</style>
