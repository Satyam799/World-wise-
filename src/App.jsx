import { RouterProvider, createBrowserRouter , Navigate} from 'react-router-dom'
import Homepage from '../src/pages/Homepage'
import AppLayout from './pages/AppLayout'
import City from './components/City'
import '../index.css'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import CityList from './components/CityList'
import { Cityproviser } from './Context'
import CountryList from './components/CountryList'
import Form from './components/Form'
import Login from './pages/Login'
import ProtactAuth from './pages/ProtactAuth'
import { Fakeauthconteext } from './FakeAuth'
const route=createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  }, {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/product',
    element:<Product/>
  }, {
    path:'/pricing',
    element:<Pricing/>
  },
  
  
  {
  path:'/app',
  element:<ProtactAuth><AppLayout/></ProtactAuth>,
  children:[{
    index:true,
    element:<Navigate replace to='cities'/>

  },{
    path:'cities',
    element:<CityList/>
  },{
    path:'countries',
    element:<CountryList/>
  },{
    path:'form',
    element:<Form/>
  },{
    path:'cities/:id',
    element:<City/>
  }]
}
])

function App() {
console.log('hi')
return <Cityproviser>
    <Fakeauthconteext>
  <RouterProvider router={route}></RouterProvider>
  </Fakeauthconteext>
  </Cityproviser>
}

export default App



