<template>
  <div id="app">
    <Navbar/>
    <MarkdownWriter/>
  </div>
</template>

<script>
import MarkdownWriter from "./components/Markdown-Writer";
import Navbar from "./components/Navbar";
export default {
  components: {
    MarkdownWriter,
    Navbar
  }
}
</script>

<style>
body{
  background-color: #282c34;
}
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  color: white /*#3f5468*/;
}
table{
  border: #3faf7e solid 2px;
}
td{
  border: #3faf7e solid 2px;
}
.editor{
  min-height: 95vh;
}
nav{
  height: 5vh;
}

blockquote{
  border-left: 5px solid #3faf7e;
  border-radius: 5px;
}
</style>
