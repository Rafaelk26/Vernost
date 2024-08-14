// Development
import { useState, useEffect } from 'react'
import axios from 'axios'

// Components && Interfaces
import { ClothingItem } from '../../../Clothes'
import { clothingProps } from '../../../Clothes'


export function Collection() {

    const [data, setData] = useState<clothingProps[]>([])
    
    useEffect(()=> {
        const connectWithDatabase = async () => {
            try{
                const response = await axios.get('http://localhost:8888/roupas');
                setData(response.data);
            } catch(e) {
                console.error('Não foi possível resgatar os dados:', e);
            }
        }

        connectWithDatabase()

        return () => {
            connectWithDatabase()
        }
    }, [])

    return (
        <>
            <div className="w-full p-2 mt-2 mx-auto 
            md:max-w-4xl">
                <div className="text-center">
                    <h1 className="text-4xl Ky">Coleções</h1>
                    <p className="text-xl Ky text-center mt-1 text-gray-500">Alguns Usados</p>
                </div>

                {/* Div para colocar os cards clothing */}
                <div className="w-full h-max mt-10
                md:max-w-6xl md:mt-12">
                    <div className="w-full flex justify-center items-center flex-col gap-16 
                    sm:grid-cols-2 sm:grid sm:gap-x-2 sm:justify-items-center
                    md:flex-row md:grid md:grid-cols-3 md:gap-x-16">
                        {data.map(card => 
                            <>
                                <ClothingItem
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                category={card.category}
                                photoClothing={card.photoClothing}
                                price={card.price}
                                color={card.color} />
                            </>   
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
