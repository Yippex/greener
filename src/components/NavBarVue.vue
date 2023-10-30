<template>
  <nav class="navbar">
    <div class="container">
      <div class="brand">
        <a href="#">Your Brand</a>
      </div>
      <div class="menu" :class="{ active: isMenuOpen }">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li class="dropdown">
            <a href="#">Services</a>
            <ul class="dropdown-menu">
              <li><a href="#">Service 1</a></li>
              <li><a href="#">Service 2</a></li>
              <li><a href="#">Service 3</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <button class="menu-button" @click="toggleMenu">Menu</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Custom CSS for the navbar */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand a {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
}

.menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu li {
  margin-right: 20px;
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #fff;
}

.menu-button {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
}

/* Dropdown menu styles */
.dropdown .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #333;
  list-style: none;
  padding: 10px 0;
  width: 150px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease-in;
  }

  .menu.active {
    display: flex;
  }

  .menu-button {
    display: block;
  }
}
</style>
