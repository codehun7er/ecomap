import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

interface Issue {
  id: number;
  type: string;
  location: [number, number];
  description: string;
  status: string;
}

interface MapMarkerProps {
  issue: Issue;
}

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function MapMarker({ issue }: MapMarkerProps) {
  return (
    <Marker
      position={issue.location}
      icon={defaultIcon}
    >
      <Popup>
        <div className="p-2">
          <h3 className="font-bold">{issue.type}</h3>
          <p className="text-sm text-gray-600">{issue.description}</p>
          <p className="text-sm text-gray-500 mt-2">Статус: {issue.status}</p>
        </div>
      </Popup>
    </Marker>
  );
}