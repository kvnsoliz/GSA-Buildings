// For bundlers such as Vite and Webpack omit https://esm.sh/
import { select, selectAll } from 'https://esm.sh/d3-selection';
import { rgb } from 'https://esm.sh/d3-color';
import 'https://esm.sh/d3-transition';


function random(x) {return Math.floor(Math.random() * x);}


select("svg")
  .append("rect")
  .classed('shape', true)
  .attr("x", 260)
  .attr("y", 25)
  .attr("width", "120")
  .attr("height", "60")
  .transition()
  .attr("fill", "red")
select("svg")
  .append("circle")
  .classed('shape', true)
  .attr("cx", 150)
  .attr("cy", 55)
  .attr("r", 40)
  .attr("fill", "lightgreen")

select("svg")
.append("text")
.classed('shape', true)
.attr("x", 200)
.attr('y', 120)
.text("This is art")

select('button')
.style('background-color', 'yellow')
.on('click', function() {
  selectAll('.shape')
  .transition()
  .delay(function(d, i) {
			return i * 100;
		})
  .duration(2000)
  .style('fill',  rgb(random(255), random(255), random(255)))
  .attr('x', (random(500)))
  .attr('cx', (random(700)))
  .text('This is rectangle')
  .attr('y', (random(50)))
  .attr('width', (random(200)))
  .attr('height', (random(200)))
});
