<template>
	<div class="rocket-menu floating">
		<img src="../assets/gopher.svg" alt="Rocket" @click="OpenMenu()">
		<div class="menu" v-if="isOpen">
			<input type="text" name="syntaxSearch" v-model="searchTerm" placeholder="syntax">
			<div v-if="searchTerm != ''">
				<p v-for="syntax in searchResult" :key="syntax.name">{{ "\n"+syntax.syntax}}</p>
			</div>
			<button @click.prevent="exportToPDF">Export To PDF</button>
			<p>made with ☕ and <img src="../assets/vue.svg" alt="vue-logo"></p>
		</div>
	</div>
</template>

<script>
import json from "../assets/markdownSyntax.json";
export default {
	data() {
		return {
			isOpen: false,
			searchTerm : "",
			markdownSyntaxArray: json
		}
	},
	methods: {
		OpenMenu() {
			this.isOpen = !this.isOpen;
		}
	},
	computed: {
		searchResult() {
			return this.markdownSyntaxArray.filter(syntax =>{
				return syntax.name.toLowerCase().includes(this.searchTerm.toLowerCase());
			});
		}
	}
}
</script>

<style scoped>
.rocket-menu{
	max-width: 80px;
}
img{
	cursor: pointer;
	width: 70%;
}
.floating{
	animation-name: floating;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
}
.menu{
	background-color: #3f5468;
	border-radius: 5px;
	width: 100%;
	font-size: 12px;
}
.menu img{
	width: 20%;
}
@keyframes floating {
	from { transform: translate(0,  0px); }
	65%  { transform: translate(0, 15px); }
	to   { transform: translate(0, -0px); }    
}
input{
	background-color: #3f5468;
	border-radius: 5px;
	border-color: #21252b;
	max-width: 100%
}
button{
	cursor: pointer;
	background-color: #3f5468;
	color: #21252b;
	border-radius: 5px;
	border-color: #21252b;
	width: 100%;
}
</style>