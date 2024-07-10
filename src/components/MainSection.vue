<template>
	<div>
		<main class="main">
			<div v-for="(title, i) in titles" :key="i" class="main__title">
				<h1>{{ $t(title.title) }}</h1>
				<p>
					{{ $t(title.descr) }}
				</p>
			</div>

			<section id="about" class="about__us">
				<div class="container main__section-content">
					<div
						v-for="(items, i) in items"
						:key="i"
						class="main__section-content-item"
					>
						<img :src="items.img" alt="" />
						<h3>{{ $t(items.name) }}</h3>
						<p>{{ $t(items.descr) }}</p>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			titles: [
				{
					title: 'mainSectionTranslate.mainTitle',
					descr: 'mainSectionTranslate.mainDescr',
				}
			],
			items: [
				{
					img: require('../assets/icons/airplane.svg'),
					name: 'mainSectionTranslate.airport',
					descr: 'mainSectionTranslate.serviceDescr',
				},
				{
					img: require('../assets/icons/checked.svg'),
					name: 'mainSectionTranslate.simpBooking',
					descr: 'mainSectionTranslate.serviceDescr',
					
				},
				{
					img: require('../assets/icons/list.svg'),
					name: 'mainSectionTranslate.guide',
					descr: 'mainSectionTranslate.serviceDescr',
					
				},
				{
					img: require('../assets/icons/sales.svg'),
					name: 'mainSectionTranslate.promo',
					descr: 'mainSectionTranslate.serviceDescr',
				},
			],
		}
	},
}
</script>

<style>
.main__section-content-item h3 {
	color: #000;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	letter-spacing: 0;
	text-align: center;
}
.main__section-content-item {
	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.main__section-content-item img {
	margin-bottom: 20px;
	width: 10%;
}
.main__section-content-item p {
	color: #000;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	letter-spacing: 0;
	font-weight: 400;
	line-height: 24px;
	padding: 0 50px;
}
.main {
	margin-top: 50px;
}
.main h1 {
	text-align: center;
	font-size: 40px;
	margin-bottom: 10px;
}
.main p {
	text-align: center;
	font-size: 15px;
}

.main__section-content {
	display: flex;
}
.main__section-content h3 {
	margin-bottom: 20px;
}
@media (max-width: 991.99px) {
	.main__section-content {
		display: flex;
		flex-direction: column;
	}

	.main__section-content h1 {
		font-size: 50px;

		text-align: center;
	}
	.main__section-content h3 {
		font-size: 50px;

		text-align: center;
	}
	.main__section-content p {
		justify-content: center;
		text-align: center;
	}
}

@media (max-width: 767.99px) {
	.main__section-content-item p {
		font-size: 20px;
		text-align: center;
	}
	.main__section-content h3 {
		font-size: 30px;
		text-align: center;
	}
}
</style>
