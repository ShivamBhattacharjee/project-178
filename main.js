var latitude = 13.052547061481416;
var longitude = 77.50458772698047;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hpdmFtNTY2NzgiLCJhIjoiY2wzaWx2ZXFjMGJ1ZzNqcGN1YzBzeG4zZiJ9.1FzK8R47RwQutJC8fSsF-A";

// creating map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitude, latitude],
  zoom: 4,
});

// creating var for img
var img1=document.querySelector("#cubbon")
var marker1=new mapboxgl.Marker({
  element:img1
})
.setLngLat([77.59293095429344,12.976569287755229])
.addTo(map)

// creating var for img2
var img2=document.querySelector("#nandi")
var marker1=new mapboxgl.Marker({
  element:img2
})
.setLngLat([77.68041661009322,13.378850766573741])
.addTo(map)

var img2=document.querySelector("#nandi")
var marker1=new mapboxgl.Marker({
  element:img2
})
.setLngLat([77.68041661009322,13.378850766573741])
.addTo(map)

var img3=document.querySelector("#tipu")
var marker1=new mapboxgl.Marker({
  element:img3
})
.setLngLat([77.57365222545772,12.95947675758843])
.addTo(map)

var img3=document.querySelector("#tipu")
var marker1=new mapboxgl.Marker({
  element:img3
})
.setLngLat([77.57365222545772,12.95947675758843])
.addTo(map)

var img4=document.querySelector("#lal")
var marker1=new mapboxgl.Marker({
  element:img4
})
.setLngLat([77.58476656778653,12.950973221130509])
.addTo(map)

var img5=document.querySelector("#palace")
var marker1=new mapboxgl.Marker({
  element:img5
})
.setLngLat([77.59204272360911,12.99905870006522])
.addTo(map)

map.addControl(
  new MapboxGeocoder({
    accessToken:mapboxgl.accessToken,
    mapboxgl:mapboxgl
  })
)


