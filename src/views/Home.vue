<script setup>
import sidebar from "./Sidebar.vue";
import { RouterView } from "vue-router";
import Chart from "chart.js/auto";
import { onMounted } from "vue";
const data1 = {
  datasets: [{
    label: 'Buying A Car',
    data: [70, 30],
    backgroundColor: [
      '#ff47ab',
      '#ffd6ec'
    ],
    hoverOffset: 4,
    borderRadius: [15,-15]
  }]
};
const data2 = {
  datasets: [{
    label: 'Buying A House',
    data: [60, 40],
    backgroundColor: [
      '#08c39a',
      '#e5f4ff'
    ],
    hoverOffset: 4,
    borderRadius: [15,-15]
  }]
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Incoming",
      backgroundColor: "#088c83",
      borderColor: "#088c83",
      data: [15, 25, 15, 20, 20, 50, 20, 5, 50, 25, 15, 20],
    },
    {
      label: "Outgoing",
      backgroundColor: "#08c39a",
      borderColor: "#04dbc3",
      data: [-20, -10, -25, -20, -50, -20, -50, -25, -10, -15, -10, -20],
    },
  ],
};
const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Transactions",
        padding: {
          top: 10,
          bottom: -40,
        },
        align: "start",
        font: {
          weight: "bolder",
          size: "20",
        },
      },

      legend: {
        display: true,
        position: "top",
        align: "end",
        padding: 100,
        labels: {
          padding: 40,
          usePointStyle: true,
          font: {
            weight: "bold",
            size: "11",
          },
        },
        title: {
          text: "Transactions",
        },
      },
    },
    barPercentage: 0.2,
    borderRadius: 15,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        min: -60,
        max: 60,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value + "k";
          },
          stepSize: 20,
        },
        stacked: true,
      },
    },
  },
};
const config1 = {
  type: 'doughnut',
  data: data1,
  options: {
    cutout: '80%',
  }
};
const config2 = {
  type: 'doughnut',
  data: data2,
  options: {
    cutout: '80%',
  }
};
onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
  const myChart1 = new Chart(document.getElementById("myChart1"), config1);
  const myChart2 = new Chart(document.getElementById("myChart2"), config2);
});
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
      <div class="maincourse">
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
        <div class="chart1">
          <div class="areachart1">
            <div class="areachart">
              <p class="titleincome">Category of Income</p>
              <div class="itemsincome">
                <div class="incomes">
                  <div class="percent80">
                    <p>80%<br><span>Salary</span></p>
                  </div>
                  <div class="percent10">
                    <p>10%<br><span>Rent</span></p>
                  </div>
                  <div class="percent7">
                    <p>7%<br><span>Salary</span></p>
                  </div>
                  <div class="percent3">
                    <p>3%<br><span>Shop</span></p>
                  </div>
                </div>
                <div class="tap">
                  <div class="expenses">
                    <p>Tap to see <br> Expenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chart">
        <div class="canvasdiv">
        <canvas id="myChart"></canvas>
        </div>
        <div class="goals">
          <p class="titleincome">Saving Goals</p>
          <div class="goalscharts">
            <div class="goal1">
              
              <canvas id="myChart1"></canvas><br>
              <p class="goaltext">Buying A Car</p>
            </div>
            <div class="goal2">
              <canvas id="myChart2"></canvas><br>
              <p class="goaltext">Buying A House</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.percentage{
}
.goalscharts{
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
.goaltext{
  color: #878787;
  font-weight: 500;
}
.goal1{
  margin-top: 25px;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 85px;
}
.goal2{
  margin-left: 45px;
  margin-top: 25px;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.goals{
  background-color: white;
  border-radius: 20px;
  width: 70%;
  height: 78%;
  margin-left: 15px;
  margin-top:  70px;
}
.tap{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 40%;
}
.expenses{
  color: #08c39a;
  cursor: pointer;
  background-color: #e5f4ff;
  height: 170px;
  width: 170px;
  margin-left: -100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.expenses p{
  font-weight: 700;
}
.itemsincome {
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.areachart {
  height: 100%;
  width: 650px;
  background-color: white;
  border-radius: 20px;
  margin-top: -15px;
  margin-top: 28px;
}
.incomes {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.percent3{
  background-color: #a762ff;
  color: white;
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 170px;
  margin-left: 60px;
}
.percent3 p{
  font-weight: bolder;
  font-size: 10px;
}
.percent3 p span{
  font-weight: 400;
}
.percent7{
  cursor: pointer;
  background-color: #ff47ab;
  color: white;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: -220px;
  margin-top: 130px;
}
.percent7 p{
  font-weight: bolder;
  font-size: 11px;
}
.percent7 p span{
  font-weight: 400;
}
.percent10{
  cursor: pointer;
  background-color: black;
  margin-left: -70px;
  margin-top:-90px;
  color: white;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.percent10 p{
  font-weight: bolder;
  font-size: 12px;
}
.percent10 p span{
  font-weight: 400;
}
.percent80{
  cursor: pointer;
  background-color: #08c39a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
.percent80 p{
  font-weight: bolder;
}
.percent80 p span{
  font-weight: 400;
}
.titleincome {
  padding-top: 10px;
  color: #666;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
}
.maincourse {
  display: flex;
  justify-content: space-between;
}
.chart1 .areachart1 {
  margin-top: -19px;
  margin-left: 10px;
  height: 110%;
  width: 100%;
  border-radius: 20px;
}
.options-container:hover {
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
.details,
.chart {
  width: 100%;
  height: 52%;
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
  background-color: #f4f7f9;
  width: 96vw;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  padding: 30px;
}
.charts {
  height: 100%;
  width: 100%;
  background-color: red;
}
canvas{
  
}
.canvasdiv{
  width: 1130px;
  padding: 5px;
  background-color: white;
  border-radius: 20px;
}
</style>
