import { useNavigate } from 'react-router-dom';
import {useState} from "react"; // Assurez-vous d'importer useNavigate

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
    });

    const navigate = useNavigate(); // Pour la redirection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // Ici, vous pourriez envoyer les données à une API ou un serveur

        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simuler un délai pour l'appel API

        navigate('/login'); // Rediriger vers la page de connexion après la soumission
    };

    return (
        <main className="py-4">
            <div className="container mx-auto w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-bold text-gray-700">Prendre rendez-vous</h1>
                        {/* Les champs du formulaire ici... */}
                        {/* Nom */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input type="text" name="name" id="name" onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>

                        {/* Date */}
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                            <input type="date" name="date" id="date" onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>

                        {/* Heure */}
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Heure</label>
                            <input type="time" name="time" id="time" onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>

                        {/* Bouton de soumission */}
                        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Prendre rendez-vous</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AppointmentForm;
