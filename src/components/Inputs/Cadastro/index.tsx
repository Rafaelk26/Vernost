interface InputCadastroProps extends React.InputHTMLAttributes<HTMLInputElement> {
    nameLabel: string;
    typeInput: string;
    nameInput: string;
    idInput?: string;
}

export function Input({ nameLabel, nameInput, typeInput, idInput, ...rest }: InputCadastroProps) {
    return (
        <>
            <div className="w-full max-w-72 flex flex-col mb-4">
                <label
                    className="Ky text-black"
                    htmlFor='email'>{nameLabel}</label>

                <input
                    {...rest}
                    className="p-1 mt-.5 rounded-md outline-none border-2 border-black 
                    text-black inter font-semibold transition-all
                    focus:outline focus:outline-gray-600"
                    type={typeInput}
                    name={nameInput}
                    id={idInput} />
            </div>
        </>
    )
}