<script>

</script>
<template>
  <header>
    <nav>
      <div class="navbar">
        <div class="logo">
          <RouterLink to="/"><img src="/logo.png" alt=""></RouterLink>
        </div>
        <div>
          <RouterLink to="/ContactForm" class="contact">Contact Us</RouterLink>
          <div class="dropdown">
            <button class="dropbtn">
              Companies
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="color: black;">
              <RouterLink to="/fedasCo">Engineering Co</RouterLink>
              <RouterLink to="/fedasFarm">Agro Allied</RouterLink>
              <RouterLink to="/fedasHotel">Hotel Services</RouterLink>
              <RouterLink to="/fedasStores">Stores and Supermarket</RouterLink>
              <RouterLink to="/fedasWater">F&F Water Services</RouterLink>
              
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

.logo img{
  width: 70px;
  height: 70px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  
}

.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 20px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}


.dropdown:hover .dropbtn {
  background-color: #90613f;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
a{
  text-decoration: none;
  color: white;
}
@media (max-width: 789px) {
  .navbar{
    padding: 0 0.4rem;
  }
  .contact{
    display: none;
  }
}
</style>
