<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="landing">
    <div class="about-me">
      <marquee behavior="" direction="" style="font-size: 2em; color: limegreen"
        >WELCOME TO F&F GREENER GROUP OF COMPANIES</marquee
      >
      <div class="custom-card">
        <div class="about-me-content">
          <img src="../../public/CEO2.jpg" alt="Profile Image" class="profile-image" />
          <p class="bio">
            I Chief Aare Oluwayayo Oluwadare Chairman C.E.O. of F and F group of companies a
            potential Nigeria business man and philanthropy. Chief Oluwadare was born in Ekiti state
            he obtain his education within Nigeria.
          </p>
        </div>
      </div>
    </div>

    <div class="card-container">
      <div class="card-item">
        <router-link to="/fedasCo" class="card">
          <img src="../../public/tractor1.jpeg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>F&F Greener Engineering Co Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/fedasFarm" class="card">
          <img src="../../public/farm5.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>Fedas Agro Allied Farms Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/fedasHotel" class="card">
          <img src="../../public/hotel8.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>KSSD Hotel Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/fedasWater" class="card">
          <img src="../../public/borehole5.png" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>Fedas Water Services Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/fedasStores" class="card">
          <img src="../../public/store2.jpeg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>F&F Stores and Supermarket</h2>
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="footer-item">
        F&F GREENER ENGINEERING CO LTD KM 5, <br />
        IWOROKO ROAD, OPPOSITE EKITI STATE WATER CORPORATION HEADQUARTERS, <br />
        ADO EKITI TEL: 08132214142, 08066562376
      </div>

      <div class="footer-item">
        FEDAS AGRO ALLIED FARMS LTD BEHIND IREWOLEDE ESTATE,<br />
        OFF ILAWE ROAD, <br />ADO EKITI, EKITI STATE
      </div>

      <div class="footer-item">
        KSSD HOTEL LTD ALONG NTA OFF ILAWE ROAD, <br />
        ADO EKITI TEL: 09036321835
      </div>

      <div class="footer-item">
        FEDAS WATER SERVICES LTD. <br>SHOP NO. 33/24 PURPLE STONE PLAZA <br>APO ABUJA TEL: 08069013057,
        08132214142
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.landing {
  background: #ffff;
}
.about-me {
  text-align: center;
  padding: 20px;
  background: #5d5d5a;
}

.custom-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #a2a29c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card-title {
  font-size: 24px;
  color: #333;
}

.profile-image {
  width: 200px;
  height: 200px;
  /* border-radius: 50%; */
  object-fit: cover;
  margin: 20px auto;
}

.bio {
  font-size: 16px;
  line-height: 1.4;
  color: #fff;
}

h1 {
  font-size: 2rem;
  /* color: #fff; */
}

p {
  font-size: 1.2rem;
  color: #cccccc;
}

.card-container {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next line on small screens */
  justify-content: space-around;

  margin: 0 auto;
}

.card-item {
  max-width: 230px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(34, 16, 16, 0.4);
  margin: 16px;
  padding: 2px;
  text-align: center;
}

.card {
  display: block;
  text-decoration: none;
  /* border: 1px solid #ccc;
  border-radius: 5px; */
  overflow: hidden;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-description {
  padding: 10px;
  text-align: center;
}

h2 {
  font-size: 18px;
  margin: 0;
  color: #333;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 1rem;
  }

  .card {
    width: 100%;
    margin: 10px 0;
    height: auto;
  }
  .card-item {
    max-width: 400px;
  }
  .footer{
    flex-direction: column;
    gap: 20px;
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
  max-width: 315px;
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
