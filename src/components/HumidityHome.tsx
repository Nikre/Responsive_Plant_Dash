// components/HumiditySquare.js
import Image from 'next/image'
import CircularIndicator from './CircularIndicator';

interface HumidityHomeProps {
    imageUrl: string;
    humidity: number;
}

const HumidityHome = ({ imageUrl, humidity } : HumidityHomeProps) => {
    return (
        <div className="humidity-square">
            <div className="image-container">
                <Image src={imageUrl} alt="Plant" objectFit="cover" width={100} height={200}/>
            </div>
            <div className="humidity-indicator">
                <CircularIndicator value={humidity} max={100} />
            </div>
        </div>
    )
}

export default HumidityHome