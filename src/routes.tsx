// Developement
import { createBrowserRouter } from "react-router-dom";

// Pages
import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Carrinho } from './pages/Carrinho';
import { Categorias } from './pages/Categorias';
import { Compras } from './pages/Compras';
import { Direitos } from './pages/Direitos';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';
import { Produtos } from './pages/Produtos';
import { DetalheProdutos } from './pages/Produtos/DetalheProdutos';
import { Sobre } from './pages/Sobre';


// Pages Admin
import { Admin } from './pages/Admin/Home';
import { Caixa } from './pages/Admin/Caixa';
import { Estoque } from './pages/Admin/Estoque';
import { Gerenciar } from './pages/Admin/GerenciarCompras';
import { Criar } from './pages/Admin/Produtos/Criar';
import { Deletar } from './pages/Admin/Produtos/Deletar';
import { Editar } from './pages/Admin/Produtos/Editar';
import { EditarDetalheProduto } from './pages/Admin/Produtos/Editar/EditarProduto';
import { User } from './pages/Admin/Usuários';

// Middlewares
import { Private } from './middleware/Private';

const router = createBrowserRouter([
    {
        element: <Home />,
        path: "/"
    },
    {
        element: <Cadastro />,
        path: "/cadastro"
    },
    {
        element: <Carrinho />,
        path: "/produtos/carrinho/"
    },
    {
        element: <Categorias />,
        path: "/produtos/categorias/"
    },
    {
        element: <Compras />,
        path: "/minhas-compras/userId:"
    },
    {
        element: <Direitos />,
        path: "/direitos"
    },
    {
        element: <Login />,
        path: "/login"
    },
    {
        element: <Perfil />,
        path: "/perfil/userId:"
    },
    {
        element: <Produtos />,
        path: "/produtos/show/"
    },
    {
        element: <DetalheProdutos />,
        path: "/produtos/detalhes/id:"
    },
    {
        element: <Sobre />,
        path: "/sobre"
    },

    // Routes Admin.

    {
        element: <Private><Admin /></Private>,
        path: "/admin"
    },
    {
        element: <Private><Caixa /></Private>,
        path: "/admin/caixa"
    },
    {
        element: <Private><Estoque /></Private>,
        path: "/admin/estoque"
    },
    {
        element: <Private><Gerenciar /></Private>,
        path: "/admin/gerenciar"
    },
    {
        element: <Private><Criar /></Private>,
        path: "/admin/produto/criar"
    },
    {
        element: <Private><Deletar /></Private>,
        path: "/admin/produto/deletar"
    },
    {
        element: <Private><Editar /></Private>,
        path: "/admin/produto/editar"
    },
    {
        element: <Private><EditarDetalheProduto /></Private>,
        path: "/admin/produto/editar/id:"
    },
    {
        element: <Private><User /></Private>,
        path: "/admin/user/id:"
    },
])


export { router }