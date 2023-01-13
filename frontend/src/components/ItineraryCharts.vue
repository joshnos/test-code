<template>
  <img alt="logo" src="../assets/logo.png">
  <div>
    <h3>Flight Itineraries</h3>
    <p>
      This app allows you to check essential information on different itineraries.
    </p>
    <h3>Available itineraries</h3>
    <ul>
      <li><button :class="[currentId == 1 ? 'selected' : '']" @click="getItineraryById(1)">Itinerary #1</button></li>
      <li><button :class="[currentId == 2 ? 'selected' : '']" @click="getItineraryById(2)">Itinerary #2</button></li>
      <li><button :class="[currentId == 3 ? 'selected' : '']" @click="getItineraryById(3)">Itinerary #3</button></li>
      <li><button :class="[currentId == 4 ? 'selected' : '']" @click="getItineraryById(4)">Itinerary #4</button></li>
      <li><button :class="[currentId == 5 ? 'selected' : '']" @click="getItineraryById(5)">Itinerary #5</button></li>
    </ul>
    <p>
      <strong>From:</strong> {{ itineraryData?.from }} <strong>- To:</strong> {{ itineraryData?.to }}
    </p>
    <p>
      <strong>Day starting time in milliseconds since midnight:</strong> {{ itineraryData?.startDayTime }}
    </p>
    <h3>Flight Data</h3>
    <table>
      <tr>
        <th>TIME_StartTime</th>
        <th>BATT_VFilt</th>
        <th>BATT_CFilt</th>
        <th>BATT_Discharged</th>
        <th>BATT_Remaining</th>
        <th>BATT_RemainingV</th>
        <th>BATT_Warning</th>
      </tr>
      <tr v-for="(flight, index) in itineraryData?.flightData" :key="index">
        <td>{{ flight.TIME_StartTime }}</td>
        <td>{{ flight.BATT_VFilt }}</td>
        <td>{{ flight.BATT_CFilt }}</td>
        <td>{{ flight.BATT_Discharged }}</td>
        <td>{{ flight.BATT_Remaining }}</td>
        <td>{{ flight.BATT_RemainingV }}</td>
        <td>{{ flight.BATT_Warning }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getItineraryById } from '../services/itinerary.service';

export default {
  name: 'Itinerary-chart',
  data() {
    return {
      currentId: 1,
      itineraryData: null,
    }
  },
  methods: {
    getItineraryById(id) {
      if (id) this.currentId = id;
      getItineraryById(this.currentId).then(data => this.itineraryData = data);
    }
  },
  mounted(){
    this.getItineraryById()
  },
  computed: {
    myStyles () {
      return {
        height: `${50}px`,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 15%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  margin-bottom: 25px;
  border-radius: 12px;
  border: 2px solid #0A2036;
  padding: 14px 40px;
  background-color: white;
  color: #0A2036;
  transition-duration: 0.4s;
}
button:hover, .selected{
  background-color: #0A2036;
  color: white;
}
table {
  margin: auto;
}
</style>
