// For bundlers such as Vite and Webpack omit https://esm.sh/
import { csv, json } from 'https://esm.sh/d3-fetch';
import { select, selectAll } from 'https://esm.sh/d3-selection';

const data = await json("https://kvnsoliz.github.io/GSA-Buildings/GSA-Buildings.json"); 

// print out all received data
console.log(data);
        
// map extracts one column:
const state = data
  .filter(d => d && d.State)
  .map(d => d.State);
console.log(state);


// but we can also use data.data directly and have access to all fields:
  select("svg")
  .selectAll("circle.rent")
  .data(data.slice(0, 10)) 
  .join("circle")
  .attr("class", "rent")
  .attr("r", d => {
    const sqft = d["Building Rentable Square Feet"];
    return sqft > 0 ? Math.sqrt(sqft) * 0.1 : 2; 
  })
  .attr("cx", (d, i) => (i % 25) * 28 + 30)

  .attr("cy",40)
  .attr("fill", "seagreen")
  .attr("opacity", 0.8);


select("svg")
  .selectAll("circle.available")
  .data(data.slice(0, 10)) // Select exactly 50 items
  .join("circle")
  .attr("class", "available")
  .attr("r", d => {
    const sqft = d["Available Square Feet"];
    return sqft > 0 ? Math.sqrt(sqft) * 0.1 : 2; 
  })
  .attr("cx", (d, i) => (i % 25) * 28 + 30)

  .attr("cy", 100)
  .attr("fill", "slateblue")
  .attr("opacity", 0.8);
