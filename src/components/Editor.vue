<template>
  <div contenteditable id="editor" @input="updateText" data-placeholder="A new story began here..."></div>
</template>

<script>
export default {
  name: "Editor",
  props: ["content"],
  mounted: function() {
    this.$el.innerHTML = this.content;
  },
  on: {
    change: function() {
      this.$el.innerHTML = this.content;
    }
  },
  methods: {
    updateText: function(e) {
      this.$emit("on:change", e.target.innerHTML);
    }
  }
};
</script>

<style scoped>
[contentEditable="true"]:empty:not(:focus):before {
  content: attr(data-placeholder);
  color: rgba(0, 0, 0, 0.36);
}
</style>
