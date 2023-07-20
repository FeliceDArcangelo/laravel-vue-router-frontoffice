<template>
  <div class="p-0 m-0 d-flex">
    <div class="left w-50">
      <img src="../../src/assets/img/contattaci3.avif" alt="" />
    </div>
    <div class="align-self-center w-50 p-5">
      <h1 class="text-center text-light">Contattaci</h1>
      <form novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input
            type="email"
            class="form-control"
            id="name"
            placeholder="Inserisci il tuo nome"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            class="form-control"
            id="email"
            placeholder="Inserisci la tua email"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Messaggio</label>
          <textarea
            class="form-control"
            id="message"
            rows="5"
            placeholder="Lasciaci un feedback!"
          ></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="newsletter" />
          <label class="form-check-label" for="newsletter"
            >Iscriviti alla nostra newsletter</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

label {
  color: white;
}

.left {
  border: 3px solid lightgrey;
}
</style>
