<template>
	<div>
		<footer class="footer">
			<div class="container footer__content">
				<ul class="footer__list">
					<h1 class="footer__list-title">
						{{ $t('footerListTranslate.nav') }}
					</h1>
					<li v-for="(link, i) in links" :key="i">
						<a :href="link.to" class="footer__list-link">{{ $t(link.name) }}</a>
					</li>
				</ul>

				<img src="../assets/images/booking.png" alt="" />

				<ul class="footer__list">
					<h1 class="footer__list-title">
						{{ $t('footerListTranslate.contactsUs') }}
					</h1>

					<p>{{ $t('footerListTranslate.address') }}</p>

					<li v-for="(link, i) in links2" :key="i">
						<a href="#" class="footer__list-link">{{ $t(link.name) }}</a>
					</li>
					<p>{{ $t('footerListTranslate.phone') }}</p>
				</ul>
			</div>
			<p class="footer__bottom-text">
				© 2024 Faxira Travel All rights reserved.
			</p>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ name: 'footerListTranslate.main', to: '#' },
				{ name: 'footerListTranslate.about', to: '#about' },
				{ name: 'footerListTranslate.booking', to: '#booking' },
				{ name: 'footerListTranslate.contacts', to: '#contacts' },

				{ name: 'footerListTranslate.tours', to: '#tickets' },
			],
			links2: [
				{ name: 'footerListTranslate.prospect' },

				{ name: '+998(90)960 98 92' },
			],
		}
	},
}
</script>

<style>
.footer {
	margin-top: 50px;
	padding: 64px 0;
	box-shadow: inset 0px 1px 0px 0px rgb(196, 205, 213);
	background: #0a8b9ac8;
	padding-bottom: 25px;
}

.footer__content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.footer__content img {
	width: 30%;
	border-radius: 30px;
}

.footer__list {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.footer__list p {
	color: #ffffff;

	font-size: 18px;
}
.footer__list li:hover {
	transform: scale(1.1) translateY(5px);
	text-decoration: underline;
}
.footer__list li {
	color: #ffffff;
}
.footer__list img {
	width: 30%;
}
.footer__list-title {
	/* medium 18 \ 28 */
	color: rgb(255, 255, 255);

	font-size: 30px;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: 0%;
}
.footer__list-link {
	/* 16/light 16 \ 26 */
	color: rgb(255, 255, 255);

	font-size: 16px;
	font-weight: 300;
	line-height: 26px;
	letter-spacing: 0%;
}

.text {
	/* 14/light 14 \ 24 */
	color: rgb(196, 205, 213);

	font-size: 14px;
	font-weight: 300;
	line-height: 24px;
	letter-spacing: 0%;
}
.footer__bottom-text {
	margin-top: 74px;
	color: rgb(196, 205, 213);

	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0%;
	text-align: center;
}
@media (max-width: 991.99px) {
	.footer__content {
		display: flex;
		flex-direction: column;
	}
	.footer__content img {
		margin-top: 50px;
		margin-bottom: 50px;
		width: 60%;
	}
}

@media (max-width: 767.99px) {
	.footer__content h1 {
		font-size: 32px;
		text-align: center;
	}
	.footer__content {
		text-align: center;
		align-items: center;
		flex-direction: column;
	}
}
</style>
