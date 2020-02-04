"use strict";

{
    const main = document.querySelector(".main");
    const apiUrl = "http://localhost:5000/api/ninjas/";

    async function getNinjas(event) {
        const response = await fetch(apiUrl);
        const data = await response.json();

        createNinjas(data);
    }

    function createNinjas(ninjas) {
        ninjas.forEach(ninja => {
           const h3 = document.createElement("h3");
           h3.classList.add("ninja");
           h3.textContent = ninja.name;

           const span = document.createElement("span");
           span.classList.add("rank");
           span.textContent = ninja.rank;

           const ninjaSection = document.createElement("section");
           ninjaSection.append(h3, span);

           main.append(ninjaSection);
        });
    }

    getNinjas();
}