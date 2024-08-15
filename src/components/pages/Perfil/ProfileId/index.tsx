// Development
import { FormEvent, useState } from "react"
import axios from 'axios'

// Icon
import { FaUserAlt } from "react-icons/fa"

// PhotoExample
import fotoExample from '../../../../assets/imagens/Mockup Camisa Preta.png'

interface profileProps {
    id?: string;
    fullName: string;
    email: string;
    userNick: string;
    photoUser: string;
}

export function ProfileId({ id, email, fullName, userNick, photoUser }: profileProps) {
    const [fullNameState, setFullNameState] = useState<string>(fullName);
    const [emailState, setEmailState] = useState<string>(email);
    const [userState, setUserState] = useState<string>(userNick);
    const [photoUserState, setPhotoUserState] = useState<string>(photoUser);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const objDataPutProfile = {
            fullName: fullNameState,
            email: emailState,
            username: userState,
            photoUser: photoUserState
        };

        if (objDataPutProfile.fullName === '' || objDataPutProfile.email === '' || objDataPutProfile.username === '' || objDataPutProfile.photoUser === '') {
            alert('Preencha todos os dados antes de alterar!');
            return;
        }

        try {
            const response = await axios.put(`http://localhost:8888/perfil?id=${id}`, objDataPutProfile);
            console.log('Dados atualizados com sucesso:', response);
        } catch (e) {
            alert('Não foi possível alterar os dados no momento, por favor, tente mais tarde!');
            console.error('Não foi possível alterar os dados do usuário', e);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoUserState(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <section className="w-full mb-20 flex flex-col items-center">
            {/* My Profile Introduction */}
            <div className="w-full max-w-xl flex mt-8 bg-zinc-400 rounded-tl-2xl rounded-br-2xl
                md:max-w-2xl md:mt-24">
                <div className="w-56 flex items-center gap-4 px-4 py-2 rounded-tl-2xl rounded-br-2xl bg-zinc-800
                md:px-7 md:py-2 md:w-max">
                    <FaUserAlt
                        fill="#fff"
                        size={22}
                    />
                    <span className="Ky text-sm mt-1 md:text-xl">Meu Perfil</span>
                </div>
                <div className="w-full max-w-md flex items-center justify-center">
                    <span className="Ky mt-1 text-sm text-black md:text-xl">Edite e altere seus dados do perfil</span>
                </div>
            </div>

            {/* Informations Card Profile */}
            <div className="w-full max-w-xl flex flex-col mt-10 bg-white rounded-tr-xl border-2 border-white
                md:max-w-2xl md:mt-4">
                <h1 className="Ky text-black text-lg pt-5 pl-5 font-semibold">Dados do Perfil</h1>
                <form onSubmit={handleSubmit}>
                    {/* Datas */}
                    <div className="w-full flex flex-col justify-center px-4 pt-4 mt-4
                    md:flex-row md:justify-between">
                        {/* Image */}
                        <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
                            <h1 className="Ky text-black mb-2">Foto perfil</h1>

                            <img
                                className="w-48 h-48 rounded-full object-cover"
                                src={photoUserState || fotoExample}
                                alt="Foto do Perfil" />

                            <input
                                className="w-48 mt-2 border-2 border-black text-black rounded-md cursor-pointer"
                                type="file"
                                onChange={handleFileChange}
                                name="photoUser" />
                        </div>
                        {/* Inputs */}
                        <div className="w-full flex flex-col justify-center items-center gap-4 pe-0 mt-16 
                            md:w-2/3 md:items-end md:pe-8">
                            <div className="flex flex-col">
                                <label className="Ky text-black font-semibold">Nome Completo</label>
                                <input
                                    className="w-80 p-2 outline outline-1 outline-black rounded-md text-black Ky
                                    placeholder:Ky"
                                    type="text"
                                    value={fullNameState}
                                    name="fullName"
                                    onChange={(e) => setFullNameState(e.target.value)}
                                    placeholder="Ex: João Silva Campos" />
                            </div>

                            <div className="flex flex-col">
                                <label className="Ky text-black font-semibold">Usuário</label>
                                <input
                                    className="w-80 p-2 outline outline-1 outline-black rounded-md text-black Ky
                                    placeholder:Ky"
                                    value={userState}
                                    onChange={(e) => setUserState(e.target.value)}
                                    type="text"
                                    name="username"
                                    placeholder="Ex: joao.silva26" />
                            </div>

                            <div className="flex flex-col">
                                <label className="Ky text-black font-semibold">Email</label>
                                <input
                                    className="w-80 p-2 outline outline-1 outline-black rounded-md text-black Ky
                                    placeholder:Ky"
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmailState(e.target.value)}
                                    value={emailState}
                                    placeholder="Ex: joaos.campos@gmail.com" />
                            </div>
                        </div>
                    </div>

                    {/* Button Save Changes */}
                    <div className="w-full flex flex-col justify-center items-center mt-10 mb-6">
                        <button
                            className="w-max bg-black px-8 py-3 rounded-lg Ky text-md"
                            type="submit"
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
