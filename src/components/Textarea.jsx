import React, { useState } from 'react';

export default function Textarea({ theme, settheme }) {
    const [Character, setCharacter] = useState('');

    const upper = () => setCharacter(Character.toUpperCase());
    const lower = () => setCharacter(Character.toLowerCase());
    const spaceRemover = () => setCharacter(Character.replaceAll(' ', ''));
    const textCopy = () => navigator.clipboard.writeText(Character);
    const TextSpeaker = () => {
        const utterance = new SpeechSynthesisUtterance(Character);
        speechSynthesis.speak(utterance);
    };

    return (
        <div className={`flex justify-center items-center ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} flex-col h-screen p-4`}>
            <div className={`max-w-lg w-full  ${theme === 'light' ? 'bg-white' : 'text-gray-800'}  ${theme === 'light' ? 'bg-blue-400' : 'bg-gray-800'} p-6 rounded-lg shadow-md`}>
                <textarea
                    rows='8'
                    value={Character}
                    onChange={(e) => setCharacter(e.target.value)}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500  ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}  ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
                    placeholder='Enter your text...'  >

                </textarea>

                <div className='flex mt-4 flex-wrap gap-2'>
                    <button
                        onClick={upper}
                        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
                    >
                        UpperCase
                    </button>

                    <button
                        onClick={lower}
                        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
                    >
                        LowerCase
                    </button>

                    <button
                        onClick={spaceRemover}
                        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
                    >
                        Remove Spaces
                    </button>

                    <button
                        onClick={textCopy}
                        className='text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
                    >
                        Copy Text
                    </button>

                    <button
                        onClick={TextSpeaker}
                        className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md transition duration-300'
                    >
                        Speak Text
                    </button>
                </div>
                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                    Your text contains {Character.length} characters, {Character.trim().split(/\s+/).length} words and {Character.split('.').length - 1} sentences.
                </p>
            </div>
        </div>
    );
}
