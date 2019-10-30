<template>
	<div class="rocket-menu floating">
		<img src="../assets/gopher.svg" alt="Rocket" @click="isOpen = !isOpen">
		<NavbarMenu v-if="isOpen"/>
	</div>
</template>

<script>
export default {
	components: {
		NavbarMenu: () => import("./NavbarMenu")
	},
	data() {
		return {
			isOpen: false,
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
@keyframes floating {
	from { transform: translate(0,  0px); }
	65%  { transform: translate(0, 15px); }
	to   { transform: translate(0, -0px); }    
}
</style>