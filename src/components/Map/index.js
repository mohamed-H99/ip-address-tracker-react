import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { map } from "leaflet";
import IconLocation from "../../assets/img/svg/icon-location.svg";
import "leaflet/dist/leaflet.css";
import "./style.css";

const customIcon = L.icon({
  iconUrl: IconLocation,
  shadowUrl: IconLocation,

  iconSize: [32, 40],
  shadowSize: [32, 40],
  iconAnchor: [0, 0],
  shadowAnchor: [0, 0],
  popupAnchor: [16, 0],
});

export default function AppMap({ location }) {
  useEffect(() => {
    // on location change
  }, [location]);

  return (
    <div className="main-map relative">
      <div className="main-map__wrapper absolute top-0 left-0 w-full max-w-full">
        {location?.country && (
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={12}
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]} icon={customIcon}>
              <Popup>
                {`${location?.city ? location.city + "," : location.city} ${
                  location?.region
                } ${location?.postalCode}`}
                <br />
                {`${location?.country}`}
                <br />
                {`UTC${location?.timezone}`}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}
