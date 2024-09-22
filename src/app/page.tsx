import HumidityHome from "@/components/HumidityHome";


export default function Home() {

  const plants = [
    { id: 1, imageUrl: 'https://m.media-amazon.com/images/I/718oKHbNklL.jpg', humidity: 65 },
    { id: 2, imageUrl: 'https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg', humidity: 100 },
    { id: 3, imageUrl: 'https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg', humidity: 30 },
    { id: 4, imageUrl: 'https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg', humidity: 10 },
    // ... altri dati 
  ]


  return (
    <main>
      <div className="home-container">
        {plants.map(plant => (
          <HumidityHome
            key={plant.id}
            imageUrl={plant.imageUrl}
            humidity={plant.humidity}
          />
        ))}
      </div>
    </main>
  );
}
