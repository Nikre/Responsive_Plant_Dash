// components/HumiditySquare.js
import Image from 'next/image'

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
                <span>{humidity}%</span>
            </div>
        </div>
    )
}

export default HumidityHome