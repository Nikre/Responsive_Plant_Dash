'use client'

import { useParams } from 'next/navigation';

const DetailPage = () => {
    const param = useParams();
    const id = param.id;

    const plant = {
        id: 1, name: 'pilea', imageUrl: 'https://m.media-amazon.com/images/I/718oKHbNklL.jpg', humidity: 65, description: 'La Pilea, comunemente conosciuta come \"pianta dei soldi\" o \"pianta del l\'uccello\", è una pianta d\'appartamento affascinante e molto amata per il suo aspetto unico e le sue foglie distintive. Originaria delle zone tropicali di Cina e di alcune regioni dell’Asia, la Pilea appartiene alla famiglia delle Urticaceae. La sua caratteristica principale è rappresentata dalle foglie grandi, rotonde e di un verde brillante che crescono su steli sottili e delicati. La forma delle foglie ricorda un disco, conferendo alla pianta un aspetto voluminoso e rigoglioso che la rende un ottimo elemento decorativo per qualsiasi ambiente.\n\nLa Pilea è nota per la sua facilità di cura, rendendola ideale anche per chi è alle prime armi nella cura delle piante. Ama la luce indiretta e cresce bene in ambienti umidi, quindi è consigliabile nebulizzare occasionalmente le foglie per mantenere un buon livello di umidità.Inoltre, la Pilea non tollera il ristagno idrico, pertanto è fondamentale garantire un buon drenaggio nel vaso.\n\nQuesta pianta ha anche una particolare simbologia, associata alla fortuna e al benessere economico, motivo per cui è spesso regalata come portafortuna.In alcune culture, si crede anche che porti prosperità e felicità all\'interno delle abitazioni. In definitiva, la Pilea è una pianta versatile e affascinante che non solo arricchisce gli spazi interni con il suo fogliame vibrante, ma porta anche un significato speciale per chi la coltiva' };


    return (
        <div className='detail-square'>
            <p className='plant-name large-name'>{plant.name}</p>
            <div className='detail-box'>
                <div className='image-detail'>
                    <img src={plant.imageUrl} alt="" />
                </div>
                <div className='detail-text'>
                    <p>{plant.description}</p>
                </div>
            </div>

        </div>
    );
};

export default DetailPage;