<template>
  <div class="card-modal">
    <div class="card-content">
      <button @click="closeModal" class="close-button">X</button>
      <img :src="card.imageUrl" alt="" class="card-image" />
      <div class="card-body">
        {{ card.shortDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object // The card data you want to display in the modal
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.card-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.card-content {
  background-color: #fff;
  width: 50%; /* Adjust the width as needed for responsiveness */
  max-height: 80%; /* Maximum height of the card modal */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  overflow: auto; /* Add scrollbars if content exceeds the maximum height */
  position: relative;
}

.card-image {
  width: 100%;
  object-fit: cover;
  max-height: 60vh; /* Adjust the maximum height for the image */
}

.close-button {
  position: absolute;
  top: 1px;
  right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
button{
  font-size: 1.4em;
  color: red;
  border: 5px solid black;
  border-radius: 50%;
}

.card-body {
  margin-top: 10px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .card-content {
    width: 90%; /* Adjust width for medium-sized screens */
    margin: 20px;
  }

  @media screen and (max-width: 480px) {
    .card-content {
      width: 95%; /* Adjust width for smaller screens */
      margin: 10px;
    }
  }
}
</style>
