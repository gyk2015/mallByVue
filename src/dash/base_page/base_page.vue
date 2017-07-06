<template>
	<div class="base_page">
		<router-view></router-view>
		<navigationBottom></navigationBottom>
	</div>
</template>

<script>
	import navigationBottom from '../../components/navigation.vue';
	export default {
		name: 'basePage',
		data() {
			return {

			}
		},
		components: {
            navigationBottom: navigationBottom
        },
		created: function() {

		},
		methods: {

		}
	}
</script>