<script>
export default {
    
}
</script>

<template>
    <div class="container-fluid main-container d-flex align-items-center justify-content-center">
        <div class="text-center text-white">
            <h1>Nome Bar</h1>
            <span>Cocktail Bar</span>
        </div>
    </div>

    <div class="container my-5 text-light">
        <div class="row">
            <div class="col-8">
                <div class="m-5">
                    Benvenuti al nostro cocktail bar, dove la passione per i cocktail artigianali si unisce all'ospitalità eccezionale. Con ingredienti selezionati e bartender esperti, offriamo esperienze uniche in un'atmosfera accogliente. Siamo qui per creare momenti indimenticabili insieme a voi. Prova i nostri cocktail e lasciati sorprendere.
                </div>

                <div class="m-5">
                    Vieni a trovarci e scopri il fascino e l'eleganza dei nostri cocktail artigianali. Siamo entusiasti di darti il benvenuto e di accompagnarti in un viaggio unico attraverso i sapori e le emozioni che solo un cocktail bar come il nostro può offrire. La tua soddisfazione è la nostra più grande ricompensa.
                </div>
            </div>

            <div class="col-4 img-container">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-container{
        height: 100vh;
        background-image: url('https://flawless.life/wp-content/uploads/2021/03/Cocktail-Bar-Roma-cover.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1{
        font-size: 70px;
    }

    .img-container{
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw-0LnnGngVMpFByW5yxaW171le_mFsm__g&usqp=CAU');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .row{
        height: 300px;
    }
</style>