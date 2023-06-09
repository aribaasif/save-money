<script setup>
import sidebar from "./Sidebar.vue";
import { RouterView } from "vue-router";
import Chart from "chart.js/auto";
import { onMounted } from "vue";
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
      backgroundColor: "#04dbc3",
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
onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
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
                <div class="incomes"></div>
                <div class="tap">
                  Tap to see <br />
                  Expenses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>
</template>
<style scoped>
.itemsincome {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.areachart {
  height: 100%;
  width: 650px;
}
.incomes {
  width: 75%;
  height: 80%;
  background-color: bisque;
  margin: 10px;
}
.tap {
  background-color: #fff;
  font-weight: bold;
  cursor: pointer;
  color: #088c83;
  font-size: 20px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titleincome {
  color: #303030;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.maincourse {
  display: flex;
  justify-content: space-between;
}
.chart1 .areachart1 {
  height: 100%;
  width: 100%;
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
.charts {
  height: 100%;
  width: 100%;
  background-color: red;
}
</style>
