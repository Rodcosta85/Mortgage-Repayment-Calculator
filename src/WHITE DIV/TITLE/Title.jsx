import React from "react";

const CalculatorDiv = ({ reset }) => {
  return (
    <>
      <div className='flex flex-row items-center w-[400px] h-[30px] space-x-[120px]'>
        <h1 className='m-0 text-slate-900 text-[22px] font-bold'>Mortgage Calculator</h1>
        <button 
        onClick={reset}
        type="button" 
        className='m-0 underline decoration-solid text-slate-400 text-[16px] font-medium'>
          Clear All
          </button>
      </div>
    </>
  )
}
export default CalculatorDiv