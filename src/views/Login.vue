<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="main">
    <div class="logo">
      <div class="topleft">
        <img src="../assets/images/logo.png" alt="" />
        <div class="logotext">
          <p>Saving<span>Goals</span></p>
        </div>
      </div>
      <div class="links">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Downloads</a>
        <a href="">Contact Us</a>
      </div>
    </div>
    <div class="main1">
      <div class="cont1">
        <p>We help you achieve your <span>SavingGoals</span></p>
      </div>
      <div class="cont2">
        <div class="login">
          <h1>Login</h1>
          <div class="input-icons">
            <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
            <input class="input-field" type="text" placeholder="Email" /><br />
            <font-awesome-icon class="icon" icon="fa-solid fa-key" />
            <input class="input-field" type="password" placeholder="Password" />
            <div class="bottom">
              <div class="remember">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <div>
                <p id="forgot">Forgot Password?</p>
              </div>
            </div>
            <button @click="router.push('/home')" class="button" type="submit">
              Login
            </button>
            <div class="bottom2">
              <p>Not a member yet? <a>Register</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.topleft {
  display: flex;
  flex-direction: row;
}
#forgot:hover {
  color: #08c39a;
  cursor: pointer;
}
.bottom2 p a:hover {
  color: #fff;
  cursor: pointer;
}
button{
  cursor: pointer;
}
.login h1 {
  font-size: 30px;
  font-weight: 600;
  margin: 20px;
}
.bottom2 {
  width: 40%;
  margin: auto;
}
.bottom2 p {
  color: #fff;
}
.bottom2 p a {
  color: #08c39a;
}
.button {
  width: 40%;
  height: 42px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  border: none;
  margin: 40px;
  margin-bottom: 5px !important;
  padding: 15px;
  font-weight: 700;
  background-color: #08c39a;
}
.remember {
  display: flex;
  flex-direction: row;
}
.bottom {
  width: 40%;
  display: flex;
  margin: auto;
  justify-content: space-between;
}
.input-field {
  width: 40%;
  height: 40px;
  border-radius: 5px;
  margin: 7px;
  border: none;
  background-color: #354152;
  color: #fff;
  font-size: 16px;
  padding: 15px;
}
.input-field::placeholder {
  color: #fff;
}
.input-field:focus {
  border: none;
}
.icon {
  color: #fff;
}
.cont1 {
  width: 50vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
}
.cont1 p {
  color: #fff;
  font-weight: 600;
  font-size: 3rem;
}
.cont1 p span {
  color: #08c39a;
  font-weight: 600;
  font-size: 3.5rem;
}
.cont2 {
  width: 50vw;
  color: #fff;
  margin: auto;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.main1 {
  min-height: 80vh;
  display: flex;
  flex-direction: row;
}
.main {
  min-height: 100vh;
  background-color: #0e152c;
}
.logo img {
  margin: 20px;
  width: 50px;
  height: 30px;
}
.logo p {
  font-weight: 500;
  font-size: 20px;
  display: inline;
  color: #fff;
  margin-top: -100px;
}
.logo p span {
  font-weight: 500;
  display: inline;
  color: #08c39a;
}
.logo .logotext {
  margin-left: -9px;
  display: inline;
  margin-top: 20px !important;
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.links a {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  margin: 30px;
  margin-top: -30px !important;
}
.links a:hover {
  cursor: pointer;
  color: #08c39a;
}
.links {
  margin-top: 20px;
  margin-right: 100px !important;
}
</style>
