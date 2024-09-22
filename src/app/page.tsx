import HumidityHome from "@/components/HumidityHome";
import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";


export default function Home() {

  const plants = [
    { id: 1, name: 'pilea', imageUrl: 'https://m.media-amazon.com/images/I/718oKHbNklL.jpg', humidity: 65 },
    { id: 2, name: 'photos', imageUrl: 'https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg', humidity: 100 },
    { id: 3, name: 'photos', imageUrl: 'https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg', humidity: 30 },
    { id: 4, name: 'photos', imageUrl: 'https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg', humidity: 10 },
    // ... altri dati 
  ]


  return (
    <main>
      <div className="home-container">
        {plants.map(plant => (
          <HumidityHome
            id={plant.id}
            key={plant.id}
            name={plant.name}
            imageUrl={plant.imageUrl}
            humidity={plant.humidity}
          />
        ))}
      </div>
    </main>
  );
}
