import React, { useState,useEffect} from 'react';
import './body.css';
import Navbar from './navbar.js';
import Content from './content';
import Settings from './settings.js';
import Info from './info.js'

function Body() {
    const[wordList,setWordList] = useState([]);
    const[currentList,setCurrentList] = useState('');
    const[wordMash,setWordMash] = useState('')
    const[handledWordMash,setHandledWordMash] = useState('');
    const[mode,setMode] = useState('info');
    const[wordCount,setWordCount] = useState(10);

    useEffect(() => {
        getWordList();
    },[]);

    useEffect(() => {
        function handleKey (event) {
            if(event.key == wordMash[0]) {
                console.log(event.key);
                setHandledWordMash(handledWordMash + event.key);
                setWordMash(wordMash.substring(1));
            }
        }
        document.addEventListener('keyup',handleKey);
        return () => {
            document.removeEventListener('keyup',handleKey);
        }
    },[wordMash]);

    useEffect(() => {
        saveWordlist();
    },[wordList]);

    function saveWordlist () {
        localStorage.setItem("wordList",JSON.stringify(wordList));
    }

    function getWordList () {
        if(localStorage.getItem("wordList") === null ) {
            localStorage.setItem("wordList",JSON.stringify([]));
        }
        else {
            let savedWordList = JSON.parse(localStorage.getItem("wordList",JSON.stringify(wordList)));
            setWordList(savedWordList);
        }
    }

    function addMode() {
        switch (mode) {
            case 'content':
                return(
                    <Content wordMash={wordMash} 
                    handledWordMash={handledWordMash}
                    />);
            case 'settings': 
                return(
                    <Settings setWordList={setWordList} 
                    wordList={wordList}
                    len={wordList.length}
                    wordCount={wordCount}
                    setWordCount={setWordCount}
                    setCurrentList={setCurrentList}
                    currentList={currentList}
                    />);
            case 'info':
                return(
                    <Info/>
                );
        }
    }
    return (
        <div className='Body'>
            <Navbar setWordMash={setWordMash} 
                wordList={wordList} 
                len={wordList.length}
                setHandledWordMash={setHandledWordMash}
                setMode={setMode}
                wordCount={wordCount}
                currentList={currentList}
            />
            {addMode()}

        </div>
    )
}

export default Body;
