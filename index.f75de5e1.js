"use strict";
const populationSpan\u044F = document.querySelectorAll("span.population");
const populationValues = [];
populationSpan\u044F.forEach((span)=>{
    const populationNumber = parseFloat(span.textContent.replace(/,/g, ""));
    populationValues.push(populationNumber);
});
const totalPopulation = populationValues.reduce((sum, value)=>sum + value, 0);
const averagePopulation = totalPopulation / populationValues.length;
const formattedTotalPopulation = totalPopulation.toLocaleString();
const formattedAveragePopulation = averagePopulation.toLocaleString();
document.querySelector("span.total-population").textContent = formattedTotalPopulation;
document.querySelector("span.average-population").textContent = formattedAveragePopulation;

//# sourceMappingURL=index.f75de5e1.js.map
