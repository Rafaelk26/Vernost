// Image
import imgBuy from '../../../../../assets/imagens/PurchaseImg.png'

interface buyProps{
    id_Compra: string;
    price: number;
}

interface stockProps{
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
                                    <thead className="w-full sticky top-0 bg-black flex flex-row justify-between items-center py-5 px-8 flex-shrink overflow-x-auto
                                    md:w-auto">
                                        <tr className="w-full flex justify-start items-center md:w-auto">
                                            <th className='Ky text-xl pt-1'>Compra</th>
                                        </tr>
                                        <tr className="w-full flex justify-center items-center md:w-auto">
                                            <th className='Ky text-xl pt-1'>ID Compra</th>
                                        </tr>
                                        <tr className="w-full flex justify-end items-center md:w-auto">
                                            <th className='Ky text-xl pt-1'>Preço</th>
                                        </tr>
                                    </thead>
                                    <tbody className="w-full flex flex-col gap-3 px-4 pb-4 overflow-y-auto">
                                        {purchases.map((purchase, index) => (
                                            <tr key={index} className="w-full flex flex-row justify-between items-center px-8 py-3 bg-gray-500 bg-opacity-10 rounded-lg border border-white md:w-auto">
                                                <td className='w-full flex justify-start md:w-auto'>
                                                    <img
                                                        className="w-10 h-10 object-cover rounded-sm"
                                                        src={imgBuy}
                                                        alt="Compra efetuada" />
                                                </td>

                                                <td className='w-full flex justify-center md:w-auto'>
                                                    <span className='Ky text-xl'>{purchase.id_Compra}</span>
                                                </td>

                                                <td className='w-full flex justify-end md:w-auto'>
                                                    <span className='Ky text-xl'>{convertNumberToMoney(purchase.price)}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            ) : 
                            <>
                                <tbody className="w-full h-96 flex justify-center items-center">
                                    <span className='Ky text-lg text-center'>Não há compras efetuadas no momento</span>
                                </tbody>
                            </>}
                        </table>
                    </div>
                    
                </div>

                <div className="w-full h-96 mt-12 mb-20
                md:w-1/4 md:mt-0 md:mb-0">
                    <h1 className="w-full Ky text-2xl mb-1">Estoque</h1>
                    <aside className="w-full h-96 outline outline-2 outline-white rounded-lg overflow-y-auto">
                        <table className='w-full mt-1'>
                            {products.length > 0 ? (
                                products.map((p, index) => (
                                    <>
                                        <>
                                            <tbody className='w-full mt-2'>
                                                <td key={index} className='w-full px-4 mt-4 flex justify-between items-center gap-3'>
                                                    <tr className='w-1/6'>
                                                        <img
                                                            className='w-8 h-8 object-cover rounded-sm'
                                                            src={p.photo}
                                                            alt="" />
                                                    </tr>
                                                    <tr className='w-2/3 flex justify-center'>
                                                        <span className='Ky text-md 
                                                        md:text-sm 
                                                        lg:text-md'>{p.name}</span>
                                                    </tr>
                                                    <tr className='w-1/6 flex justify-end'>
                                                        <span className='Ky text-lg'>{p.qtd}</span>
                                                    </tr>
                                                </td>
                                            </tbody>
                                        </>
                                    </>
                                ))
                            ):
                            <>
                                <tbody className='w-full mt-2 h-80 flex justify-center items-center'>
                                    <span className='Ky text-sm text-center mt-10'>
                                        Não há compras efetuadas <br />
                                        no momento
                                    </span>
                                </tbody>
                            </>}
                        </table>
                    </aside>
                </div>
            </section>
        </>
    )
}