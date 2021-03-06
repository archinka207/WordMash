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
            if (props.wordList[i].name == props.currentList) {              
                let ar = props.wordList;
                ar[i].arr = [...ar[i].arr,newWordValue];
                props.setWordList(ar);
            }
        }
        setNewWordValue('');
        props.saveWordlist(props.wordList);
    }

    function handleDellClick (event) {
        event.preventDefault();
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

    function hanleSelectListChange (event) {
        event.preventDefault();
        props.setCurrentList(event.target.value);
    }

    function handleTestModeChange (event) {
        event.preventDefault();
        props.setTestMode(event.target.value);
    }

    function handleComplexityChange (event){
        event.preventDefault();
        props.setComplexity(event.target.value);
    }
    
    return (
        <div className='settings'>
            <div className='select'>
                <p className='settings-text'>?????????? ????????????</p>
                <select onChange={handleTestModeChange} name='arr-select' className='arr--select' id='select1'>
                    <option value={'context_test'}>?????????????????????? ??????????</option>
                    <option value={'word_test'}>?????????????????? ??????????</option>
                </select>
            </div>
            <div className='select'>
                <p className='settings-text'>??????????????????</p>
                <select onChange={handleComplexityChange} name='arr-select' className='arr--select' id='select1'>
                    <option value={1}>????????????</option>
                    <option value={2}>??????????????</option>
                </select>
            </div>
            <form className='form'>
                <p className='settings-text'>???????????????????? ???????????? ?????????? ?? ?????????????? ????????????</p>
                <input type = 'text' className='text-input' value={newWordValue} onChange={handleWordChange}/>
                <button className='word-input-button' onClick={handleAddClick}>????????????????</button>
            </form>
            <form className='form'>
                <p className='settings-text'>???????????????????? ???????????? ???????????? ????????</p>
                <input type = 'text' className='text-input' value={newWordListNameValue} onChange={handleNewWordListNameValueChange}/>
                <button className='word-input-button' onClick={handleAddNewWordListClick}>????????????????</button>
            </form>
            <div className='select'>
                <p className='settings-text'>?????????? ???????????? ???????? ?????? ???????????????? ????????????????????</p>
                <select onChange={hanleSelectListChange} name='arr-select' className='arr--select' id='select1'>
                    {props.wordList.map((el) => {
                        return(<option key={el.name} value={el.name}>{el.name}</option>);
                    })}
                </select>
                <button className='word-input-button' onClick={handleDellClick}>??????????????</button>
            </div>
            <form className='form'>
                <p className='settings-text'>???????????????????? ???????? ?? ?????????? </p>
                <input type = 'text' className='text-input' value={newWordCountValue} onChange={handleCountChange}/>
                <button className='word-input-button' onClick={handleWordCountClick}>????????????????</button>
            </form>
        </div>

    )
}

export default Settings;
