import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GiziMap = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // Mengambil data GeoJSON dari file lokal
    const fetchGeoJSON = async () => {
      try {
        const response = await fetch('/peta/INDONESIA_KEC.geojson');
        if (!response.ok) {
          throw new Error('Gagal memuat data GeoJSON');
        }
        const data = await response.json();
        setGeojsonData(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchGeoJSON();
  }, []);

  if (!geojsonData) return <div>Loading peta...</div>;

  const position = [-7.0058, 113.8751]; // Koordinat pusat peta

  // Fungsi untuk menambahkan Popup pada setiap fitur
  const onEachFeature = (feature, layer) => {
    const properties = feature.properties;
    const {
      kecamatan,
      puskesmas,
      jumlah_balita_ditimbang,
      underweight,
      underweight_percent,
      jumlah_balita_diukur_tinggi,
      stunting,
      stunting_percent,
      gizi_kurang,
      gizi_kurang_percent,
      gizi_buruk,
      gizi_buruk_percent,
    } = properties;

    // Menambahkan Popup untuk setiap fitur
    layer.bindPopup(
      `<div>
        <strong>Kecamatan: ${kecamatan}</strong><br />
        Puskesmas: ${puskesmas}<br />
        Jumlah Balita Ditimbang: ${jumlah_balita_ditimbang}<br />
        Jumlah Balita Diukur Tinggi: ${jumlah_balita_diukur_tinggi}<br />
        Underweight: ${underweight} (${underweight_percent}%)<br />
        Stunting: ${stunting} (${stunting_percent}%)<br />
        Gizi Kurang: ${gizi_kurang} (${gizi_kurang_percent}%)<br />
        Gizi Buruk: ${gizi_buruk} (${gizi_buruk_percent}%)<br />
      </div>`
    );
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MapContainer
        center={position}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {geojsonData && (
          <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
        )}
      </MapContainer>
    </div>
  );
};

export default GiziMap;
