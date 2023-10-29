<script>
import { ref, reactive } from 'vue'
import CardModal from '../ModalVue.vue'
import { waterData } from '../assets/fedasWater/waterData'

export default {
  components: {
    CardModal
  },
  setup() {
    const cards = reactive(waterData)
    const isCardModalVisible = ref(false)
    const selectedCard = ref(null)

    const showCardModal = (card) => {
      selectedCard.value = card
      isCardModalVisible.value = true
    }

    const hideCardModal = () => {
      selectedCard.value = null
      isCardModalVisible.value = false
    }

    return {
      cards,
      isCardModalVisible,
      selectedCard,
      showCardModal,
      hideCardModal
    }
  }
}
</script>

<template>
  <div class="container">
    <marquee behavior="" direction="" style="color: white; font-size: 3rem"
      >WELCOME TO FEDAS WATER SERVICES LTD</marquee
    >
    <div class="container-text">
      <h1>FEDAS Water Service Ltd is a leading provider of high-quality water solutions.</h1>
      <p>
        With a commitment to excellence and a dedication to serving communities, we offer a wide
        range of water services and products designed to meet the needs of our customers. Our team
        of experts is passionate about water conservation, purity, and efficient delivery.
      </p>
    </div>
  </div>
  <div class="card-container">
    <div class="card" v-for="card in cards" :key="card.id" @click="showCardModal(card)">
      <img :src="card.imageUrl" alt="" />
      <p>{{ card.shortDescription }}</p>
    </div>

    <CardModal v-if="isCardModalVisible" :card="selectedCard" @close="hideCardModal" />
  </div>
  <div class="footer">
    <div class="footer-item">
      <h3>Address 1</h3>
      <p>123 Main Street</p>
      <p>City, State</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background-image: url('../../public/borehole11.jpg'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  padding: 10px;
  height: 100vh;
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  filter: blur(10px); /* Adjust the blur amount as needed */
}
.container-text {
  color: #fff;
  position: relative;
  margin-top: 13%;
  z-index: 1; /* Place text above the blurred background */
  text-align: center; /* Center-align the text */
  padding: 0 10%;
}
.container-text h1 {
  font-size: 2.5em;
}
.container-text p {
  font-size: 1.2em;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 5% 5%;
}

.card {
  width: 250px; /* Set a fixed width for the cards */
  height: 300px; /* Set a fixed height for the cards */
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

/* Rest of your styles... */

.landing-page {
  position: relative;
  width: 100%;
  height: 100vh;
}

.background-image {
  background-image: url('borehole1.jpg');
  background-size: cover;
  filter: blur(0px);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  position: absolute;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .container-text h1 {
    font: 1.5em;
  }
  .container-text {
    padding: 1%;
  }
  .background-image {
    background-size: cover; /* You can adjust this as needed */
    object-fit: contain;
  }
  .card {
    width: calc(50% - 20px); /* Adjust for 2 cards in a row on smaller screens */
  }

  @media (max-width: 480px) {
    .background-image {
      background-size: contain; /* Adjust to your preference */
      object-fit: cover;
    }
    .card {
      width: 100%; /* Full width for mobile screens */
    }
  }
}
.footer {
  background: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}

.footer-item {
  text-align: center;
  max-width: 200px;
}

.footer h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer p {
  font-size: 16px;
  margin: 0;
}
</style>
