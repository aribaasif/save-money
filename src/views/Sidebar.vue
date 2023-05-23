<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="sidebar">
    <div class="items">
      <div class="logo">
        <img class="logoimg" src="../assets/images/logo.png" alt="" />
      </div>
      <div class="icons-container">
        <div class="icons active">
          <font-awesome-icon class="icon" icon="fa-solid fa-home" />
        </div>
        <div class="icons">
          <font-awesome-icon class="icon" icon="fa-solid fa-chart-line" />
        </div>
        <div class="icons">
          <font-awesome-icon class="icon" icon="fa-solid fa-calendar-check" />
        </div>
        <div class="icons">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-clock-rotate-left"
          />
        </div>
        <div class="icons">
          <font-awesome-icon class="icon" icon="fa-solid fa-user" />
        </div>
      </div>
      <div class="icons-bottom-container">
        <div class="icons">
          <font-awesome-icon class="icon" icon="fa-solid fa-gear" />
        </div>
        <div class="icons" @click="router.push('/')">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-arrow-right-from-bracket"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logo {
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.icons-bottom-container {
  margin-top: 300px;
}
.icons-container {
  margin-top: 40px;
}
.icons {
  padding: 10px 20px;
  width: 4vw;
}
.active {
  background-color: #354152;
  color: #08c39a;
  border-radius: 5px;
}
.active .icon {
  color: #08c39a;
}
.icons:hover {
  background-color: #354152;
  border-radius: 5px;
  cursor: pointer;
}
.sidebar {
  height: 100vh;
  width: 4vw;
  background-color: #0e152c;
  display: flex;
  flex-direction: column;
}
.icon {
  color: #fff;
}
.icon:hover {
  color: #08c39a;
}
.logoimg {
  width: 30px;
  height: 23px;
}
</style>
