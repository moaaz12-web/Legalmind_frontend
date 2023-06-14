import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateD } from "../../redux/actions/generateD.js";
import DocxReader from "../DocxReader.jsx";
import Footer from "../Footer/Footer.js";
import "./ParentComp.css";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClipLoader from "react-spinners/ClipLoader";


const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Russian',
  'Arabic',
  'Portuguese'
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ParentComp = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const dispatch = useDispatch();

  const [explained, setExplained] = useState("");

  const languages = [
    "English",
    "German",
    "Spanish",
    "Italian",
    "Hindi",
    "Turkish",
    "French",
    "Japanese",
    "Chinese",
    "Russian",
  ];
  const [selectedLanguage, setSelectedLanguage] = useState('English');



  const handleLanguageChange = (event) => {
    console.log(event.target.value)
    setSelectedLanguage(event.target.value);
  };

  //! DOCXREADER
  const [eventFile, seteventFile] = useState(null);

  const handleTextExtraction = (paragraphs) => {
    const eextractedText = paragraphs.join("\n"); // Join paragraphs with line breaks
    setuserText((prevText) => prevText + eextractedText);
  };

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))._id;
  const username = JSON.parse(localStorage.getItem("user")).name;


  const [loading, setLoading] = useState(false);


  const [usertext, setuserText] = useState("");
  const [file, setFile] = useState(null);

  const handleTextChange = (event) => {
    setuserText(event.target.value);
  };


  const isTextboxDisabled = file !== null;

  const save = () => {
    setLoading(true);
    // console.log(explained);
    Axios.post("https://dull-red-lizard-belt.cyclic.app/doc/save", {
      text: usertext,
      gptresponse: explained,
      user: user,
    })
      .then((res) => {
        // dispatch(generateD(res))
        // console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err);
      });
  };

  const getDocs = () => {
    Axios.get(`https://dull-red-lizard-belt.cyclic.app/doc/documents/${user}`)
      .then((res) => {
        // console.log(res);
        dispatch(generateD(res));
        navigate(`../docs/${username}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = (event) => {
    event.preventDefault();
    // console.log(event.target)

    const [textInput, fileInput, lang] = event.target;
    // console.log(lang)
    const userLanguage = lang.value;
    console.log(userLanguage)
    const userText = textInput.value;
    const file = fileInput.files[0];

    //! DOCXREADER
    seteventFile(file);
    //! DOCXREADER
    if (!userText && !file) {
      return;
    }

    Axios.post("https://dull-red-lizard-belt.cyclic.app/api/v1/improve", { text: userText, lang: userLanguage, userid:user })
    // Axios.post("/api/v1/improve", { text: userText, lang: userLanguage })
      // Axios.post("https://dark-blue-swordfish-cap.cyclic.app/api/v1/improve", { text: userText })
      .then((res) => {
        setExplained(res.data);
        dispatch(generateD(explained));
        // save()
      })
      .catch((err) => {
        // console.log(err);
      });

  };

  const clear = () => {
    setuserText("");
    setFile(null);
    seteventFile(null);
    setExplained("");
  };

  return (
    <>
      <div className="relative">
        <svg viewBox="0 0 500 200" className="absolute inset-0 z-[-1]">
          <path d="M0 100 C300 280, 250 100, 500 50 C550 10, 450 10, 500 50 C550 90, 950 90, 1000 50 C1050 10, 950 10, 1000 50 C1050 90, 1450 90, 1500 50 L1500 0 L0 0 Z" fill="rgb(254, 49, 49)"></path>
        </svg>
        <div className="flex items-center justify-center gap-4 sm:py-16 sm:px-8 py-20 px-10">
        <button onClick={getDocs} className="button-17">My Docs</button>
        <button onClick={clear} className="button-17">Clear</button>
        <button onClick={save} className="button-17">Save</button>

       

        </div>

        <div className="flex justify-center items-center gap-0 m-4 lg:m-0 p-0">

        {loading && 
        <div className="flex flex-row justify-center gap-1 items-center">
          <span className="font-bold">Loading   </span>
          <ClipLoader
        color="black"
        loading={loading}
        size={45}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
        }
        </div>

       
        <div className="z-100 mt-0 md:mt-60 block md:flex my-10 md:justify-start md:items-center">
          {/* User input div */}
          <div className="w-full flex justify-center">
            <div className="w-full h-screen flex justify-center">
              <form
                onSubmit={submit}
                className="w-full h-screen flex flex-col  items-center"
              >
                <textarea
                data-aos='fade-up' data-aos-duration="2000"
                  name="text"
                  value={usertext}
                  onChange={handleTextChange}
                  className="h-1/2 boxShadow w-[75%] my-[0rem] md:my-[5rem] bg-white text-[#777777] pl-4"
                  style={{
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    //no scrol bar code
                    resize: "none",
                    // overflow: "hidden",
                  }}
                  placeholder="Paste or upload below 👇"
                  disabled={isTextboxDisabled}
                />

                {/* //! DOCXREADER */}
                <div className="flex justify-center items-center my-[2rem]">
                  <DocxReader
                    id="upload"
                    file={eventFile}
                    onTextExtracted={handleTextExtraction}
                  />
                </div>
                {/* //! DOCXREADER */}

                <div className='flex gap-10 mt-4 justify-center items-center'>
                 
                  {/* <label for="countries" className="block mb-2 hover:cursor-pointer  text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                  <Menu as="div" className="relative rounded-full inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full  rounded-full button-17 justify-center gap-x-1.5 bg-[#FE3131] text-white px-3 py-2">
                        {selectedLanguage} {/* Display the selected language */}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {languages.map((language) => (
                            <Menu.Item key={language}>
                              {({ active }) => (
                                <button
                                onClick={handleLanguageChange} // Pass the handleLanguageChange function directly
                                value={language} // Set the value of the button to the language
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm w-full text-left'
                                )}
                              >
                                {language}
                              </button>
                              
                              
                              )}
                            </Menu.Item>

                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="submit"
                    className="button-17"
                  >
                    Submit
                  </button>


                </div>



              </form>
            </div>
          </div>

          {/* Output result div */}
          <div className="w-full h-screen">
            <div className="w-full h-screen flex justify-center">
              <textarea
                              data-aos='fade-up' data-aos-duration="2000"

                type="text"
                name="text"
                id="resp_text"
                className="h-1/2 boxShadow w-[75%] my-[0rem] md:my-[5rem] rounded-xl bg-white text-[#FE3131] pl-4"
                value={explained}
                placeholder="ChatGPT Response"
                style={{
                  textAlign: "left",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  wordBreak: "break-all",
                  resize: "none",
                }}
              // CSS for placeholder

              />

            </div>
          </div>
        </div>


      </div>

      <Footer />
    </>
  );
};

export default ParentComp;
