import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ShopAll from "../pages/Shop/ShopAll/ShopAll";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/EntryPage/Login/Login";
import Register from "../pages/EntryPage/Register/Register";
import BuyIns from "../pages/Shop/BuyIns/BuyIns";
import Clearence from "../pages/Shop/Clearence/Clearence";
import TeamOrder from "../pages/TeamOrder/TeamOrder";
import Blog from "../pages/Blog/Blog";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { loadedProducts } from "../function/loadSingleData";
import OurWork from "../pages/OurWork/OurWork";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import TeamStore from "../pages/TeamStore/TeamStore";
import StartMyOrder from "../pages/StartMyOrder/StartMyOrder";
import UserProfile from "../pages/UserProfile/UserProfile";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import QuoteRequest from "../pages/Admin/QuoteRequest/QuoteRequest";
import OrderRequest from "../pages/Admin/OrderRequest/OrderRequest";
import StoreRequest from "../pages/Admin/StoreRequest/StoreRequest";
import UserInformation from "../pages/Client/UserInformation/UserInformation";



const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "shop-all",
                element: <ShopAll></ShopAll>
            },
            {
                path: "product/:id",
                element: <ProductDetails></ProductDetails>,
                // loader: ({ params }) => loadedProducts(params.id)
            },
            {
                path: "buy-ins",
                element: <BuyIns></BuyIns>
            },
            {
                path: "clearance",
                element: <Clearence></Clearence>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "team-Order",
                element: <TeamOrder></TeamOrder>
            },
            {
                path: "signIn",
                element: <Login></Login>
            },
            {
                path: "signUp",
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path:"/our-work",
                element:<OurWork />
            },
            {
                path:"/blog_details",
                element:<BlogDetails/>
            },
            {
                path:"/team_store",
                element:<TeamStore/>
            },
            {
                path:"/trial",
                element:<StartMyOrder/>
            },
            {
                path:"/user-profile",
                element:<UserProfile />
            }
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children:[
            {
                path: '/admin/overview',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/admin/quote-request',
                element: <QuoteRequest></QuoteRequest>,
            },
            {
                path: '/admin/team-order',
                element: <OrderRequest></OrderRequest>,
            },
            {
                path: '/admin/team-store-request',
                element: <StoreRequest></StoreRequest>,
            },
        ]
    },

    {
        path: '/client/info',
        element: <UserInformation></UserInformation>
    }
])
export default router;