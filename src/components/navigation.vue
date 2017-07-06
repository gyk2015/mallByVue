<template>
	<div class="navigation">
		<ul class="nav-list">
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="classification">分类</router-link></li>
			<li>购物车</li>
			<li>个人中心</li>
		</ul>
	</div>
</template>

<script>
	import './navigation.less'
	export default {
		name: 'navigationBottom',
		data() {
			return {

			}
		},
		created: function() {

		},
		methods: {

		}
	}
</script>