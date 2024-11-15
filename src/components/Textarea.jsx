import React, { useState } from 'react'

export default function Textarea({theme, settheme}) {

    const [Character, setCharacter] = useState('');
    


    const upper = () => {
        setCharacter(Character.toUpperCase());
    }

    const lower = () => {
        setCharacter(Character.toLowerCase());
    }
                  
    const spaceRemover = () => {
        setCharacter(Character.replaceAll(" ", ""));
    }

    const textCopy = () => {

        navigator.clipboard.writeText(Character);
    }

    const TextSpeaker = () => {
        const utterence = new SpeechSynthesisUtterance(Character);
        const voice = speechSynthesis.getVoices();
        utterence.voice = voice[0];

        window.speechSynthesis.speak(utterence);

    }



    return (
        <div className={`flex justify-center items-center ${theme == 'light'? 'bg-blue-400': ''} flex-col h-screen flex-wrap `}>
            <div className='max-w-[500px] w-full'>
                <textarea rows="8" name="text" id="text"
                    value={Character}
                    onChange={(e) => setCharacter(e.target.value)} className='shadow min-h-[100px] h-fixed w-full appearance-none border rounded py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline'></textarea>
                <div className='flex mt-4 flex-wrap'>
                    <button onClick={upper} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">UpperCase</button>

                    <button onClick={lower} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">LowerCase</button>
                    <button onClick={spaceRemover} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove Spaces</button>
                    
                    <img onClick={TextSpeaker} className='w-8 h-8' src="speaker.png" alt="speaker" />
                </div>
            </div>
            <p>  Your Text contains {Character.length} Characters, {Character.split(" ").length - 1} Words and {Character.split(".").length - 1} Sentences</p>

            {/* <div class="relative w-full min-w-[200px]">
    <textarea rows="8"
      class="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "></textarea>
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Your Comment
    </label>
  </div> */}
        </div>



    )
}
