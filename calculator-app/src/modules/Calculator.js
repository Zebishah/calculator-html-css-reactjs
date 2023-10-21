import React, { useRef, useState, useCallback } from 'react'

const Calculator = () => {
    let [result, setResult] = useState("");
    let [exp, setExp] = useState("");
    let clear = useRef(null);
    let del = useRef(null);
    let percent = useRef(null);
    let divide = useRef(null);
    let seven = useRef(null);
    let eight = useRef(null);
    let nine = useRef(null);
    let multiply = useRef(null);
    let four = useRef(null);
    let five = useRef(null);
    let six = useRef(null);
    let minus = useRef(null);
    let one = useRef(null);
    let two = useRef(null);
    let three = useRef(null);
    let plus = useRef(null);
    let dbl_zero = useRef(null);
    let zero = useRef(null);
    let point = useRef(null);
    let equal = useRef(null);
    const BtnClick = useCallback((value) => {

        console.log(result.charAt(result.length - 1));
        if (result === '') {
            if (value !== '+' && value !== '-' && value !== '/' && value !== '*' && value !== '%' && value !== equal.current.textContent)
                setResult((prevResult) => prevResult + value);
        }
        else if ('+-*/%'.includes(value) && '+-*/%'.includes(result.charAt(result.length - 1))) {

            setResult(result.slice(0, -1) + value);
        } else {
            setResult((prevResult) => prevResult + value);
        }




    }, [result]);
    const AC = () => {
        setResult("");
        setExp("")
    }
    const DEL = () => {
        setResult(result.slice(0, -1));
    }
    const Equal = () => {
        if (result !== "") {
            try {
                setExp(result.toString());
                setResult(eval(result).toString());
            }
            catch {
                setResult("Error")
            }
        }
    }


    return (
        <div>
            <div className='flex flex-col justify-center items-center w-full h-screen bg-[#232323] gap-y-2'>
                <h1 className='text-purple-500 font-sans text-[2rem]'>Calculator</h1>
                <div className='flex flex-col justify-center items-center p-4 bg-[#231F20] shadow-sm shadow-black w-[38%] gap-2 smd:w-[38%] ssm:w-[68%] sssm:w-[88%]' >
                    <div className='flex flex-col justify-center items-center bg-purple-600 gap-1 w-[87%] rounded-md '>
                        <div className='flex flex-col gap-2 p-3 w-[100%] text-right h-[5rem]'>
                            <p className='text-right text-white font-sans'>{exp}</p>
                            <p className='text-right text-white font-sans text-[1.5rem]'>{result}</p>
                        </div>


                    </div>

                    <div className='flex flex-row gap-x-1 w-[87%] justify-center items-center'>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={clear} onClick={() => AC()}>AC</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={del} onClick={() => DEL()}>DEL</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={percent} onClick={() => BtnClick(percent.current.textContent)}>%</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={divide} onClick={() => BtnClick(divide.current.textContent)}>/</button>
                    </div>
                    <div className='flex flex-row gap-x-1 w-[87%] justify-center items-center'>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={seven} onClick={() => BtnClick(seven.current.textContent)}>7</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={eight} onClick={() => BtnClick(eight.current.textContent)}>8</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={nine} onClick={() => BtnClick(nine.current.textContent)}>9</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={multiply} onClick={() => BtnClick(multiply.current.textContent)}>*</button>
                    </div>
                    <div className='flex flex-row gap-x-1 w-[87%] justify-center items-center'>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={four} onClick={() => BtnClick(four.current.textContent)}>4</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={five} onClick={() => BtnClick(three.current.textContent)}>5</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={six} onClick={() => BtnClick(six.current.textContent)}>6</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={minus} onClick={() => BtnClick(minus.current.textContent)}>-</button>
                    </div>
                    <div className='flex flex-row gap-x-1 w-[87%] justify-center items-center'>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={one} onClick={() => BtnClick(one.current.textContent)}>1</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={two} onClick={() => BtnClick(two.current.textContent)}>2</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={three} onClick={() => BtnClick(three.current.textContent)}>3</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={plus} onClick={() => BtnClick(plus.current.textContent)}>+</button>
                    </div>
                    <div className='flex flex-row gap-x-1 w-[87%] justify-center items-center'>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={dbl_zero} onClick={() => BtnClick(dbl_zero.current.textContent)} >00</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={zero} onClick={() => BtnClick(zero.current.textContent)}>0</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={point} onClick={() => BtnClick(point.current.textContent)}>.</button>
                        <button className='bg-purple-600 text-white p-4 rounded-md w-[25%] font-sans shadow-sm shadow-black hover:bg-white hover:text-purple-600 transition-all duration-500 ease-in-out' ref={equal} onClick={() => Equal()}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator