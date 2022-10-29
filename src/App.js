import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
   <>
    <body>
    {/* <!-- Navigation --> */}
 <Navigation/>
   
  <main> <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/services" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-pets" element={<PrivateRoute><MyPets /></PrivateRoute>} />
                <Route path="/details/:petId" element={<Details />} />

                <Route element={<GuardedRoute />}>
                  <Route path="/create" element={<Create />} />
                  <Route path="/edit/:petId" element={<Edit />} />
                </Route> */}
              </Routes>
   </main>
    {/* <!--footer starts from here--> */}
    <Footer/>
	  
{/* <!-- Bootstrap core JavaScript --> */}
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
   </>
  );
}

export default App;
