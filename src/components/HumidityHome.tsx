// components/HumiditySquare.js
import Image from 'next/image'
import CircularIndicator from './CircularIndicator';
import Link from 'next/link';

interface HumidityHomeProps {
    id: number;
    name: string;
    imageUrl: string;
    humidity: number;
}

const HumidityHome = ({ id, name, imageUrl, humidity }: HumidityHomeProps) => {
    return (
        <Link href={`/detail/${id}`} passHref>
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
        </Link>
    )
}

export default HumidityHome