<template>
	<nav class="nav">
		<div class="container nav__content">
			<div class="nav__menu">
				<a сlass="nav__brand" href="#"
					><img src="../assets/images/logo.svg" alt=""
				/></a>
				<ul class="nav__list">
					<li v-for="(link, i) in links" :key="i">
						<a
							:href="link.to"
							class="nav__list-link"
							@click="handleClick(i)"
							:style="{ fontWeight: activeLink === i ? 'bold' : 'normal' }"
						>
							{{ $t(link.key) }}
						</a>
					</li>
				</ul>
				<div class="select__btn">
					<select
						сlass="language__select"
						v-model="selectedLanguage"
						@change="changeLang"
					>
						<option class="language__select-option" value="ru">Ru</option>
						<option class="language__select-option" value="en">En</option>
					</select>
				</div>
				<div class="nav__menu-btn">
					<div class="nav__menu-btn-line"></div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			selectedLanguage: this.$i18n.locale,
			links: [
				{ key: 'navBar.main', to: '#' },
				{ key: 'navBar.about', to: '#about' },
				{ key: 'navBar.tours', to: '#tickets' },
				{ key: 'navBar.booking', to: '#booking' },
				{ key: 'navBar.contacts', to: '#contacts' },
			],
			activeLink: null,
		}
	},
	watch: {
		selectedLanguage(newLang) {
			this.$i18n.locale = newLang
			console.log(newLang)
		},
	},
	methods: {
		handleClick(index) {
			this.activeLink = index
		},
		changeLang(event) {
			this.$i18n.locale = event.target.value
		},
	},
}
</script>

<style>
.nav__menu-btn {
	width: 35px;
	height: 35px;
	display: none;
	align-items: center;
	justify-content: center;
  padding: 5px;
  border:3px solid rgb(0, 0, 0);
}

.nav__menu-btn-line {
	width: 100%;
	height: 2px;
	background-color: rgb(0, 0, 0);
	position: relative;
}
.nav__menu-btn:hover .nav__menu-btn-line {
	background-color: transparent;
}

.nav__menu-btn-line::before {
	content: '';
	width: 100%;
	height: 2px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	top: -7px;
	transition: 0.5s;
}

.nav__menu-btn:hover .nav__menu-btn-line::before {
	top: 0;
	transform: rotate(45deg);
}

.nav__menu-btn:hover .nav__menu-btn-line::after {
	top: 0;
	transform: rotate(-45deg);
}

.nav__menu-btn-line::after {
	content: '';
	width: 100%;
	height: 2px;
	background-color: rgb(0, 0, 0);
	position: absolute;
	top: 7px;
	transition: 0.5s;
  
}

.nav__menu {
	width: 100%;
  
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.nav__brand img {
	backdrop-filter: blur(16px);
	background: transparent;
}
.nav {
	padding: 20px;
	backdrop-filter: blur(16px);
	background: #ffffff80;
	box-shadow: 0 10px 30px 0 #523f6912;
	left: 0;
	position: fixed;
	right: 0;
	z-index: 1030;
	margin-bottom: 100px;
}

.nav__content {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.nav__content img {
	width: 100px;
	height: 50px;
}
.nav__list {
	display: flex;
	gap: 16px;
	transition: 0.5s;
}
.nav__list-link {
	color: #000;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 20px;
	letter-spacing: 0;
	line-height: 48px;
}
.nav__list li:hover {
	transform: scale(1.1) translateY(5px);
}

.language__select {
	color: #000;
	cursor: pointer;

	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 48px;
	text-align: left;
}
.language__select-option {
	color: #000;
	cursor: pointer;

	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 48px;
	text-align: left;
}
.select__btn {
	color: #000;
	cursor: pointer;

	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 48px;
	text-align: left;
}
@media (max-width: 991.99px) {
	.nav {
		border-bottom: transparent;
	}
	.nav__list-link {
		font-size: 20px;
		
	}

	.header__content {
		min-height: 650px;
		flex-direction: column;
	}
}
@media (max-width: 959.99px) {
	.nav {
		border-bottom: transparent;
	}
	.nav__list-link {
		font-size: 20px;
		
	}
.nav__list {
		display: flex;
    align-items: center;
    justify-content: center;
    
	}
	.header__content {
		min-height: 650px;
		flex-direction: column;
	}
}

@media (max-width: 877.99px) {
	.nav {
		position: relative;
	}

	.header__content-title {
		font-size: 32px;
		text-align: center;
	}
	.nav__list {
		display: flex;
	}

	.nav__list-link {
		margin-left: 0;
	}
}
@media (max-width: 767.99px) {
	.nav {
		position: relative;
	}

	.header__content-title {
		font-size: 32px;
		text-align: center;
	}
	.nav__list {
		position: absolute;
		flex-direction: column;
    align-items: center;

		top: -300px;
    
		padding: 15px;
		gap: 10px;
		right: 50px;
		transition: 0.5s;
	}
	

	.nav__menu:hover .nav__list {
		top: 100%;
	}

	.nav__list-link {
		margin-left: 0;
	}

	.nav__menu-btn {
		display: flex;
    align-items: center;
    justify-content: center;
	}
}
</style>
