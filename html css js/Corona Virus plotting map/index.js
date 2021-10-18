updateMap();
function updateMap(){
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;
            cases=element.infected;
            let color=`rgb(${cases},0,0)`;
            if (cases>225) {
                color:"rgb(225,0,0)";
            }
            else{
                color:`rgb(${cases},0,0)`;
            }
            // Mark on the map
             marker = new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });

    })
}
let interval=20000;
setInterval(updateMap,interval)
