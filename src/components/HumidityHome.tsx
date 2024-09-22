// components/HumiditySquare.js
import Image from 'next/image'
import CircularIndicator from './CircularIndicator';

interface HumidityHomeProps {
    name: string;
    imageUrl: string;
    humidity: number;
}

const HumidityHome = ({ name, imageUrl, humidity }: HumidityHomeProps) => {
    return (
        <div className="plant-box">
            <p className='plant-name'>{name}</p>
            <div className='humidity-combobox'>
                <div className="image-container">
                    <Image src={imageUrl} alt="Plant" objectFit="cover" width={100} height={200} />
                </div>
                <div className="humidity-indicator">
                    <CircularIndicator value={humidity} max={100} />
                </div>
            </div>
        </div>
    )
}

export default HumidityHome