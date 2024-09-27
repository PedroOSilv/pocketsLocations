// Inicializa o mapa e define a localização e o nível de zoom
var map = L.map('map').setView([-19.633079983728564, -51.49301638451956], 4);

// Adiciona uma camada de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var fireIcon = L.icon({
    iconUrl: 'images/fogueira.png',
    shadowUrl: '',

    iconSize:     [32, 32], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Array de pontos (latitude e longitude)
var points = [
    { lat: -19.633079983728564, lng: -51.49301638451956, name: "Point 1" },
    { lat: -23.550520, lng: -46.633308, name: "Point 2" },
    { lat: -22.906847, lng: -43.172896, name: "Point 3" },
    { lat: -15.7801, lng: -47.9292, name: "Point 4" }
];

// Adiciona marcadores para cada ponto no mapa
// Função para carregar o conteúdo do popup a partir de um arquivo HTML
fetch('scripts/popupcontent.html')
    .then(response => response.text())
    .then(data => {
        var popupContent = data;

        // Adiciona marcadores para cada ponto no mapa
        points.forEach(function(point) {
            var marker = L.marker([point.lat, point.lng], { icon: fireIcon }).addTo(map);
            marker.bindPopup(popupContent);
        });
    })
    .catch(error => console.error('Erro ao carregar o conteúdo do popup:', error));