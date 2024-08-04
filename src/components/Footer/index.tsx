export function Footer() {
    return (
        <footer className="bg-zinc-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-xl font-bold mb-4 block Ky">Institucionais</h1>
                        <a href="/direitos" className="text-md mb-2 block Ky">Direitos e Autorizações</a>
                        <a href="#" className="text-md mb-2 block Ky">Email institucional</a>
                    </div>
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-xl font-bold mb-4 block Ky">Fale Conosco</h1>
                        <a href="#" className="text-md mb-2 block Ky">Whatsapp institucional</a>
                        <a href="#" className="text-md mb-2 block Ky">Instagram</a>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-xl font-bold mb-4 block Ky">Sugestões</h1>
                        <a href="/produtos/show/Todos" className="text-md mb-2 block Ky">Shop</a>
                        <a href="/produtos/categorias" className="text-md mb-2 block Ky">Categorias</a>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm Ky">All Copyright Reserved &copy; RK 2024</p>
                </div>
            </div>
        </footer>
    );
}
