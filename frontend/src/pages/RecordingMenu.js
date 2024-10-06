import logo from '../logo.svg';
import ReactRecorder from "../components/ReactRecorder";

function recordingMenu() {

    return (
        <div className="flex flex-col justify-center align-middle items-center h-screen w-screen bg-white">
                <h1 className="text-2xl p-5 font-bold text-gray-600">
                    Sounds to record:
                </h1>
            <div className={"h-[100vh] pt-10"}>
                    <ReactRecorder />
            </div>
        </div>
    )
}

export default recordingMenu;
