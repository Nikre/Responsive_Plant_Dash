'use client'

import Image from 'next/image'
import SimpleLineChart from '@/components/SimpleLineChart';
import { useParams } from 'next/navigation';
import { PlantDetail } from '@/types/interfaces';

const DetailPage = () => {
    const param = useParams();
    const id = param.id;

    const plant: PlantDetail = {
        id: 1,
        name: 'pilea',
        imageUrl: 'https://m.media-amazon.com/images/I/718oKHbNklL.jpg',
        description: 'La Pilea, comunemente conosciuta come \"pianta dei soldi\" o \"pianta del l\'uccello\", è una pianta d\'appartamento affascinante e molto amata per il suo aspetto unico e le sue foglie distintive. Originaria delle zone tropicali di Cina e di alcune regioni dell’Asia, la Pilea appartiene alla famiglia delle Urticaceae. La sua caratteristica principale è rappresentata dalle foglie grandi, rotonde e di un verde brillante che crescono su steli sottili e delicati. La forma delle foglie ricorda un disco, conferendo alla pianta un aspetto voluminoso e rigoglioso che la rende un ottimo elemento decorativo per qualsiasi ambiente.\n\nLa Pilea è nota per la sua facilità di cura, rendendola ideale anche per chi è alle prime armi nella cura delle piante. Ama la luce indiretta e cresce bene in ambienti umidi, quindi è consigliabile nebulizzare occasionalmente le foglie per mantenere un buon livello di umidità.Inoltre, la Pilea non tollera il ristagno idrico, pertanto è fondamentale garantire un buon drenaggio nel vaso.\n\nQuesta pianta ha anche una particolare simbologia, associata alla fortuna e al benessere economico, motivo per cui è spesso regalata come portafortuna.In alcune culture, si crede anche che porti prosperità e felicità all\'interno delle abitazioni. In definitiva, la Pilea è una pianta versatile e affascinante che non solo arricchisce gli spazi interni con il suo fogliame vibrante, ma porta anche un significato speciale per chi la coltiva',
        data: [{ time: 'Gen', value: 4200 },
        { time: 'Feb', value: 3100 },
        { time: 'Mar', value: 5400 },
        { time: 'Apr', value: 1300 },
        { time: 'May', value: 2300 },
        { time: 'Jul', value: 3300 },
        { time: 'Aug', value: 3300 },
        { time: 'Sep', value: 3300 },
        { time: 'Oct', value: 3300 },
        { time: 'Nov', value: 3300 },
        { time: 'Dec', value: 3300 }]
    };

    const handleDownload = () => {
        // Logica per il download del CSV
        console.log('Download CSV');
    };

    return (
        <div className='flex flex-col detail-square'>
            <p className='plant-name my-6 large-name'>{plant.name}</p>
            <div className='flex flex-col lg:flex-row detail-box'>
                <div className='basis-1 lg:basis-1/2 flex justify-center items-center image-container-detail'>
                    <Image src={plant.imageUrl} alt="Plant" style={{ objectFit: "cover" }} width={400} height={600} />
                </div>
                <div className='basis-1 lg:basis-1/2 justify-center items-center mt-4 lg:mt-0 detail-container'>
                    <div className='detail-text'>
                        <p>{plant.description}</p>
                    </div>
                    <div className='mt-4 lg:mt-0 chart-container'>
                        <SimpleLineChart data={plant.data}></SimpleLineChart>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-4 rounded inline-flex"
                            onClick={handleDownload}>
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;