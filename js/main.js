// Indonesia Covid
const positif = document.querySelector('.positif');
const sembuh = document.querySelector('.sembuh');
const meninggal = document.querySelector('.meninggal');

// Card
fetch('https://api.kawalcorona.com/indonesia/')
    .then(res => res.json())
    .then(res => {
        positif.textContent = res[0].positif;
        sembuh.textContent = res[0].sembuh;
        meninggal.textContent = res[0].meninggal;
    });

// Table
const daftarProvinsi = document.querySelector('.daftar-provinsi');
fetch('https://api.kawalcorona.com/indonesia/provinsi/')
    .then(res => res.json())
    .then(res => {
        let i = 1;
        let showTable = '';
        res.forEach(covid => {
            showTable +=
                `<tr>
                <td>${i++}</td>
                <td>${covid.attributes.Provinsi}</td>
                <td>${covid.attributes.Kasus_Posi}</td>
                <td>${covid.attributes.Kasus_Semb}</td>
                <td>${covid.attributes.Kasus_Meni}</td>
            </tr>`
        });
        daftarProvinsi.innerHTML = showTable;

    })

// Global Covid

// Card
const positifDunia = document.querySelector('.positif-dunia');
const sembuhDunia = document.querySelector('.sembuh-dunia');
const meninggalDunia = document.querySelector('.meninggal-dunia');

const GlobalCovid = function(status, nama) {
    return fetch(`https://api.kawalcorona.com/${status}/`)
        .then(res => res.json())
        .then(res => {
            nama.textContent = res.value;
        })
}
GlobalCovid('positif', positifDunia)
GlobalCovid('sembuh', sembuhDunia)
GlobalCovid('meninggal', meninggalDunia)

// Table
const daftarNegara = document.querySelector('.daftar-negara');

fetch('https://api.kawalcorona.com/')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        let i = 1;
        let tableDunia = '';
        res.forEach(covid => {
            tableDunia +=
                `<tr>
              <td>${i++}</td>
              <td>${covid.attributes.Country_Region}</td>
              <td>${covid.attributes.Confirmed}</td>
              <td>${covid.attributes.Recovered}</td>
              <td>${covid.attributes.Deaths}</td>
          </tr>`
        });
        daftarNegara.innerHTML = tableDunia;

    })