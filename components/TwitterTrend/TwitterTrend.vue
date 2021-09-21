<template>
  <div id="twitter-trend-container">
    <h2>いまどうしてる？</h2>
    <div class="trend">
      <div class="content">
        <span class="category"> 国際ニュース·ライブ </span>
        <span class="title">
          クルードラゴン 世界初民間人だけの宇宙旅行終え地球に帰還
        </span>
      </div>
      <div class="thumbnail">
        <img src="./trend-image.jpg" />
      </div>
    </div>
    <div class="trend">
      <div class="content">
        <span class="category"> ゲーム·トレンド </span>
        <span class="title"> #ウデマエX到達までにしてた事 </span>
        <span class="additional"> 4,156件のツイート </span>
      </div>
      <div class="option">...</div>
    </div>
    <div class="trend">
      <div class="content">
        <span class="category"> 日本のトレンド </span>
        <span class="title"> 配信ライブ中 </span>
        <span class="additional">
          トレンドトピック:
          <a href="javascript:void(0)">緊急手術</a>、
          <a href="javascript:void(0)">硬膜外血腫</a>
        </span>
      </div>
      <div class="option">...</div>
    </div>
    <div id="more">
      <span>さらに表示</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(29, 155, 240);
}
a:hover {
  text-decoration: underline;
}
#twitter-trend-container {
  height: auto;
  min-width: 250px;
  background-color: rgb(247, 249, 249);
  border-radius: 15px;
  padding: 10px 15px;
  text-align: left;
}
#twitter-trend-container > h2 {
  font-size: 1.2em;
  margin: 0px;
  padding: 0px;
}

#twitter-trend-container > .trend {
  display: flex;
  flex-direction: row;
  gap: 0px 12px;
  margin: 15px 0px;
}
#twitter-trend-container > .trend > .content {
  flex: 1;
}

#twitter-trend-container > .trend > .thumbnail {
  width: 68px;
}

#twitter-trend-container > .trend > .content > .category {
  display: block;
  font-size: 0.8em;
}
#twitter-trend-container > .trend > .content > .title {
  display: block;
  font-size: 1em;
  font-weight: bold;
}
#twitter-trend-container > .trend > .content > .additional {
  display: block;
  font-size: 0.8em;
}
#twitter-trend-container > .trend > .thumbnail > img {
  width: 68px;
  height: 68px;
  object-fit: cover;
  border-radius: 10px;
}
#twitter-trend-container > #more {
  font-size: 0.9em;
  color: rgb(29, 155, 240);
}
</style>
