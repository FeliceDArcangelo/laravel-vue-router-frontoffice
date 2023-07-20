<template>
  <div class="p-0 m-0 d-flex">
    <div class="about-image w-50">
      <img src="../../src/assets/img/contact.jpg" alt="" />
    </div>
    <div class="about-text align-self-center w-50 p-3">
      <h1 class="text-center text-info">Contact us</h1>
      <form novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="email" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="5"></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="newsletter" />
          <label class="form-check-label" for="newsletter"
            >Subscribe to our newsletter</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
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
</style>
