import React from "react";
import InputMask from 'react-input-mask';

const FirstInput = ({ value, amountChange, isValid }) => {
  const handleInput = (e) => {
    amountChange(e.target.value);
  }

  return (
    <>
      <div className='w-[400px] h-[100px] mt-[20px]'>
        <p className="mb-[15px] text-slate-400 font-medium text-[14.5px]">Mortgage Amount</p>
        <div className={isValid ? "bg-sky-100 flex flex-row items-center border-[2px] border-slate-300 w-[400px] h-[50px] rounded-[5px]" : "bg-red-200 flex flex-row items-center border-[2px] border-red-600 w-[400px] h-[50px] rounded-[5px]"}>
          <div className={isValid ? "w-[55px] h-[30px] flex justify-center items-center font-bold text-slate-700 text-[16px]" : "w-[55px] h-[30px] flex justify-center items-center font-bold text-red-600 text-[16px]"}>$</div>
          <InputMask
            mask='999,999.99'
            placeholder='The amount of money required'
            value={value}
            onChange={handleInput}
          >
            {() => <input
              value={value}
              onChange={handleInput}
              type="text"
              className="w-[400px] h-[46px] pl-[25px] focus:outline-none rounded-br-[5px] rounded-tr-[5px] font-semibold text-slate-700 placeholder:italic placeholder:text-slate-300 placeholder:font-normal"
              placeholder='The amount of money required'
            />}
          </InputMask>

        </div>
        <p className={isValid ? 'hidden' : 'block text-red-600 font-bold text-[10px] mt-[2px] w-[397px] text-right'}><i>The input should be a valid number</i></p>
      </div>
    </>
  )
}

export default FirstInput;