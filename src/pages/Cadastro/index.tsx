// Development
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import { Input } from '../../components/Inputs/Cadastro'

// Image
import imagemVernostBlack from '../../assets/Logo/Vernost-Black.png'
 
export function Cadastro(){
    
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        const years = new Date().getFullYear();
        setYear(years);
    }, [year])
    
    const handleSubmit = () => {
        alert('Dados foram enviados ao back!');
    }


    return(
        <>
            <div className="flex justify-center items-center h-screen w-full flex-col">
                <section className="bg-white flex w-full max-w-96 h-max border-2 flex-col rounded-tr-2xl rounded-bl-2xl border-opacity-80 p-6
                sm:max-w-2xl
                md:max-w-2xl">
                    <div className="w-full flex justify-between items-center">
                        {/* Title */}
                        <h1 className="Ky text-black text-3xl">Cadastro</h1>
                        
                        {/* Imagem Vernost */}
                        <img 
                        className='w-32'
                        src={imagemVernostBlack} 
                        alt="Vernost Original" />
                    </div>
                    <div className="w-full mt-2">
                        <h2 className="Ky text-xl text-black font-regular">Dados Pessoais</h2>
                    </div>
                    <div className='w-full mt-2'>
                        <form method='post' onSubmit={handleSubmit}
                        className='w-full'>
                            <div className='w-full grid justify-items-center sm:grid-cols-2 md:grid-cols-2'>
                                <Input
                                    nameLabel='Nome Completo'
                                    nameInput='full_name'
                                    typeInput='text'
                                />

                                <Input
                                    nameLabel='Confirmar Email'
                                    nameInput='confirm_email'
                                    typeInput='text'
                                />

                                <Input
                                    nameLabel='CPF'
                                    nameInput='cpf'
                                    typeInput='text'
                                />

                                <Input
                                    nameLabel='Senha'
                                    nameInput='password'
                                    typeInput='text'
                                />

                                <Input
                                    nameLabel='Email'
                                    nameInput='email'
                                    typeInput='text'
                                />
                                
                                <Input
                                    nameLabel='Confirmar Senha'
                                    nameInput='confirm_password'
                                    typeInput='text'
                                />

                                
                            </div>
                            <div className='w-full flex justify-center items-center mt-2'>
                                <button 
                                type='submit'
                                className='Ky w-64 bg-black text-white p-1 rounded-lg transition-all
                                hover:bg-white hover:outline hover:outline-2 hover:outline-black hover:text-black'>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </section>
                <Link to={'/'}
                    className='mt-3 text-center'>
                    <h2 className='Ky underline transition-all text-lg
                        hover:text-gray-400'>Voltar para a tela inicial</h2>
                </Link>
                <footer className='absolute bottom-1'>
                    <p className='Ky text-center'>All Directs Reserved Copyright &copy; Vernost Original | R&K Dev's {year}</p>
                </footer>
            </div>
        </>
    )
}