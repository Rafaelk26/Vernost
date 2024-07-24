interface InputLoginProps extends React.InputHTMLAttributes<HTMLInputElement>{
    nameLabel: string;
    typeInput: string;
    nameInput: string;
    idInput?: string;
}

export function Input({ nameLabel, nameInput, typeInput, idInput, ...rest }: InputLoginProps) {
    return(
        <>
            <div className="w-full flex flex-col mb-4">
                <label 
                className="Ky"
                htmlFor='email'>{nameLabel}</label>

                <input 
                {...rest}
                className="p-1 mt-.5 rounded-md outline-none 
                text-black inter font-semibold transition-all
                focus:outline focus:outline-gray-300"
                type={typeInput} 
                name={nameInput} 
                id={idInput} />
            </div>
        </>
    )
}