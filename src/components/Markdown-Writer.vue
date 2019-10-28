<template>
	<div class="editor">
		<textarea name="editor" :value="input" @input="update"></textarea>
		<div class="compiled-md" v-html="compiledMd"></div>
	</div>
</template>

<script>
import marked from "marked";
import _ from "lodash";
export default {
	name: "MarkdownWriter",
  data() {
    return {
      input: "# Wellcome!",
    };
  },
  computed: {
    compiledMd: function() {
      return marked(this.input, {
      gfm: true,
      sanitizer: true,
      });
    }
  },
  methods: {
    update: _.debounce(function(e){
      this.input = e.target.value;
    },300),
  }
}
</script>

<style scoped>
.editor{
	display: flex;
	align-items: stretch;
	align-content: stretch;
}
textarea{
	width: 100%;
  height: 100%;
  border: none;
  border-right: solid 1px #3f5468;
  resize: none;
  background-color: #21252b;
  color: #3f5468;
}
.compiled-md{
  width: 100%;
  height: 100%;
}
</style>