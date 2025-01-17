

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import RecoverPassword from './pages/recoverPassword';
import NotFound from './pages/notFound';
import Dashboard from './layout/Dashboard';
import Perfil from './pages/Perfil';
import Actuaciones from './pages/actuaciones';
import Asistencias from './pages/Asistencias';
import Cursos from './pages/Cursos';
import Reportes from './pages/Reportes';
import Estudiantes from './pages/Estudiantes';
import PrivateRoute from './routes/PrivateRoute';
import RegistroAsitencias from './pages/RegisterPage';






function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='recover-password' element={<RecoverPassword />} />

        //rutas privada
        <Route path='dashboard/*' element={<PrivateRoute> < Dashboard /> </PrivateRoute>}>
          <Route index element={<Perfil />} />
          <Route path="estudiantes" element={<Estudiantes />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="registro-asistencias" element={<RegistroAsitencias />} />

          <Route path="actuaciones" element={<Actuaciones />} />
          <Route path="reportes" element={<Reportes />} />
        </Route>


        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
