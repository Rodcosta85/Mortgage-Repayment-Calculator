import React from "react";

const RightInput = ({ value, rateChange }) => {
    const handleChange = (e) => {
        rateChange(e.target.value)
    }


    return (
        <>
            <div className='w-[180px] h-[100px] mt-[10px]'>
                <p className="mb-[15px]  text-slate-400 font-medium text-[14.5px]">Interest Rate</p>
                <div className="flex flex-row items-center  w-[170px] h-[50px] rounded-[5px] border-[2px] border-slate-300">
                    <input
                        value={value}
                        onChange={handleChange}
                        type="text"
                        className="w-[120px] h-[46px] pl-[18px] focus:outline-none rounded-tl-[5px] rounded-bl-[5px] font-bold text-slate-700 disabled:bg-gray-100"
                        disabled
                    />
                    <div className="bg-sky-100 w-[50px] h-[46px] flex justify-center items-center rounded-tr-[3px] rounded-br-[3px] font-bold text-slate-700">%</div>
                </div>
            </div>
        </>
    )
}

export default RightInput;