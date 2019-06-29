<template>
  <div class="page">
    <div v-if="page">
      <section class="article">
        <textarea
          v-model="page.title"
          class="title"
          name="title"
          autofocus
          placeholder="A wonderfull new article"
        ></textarea>
        <editor class="content" :content.sync="page.content"></editor>
      </section>
      <ul class="page-controls">
        <li>
          <button @click="deletePage()">D</button>
        </li>
        <li>
          <button @click="savePage()">S</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <section class="article">
        <h1>Add a new article to start filling this space</h1>
      </section>
    </div>
  </div>
</template>

    <script>
import Editor from "./Editor";
export default {
  name: "Page",
  props: ["page"],
  components: {
    Editor
  },
  methods: {
    deletePage() {
      this.$emit("delete-page");
    },
    savePage() {
      this.$emit("save-page");
    },
    updateInput() {
      this.$emit("input", this.$el.innerText);
    }
  }
};
</script>

<style scoped>
.page {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Georgia", Times, serif;
  box-shadow: none;
}
.article {
  max-width: 680px;
  margin: 0 auto;
}
.content,
.title {
  font-family: "Georgia", Times, serif;
  border-style: none;
  border-radius: 0;
  caret-color: #e00543;
  width: 100%;
  box-sizing: border-box;
}

.content:focus,
.title:focus {
  outline: 0;
}

.content {
  font-size: 1.25rem;
  line-height: 1.75;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.74);
}

.title {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.84);
  padding: 0 0 20px 0;
}

textarea {
  resize: none;
}
.page-controls {
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px 0;
  list-style: none;
}
.page-controls li {
  margin-bottom: 10px;
}
button {
  border-style: none;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  margin-right: 1rem;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.64);
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  opacity: 0.6;
}

button:hover {
  opacity: 1;
}
</style>
	