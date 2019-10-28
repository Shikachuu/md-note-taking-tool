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
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  color: #3f5468;
}
.editor{
  height: 95vh;
}
nav{
  height: 5vh;
}

blockquote{
  border-left: 5px solid #3faf7e;
  border-radius: 5px;
}
</style>
