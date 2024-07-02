import { ClothingItem } from '../../../Clothes';

export function Collection() {
    return (
        <>
            <div className="w-full p-2 flex flex-col justify-center mt-2 items-center">
                <div className="text-center">
                    <h1 className="text-4xl Ky">Coleções</h1>
                    <p className="text-xl Ky text-center mt-1 text-gray-500">Alguns Usados</p>
                </div>

                {/* Div para colocar os cards clothing */}
                <div className="w-full h-max mt-10
                md:max-w-6xl md:mt-12">
                    <div className="w-full flex justify-center items-center flex-col gap-16 
                    sm:grid-cols-2 sm:grid sm:gap-x-2 sm:justify-items-center
                    md:flex-row md:grid md:gap-8 md:grid-cols-3">
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                        <ClothingItem />
                    </div>
                </div>
            </div>
        </>
    )
}
