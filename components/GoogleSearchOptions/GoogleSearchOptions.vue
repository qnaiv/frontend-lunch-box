<template>
  <div id="google-search-option-cointainer">
    <div id="google-search-option">
      <a
        href="javascript:void(0)"
        v-for="category in categories"
        :key="category.id"
        class="search-category"
        :class="{ active: isActiveCategory(category.id) }"
        v-on:click="onClickCategory(category.id)"
      >
        <i class="material-icons md-18">{{ category.icon }}</i>
        {{ category.name }}
      </a>
      <a href="javascript:void(0)" class="search-category">
        <i class="material-icons md-18">more_vert</i>
        もっと見る
      </a>
      <a
        href="javascript:void(0)"
        id="tool"
        v-on:click="onclickTool()"
        :class="{ toolVisible: toolVisibleToggle }"
      >
        ツール
      </a>
    </div>
    <div
      :class="{ hide: !toolVisibleToggle }"
      id="toolbox"
      class="animate__animated animate__fadeIn animate__faster"
    >
      <a href="javascript:void(0)" class="toolbox-item">
        すべての言語
        <i class="material-icons md-18">arrow_drop_down</i>
      </a>
      <a href="javascript:void(0)" class="toolbox-item">
        期間指定なし
        <i class="material-icons md-18">arrow_drop_down</i>
      </a>
      <a href="javascript:void(0)" class="toolbox-item">
        すべての結果
        <i class="material-icons md-18">arrow_drop_down</i>
      </a>
    </div>
  </div>
</template>

<script>
import 'material-icons/iconfont/material-icons.css'
import 'animate.css'

export default {
  data: function () {
    return {
      currentCategory: 'all',
      categories: [
        {
          id: 'all',
          name: 'すべて',
          icon: 'search',
        },
        {
          id: 'image',
          name: '画像',
          icon: 'image',
        },
      ],
      toolVisibleToggle: true,
    }
  },
  methods: {
    isActiveCategory(categoryId) {
      return this.currentCategory === categoryId
    },
    onClickCategory(categoryId) {
      this.currentCategory = categoryId
    },
    onclickTool() {
      this.toolVisibleToggle = !this.toolVisibleToggle
    },
  },
}
</script>

<style scoped>
.hide {
  display: none;
}
.material-icons {
  vertical-align: middle;
}
.material-icons.md-18 {
  font-size: 18px;
}
a {
  text-decoration: none;
}

#google-search-option-cointainer {
  min-width: 250px;
  font-size: 14px;
  color: #5f6368;
}

#google-search-option {
  display: flex;
  border-bottom: 1px solid #ebebeb;
}
#google-search-option > .search-category {
  color: #5f6368;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid transparent;
}
#google-search-option > .search-category.active {
  border-bottom: 2px solid #1a73e8;
  color: #1a73e8;
}
#google-search-option > #tool {
  margin: 0 10px;
  padding: 5px 10px;
  color: #5f6368;
  margin-left: auto;
  border: 1px solid transparent;
}
#google-search-option > #tool:hover {
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border: 1px solid #dadce0;
  transition: all 0s;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f8f9fa),
    to(#f8f9fa)
  );
}
#google-search-option > #tool.toolVisible {
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border: 1px solid #dadce0;
  transition: all 0s;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f8f9fa),
    to(#f8f9fa)
  );
}
#toolbox {
  /* margin-left: 15px; */
  margin-top: 10px;
  padding-left: 10px;
}
#toolbox > .toolbox-item {
  color: #5f6368;
  margin: 0 5px;
  padding: 0px;
}

@media (max-width: 40rem) {
  #google-search-option {
    overflow-x: auto;
    white-space: nowrap;
  }
  /* モバイルで横スクロールバーが常時表示される問題を解消 */
  #google-search-option::-webkit-scrollbar {
    display: none;
  }
}
</style>
