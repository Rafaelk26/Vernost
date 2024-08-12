// Components
import { Header } from '../../../../components/Header/Header-Admin'

// PhotoEx
import imgEx from '../../../../assets/imagens/PurchaseImg.png'

export function Criar(){
    return(
        <>
            <Header />
            <section className='w-full mx-auto mt-10
            md:max-w-2xl'>
                <h1 className='Ky text-4xl'>Cadastrar</h1>
                <form>
                    <div className='w-full mt-6 h-96 flex'>
                        <div className="w-1/2">
                            <div className='w-80 h-96 relative'>
                                <input
                                className='w-80 h-96 absolute z-10 top-0 opacity-0 cursor-pointer'
                                type="file"
                                name='photoProduto'
                                alt="" />

                                <img
                                className='w-full h-full object-cover rounded-md'
                                src={imgEx}
                                alt="Product" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            {/* Container */}
                            <div className='w-full md:max-w-96'>
                                {/* Input Nome */}
                                <div className='w-full flex flex-col'>
                                    <label className='Ky text-xl opacity-85'>Nome</label>
                                    <input
                                        className='Ky font-light outline outline-1 outline-white bg-transparent rounded-md p-1 mt-[1px] transition-all
                                        focus:outline-2'
                                        name='nomeProduto'
                                        type="text" />
                                </div> 

                                {/* Select Categoria */}
                                <div className='w-full flex flex-col mt-2'>
                                    <label className='Ky text-xl opacity-85'>Categoria</label>
                                    <select
                                    className='Ky font-light outline outline-1 outline-white bg-black text-white rounded-md p-1 mt-[1px] transition-all
                                    focus:outline-2'
                                    name='categoriaProduto'>
                                        <option value="">Escolher uma Categoria</option>
                                        <option value="Casual">Casual</option>        
                                        <option value="Social">Social</option>        
                                        <option value="Vintage">Vintage</option>        
                                        <option value="Gala">Gala</option>        
                                        <option value="Lounge">Lounge</option>        
                                    </select>
                                </div>

                                <div className='w-full flex items-center gap-6 mt-2'>
                                    {/* Input Preço */}
                                    <div className='w-full flex flex-col 
                                    md:w-1/2'>
                                        <label className='Ky text-xl opacity-85'>Preço</label>
                                        <input
                                            className='w-full Ky font-light outline outline-1 outline-white bg-transparent rounded-md p-1 mt-[1px] transition-all
                                            focus:outline-2'
                                            name='precoProduto'
                                            type="text" />
                                    </div> 

                                    {/* Input Quantidade */}
                                    <div className='w-full flex flex-col 
                                    md:w-1/2'>
                                        <label className='Ky text-xl opacity-85'>Quantidade</label>
                                        <input
                                            className='w-full Ky font-light outline outline-1 outline-white bg-transparent rounded-md p-1 mt-[1px] transition-all
                                            focus:outline-2'
                                            name='qtdProduto'
                                            type="text" />
                                    </div> 
                                </div>

                                <div className='w-full mt-3'>
                                    <h4 className='Ky text-md'>Tamanhos</h4>
                                    <div className="w-full flex gap-6 -mt-1">
                                        {/* Input Tamanho */}
                                        <div className='w-max flex gap-2 items-center'>
                                            <input className='w-6 h-6' type="checkbox" />
                                            <p className='Ky mt-1'>P</p>
                                        </div>
                                        <div className='w-max flex gap-2 items-center'>
                                            <input className='w-6 h-6' type="checkbox" />
                                            <p className='Ky mt-1'>M</p>
                                        </div>
                                        <div className='w-max flex gap-2 items-center'>
                                            <input className='w-6 h-6' type="checkbox" />
                                            <p className='Ky mt-1'>G</p>
                                        </div>
                                        <div className='w-max flex gap-2 items-center'>
                                            <input className='w-6 h-6' type="checkbox" />
                                            <p className='Ky mt-1'>GG</p>
                                        </div>
                                        <div className='w-max flex gap-2 items-center'>
                                            <input className='w-6 h-6' type="checkbox" />
                                            <p className='Ky mt-1'>XG</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cores */}
                                <div className="w-full mt-1">
                                    <h4 className="Ky text-md">Cores</h4>
                                    <div className="w-full grid grid-cols-8 gap-y-2">
                                        <div className="w-6 h-6 bg-white rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#434343] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#BA0000] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#150029] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#0033B6] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#B6006D] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#2a2b0e] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-black rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#D64D00] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#EAC400] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#1F7800] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#430078] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#1F3004] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#4B2900] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#480000] rounded-md border border-input"></div>
                                        <div className="w-6 h-6 bg-[#30040F] rounded-md border border-input"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-48 mt-2'>
                        {/* Description adn Button Submit */}
                        <label className='Ky text-xl opacity-85'>Descrição</label>
                        <textarea 
                        name="descricaoProduto" 
                        className='Ky w-full h-56 mt-1 bg-black outline outline-1 outline-white rounded-md transition-all p-2
                        focus:outline-2'></textarea>
                        <div className='w-full flex justify-center items-center mt-2 mb-20'>
                            <button type="submit"
                                className='bg-white text-black Ky px-4 py-2 rounded-md text-xl'>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </section>
        
        </>
    )
}