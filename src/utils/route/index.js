import asyncComponent from "../AsyncComponent/AsyncComponent";
import PublicLayout from "../../layout/PublicLayout";
import AuthLayout from "../../layout/AuthLayout";
import NotFound from "../../views/NotFound";

const Login = asyncComponent(() => import("../../views/Login"));
const Product = asyncComponent(() => import("../../views/Product"));
const Category = asyncComponent(() => import("../../views/Categories"));
const Home = asyncComponent(() => import("../../views/Home"));
const Admin = asyncComponent(() => import("../../views/Protected/Admin"));

const routes = [
  {
    exact: true,
    path: "/login",
    component: Login,
    layout: PublicLayout,
    
  },
  {
    exact: true,
    path: "/admin",
    component: Admin,
    layout: AuthLayout,
    admin: true,
    
  },
  {
    exact: true,
    path: "/category",
    component: Category,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: "/category/:id",
    component: Category,
    layout: PublicLayout,
  },
 

  {
    exact: true,
    path: "/product/:id",
    component: Product,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: "/",
    component: Home,
    layout: PublicLayout,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
