<template>
	<div class="editor">
		<textarea class="hljs markdown" name="editor" :value="input" @input="update"></textarea>
    <Navbar/>
		<div class="compiled-md" v-html="compiledMd"></div>
	</div>
</template>

<script>
import marked from "marked";
import _ from "lodash";
import highlightjs from "highlight.js";
import Navbar from "./Navbar";
export default {
  name: "MarkdownWriter",
  components: {
    Navbar,
  },
  data() {
    return {
      input: "# Welcome! \n `Start typing...`🚀",
    };
  },
  computed: {
    compiledMd: function() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return highlightjs.highlightAuto(code).value;
        },
        gfm: true,
        breaks: true,
        sanitizer: true,
        xhtml: false
      });
      return marked(this.input);
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
  font-family: 'Roboto Mono', monospace;
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
  background-color: #282c34;
}
</style>