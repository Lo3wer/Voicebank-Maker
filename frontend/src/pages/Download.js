//import * as path from "node:path";
import JSZip from 'jszip';
import {saveAs} from 'filesaver.js';

import { GlobalListContext } from '../GlobalListContext';
import {useContext, useState} from "react";

function Download() {

    const {globalList, addToList, removeFromList} = useContext(GlobalListContext);

    const handleDownload = () => {
        const content = "This is some text generated by the application.";
        const blob = new Blob([content], { type: 'application/zip' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'personalVoiceBank.zip';
        link.click();
    };

    const handleDownloadAll = async () => {
        const zip = new JSZip(); // Create a new zip object

        // Add each Blob URL to the zip file
        globalList.forEach((url, index) => {
            const fileName = `file_${index}.wav`; // Name the file (you can adjust the extension based on your blob type)
            zip.file(fileName, fetch(url).then(res => res.blob())); // Add each blob to the zip
        });

        // Generate the ZIP file
        zip.generateAsync({ type: 'blob' }).then(content => {
            saveAs(content, 'files.zip'); // Trigger download of the ZIP file
        });
    };

    async function GET() {
        const zip = new JSZip();

        zip.file("character.txt", "name=USER");
        zip.file("oto.ini", "");

        const wavs0 = zip.folder("VCCV");
        /*
        const wavs0 = zip.folder("_CV");
        const wavs1 = zip.folder("CC-");
        const wavs2 = zip.folder("CCV");
        const wavs3 = zip.folder("CV");
        const wavs4 = zip.folder("CV_CVC");
        const wavs5 = zip.folder("CVC_CV");
        const wavs6 = zip.folder("V");
        const wavs7 = zip.folder("VC");
        const wavs8 = zip.folder("VCC");
        const wavs9 = zip.folder("VV");
        */

        wavs0.file("oto.ini",
            "file_0=-gu\nfile_1=ud-\nfile_2=af\nfile_3=tr\nfile_4=-no\nfile_5=un-\nfile_6=-ju\nfile_7=-je\nfile_8=ez\n");
        /*
        wavs1.file("oto.ini", "");
        wavs2.file("oto.ini", "");
        wavs3.file("oto.ini", "");
        wavs4.file("oto.ini", "");
        wavs5.file("oto.ini", "");
        wavs6.file("oto.ini", "");
        wavs7.file("oto.ini", "");
        wavs8.file("oto.ini", "");
        wavs9.file("oto.ini", "");
        */

        // Add each Blob URL to the zip file
        globalList.forEach((url, index) => {
            const fileName = `file_${index}.wav`; // Name the file (you can adjust the extension based on your blob type)
            wavs0.file(fileName, fetch(url).then(res => res.blob())); // Add each blob to the zip
        });

        const output = zip.generateAsync({type:"blob"}).then(function(content)
        {
            // FileSaver.js
            saveAs(content, "personalVoiceBank.zip");
        });
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8">
            <h1 className="text-center text-4xl font-extrabold mb-4 animate-fade-in"></h1>
            <h1 className="text-5xl font-bold mb-6 text-white">Download Your Voice Bank</h1>
            <p className="text-lg mb-10 text-center max-w-lg">
                Congrats on recording your very own voice bank!
            </p>
            <div className="flex items-center justify-center mb-10">
                <div className="animate-bounce bg-indigo-500 p-6 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>
            <button 
                className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-200 transform transition hover:scale-105 duration-300"
                onClick={GET}
            >
                Download Your File
            </button>
        </div>
    );
}

export default Download;