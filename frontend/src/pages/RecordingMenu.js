import logo from '../logo.svg';
import ReactRecorder from "../components/ReactRecorder";

function recordingMenu() {

    return (
        <div className="flex flex-col justify-center align-middle items-center h-screen w-screen bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8">
                <h1 className="text-2xl p-5 font-bold text-white">
                    Sounds to record:
                </h1>
            <div className={"h-[100vh] pt-10"}>
                    <ReactRecorder />
            </div>
        </div>
    )
}

export default recordingMenu;
