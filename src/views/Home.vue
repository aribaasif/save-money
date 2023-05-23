<script setup>
import sidebar from "./Sidebar.vue";

</script>
<template>
  <div class="home">
    <sidebar />
    <div class="home-content">
      <div class="navbar">
        <div class="left">
          <p id="dashboard">Dashboard</p>
          <p class="text">Hi Ariba, Good Morning!</p>
        </div>
        <div class="right">
          <div class="icons">
            <span class="icon">
              <span class="i active">
                <font-awesome-icon class="icon" icon="fa-solid fa-bell" />
              </span>
            </span>

            <span class="icon">
              <span class="i">
                <font-awesome-icon class="icon" icon="fa-solid fa-message" />
              </span>
            </span>
            <span class="icon">
              <span class="i">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-info-circle"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="card">
          <p class="balance">
            AVAILABLE BALANCE <br />
            <span> 1,000,000 PKR </span>
          </p>
          <br /><br />
          <p class="account">
            Saving Account <br />
            <span> 1001 0092 5624 8928 </span>
          </p>
        </div>
        <span class="options-main">
          <span class="options-row">
            <span class="options-container">
              <span class="options">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-arrows-up-to-line"
                />
                <p>Send Money</p>
              </span>
            </span>
            <span class="options-container">
              <span class="options">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-arrows-down-to-line"
                />
                <p>Request Money</p>
              </span>
            </span>
          </span>
          <span class="options-row">
            <span class="options-container">
              <span class="options">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-money-bills"
                />
                <p>Bills & Topup</p>
              </span>
            </span>
            <span class="options-container">
              <span class="options">
                <font-awesome-icon class="icon" icon="fa-solid fa-bullseye" />
                <p>Add Saving Goal</p>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div>
        <p>canvas</p>
</div>
    </div>
  </div>
</template>
<style scoped>
.options-container:hover{
  color: #08c39a;
  font-weight: 900;
}
.options-container {
  background-color: white;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 85px;
  width: 170px;
  margin: 15px 10px;
  cursor: pointer;
}
.options-main {
  display: flex;
  flex-direction: column;
}
.options-row {
  display: flex;
  flex-direction: row;
}
.details {
  width: 53%;
  display: flex;
  justify-content: space-between;
}
.card .balance {
  font-size: smaller;
}
.balance span {
  font-weight: bold;
  font-size: x-large;
}
.card .account {
  font-size: smaller;
}
.account span {
  font-weight: bold;
  font-size: larger;
}
.card {
  color: white;
  height: 200px;
  width: 350px;
  border-radius: 15px;
  margin: 15px 0px;
  padding: 20px;
  background-color: #08c39a;
  cursor: pointer;
}
.right .icon .i {
  background-color: white;
  padding: 5px 10px;
  margin: 7px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
}
.right .icon .i:hover {
  color: #08c39a;
}
.active {
  color: #08c39a;
  font-weight: bolder;
}
.right {
  margin-right: 40px;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#dashboard {
  font-weight: 700;
  font-size: 25px;
}
.text {
  font-size: 16px;
  font-weight: 500;
  color: #878787;
}
.home {
  display: flex;
  flex-direction: row;
  background-color: #0e152c;
}
.home-content {
  background-color: #ecedf6;
  width: 96vw;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  padding: 30px;
}
</style>
