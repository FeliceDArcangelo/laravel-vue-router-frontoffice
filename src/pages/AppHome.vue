<script>

import CocktailList from '../components/CocktailList.vue';
export default {
  components: { 
    CocktailList
  }
};
</script>

<template>
  <div class="text-center text-danger">Ecco i nostri cocktails</div>
  <div class="container">
		<h1 class="text-center text-light">Nome Bar</h1>

		<div id="carouselExample" class="carousel slide">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
						class="d-block w-100 "
						alt="..."
					/>
				</div>
				<div class="carousel-item">
          <img
          src="https://www.thegentlemansjournal.com/_next/image/?url=https%3A%2F%2Fcms.thegentlemansjournal.com%2Fwp-content%2Fuploads%2F2016%2F08%2Fjez-timms-jIejftgdU3w-unsplash-1296x864.jpg&w=3840&q=75"
          class="d-block w-100 caro-img"
          alt="..."
					/>
				</div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1485265449635-ca623a55e95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
            class="d-block w-100"
            alt="..."
          />
        </div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
  <CocktailList></CocktailList>


</template>

<style lang="scss" scoped>


.container-fluid{
  height: 500px;
  background-color: white;
  position: relative;
  z-index: -2;
}

.container-fluid{
  padding-top:150px ;
}

._card{
  height: 300px;
  width: 250px;
  background-image: url("https://lovefoodfeed.com/wp-content/uploads/2022/11/Best-red-cocktails-recipe-px-1200.jpg");

    img{
      height: 100%;
      width: 100%;
    }
}
</style>

