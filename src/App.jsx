import './App.css';
import Header from "./Header.jsx";
import AppointmentForm from "./AppointmentForm.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className="App w-full max-h-full font-sans">
            <Header/>
            {/* Conteneur pour l'image de fond */}
            <div className="relative m-2">
                {/* Image de fond */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/cat.jpg')] bg-cover bg-center rounded-2xl p-2 mx-2"></div>

                {/* Contenu du formulaire, ajusté pour être au-dessus de l'image de fond */}
                <div className="relative z-50">
                    <AppointmentForm/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
