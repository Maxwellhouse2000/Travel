<template>
	<div>
		<section id="booking" class="booking">
			<div class="container booking__content">
				<div class="booking__content-item">
					
						<img src="../assets/images/booking.png" alt="" />
					
					<div v-for="(title, i) in titles " :key="i" class="booking__content-info">
						<h1> 			{{ $t(title.title) }}	</h1>
						<p>
							{{ $t(title.descr) }}
						</p>
                        <button><a class="booking__content-info-button-link" href="#contacts">	{{ $t(title.button) }}</a></button>
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
					title: 'bookingSectionTranslate.bookingTitle',
					descr: 'bookingSectionTranslate.bookingDescr',
					button: 'bookingSectionTranslate.book',

				}
			]
		}
	},
}
</script>

<style>
.booking {
	padding: 50px;
	margin-top: 50px;
	background: #0a8b9ac8;
}

.booking__content {
    display: flex;
    justify-content: space-between;
    
}

.booking__content img {
	width: 50%;
	border-radius: 30px;
    margin-bottom: 20px;
}

.booking__content-info {
	display: flex;
	gap: 20px;
	flex-direction: column;
}
.booking__content-info-button-link {
	color: #03706f;
	
	
}
.booking__content-info button {
    background: #ffffff;
    max-width: min-content;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 20px;
    transition: .5s;
	
}
.booking__content-info button a:hover {
   color: #ffffff;
   
	
}
.booking__content-info button:hover {
	background: #03ceb3;
	color: #ffffff;
	transform: scale(1.1) translateY(-10px);

    
	
}
.booking__content-info h1 {
	font-size: 50px;
	color: #ffffff;
   
}
.booking__content-info p {
	color: #ffffff;
	font-size: 20px;
}
@media (max-width: 991.99px) {
	.booking__content {
		
		display: flex;
		flex-direction: column;
	}
	.booking__content img {
		
		width: 100%;
	}
	
}

@media (max-width: 767.99px) {
	.booking__content h1 {
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
