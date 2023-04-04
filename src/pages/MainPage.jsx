import React, { useState } from 'react'
import MyButton from '../components/myButton/MyButton'
import MyInput from '../components/myInput/MyInput'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddAction, handleClearAction } from '../redux/actions'

const MainPage = () => {

    const dispatch = useDispatch()
    const { value, sum } = useSelector(state => state.sumReducer)

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        dispatch(handleAddAction(input))
        setInput("")
    }

    const handleClear = () => {
        dispatch(handleClearAction())
    }

    return (
        <div className='main__inner'>
            <h1>Adder</h1>
            <div className='adder'>
                <div className='adder__inputs'>
                    <MyInput onChange={handleChange} type='number' placeholder='enter value...' value={input} />
                    <MyButton onClick={handleAdd}>Add</MyButton>
                    <MyButton onClick={handleClear}>Clear</MyButton>
                </div>
                <div className='adder__output'>
                    <p>Current value: {value}</p>
                    <p>Sum value: {sum}</p>
                </div>
            </div>
        </div >
    )
}

export default MainPage