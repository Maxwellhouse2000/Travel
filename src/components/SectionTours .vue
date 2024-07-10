<template>
	<div>
		<section id="tickets" class="section-tickets">
			<div v-for="(title, i) in titles" :key="i" class="ticets__title">
				<h1>{{ $t(title.title) }}</h1>
			</div>

			<div class="container section-tickets__content">
				<div
					v-for="(items, i) in items"
					:key="i"
					class="section-tickets__content-item"
				>
					<img :src="items.img" alt="" />

					<div class="section-tickets__content-item-info">
						<h3>{{ $tc(items.name) }}</h3>

						<button class="tickets__content-item-info-button">
							<a href="#contacts"> {{ $tc(items.button) }}</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			titles: [
				{
					title: 'toursSectionTranslate.toursTitle',
				},
			],
			items: [
				{
					img: require('../assets/images/samarkand.jpg'),
					name: 'toursSectionTranslate.sam',
					button: 'toursSectionTranslate.more'
				},
				{
					img: require('../assets/images/xiva.jpg'),
					name: 'toursSectionTranslate.khi',
					button: 'toursSectionTranslate.more'
				},
				{
					img: require('../assets/images/Buxoro.jpg'),
					name: 'toursSectionTranslate.buk',
					button: 'toursSectionTranslate.more'
				},
				{
					img: require('../assets/images/toshkent.jpg'),
					name: 'toursSectionTranslate.tash',
					button: 'toursSectionTranslate.more'
				},
			],
		}
	},
}
</script>

<style>
.section-tickets h1 {
	margin-top: 50px;
	text-align: center;
	margin-bottom: 50px;
	font-weight: 700;
	font-size: 40px;
}
.section-tickets__content {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
}
.section-tickets__content-item {
	justify-content: center;
	align-items: center;
	border: 1px solid rgb(212, 212, 212);
	border-radius: 30px;
	transition: 0.5s;
}
.section-tickets__content-item:hover,
button {
	transform: scale(1.1) translateY(0.1px);
	color: #02616bc8;
	border: 1px solid rgb(170, 170, 170);
}
.tickets__content-item-info-button:hover {
	border: 1px solid rgb(6, 244, 192);
}
.tickets__content-item-info-button a:hover {
	color: #0dcee3;
}

.section-tickets__content-item-info {
	padding: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
}
.section-tickets__content-item-info button {
	margin-top: 10px;
	color: #000;
	background: #fff;
	border-radius: 30px;
	border: 1px solid black;
	padding: 10px 30px;
}
.section-tickets__content-item-info a {
	margin-bottom: 20px;
	color: #000;
}

.section-tickets__content h1 {
	margin-top: 50px;
	font-size: 40px;
	margin-bottom: 20px;
}
.section-tickets__content-item img {
	background: #fff;
	width: 100%;
	height: 80%;
	border-radius: 16px;
	box-sizing: border-box;
	cursor: pointer;
}
@media (max-width: 991.99px) {
	.section-tickets__content {
		display: flex;
		flex-direction: column;
	}
}

@media (max-width: 767.99px) {
	.section-tickets__content h1 {
		font-size: 32px;
		text-align: center;
	}
	.section-tickets__content-item-info {
		text-align: center;
		align-items: center;
		flex-direction: column;
	}
}
</style>
