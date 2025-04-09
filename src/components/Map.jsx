// components/Map.jsx
import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Sample drop zones data
  const dropZones = [
    { lat: 14.5995, lng: 120.9842, title: "Drop Zone 1" },
    { lat: 14.6036, lng: 120.9822, title: "Drop Zone 2" },
    { lat: 14.6015, lng: 120.9862, title: "Drop Zone 3" },
  ];

  useEffect(() => {
    const API_KEY = 'AIzaSyD1JWD2LMUTfBiF6Gk5jpuMxMpE7_q9EE8';

    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 14.5995, lng: 120.9842 }, // Manila coordinates
        zoom: 15,
        disableDefaultUI: true,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      mapInstanceRef.current = map;
      renderDropZoneMarkers(map);
    };

    const renderDropZoneMarkers = (map) => {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Create new markers
      dropZones.forEach(zone => {
        const marker = new window.google.maps.Marker({
          position: { lat: zone.lat, lng: zone.lng },
          map,
          title: zone.title,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#FF5722" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle fill="#FFFFFF" cx="12" cy="9" r="3"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(30, 30),
            anchor: new window.google.maps.Point(15, 15)
          }
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div class="map-info-window">${zone.title}</div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        markersRef.current.push(marker);
      });
    };

    loadGoogleMapsScript();

    return () => {
      // Clean up markers when component unmounts
      markersRef.current.forEach(marker => marker.setMap(null));
    };
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" />
    </div>
  );
};

export default Map;