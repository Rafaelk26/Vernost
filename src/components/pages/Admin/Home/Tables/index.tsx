// Image
import imgBuy from '../../../../../assets/imagens/PurchaseImg.png'

interface buyProps{
    id_Compra: string;
    price: number;
}

interface stockProps{
    id: string;
    photo: string;
    name: string;
    qtd: string;
}

export function Tables() {

    const purchases: buyProps[] = [
        {
            id_Compra: '#FjhsfUbs781',
            price: 1550.41
        },
        {
            id_Compra: '#Xyz123Abc',
            price: 2350.75
        },
        {
            id_Compra: '#A1b2C3sd4',
            price: 799.99
        },
        {
            id_Compra: '#MnOpQr12',
            price: 1299.49
        },
        {
            id_Compra: '#HjKlAsD1',
            price: 450.31
        }
    ]

    const products: stockProps[] = [
        {
            id: '#Dsfg42332',
            photo: `${imgBuy}`,
            name: 'Clothes White',
            qtd: "14"
        }
    ]

    function convertNumberToMoney(n: number) {
        const convert = n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        return convert
    }

    return(
        <>
            <section className='w-full flex flex-col px-4
            md:flex-row md:gap-4'>
                <div className="w-full
                md:w-3/4">
                    <h1 className="w-full Ky text-2xl mb-1">Últimas Vendas</h1>
                    <div className="w-full h-96 overflow-y-auto outline outline-2 outline-white rounded-lg overflow-x-auto">
                        <table className="w-full h-96 max-h-96 outline outline-2 outline-white rounded-lg overflow-x-auto">
                            {purchases.length > 0 ? (
                                <>
                                    <thead className="min-w-[600px] sticky top-0 bg-black flex flex-row justify-between items-center py-5 px-8 overflow-x-auto 
                                    sm:min-w-full
                                    md:min-w-full">
                                        <tr className="min-w-[200px] flex justify-start items-center 
                                        sm:w-auto
                                        md:w-auto">
                                            <th className='Ky text-xl pt-1'>Compra</th>
                                        </tr>
                                        <tr className="min-w-[200px] flex justify-center items-center 
                                        sm:w-auto
                                        md:w-auto">
                                            <th className='Ky text-xl pt-1'>ID Compra</th>
                                        </tr>
                                        <tr className="min-w-[200px] flex justify-end items-center 
                                        sm:w-auto
                                        md:w-auto">
                                            <th className='Ky text-xl pt-1'>Preço</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody className="min-w-[600px] flex flex-col gap-3 px-4 pb-4 overflow-y-auto overflow-x-auto 
                                    sm:min-w-full
                                    md:min-w-full">
                                        {purchases.map((purchase) => (
                                            <tr key={purchase.id_Compra} className="min-w-[600px] flex flex-row justify-between items-center px-8 py-3 bg-gray-500 bg-opacity-10 rounded-lg border border-white 
                                            sm:w-auto
                                            md:w-auto">
                                                <td className='min-w-[200px] flex justify-start 
                                                sm:w-auto
                                                md:w-auto'>
                                                    <img
                                                        className="w-10 h-10 object-cover rounded-sm"
                                                        src={imgBuy}
                                                        alt="Compra efetuada" />
                                                </td>
                                                <td className='min-w-[200px] flex justify-center 
                                                sm:w-auto
                                                md:w-auto'>
                                                    <span className='Ky text-xl'>{purchase.id_Compra}</span>
                                                </td>
                                                <td className='min-w-[200px] flex justify-end 
                                                sm:w-auto
                                                md:w-auto'>
                                                    <span className='Ky text-xl'>{convertNumberToMoney(purchase.price)}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            ) : (
                                <tbody className="w-full h-96 flex justify-center items-center">
                                    <tr>
                                        <td className='Ky text-lg text-center'>Não há compras efetuadas no momento</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                    
                </div>

                <div className="w-full h-96 mt-12 mb-20 md:w-1/4 md:mt-0 md:mb-0">
                    <h1 className="w-full Ky text-2xl mb-1">Estoque</h1>
                    <aside className="w-full h-96 outline outline-2 outline-white rounded-lg overflow-y-auto">
                        <table className='w-full mt-1'>
                            {products.length > 0 ? (
                                products.map((p) => (
                                    <tbody key={p.id} className='w-full mt-2'>
                                        <tr className='w-full px-4 mt-4 flex justify-between items-center gap-3'>
                                            <td className='w-1/6'>
                                                <img
                                                    className='w-8 h-8 object-cover rounded-sm'
                                                    src={p.photo}
                                                    alt={p.name} />
                                            </td>
                                            <td className='w-2/3 flex justify-center'>
                                                <span className='Ky text-md md:text-sm lg:text-md'>{p.name}</span>
                                            </td>
                                            <td className='w-1/6 flex justify-end'>
                                                <span className='Ky text-lg'>{p.qtd}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            ) : (
                                <tbody className='w-full mt-2 h-80 flex justify-center items-center'>
                                    <tr>
                                        <td className='Ky text-sm text-center mt-10'>
                                            Não há produtos em estoque no momento
                                        </td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </aside>
                </div>
            </section>
        </>
    )
}