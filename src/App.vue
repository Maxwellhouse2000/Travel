<template>
  <div>
    <NavBar />
    <Header />
    <MainSection />
    <SectionTours />
    <BookingSection />
    <ContactsSection />
    <Footer />

    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import MainSection from '@/components/MainSection.vue'
import SectionTours from './components/SectionTours .vue';
import BookingSection from './components/BookingSection.vue';
import ContactsSection from './components/ContactsSection.vue';
import Footer from './components/Footer.vue';


export default {
  
  components: {
    NavBar,
    Header,
    MainSection,
    SectionTours,
    BookingSection,
    ContactsSection,
    Footer

  },
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Roboto';
}
a {
	text-decoration: none;
}
li {
	list-style: none;
}

input,
textarea,
button {
	background: none;
	border: none;
	outline: none;
	transition: 0.5s;
}

button:active {
	transform: scale(0.95);
}
select {
	color: #000;
	font-family: 'Roboto';
	cursor: pointer;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 48px;
	text-align: left;
	border: none;
	outline: none;
	background: transparent;
}
.container {
	width: 100%;
	max-width: 1140px;
	padding: 0 15px;
	margin: 0 auto;
}
</style>
