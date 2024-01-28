import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Uppost } from '../Context'
import { useGeolocation } from '../Hooks/Geolocationhooks'
import Button from './Button'


function Map() {
const navigate=useNavigate()
const [mapposition,setmapposition]=useState([40,0])

const [searchparams,setsearchparams]=useSearchParams()

const{city}=Uppost()

const maplat=searchparams.get('lat')

const maplng=searchparams.get('lng')

const {isLoading:isGeoLocationediting,position:Geolocationposition,getPosition}=useGeolocation()

useEffect(function(){
  if(Geolocationposition)
  setmapposition([Geolocationposition.lat,Geolocationposition.lng])
},[Geolocationposition])


useEffect(function(){
if(maplat || maplng)
 setmapposition([maplat,maplng])
},[maplat,maplng])

return(<div className={styles.mapContainer}>
{!Geolocationposition && <Button type="position" onClick={()=>getPosition()}>{isGeoLocationediting?'...Loading':'Use Your CurrentLocation'}</Button>
}  
  <MapContainer center={mapposition} zoom={6} scrollWheelZoom={true} className={styles.map}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
  />
 {city?.map((el)=><Marker position={[el.position.lat,el.position.lng]} key={el.id}>
    <Popup>
     <span>{el.emoji}</span><span>{el.cityName}</span>
    </Popup>
  </Marker>)}
   <Changeposition position={mapposition}/>
<Detectclick/>
</MapContainer>
</div>
)

}

function Changeposition({position}){
  const  Map=useMap();
  Map.setView(position)
  return null
}

function Detectclick(){
  const navigate=useNavigate() 
  useMapEvents({
    click:(e)=>navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    
   })
}

export default Map