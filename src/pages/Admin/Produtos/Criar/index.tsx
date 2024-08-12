import { FormEvent, useState } from 'react';
import { Header } from '../../../../components/Header/Header-Admin';
import imgEx from '../../../../assets/imagens/PurchaseImg.png';

export function Criar() {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [nomeProduto, setNomeProduto] = useState('');
    const [categoriaProduto, setCategoriaProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');
    const [qtdProduto, setQtdProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [photoProduto, setPhotoProduto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };

    const handleSizeToggle = (size: string) => {
        setSelectedSizes((prevSizes) =>
            prevSizes.includes(size)
                ? prevSizes.filter((s: string) => s !== size)
                : [...prevSizes, size]
        );
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setPhotoProduto(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPhotoPreview(null);
        }
    };

    const handleSendClothes = (e: FormEvent) => {
        e.preventDefault();

        const product = {
            nomeProduto,
            categoriaProduto,
            precoProduto,
            qtdProduto,
            descricaoProduto,
            selectedColor,
            selectedSizes,
            photoProduto,
        };

        console.log('Produto enviado:', product);
    };

    return (
        <>
            <Header />
            <section className='w-full mx-auto mt-10 md:max-w-2xl'>
                <h1 className='Ky text-4xl'>Cadastrar</h1>
                <form onSubmit={handleSendClothes}>
                    <div className='w-full mt-6 h-96 flex'>
                        <div className="w-1/2">
                            <div className='w-80 h-96 relative'>
                                <input
                                    className='w-80 h-96 absolute z-10 top-0 opacity-0 cursor-pointer'
                                    type="file"
                                    name='photoProduto'
                                    alt=""
                                    onChange={handlePhotoChange}
                                />

                                <img
                                    className='w-full h-full object-cover rounded-md'
                                    src={photoPreview || imgEx}
                                    alt="Product"
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className='w-full md:max-w-96'>
                                <div className='w-full flex flex-col'>
                                    <label className='Ky text-xl opacity-85'>Nome</label>
                                    <input
                                        className='Ky font-light outline outline-1 outline-white bg-transparent rounded-md p-1 mt-[1px] transition-all focus:outline-2'
                                        name='nomeProduto'
                                        type="text"
                                        value={nomeProduto}
                                        onChange={(e) => setNomeProduto(e.target.value)}
                                    />
                                </div>

                                <div className='w-full flex flex-col mt-2'>
                                    <label className='Ky text-xl opacity-85'>Categoria</label>
                                    <select
                                        className='Ky font-light outline outline-1 outline-white bg-black text-white rounded-md p-1 mt-[1px] transition-all focus:outline-2'
                                        name='categoriaProduto'
                                        value={categoriaProduto}
                                        onChange={(e) => setCategoriaProduto(e.target.value)}
                                    >
                                        <option value="">Escolher uma Categoria</option>
                                        <option value="Casual">Casual</option>
                                        <option value="Social">Social</option>
                                        <option value="Vintage">Vintage</option>
                                        <option value="Gala">Gala</option>
                                        <option value="Lounge">Lounge</option>
                                    </select>
                                </div>

                                <div className='w-full flex items-center gap-6 mt-2'>
                                    <div className='w-full flex flex-col md:w-1/2'>
                                        <label className='Ky text-xl opacity-85'>Preço</label>
                                        <input
                                            className='w-full Ky font-light outline outline-1 outline-white bg-transparent rounded-md p-1 mt-[1px] transition-all focus:outline-2'
                                            name='precoProduto'
                                            type="text"
                                            value={precoProduto}
                                            onChange={(e) => setPrecoProduto(e.target.value)}
                                        />
                                    </div>

                                    <div className='w-full flex flex-col md:w-1/2'>
                                        <label className='Ky text-xl opacity-85'>Quantidade</label>
                                        <input
                                            className='w-full Ky font-light outline outline-1 outline-white bg-transparent rounded-md p-1 mt-[1px] transition-all focus:outline-2'
                                            name='qtdProduto'
                                            type="text"
                                            value={qtdProduto}
                                            onChange={(e) => setQtdProduto(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='w-full mt-3'>
                                    <h4 className='Ky text-md'>Tamanhos</h4>
                                    <div className="w-full flex gap-6 -mt-1">
                                        {['P', 'M', 'G', 'GG', 'XG'].map((size) => (
                                            <div key={size} className='w-max flex gap-2 items-center'>
                                                <input
                                                    className='w-6 h-6'
                                                    type="checkbox"
                                                    checked={selectedSizes.includes(size)}
                                                    onChange={() => handleSizeToggle(size)}
                                                />
                                                <p className='Ky mt-1'>{size}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full mt-1">
                                    <h4 className="Ky text-md">Cores</h4>
                                    <div className="w-full grid grid-cols-8 gap-y-2">
                                        {['#FFFFFF', '#434343', '#BA0000', '#150029', '#0033B6', '#B6006D', '#2a2b0e', '#000000', '#D64D00', '#EAC400', '#1F7800', '#430078', '#1F3004', '#4B2900', '#480000', '#30040F'].map((color) => (
                                            <div
                                                key={color}
                                                className={`w-6 h-6 rounded-md border border-input cursor-pointer ${selectedColor === color ? 'border-2 border-blue-500' : ''}`}
                                                style={{ backgroundColor: color }}
                                                onClick={() => handleColorSelect(color)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-48 mt-2'>
                        <label className='Ky text-xl opacity-85'>Descrição</label>
                        <textarea
                            name="descricaoProduto"
                            className='Ky w-full h-56 mt-1 bg-black outline outline-1 outline-white rounded-md transition-all p-2 focus:outline-2'
                            value={descricaoProduto}
                            onChange={(e) => setDescricaoProduto(e.target.value)}
                        />
                        <div className='w-full flex justify-center items-center mt-2 mb-20'>
                            <button
                                type="submit"
                                className='bg-white text-black Ky px-4 py-2 rounded-md text-xl'
                            >
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
