<template>
    <div>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            My Website
          </a>
          <div class="navbar-burger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': menuOpen }">
          <div class="navbar-start">
            <a class="navbar-item" href="#">Home</a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Services</a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="#">Service 1</a>
                <a class="navbar-item" href="#">Service 2</a>
                <a class="navbar-item" href="#">Service 3</a>
              </div>
            </div>
            <a class="navbar-item" href="#">About</a>
            <a class="navbar-item" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
/* Navbar styles */
.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
}

.navbar-brand {
  padding: 10px 20px;
}

.navbar-burger {
  color: #fff;
  cursor: pointer;
}

.navbar-menu {
  background-color: #333;
  display: inline-flex;
}

.navbar-link {
  color: #fff;
}

.navbar-dropdown {
  background-color: #333;
}

.navbar-item {
  color: #fff;
}

/* Active menu item */
.navbar-item.is-active {
  background-color: #555;
}

/* Hover effect for dropdown */
.navbar-item.has-dropdown:hover .navbar-dropdown {
  display: block;
}

/* Dropdown styles */
.navbar-dropdown {
  display: none;
}

/* Customize the dropdown items */
.navbar-dropdown a {
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
}

/* Hover effect for dropdown items */
.navbar-dropdown a:hover {
  background-color: #555;
}

/* Style the brand link */
.navbar-brand a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

/* Responsive styles for mobile */
@media screen and (max-width: 768px) {
  .navbar-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }

  .navbar-menu.is-active {
    display: block;
  }
}
</style>
