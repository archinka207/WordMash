import React from 'react';
import './navbar.css';

function Navbar(props) {

    function handleStartClick (event) {
        event.preventDefault();
        for(let i = 0; i < props.len; i++) {
            if (props.wordList[i].name == props.currentList) {  
                //ar is a current arr            
                let ar = props.wordList[i].arr;
                console.log(ar);
                console.log(props.currentList);
                // make wordMash
                let st = '';
                for(let i = 0; i <= props.wordCount; i++) {
                    st += String(ar[parseInt(Math.random() * ar.length)].val); 
                    st += " ";
                }
                props.setWordMash(st);
            }
        }

        props.setHandledWordMash('');
        props.setMode('content');
    }

    function handleSettingsClick (event) {
        event.preventDefault();
        props.setMode('settings');
    }

    function handleInfoClick (event) {
        event.preventDefault();
        props.setMode('info');
    }

    return (
        <div className='nav'>
            <div className='logo'><span className='logo-text'>WM</span></div>
            <div className='navbar-container'>
                <button className='but-navbar' onClick={handleInfoClick}>Информация</button>
                <button className='but-navbar' onClick={handleSettingsClick}>Настройки</button>
                <button className='but-navbar' onClick={handleStartClick}>Запустить</button>
            </div>
        </div>
    );
}

export default Navbar;