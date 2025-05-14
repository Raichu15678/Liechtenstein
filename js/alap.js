fetch("https://openplzapi.org/li/Communes")
.then(x=>x.json())
.then(y=>megjelenit(y))

function megjelenit(y) {
    console.log(y)
}

document.addEventListener("DOMContentLoaded", () => {
  const latvanyossagokLista = document.getElementById("latvanyossagok-lista");
  latvanyossagok.forEach(latvanyossag => {
    latvanyossagokLista.innerHTML += `
      <div class="col-md-6">
        <div class="card mb-3">
          <img src="images/${latvanyossag.kep}" class="card-img-top" alt="${latvanyossag.nev}">
          <div class="card-body">
            <h5 class="card-title">${latvanyossag.nev}</h5>
            <p class="card-text">${latvanyossag.leiras}</p>
          </div>
        </div>
      </div>
    `;
  });

  const muzeumokLista = document.getElementById("muzeumok-lista");
  muzeumok.forEach(muzeum => {
    muzeumokLista.innerHTML += `
      <div class="col-md-6">
        <div class="card mb-3">
          <img src="images/${muzeum.kep}" class="card-img-top" alt="${muzeum.nev}">
          <div class="card-body">
            <h5 class="card-title">${muzeum.nev}</h5>
            <p class="card-text">Típus: ${muzeum.tipus}</p>
            <p class="card-text">Műtárgyak száma: ${muzeum.mutargyakSzama}</p>
          </div>
        </div>
      </div>
    `;
  });
});


















