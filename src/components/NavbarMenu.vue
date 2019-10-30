<template>
	<div class="menu">
		<input type="text" name="syntaxSearch" v-model="searchTerm" placeholder="syntax">
		<div v-if="searchTerm != ''">
			<p v-for="syntax in searchResult" :key="syntax.name" class="searchRes">{{ "\n"+syntax.syntax}}</p>
		</div>
		<button @click.prevent="exportToPDF">Export To PDF</button>
		<p>made with ☕ and <a href="https://vuejs.org/"><img src="../assets/vue.svg" alt="vue-logo"></a></p>
	</div>
</template>

<script>
import json from "../assets/markdownSyntax.json";
export default {
	data() {
		return {
			searchTerm : "",
			markdownSyntaxArray: json
		}
	},
	computed: {
		searchResult() {
			return this.markdownSyntaxArray.filter(syntax =>{
				return syntax.name.toLowerCase().includes(this.searchTerm.toLowerCase());
			});
		}
	},
	methods: {
		exportToPDF() {
			this.$htmlToPaper("compiledMd");
		}
	}
}
</script>

<style scoped>
.menu{
	background-color: #3f5468;
	border-radius: 5px;
	width: 100%;
	font-size: 12px;
}
.menu img{
	width: 20%;
}
input{
	background-color: #3f5468;
	border: none;
	max-width: 100%
}
button{
	cursor: pointer;
	background-color: #21252b;
	color: white;
	border: none;
}
.searchRes{
	color: #21252b;
}
</style>