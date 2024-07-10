<template>
	<div>
		<header class="header">
			<div class="container header__content">
				<swiper
					:pagination="true"
					:modules="modules"
					class="mySwiper"
					:autoplay="{ delay: 10000, disableOnInteraction: false }"
				>
					<swiper-slide v-for="(slide, index) in slides" :key="index">
						<div class="swiper-slide-content">
							<div class="swiper-slide-content-inner">
								<h1 class="header-title">{{ $t(slide.key) }}</h1>
								<p class="header-descr">{{ $t(slide.descr) }}</p>
							</div>
						</div>
						<img :src="slide.img" class="slide-img" />
					</swiper-slide>
				</swiper>
			</div>
		</header>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import '../assets/style/style.css'
import { Pagination, Autoplay } from 'swiper/modules'

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination, Autoplay],
			slides: [
				{
					key: 'headerTitle.expUzb',
					descr: 'headerTitle.descrUzb',

					img: require('../assets/images/Mountain.jpg'),
				},
				{
					key: 'headerTitle.expSam',
					descr: 'headerTitle.descrUzb',
					img: require('../assets/images/registon.jpg'),
				},
				{
					key: 'headerTitle.expTash',
					descr: 'headerTitle.descrUzb',
					img: require('../assets/images/tashkent.jpg'),
				},
			],
		}
	},
}
</script>

<style>
.header__content {
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: center;
}
.slide-img {
	margin-top: 100px;
	width: 100%;
	height: 80%;
	max-height: 600px;
	border-radius: 50px;
}

.swiper-slide-content {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 200px;
	bottom: 0;
	left: 0;
	right: 0;
	color: #ffffff;
	backdrop-filter: blur(16px);
	background: transparent;
	border-radius: 16px;
	height: 312px;
	padding: 20px;
	width: 63%;
	border-radius: 50px;
}

.swiper-slide-content-inner {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.header-title {
	font-size: 48px;
	font-weight: 700;
}
.header-descr {
	margin-bottom: 20px;
	text-align: center;
}

.swiper-slide-content a {
	background: #fff;
	border: none;
	border-radius: 30px;
	outline: none;
	padding: 16px 40px;
}

@media (max-width: 991.99px) {
	.header__content {
		height: 220px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.header-title {
		font-size: 20px;
	}

	.header-descr {
		font-size: 16px;
	}

	.slide-img {
		margin-top: 50px;
		max-height: 400px;
	}
}

@media (max-width: 767.99px) {
	.swiper-slide-content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		height: 150px;
		width: 100%;
		top: 250px;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.header-title {
		font-size: 20px;
		text-align: center;
		margin-bottom: 10px;
	}

	.header-descr {
		font-size: 14px;
	}

	.slide-img {
		max-height: 300px;
	}
}
</style>
