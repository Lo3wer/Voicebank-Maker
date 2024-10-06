import React from 'react';
import {ReactMic} from 'react-mic';

function ReactRecorder() {

    const [voice, setVoice] = React.useState(false);
    const [audioLink, setAudioLink] = React.useState(false);

    const onStop = (blob) => {
        console.log(blob);
        setAudioLink(blob.blobURL);
    }

    function startHandle() {
        setVoice(true);
    }
    function stopHandle() {
        setVoice(false);
    }

    function clearHandle() {
        setVoice(false);
        setAudioLink("");
    }

    function nextHandle() {
        setVoice(false);
        console.log(audioLink); // DO SOMETHIGN WITH THE AUDIO LINK
        setAudioLink("");
    }


    return (
        <div className={'flex flex-col max-w-sm border py-4 px-6t mx-auto bg-white items-center p-2 rounded-2xl'}>
            <h4 className={"text-[18px] font-bold text-gray-700"}>Record</h4>

            <ReactMic className={"w-full mt-4 mb-3"}
                      record={voice}
                      onStop={onStop}
                      mimeType={"audio/wav"}
                      sampleRate={48000}
            />

            <div className={"p-1"}>
                {!voice ?
                    <button onClick={startHandle}
                            className={"bg-gray-600 px-5 py-2.5 text-center rounded-full"}>Start</button>
                    :
                    <button onClick={stopHandle}
                            className={"bg-gray-600 px-5 py-2.5 text-center rounded-full"}>Stop</button>
                }

            </div>
            <div className={"mt-0"}>
                {audioLink ? <audio controls src={audioLink} className={"mt-6"}/>
                    :
                    <audio controls src={""} className={"mt-6 disabled:true"}/>}
            </div>

            <div className={"p-3 space-x-1"}>
                {audioLink ? <button onClick={clearHandle}
                                     className={"bg-red-600 px-5 py-2.5 text-center rounded-full"}>Clear</button> :
                    <button onClick={clearHandle}
                            className={"bg-red-300 px-5 py-2.5 text-center rounded-full disabled:true"}>Clear</button>}
                {audioLink ? <button onClick={nextHandle}
                                     className={"bg-green-700 px-5 py-2.5 text-center rounded-full"}>Next</button> :
                    <button onClick={nextHandle}
                            className={"bg-green-300 px-5 py-2.5 text-center rounded-full disabled:true"}>Next</button>}
            </div>
        </div>
    )
};

export default ReactRecorder