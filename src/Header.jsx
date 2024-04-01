import logo from './assets/logo.svg';
const Header = () => {
    return (
        <header className="bg-white py-4 w-full p-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo"><img src={logo}/></div>
                <nav>
                    <ul className="flex gap-4">
                        <li className={"text-red-500"}><a href={"#"}>Acceuil</a></li>
                        <li><a href={"#"}>La S.P.A</a></li>
                        <li><a href={"#"}>Les animaux</a></li>
                        <li><a href={"#"}>Nous aider</a></li>
                        <li><a href={"#"}>Actualités</a></li>
                        <li><a href={"#"}>Presse</a></li>
                        <li><a href={"#"}>Contact</a></li>
                        <li>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">Votre testament</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
