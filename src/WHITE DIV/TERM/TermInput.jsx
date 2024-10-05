import React from "react";

const LeftInput = ({ value, termChange, isValid }) => {
    
    const handleChange = (e) => {
       termChange(e.target.value);
    }

    return (
        <>
            <div className='w-[180px] h-[100px] mt-[10px]'>
                <p className="mb-[15px] text-slate-400 font-medium text-[14.5px]">Mortgage Term</p>
                <div className={isValid ? "flex flex-row items-center w-[200px] h-[50px] rounded-[5px] border-[2px] border-slate-300" : "flex flex-row items-center w-[200px] h-[50px] rounded-[5px] border-[2px] border-red-600"}>
                    <input 
                    value={value} 
                    onChange={handleChange} 
                    type="text" 
                    className="w-[120px] h-[46px] pl-[18px] focus:outline-none rounded-[5px] font-semibold text-slate-700 placeholder:italic placeholder:text-slate-300 placeholder:font-normal" 
                    placeholder="time needed"
                    />
                    <div className={isValid ? "bg-sky-100 w-[80px] h-[46px] flex justify-center items-center rounded-tr-[3px] rounded-br-[3px] font-bold text-slate-700 text-[16px]" : "bg-red-100 w-[80px] h-[46px] flex justify-center items-center rounded-tr-[3px] rounded-br-[3px] font-bold text-red-600 text-[16px]"}>years</div>
                </div>
                <p className={isValid ? 'hidden' : 'block text-red-600 font-bold text-[10px] mt-[2px] w-[197px] text-right'}><i>The input should be a valid number</i></p>
            </div>
        </>
    )
}

export default LeftInput