import React, { useState } from 'react';
import './settings.css';

function Settings(props) {
    const[newWordValue,setNewWordValue] = useState('');
    const[newWordListNameValue,setNewWordListNameValue] = useState('');
    const[newWordCountValue,setNewWordCountValue] = useState(props.wordCount);
    
    //onClick handling
    function handleAddClick (event) {
        event.preventDefault();
        for(let i = 0; i < props.len; i++) {
            //console.log(props.wordList[i].name);
            //console.log(props.currentList);
            if (props.wordList[i].name == props.currentList) {              
                let ar = props.wordList
                ar[i].arr = [...ar[i].arr,{val:newWordValue}];
                props.setWordList(ar);
                //console.log(ar);
            }
        }
        setNewWordValue('');
    }

    function handleDellClick (event) {
        event.preventDefault();
        console.log('hi')
        props.setWordList(props.wordList.filter((el) =>
            el.name != props.currentList
        ));
    }

    function handleWordCountClick (event) {
        event.preventDefault();
        props.setWordCount(newWordCountValue);
    }

    function handleAddNewWordListClick (event) {
        event.preventDefault();
        props.setWordList([
            ...props.wordList,{name:newWordListNameValue,arr:[]}
        ]);
        props.setCurrentList(newWordListNameValue);
        setNewWordListNameValue('')
    }

    //onChange handling
    function handleCountChange (event) {
        event.preventDefault();
        setNewWordCountValue(Number(event.target.value));
    }

    function handleWordChange (event) {
        event.preventDefault();
        setNewWordValue(event.target.value);
    }

    function handleNewWordListNameValueChange (event) {
        event.preventDefault();
        setNewWordListNameValue(event.target.value);
    }

    function hanleSelectChange (event) {
        event.preventDefault();
        props.setCurrentList(event.target.value);
    }
    
    return (
        <div className='settings'>
            <form className='form'>
                <p className='settings-text'>добавление нового слова в текущий список</p>
                <input type = 'text' className='text-input' value={newWordValue} onChange={handleWordChange}/>
                <button className='word-input-button' onClick={handleAddClick}>Добавить</button>
            </form>
            <form className='form'>
                <p className='settings-text'>добавление нового списка слов</p>
                <input type = 'text' className='text-input' value={newWordListNameValue} onChange={handleNewWordListNameValueChange}/>
                <button className='word-input-button' onClick={handleAddNewWordListClick}>Добавить</button>
            </form>
            <div className='select'>
                <p className='settings-text'>выбор списка слов или удаление выбранного</p>
                <select onChange={hanleSelectChange} name='arr-select' className='arr--select' id='select1'>
                    {props.wordList.map((el) => {
                        return(<option key={el.name} value={el.name}>{el.name}</option>);
                    })}
                </select>
                <button className='word-input-button' onClick={handleDellClick}>Удалить</button>
            </div>
            <form className='form'>
                <p className='settings-text'>количество слов в тесте </p>
                <input type = 'text' className='text-input' value={newWordCountValue} onChange={handleCountChange}/>
                <button className='word-input-button' onClick={handleWordCountClick}>Изменить</button>
            </form>
        </div>

    )
}

export default Settings;