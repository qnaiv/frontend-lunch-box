<template>
  <div id="hero">
    <!-- <img src="lunchbox-logo.png" /> -->
    模写したもの
  </div>
  <div id="gallery">
    <div class="gallery-item">
      <div class="header">
        <div class="title">Twitterトレンド欄</div>
        <div class="created-date">2021-09-19</div>
      </div>
      <p class="description">
        flexboxの練習。
      </p>
      <hr />
      <twitter-trend />
    </div>
    <div class="gallery-item">
      <div class="header">
        <div class="title">Google検索オプション</div>
        <div class="created-date">2021-09-20</div>
      </div>
      <p class="description">
        ツールを押したらさらなるオプションが出るようにした。<br />
        モバイル表示のときに検索カテゴリが横スクロールになる仕様が地味にめんどかった。
      </p>
      <hr />
      <google-search-options />
    </div>
  </div>
</template>

<script>
import TwitterTrend from "./components/TwitterTrend/TwitterTrend.vue";
import GoogleSearchOptions from "./components/GoogleSearchOptions/GoogleSearchOptions.vue";
export default {
  name: "App",
  components: {
    TwitterTrend,
    GoogleSearchOptions,
  },
};
</script>

<style scoped>
body {
  background-color: whitesmoke;
}
hr {
  border: none;
  border-top: 1px dashed #8c8b8b;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  font-family: "M PLUS Rounded 1c";
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
  margin: 0 auto;
}

.gallery-item {
  max-width: 600px;
  flex-grow: 1;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  filter: drop-shadow(3px 3px 10px #cccccc);
}

.gallery-item .header {
  display: flex;
  margin-bottom: 10px;
}

.gallery-item .header .title {
  flex: 1;
}
.gallery-item .header .created-date {
  text-align: right;
  font-size: 0.8em;
  color: gray;
}
.gallery-item .description {
  font-size: 0.8em;
  min-height: 50px;
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
