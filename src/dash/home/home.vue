<template>
	<div class="home">
		<mt-swipe :auto="0" class="swipe-img">
		  <mt-swipe-item><img src="../../assets/demo1.png"></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/demo1.png"></mt-swipe-item>
		</mt-swipe>
		<mt-search
  			v-model="searchParam"
  			cancel-text="取消"
  			placeholder="搜索"
  			class="search">
		</mt-search>
		<div class="goods-list">
			<div class="good-left"></div>
			<div class="good-right"></div>
		</div>
	</div>
</template>

<script>
	import './home.less'

	export default {
		name: 'home',
		data() {
			return {
				searchParam: ''
			}
		},
		created: function() {

		},
		methods: {

		}
	}
</script>