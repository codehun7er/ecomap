import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import MapMarker from '../components/map/MapMarker';
import { issues } from '../data/issues';

export default function MapPage() {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Экологическая карта России</h1>
          <p className="text-gray-600 mb-4">
            Отмечайте экологические проблемы и следите за их решением
          </p>
          <Button className="mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Сообщить о проблеме
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div style={{ height: '600px' }}>
            <MapContainer
              center={[55.7558, 37.6173]}
              zoom={5}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {issues.map((issue) => (
                <MapMarker key={issue.id} issue={issue} />
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}