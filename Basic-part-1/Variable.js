function updateUI(data) {
  
  temperatureElement.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`

  // Polar Area Chart 
const ctx = document.querySelector("#airQuilityChart").getContext("2d");

const title = [];
const values = [];

for(const property in data.current.air_quality) {
  console.log(property);
  
  if(["us-epa-index", "gb-defra-index"].includes(property)){
    continue;
  }
  title.push(property);
  values.push(data.current.air_quality[property])
}


// Polar Area Chart 
  const ctx = airQuilityChartElement.getContext("2d");
  const { air_quality } = data.current;
  const title = Object.keys(air_quality).filter(key => !["us-epa-index", "gb-defra-index"].includes(key));
  const values = title.map(key => air_quality[key]);
