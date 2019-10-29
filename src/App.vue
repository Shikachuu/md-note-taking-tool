<template>
  <div id="app">
    <MarkdownWriter/>
  </div>
</template>

<script>
import MarkdownWriter from "./components/Markdown-Writer";
export default {
  components: {
    MarkdownWriter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto+Mono&display=swap');
body{
  background-color: #282c34;
  font-family: 'Roboto Condensed', sans-serif;
}
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  color: white /*#3f5468*/;
}
table{
  border: rgb(55, 70, 119) solid 2px;
}
td{
  border: rgb(55, 70, 119) solid 2px;
}
.editor{
  height:100vh
}

blockquote{
  border-left: 5px solid rgb(55, 70, 119);
  border-radius: 5px;
}
</style>
