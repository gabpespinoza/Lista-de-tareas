let map = L.map('map').setView([-17.388857, -66.156207], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);

console.log(hola)