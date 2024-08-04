import { useEffect, useState, FormEvent } from 'react';
import { useUser } from '../../contexts/User';
import { Link } from 'react-router-dom';

// Components
import { Input } from '../../components/Inputs/Login';

// Image 
import imageLogin from '../../assets/imagens/Mockup Camisa Preta.png';

export function Login() {
    const { login } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPass, setCheckPass] = useState<boolean>(false);

    const [year, setYear] = useState<number>(0);

    const handleCheck = () => {
        setCheckPass(!checkPass);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Preencha todos os campos!');
            return;
        }

        login(email, password);
    };

    useEffect(() => {
        const years = new Date().getFullYear();
        setYear(years);
    }, [year]);

    return (
        <div className="flex items-center justify-center h-screen w-full flex-col">
            <section className="flex w-full max-w-96 h-max border-2 flex-col rounded-tr-2xl rounded-bl-2xl border-opacity-80
            sm:flex-row sm:w-full sm:max-w-2xl
            md:max-w-2xl md:flex-row">
                {/* Imagem ilustrativa */}
                <div className="w-full max-h-full
                md:w-1/2">
                    <img
                        className="w-full h-full object-cover rounded-bl-2xl opacity-75"
                        src={imageLogin}
                        alt="Imagem Login" />
                </div>
                {/* Login */}
                <div className='w-full p-4 
                md:w-1/2 md:pb-2'>
                    <h1 className='w-full Ky text-4xl text-center mt-6'>Login</h1>
                    <form method='post' onSubmit={handleSubmit}
                        className='w-full max-w-80 mx-auto mt-3
                    md:max-w-60'>
                        {/* Email */}
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            nameInput='email'
                            nameLabel='Email'
                            typeInput='email'
                        />

                        {/* Password */}
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            nameInput='password'
                            nameLabel='Senha'
                            typeInput={checkPass ? 'text' : 'password'}
                        />

                        <div className='w-full flex gap-2 items-center'>
                            <input
                                className='cursor-pointer'
                                onClick={() => handleCheck()}
                                type="checkbox"
                                name="checkPass" />
                            <label htmlFor=''
                                onClick={() => handleCheck()}
                                className='Ky cursor-pointer'>
                                Mostrar Senha
                            </label>
                        </div>

                        <div className='w-full flex justify-center mt-2 flex-col items-center pb-4'>
                            <button
                                type="submit"
                                className='w-52 bg-white text-black Ky p-1 rounded-md 
                            flex items-center justify-center text-lg transition-all
                            hover:bg-black hover:outline hover:ouline-2 hover:outline-white
                            hover:text-white'>Enviar</button>

                            <Link to={'/login/check/'}
                                className='mt-2'>
                                <h2 className='Ky underline transition-all 
                                hover:text-gray-400'>Esqueci minha senha</h2>
                            </Link>
                        </div>
                    </form>
                    <Link to={'/cadastro/'}
                        className='mt-2 text-center'>
                        <h2 className='Ky underline transition-all
                        hover:text-gray-400'>Não possui cadastro? Registre-se!</h2>
                    </Link>
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
    );
}
