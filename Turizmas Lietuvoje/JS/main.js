// Define locations with coordinates, names, savivaldybe, and sectors
var locations = [
    { name: "Užupio konstitucija", sector: "popular_place", latlng: [54.680146, 25.295642], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Paupio Turgus", sector: "restaurant", latlng: [54.678633, 25.30254], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Gedimino pilies bokštas", sector: "popular_place", latlng: [54.68675, 25.29069], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Kazio Varnelio namai", sector: "museum", latlng: [54.67833, 25.28782], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Vilniaus Universitetas", sector: "popular_place", latlng: [54.682571, 25.287643], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Lietuvos didžiųjų kunigaikščių rūmai", sector: "museum", latlng: [54.686172, 25.289013], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "MO museum", sector: "museum", latlng: [54.6794, 25.277764], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Vilniaus Katedra", sector: "popular_place", latlng: [54.685827, 25.287669], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Trijų Kryžių kalnas", sector: "popular_place", latlng: [54.686777, 25.297563], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Taikomosios dailės ir dizaino museum", sector: "museum", latlng: [54.688274, 25.291962], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "TV bokštas", sector: "popular_place", latlng: [54.687118, 25.214626], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Lietuvos nacionalinio muziejaus Naujasis arsenalas", sector: "museum", latlng: [54.687358, 25.289119], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Signatarų namai", sector: "popular_place", latlng: [54.682347, 25.289193], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Geležinkelių museum", sector: "museum", latlng: [54.670417, 25.28424], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Pinigų museum", sector: "museum", latlng: [54.686517, 25.282549], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Pilies gatvė", sector: "street", latlng: [54.682949, 25.289158], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Vilniaus gynybinės sienos bastėja", sector: "museum", latlng: [54.677093, 25.292342], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Lietuvos Respublikos Prezidento kanceliarija", sector: "popular_place", latlng: [54.68324, 25.28602], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Vilniaus Rotušė", sector: "popular_place", latlng: [54.678283, 25.287048], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Lietuvos Respublikos Seimo rūmai", sector: "popular_place", latlng: [54.691119, 25.261808], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Gedimino prospektas", sector: "street", latlng: [54.68818, 25.273539], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Užupio tilto sūpynės", sector: "popular_place", latlng: [54.680519, 25.292455], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Verkių dvaras", sector: "popular_place", latlng: [54.7481, 25.292769], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Literatų gatvė", sector: "street", latlng: [54.682232, 25.290198], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Aušros Vartai", sector: "chapel", latlng: [54.674362, 25.289518], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Šv. Onos bažnyčia", sector: "church", latlng: [54.683103, 25.293068], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Vilniaus Šv. Apaštalų Petro ir Povilo bažnyčia", sector: "church", latlng: [54.694135, 25.306115], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Šv. Jonų bažnyčia", sector: "church", latlng: [54.682572, 25.28854], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Rasų kapinės", sector: "cemetery", latlng: [54.67014, 25.3019], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Pūčkorių atodanga", sector: "observation_deck", latlng: [54.69217, 25.35283], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Liepkalnio kalnas", sector: "ski_resort", latlng: [54.655573, 25.307087], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Belmontas", sector: "park", latlng: [54.683914, 25.356011], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Vingio Parkas", sector: "park", latlng: [54.683072, 25.23639], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Bernardinų sodas", sector: "park", latlng: [54.68436, 25.295448], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Meating Room", sector: "restaurant", latlng: [54.685464, 25.279642], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Lokys", sector: "restaurant", latlng: [54.679947, 25.286416], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Mason Restoranas", sector: "restaurant", latlng: [54.67912, 25.28858], savivaldybe: "Vilniaus miesto savivaldybė" },
    { name: "Europos Centras", sector: "popular_place", latlng: [54.906615, 25.319091], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Europos Parkas", sector: "park", latlng: [54.825338, 25.352987], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Pelėdų parkas", sector: "park", latlng: [54.580327, 25.35484], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Medininkų pilis", sector: "castle", latlng: [54.539441, 25.649992], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Liubavo dvaras", sector: "manor", latlng: [54.850779, 25.341393], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Houvalto dvarą", sector: "manor", latlng: [54.867743, 25.06149], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Pilsudskio dvaras Pikeliškėse", sector: "manor", latlng: [54.875226, 25.25882], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Zamečkavo skulptūrų parkas", sector: "park", latlng: [54.80696, 25.397167], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Gėlos II-asis paplūdimys", sector: "beach", latlng: [54.852993, 25.511075], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Vyžulionių dvaras", sector: "manor", latlng: [54.940259, 25.292155], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Dūkštų ąžuolyno pažintinis takas", sector: "park", latlng: [54.833304, 24.950946], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Dūkštos pažinitinis takas", sector: "park", latlng: [54.826825, 24.946425], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Karmazinų piliakalnis", sector: "mound", latlng: [54.819235, 24.931331], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Karmazinų pažintinis takas", sector: "park", latlng: [54.81569, 24.964469], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Provansalio dvaras", sector: "manor", latlng: [54.899553, 25.244574], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Araks Restaurant", sector: "restaurnat", latlng: [54.82811, 25.277111], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Golf and Grill", sector: "restaurant", latlng: [54.91014, 25.31237], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Pušynėlis", sector: "restaurant", latlng: [54.81531, 24.9186], savivaldybe: "Vilniaus Rajono savivaldybė" },
    { name: "Elektrėnų Švč. Mergelės Marijos Kankinių Karalienės bažnyčia", sector: "church", latlng: [54.782083, 24.68078], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Ausiutiškių regykla (Apžvalgos aikštelė)", sector: "observation_deck", latlng: [54.776421, 24.936364], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Ausiutiškių konglomeratas (Geologinė vertybė)", sector: "stone", latlng: [54.778594, 24.938133], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Panerių dvaras", sector: "manor", latlng: [54.785561, 24.910064], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Alkų ąžuolas (Gamtinis paveldas)", sector: "tree", latlng: [54.848377, 24.856208], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Paalkių piliakalnis", sector: "mound", latlng: [54.847752, 24.857775], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Beižionių akmuo", sector: "stone", latlng: [54.679706, 24.49397], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Kietaviškių Švč. Trejybės bažnyčia", sector: "church", latlng: [54.760939, 24.606409], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Elektrėnų kabantis tiltas", sector: "bridge", latlng: [54.778731, 24.654473], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Elektrėnų pontoninė prieplauka", sector: "popular_place", latlng: [54.781135, 24.662548], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Lietuvos ledo ritulio museum/ Ledo rūmai", sector: "popular_place", latlng: [54.784501, 24.669679], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Elektrėnų Vaikų pasaulis", sector: "park", latlng: [54.783319, 24.674188], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Vievio Šv. Onos bažnyčia", sector: "church", latlng: [54.769896, 24.817335], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Lietuvos kelių museum", sector: "museum", latlng: [54.772806, 24.814753], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Grill Bar", sector: "restaurant", latlng: [54.78788, 24.70273], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Sushi City Elektrėnai", sector: "restaurant", latlng: [54.78898, 24.67296], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Paragauk Pats Fast Food", sector: "restaurant", latlng: [54.784417, 24.669007], savivaldybe: "Elektrėnų savivaldybė" },
    { name: "Rūdninkų švč. Trejybės Bažnyčia", sector: "church", latlng: [54.43209, 25.150791], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Jašiūnų dvaras", sector: "manor", latlng: [54.433565, 25.298703], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Vilkiškių dvaras", sector: "manor", latlng: [54.466116, 25.41852], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Paulavos respublika", sector: "historical_landmark", latlng: [54.456218, 25.473803], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Mikniškių dvaras", sector: "manor", latlng: [54.447253, 25.519481], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Gojaus šv. Nikalojaus Stebukladario Cerkvė", sector: "church", latlng: [54.418783, 25.32152], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Dieveniškių švč. Mergelės Marijos Rožančinės Bažnyčia", sector: "church", latlng: [54.195125, 25.625353], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Butrimonių šv. Arkangelo Mykolo Bažnyčia", sector: "church", latlng: [54.247965, 25.170176], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Jašiūnų šv. Onos Bažnyčia", sector: "church", latlng: [54.439911, 25.320999], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Eišiškių Kristaus žengimo į dangų bažnyčia", sector: "church", latlng: [54.18109, 25.00458], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Turgelių Šv. Felikso de Valua koplyčia", sector: "chapel", latlng: [54.453493, 25.510962], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Vagnerių rūmai", sector: "manor", latlng: [54.311949, 25.393109], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Švedų koplyčia", sector: "chapel", latlng: [54.184625, 25.640338], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Grybiškių Ąžuolas", sector: "tree", latlng: [54.248534, 25.6402], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Stakų ąžuolas", sector: "tree", latlng: [54.290144, 25.553244], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Rėžių akmuo", sector: "stone", latlng: [54.257695, 25.126355], savivaldybe: "Šalčininkų rajono savivaldybė" },
    { name: "Čiobiškio urvas", sector: "cave", latlng: [54.966667, 24.650345], savivaldybe: "Širvintų rajono savivaldybė" },
    { name: "Bartkuškio kopa", sector: "dune", latlng: [54.89304, 24.95339], savivaldybe: "Širvintų rajono savivaldybė" },
    { name: "Juodiškių dvaras", sector: "manor", latlng: [55.064529, 25.183926], savivaldybe: "Širvintų rajono savivaldybė" },
    { name: "Kernavės piliakalniai", sector: "mound", latlng: [54.883292, 24.851284], savivaldybe: "Širvintų rajono savivaldybė" },
    { name: "Baltas kalnas", sector: "hill", latlng: [54.886862, 24.829989], savivaldybe: "Širvintų rajono savivaldybė" },
    { name: "Adamavo ąžuolas", sector: "tree", latlng: [55.174872, 26.275843], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Lino verdenė (šaltinis)", sector: "popular_place", latlng: [55.162906, 26.248079], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Ožkos akmuo", sector: "stone", latlng: [55.14623, 25.727976], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Adutiškio piliakalnis", sector: "mound", latlng: [55.15746, 26.589612], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Cirkliškio piliakalnis", sector: "mound", latlng: [55.11889, 26.1481], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Kačėniškės piliakalnis", sector: "mound", latlng: [55.22071, 26.26205], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Labanoro bažnyčia", sector: "church", latlng: [55.266233, 25.774572], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Šv. Edvardo bažnyčia", sector: "church", latlng: [55.160848, 26.002854], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Švenčionių stačiatikių Šv. Trejybės cerkvė", sector: "church", latlng: [55.131169, 26.154585], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Pakretuonės vandens malūnas", sector: "water_mill", latlng: [55.274436, 26.062511], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Regykla prie Staškinės ežero", sector: "observation_deck", latlng: [55.20013, 26.35453], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Asvejos ež.", sector: "biggest_lake", latlng: [55.057152, 25.443608], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Mitologinis pėsčiųjų takas", sector: "park", latlng: [55.19427, 26.20544], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Nalšios museum Švenčionyse", sector: "museum", latlng: [55.134761, 26.159884], savivaldybe: "Švenčionių rajono savivaldybė" },
    { name: "Švč. Dievo Motinos Gimimo cerkvė", sector: "church", latlng: [54.640769, 24.933288], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Šv. Jono Pauliaus II paminklas (Trakai)", sector: "sculpture", latlng: [54.642998, 24.934428], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Angelų Kalva", sector: "popular_place", latlng: [54.677211, 24.927738], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Bulvių kelio apžvalgos aikštelė", sector: "observation_deck", latlng: [54.67057, 24.937684], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Užutrakio dvaro sodybos rūmai", sector: "manor", latlng: [54.659699, 24.943652], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Skrebio miško pažintinis pėsčiųjų takas", sector: "park", latlng: [54.58281, 24.55607], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Lentvario Viešpaties Apreiškimo Švč. Mergelei Marijai bažnyčia", sector: "church", latlng: [54.641585, 25.048538], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Senųjų Trakų piliavietė", sector: "mound", latlng: [54.60562, 24.984782], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Trakų salos pilis", sector: "castle", latlng: [54.652295, 24.933557], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Žuklijų I piliakalnis", sector: "mound", latlng: [54.509685, 24.68252], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Velnio duobė", sector: "pit", latlng: [54.611676, 24.51551], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Senoji kibininė", sector: "restaurant", latlng: [54.65096, 24.92401], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Kybynlar", sector: "restaurant", latlng: [54.647638, 24.933525], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Trakų dvarelis", sector: "restaurant", latlng: [54.64931, 24.93003], savivaldybe: "Trakų rajono savivaldybė" },
    { name: "Sukinių piliakalnis", sector: "mound", latlng: [55.1502, 24.63773], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Akmuo Mokas", sector: "stone", latlng: [55.16473, 24.65001], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Vaitkuškio dvaras- grafų Kosakovskių rezidencija", sector: "manor", latlng: [55.209229, 24.798976], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Pabaisko Švč. Trejybės bažnyčia", sector: "church", latlng: [55.16609, 24.764601], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Ukmergės piliakalnis", sector: "mound", latlng: [55.249719, 24.768497], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Taujėnų dvaras", sector: "manor", latlng: [55.396973, 24.760127], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Prezidento Antano Smetonos dvaras", sector: "manor", latlng: [55.425338, 24.563571], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Šventupės dvaras", sector: "manor", latlng: [55.322374, 24.888698], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Užugirio mokykla-museum", sector: "museum", latlng: [55.416939, 24.587595], savivaldybe: "Ukmergės rajono savivaldybė" },
    { name: "Krikštėnų dvaras", sector: "manor", latlng: [55.119243, 24.858708], savivaldybe: "Ukmergės rajono savivaldybė" },
];

// Create a map
var map = L.map('map').setView([54.699, 25.279], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create a LayerGroup for markers
var markerGroup = L.layerGroup().addTo(map);

// Function to create markers
function createMarkers() {
    markerGroup.clearLayers(); // Clear existing markers

    locations.forEach(function(location) {
        var marker = L.marker(location.latlng).addTo(markerGroup);
        marker.bindPopup(location.name);
    });
}

// Initial marker creation
createMarkers();

// Function to filter markers based on savivaldybe and sectors
function filterMarkers(savivaldybe, sector) {
    markerGroup.clearLayers(); // Clear existing markers

    locations.forEach(function(location) {
        if ((savivaldybe === "All" || location.savivaldybe === savivaldybe) && (sector === "All" || location.sector === sector)) {
            var marker = L.marker(location.latlng).addTo(markerGroup);
            marker.bindPopup(location.name);
        }
    });
}

// Event listener for filter changes
document.getElementById("filterBtn").addEventListener("click", function() {
    var savivaldybe = document.getElementById("savivaldybeFilter").value;
    var sector = document.getElementById("sectorFilter").value;
    filterMarkers(savivaldybe, sector);
});
