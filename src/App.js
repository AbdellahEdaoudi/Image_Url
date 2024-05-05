import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Hotel from './Pages/Hotel';
import White from './Pages/White';

export default function App() {
  return (
    <BrowserRouter>
      <div className='m-10'>
        <div className='w-full h-20 text-3xl mb-2 bg-sky-200 flex items-center justify-center'>
          Image Edaoudi Url
        </div>
        <Link to={"/"}><button className='p-2 bg-gray-200 rounded-md hover:scale-110 duration-150 mr-2'>HOTEL ROOMS</button></Link>
        <Link to={"/White"}><button className='p-2 bg-gray-200 rounded-md hover:scale-110 duration-150 hidden'>HOTEL ROOMS</button></Link>
      </div>
      <Routes>
        <Route path='/' element={<Hotel />} />
        <Route path='/White' element={<White />} />
      </Routes>
    </BrowserRouter>
  );
}
