<script>
import { ref, reactive } from 'vue'
import CardModal from '../ModalVue.vue'
import { hoteData } from '../assets/fedasHotel/hotelData'

export default {
  components: {
    CardModal
  },
  setup() {
    const cards = reactive(hoteData)
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
    <marquee behavior="" direction="" style="color: white; font-size: 4rem; margin-bottom: 1px"
      >WELCOME TO KSSD HOTEL SERVICES CO LTD
    </marquee>
    <div class="container-text">
      <h2>KSSD HOTEL SERVICES</h2>

      <p style="margin-top: 20px">
        Home Away from HomeWhether you're traveling for leisure or business, KSSD Hotel Services
        aims to be your home away from home. Come and experience the magic of KSSD Hotel Services.
        We invite you to immerse yourself in the exceptional hospitality, comfort, and luxury that
        we offer.
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
      <p>KSSD HOTEL LTD ALONG NTA OFF ILAWE ROAD,<br> ADO EKITI TEL: 09036321835</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background-image: url('../../public/hotel1.jpg'); /* Replace with your background image path */
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
.landing-page {
  position: relative;
  width: 100%;
  height: 100vh;
}

.background-image {
  background-image: url('hotel1.jpg');
  background-size: cover;
  filter: blur(1px); /* Add the blur effect to the background image */
  width: 100%;
  height: 100%;
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
  .card {
    width: calc(50% - 20px); /* Adjust for 2 cards in a row on smaller screens */
  }

  @media (max-width: 480px) {
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
  max-width: 500px;
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
