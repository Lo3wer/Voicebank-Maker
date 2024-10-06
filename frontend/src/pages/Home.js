import { Outlet, Link } from "react-router-dom";

function Home(){
    return (
        <div className="flex flex-col justify-center items-center w-screen bg-blue-300">
            <nav>
                <ul className={"flex"}>
                    <li className={"p-5 text-white font-bold"}>
                        <Link to="/">App</Link>
                    </li>
                    <li className={"p-5 text-white font-bold"}>
                        <Link to="/recordingMenu">Record</Link>
                    </li>
                    <li className={"p-5 text-white font-bold"}>
                        <Link to="/download">Download</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </div>
    )
};

export default Home;