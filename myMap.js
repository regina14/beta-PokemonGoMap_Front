var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
      "pokemon_id" : 13,
      "expire" : 1523287244,
      "longitude" : -111.862240,
      "latitude" : 32.8596651,
    },
    {
      "pokemon_id" : 27,
      "expire" : 1513987244,
      "longitude" : -111.862240,
      "latitude" : 33.289580,
    }
]

//add count_down time as title for each pokemon
function get_counter_down_time_from_timpstamp(expire){
    var now_time = new Date().getTime() / 1000;
    var time_left = expire   - now_time;   // unit: second
    console.log("now_time:", now_time);
    console.log("expire_time:", expire); 
    console.log("left_time:", time_left ); 
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    refresh_pokemon();
}

function refresh_pokemon(){
    var layer = new Microsoft.Maps.Layer();
    var pushpins = [];
    
    for (var i in map_manager.map_items){
        var map_item = map_manager.map_items[i];
        var count_down = get_counter_down_time_from_timpstamp(map_item['expire'])
        var iconUrl = 'https://raw.githubusercontent.com/chenditc-bittiger/pokemon_week3_fronend/master/images/pushpin_images/pokemon/'+ map_item['pokemon_id'] + '.png';    
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 {title: count_down, 
                                                 icon: iconUrl});
        pushpins.push(pushpin);
    }
    layer.add(pushpins);
    map_manger.map.layers.clear();
    map_manger.map.layers.insert(layer);
    //return layer;
}
    


