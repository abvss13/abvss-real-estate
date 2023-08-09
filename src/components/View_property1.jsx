import React, { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import * as mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import house1 from './images/house-img-2.webp';
import house2 from './images/house-img-2.webp';
import house3 from './images/hall-img-2.webp';
import house4 from './images/kitchen-img-2.webp';
import house5 from './images/bathroom-img-2.webp';
const View_property1 = () => {
    document.title = "View Property";
    const [time, setTime] = useState(0);
    const divv = document.getElementById('map');
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1YmhhbS0yMTA2IiwiYSI6ImNsanBkcWpzaDAyYzIzcG8wem80dTlwNGoifQ.Wq4Ac9g2DsvDZRsV9EjG1Q';
    useEffect(() => {
      setTimeout(() => {
        setTime(time+1);
      }, 1000);
    if(time > 4){
            
const map = new mapboxgl.Map({
    container: divv, // container ID
    style: 'mapbox://styles/shubham-2106/clk28bv4k004s01pg6odn61bs', // style URL
    center: [75.808 ,26.880], // starting position [lng, lat]
    zoom: 10.50, // starting zoom
});

map.on('load', () => {
    map.addSource('places', {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Modern Flats and Apartments</strong><p><a href="view_property.html" target="_blank" title="Opens in a new window">Modern Flats and Apartments</a></p>',
    'icon': 'marker-editor'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.8315198560554, 26.92558136780312]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Modern Flats and Apartments</strong><p><a href="view_property1.html" target="_blank" title="Opens in a new window">Modern Flats and Apartments</a></p>',
    'icon': 'marker-editor'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.77386213473972,
              26.956252370619183]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Modern Flats and Apartments</strong><p><a href="view_property2.html" target="_blank" title="Opens in a new window">Modern Flats and Apartments</a></p>',
    'icon': 'marker-editor'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.75179559942077,
              26.920927107402804]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Modern Flats and Apartments</strong><p><a href="view_property3.html" target="_blank" title="Opens in a new window">Modern Flats and Apartments</a></p>',
    'icon': 'marker-editor'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.75796473832807,
              26.87479724465014]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Modern Flats and Apartments</strong><p><a href="view_property4.html" target="_blank" title="Opens in a new window">Modern Flats and Apartments</a></p>',
    'icon': 'marker-editor'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.86782287393936,
              26.859835877814973]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Modern Flats and Apartments</strong><p><a href="view_property5.html" target="_blank" title="Opens in a new window">Modern Flats and Apartments</a></p>',
    'icon': 'marker-editor'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.7835904004121,
              26.806692711680498]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
    'icon': 'music'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.8415198560554, 26.95558136780312]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
    'icon': 'music'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.8315198560554, 26.82558136780312]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
    'icon': 'music'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [75.96782287393936,
              26.859835877814973]
    }
    }
    ]
    }
    });
    // Add a layer showing the places.
    map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
    'icon-image': ['get', 'icon'],
    'icon-allow-overlap': true
    }
    });
     
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    });
    });
    map.on('click', (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['map_1'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
    
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<h3>${feature.properties.title}</h3>
        <p>${feature.properties.description}</p>`
      )
      .addTo(map);
    });
    map.addControl(new mapboxgl.NavigationControl());
    }
      
    }, [time])

    return (
        <>
            <Nav />

            <section className="view-property">

                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src={house1} alt="" />
                        </div>
                        <div className="small-images">
                            <img src={house2} alt="" />
                            <img src={house3} alt="" />
                            <img src={house4} alt="" />
                            <img src={house5} alt="" />
                        </div>
                    </div>
                    <h3 className="name">Modern Flats and Appartments</h3>
                    <p className="location"><i className="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                    <div className="info">
                        <p><i className="fas fa-tag"></i><span>14 lac</span></p>
                        <p><i className="fas fa-user"></i><span>Devesh (owner)</span></p>
                        <p><i className="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
                        <p><i className="fas fa-building"></i><span>Flat</span></p>
                        <p><i className="fas fa-house"></i><span>Sale</span></p>
                        <p><i className="fas fa-calendar"></i><span>10-03-2023</span></p>
                    </div>
                    <h3 className="title">Details</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i>Rooms :</i><span>2 BHK</span></p>
                            <p><i>Deposit amount :</i><span>0</span></p>
                            <p><i>Status :</i><span>Ready to move</span></p>
                            <p><i>Bedroom :</i><span>2</span></p>
                            <p><i>Bathroom :</i><span>2</span></p>
                            <p><i>Balcony :</i><span>1</span></p>
                        </div>
                        <div className="box">
                            <p><i>Carpet area :</i><span>800sqft</span></p>
                            <p><i>Sge :</i><span>3 years</span></p>
                            <p><i>Room floor :</i><span>3</span></p>
                            <p><i>Total floors :</i><span>22</span></p>
                            <p><i>Furnished :</i><span>Semi-furnished</span></p>
                            <p><i>Loan :</i><span>Available</span></p>
                        </div>
                    </div>
                    <h3 className="title">Amenities</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i className="fas fa-check"></i><span>Lifts</span></p>
                            <p><i className="fas fa-check"></i><span>Security guards</span></p>
                            <p><i className="fas fa-times"></i><span>Play ground</span></p>
                            <p><i className="fas fa-check"></i><span>Gardens</span></p>
                            <p><i className="fas fa-check"></i><span>Water supply</span></p>
                            <p><i className="fas fa-check"></i><span>Power backup</span></p>
                        </div>
                        <div className="box">
                            <p><i className="fas fa-check"></i><span>Parking area</span></p>
                            <p><i className="fas fa-times"></i><span>Gym</span></p>
                            <p><i className="fas fa-check"></i><span>Shopping mall</span></p>
                            <p><i className="fas fa-check"></i><span>Hospital</span></p>
                            <p><i className="fas fa-check"></i><span>Schools</span></p>
                            <p><i className="fas fa-check"></i><span>Market area</span></p>
                        </div>
                    </div>
                    <h3 className="title">Description</h3>
                    <p className="description">It is a very budget friendly appartment you will get.</p>
                    <form action="" method="post">
                        <input type="submit" value="save property" name="save" className="inline-btn" />
                    </form><br /><br /><br /><br />
                    <h1 className="title">Search on Map</h1>

                    <main className="pt-2">
                        <div className="Container">
                            <div id="map">
                                {time===0 && <h4 className='text-bold font-bold text-black' >Map is loading please wait...</h4>}
                                {time>=1 && time<5 && <h4 className='text-bold font-bold text-black' >Getting Information...</h4>}
                                {time>=3 && time<5 && <h4 className='text-bold font-bold text-black' >Fetching Coordinates...</h4>}
                                {time>=4 && time<5 && <h4 className='text-bold font-bold text-black' >Done.</h4>}
                            </div>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default View_property1
