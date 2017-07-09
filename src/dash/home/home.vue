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
		  	<div class="goods-item" v-for="item in view.goodsList">
				<div class="goods-item-img">
					<img :src="item.img">
				</div>
				<p>{{item.good_name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import * as types from '../../store/mutations';
	import store from './store';
	import api from '../../config/config'
	import './home.less'

	export default {
		name: 'home',
		data() {
			return {
				searchParam: '',
				view: this.$store.state.home
			}
		},
		created: function() {
			this.getAllGoods();
		},
		methods: {
			getAllGoods() {
				this.$store.dispatch(types.PUBLIC_API_ACTION, {
                    me: this,
                    url: 'http://localhost:3000/'+api.goods.queryAllGood,
                    mutation: types.QUERY_ALL_GOODS
                }).then((res) => {
                	// console.log(res)
                }).catch((error) => {
                });
			}
		}
	}
</script>