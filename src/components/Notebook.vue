<template>
  <div class="notebook">
    <div>
      <div class="notebook-controls">
        <input class="search-note" type="search">
        <button class="new-page" @click="newPage()">+</button>
      </div>
      <div
        v-for="(page, index) of pages"
        :id="`page-${index}`"
        :key="index"
        class="page"
        v-bind:class="{ 'active': index === activePage }"
        @click="changePage(index)"
      >
        <div class="note_wrap">
          <dt class="title">{{page.title}}</dt>
          <dd class="description">{{page.content | truncate(100, '...')}}</dd>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "Notebook",
  props: ["pages", "activePage"],
  methods: {
    changePage(index) {
      this.$emit("change-page", index);
    },
    newPage() {
      this.$emit("new-page");
    }
  }
};
</script>

    <style scoped>
.notebook {
  position: relative;
  max-width: 300px;
  width: 30rem;
  background: #fff;
  border-right: 1px solid #e0e0e0;
}
.title {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 600;
  line-height: 1.25;
  color: rgba(0, 0, 0, 0.54);
}
.description {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.54);
}

.page {
  padding: 20px;
  font-size: 1rem;
  min-height: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
dd {
  margin: 0;
}
.page:hover {
  cursor: pointer;
  background-color: #fafafa;
}

.active {
  background-color: #f0f0f0;
}
.active .title {
  color: rgba(0, 0, 0, 0.84);
}

.active:hover {
  background-color: #f0f0f0;
}
.notebook-controls {
  padding: 5px 10px;
  border-bottom: 1px solid #e0e0e0;
}
.search-note {
  padding: 5px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}
.notebook-controls button.new-page {
  margin-left: 5px;
  display: inline-block;
  color: #ccc;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.new-page {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 10px;
  padding: 5px 8px;
  box-sizing: border-box;
}

.new-page:hover {
  background-color: #182c48;
}
</style>