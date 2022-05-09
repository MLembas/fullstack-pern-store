import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import DevicePage from './pages/DevicePage'


export const authRoutes = [
   {
      path:'admin',
      element: <Admin />
   },
   {
      path: '/basket',
      element: <Basket />,
   }
]

export const publicRoutes = [
   {
      path:'/',
      element: <Shop />
   },
   {
      path: '/login',
      element: <Auth />
   },
   {
      path: '/registration',
      element: <Auth/>
   },
   // {
   //    path: '/device' + '/:id',
   //    element: <DevicePage/>,
   // },
   {
      path: '/device/:id',
      element: <DevicePage/>,
   },
]