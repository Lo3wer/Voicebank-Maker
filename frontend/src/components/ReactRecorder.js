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


    return (
        <div className={'max-w-sm border py-4 px-6t mx-auto bg-blue-200'}>
            <h4 className={"text-[18px]"}>React Recorder</h4>

            <ReactMic className={"w-full mt-4 mb-3"}
                      record={voice}
                      onStop={onStop}
            />

            <div className={""}>
                {audioLink ? <button onClick={clearHandle} className={""}>Clear</button>  : ''}
            </div>
            <div className={""}>
            {!voice ?
                    <button onClick={startHandle} className={""}>Start</button>
                    :
                    <button onClick={stopHandle} className={""}>Stop</button>
                }

            </div>
            <div className={"mt-4"}>
                {audioLink? <audio controls src={audioLink} className={"mt-6"}/> : null}
            </div>
        </div>
    )
};

export default ReactRecorder