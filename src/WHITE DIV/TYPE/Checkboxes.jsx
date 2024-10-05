import React from "react";



const CheckboxTypes = ({ isRepaymentChecked, setIsRepayment }) => {
    console.log(isRepaymentChecked);


    return (
        <>
            <div className="mt-[12px]">
                <h1 className=" text-slate-400 font-medium text-[14.5px]">Mortgage Type</h1>
                <div className="flex flex-col">
                    <div className={isRepaymentChecked ? "flex flex-row items-center mt-[10px] w-[400px] h-[40px] border-[2.5px] border-booger-green bg-light-booger-green rounded-[5px] cursor-pointer" : "flex flex-row items-center mt-[10px] w-[400px] h-[40px] border-[2.5px] border-slate-300 rounded-[5px] cursor-pointer"}>
                        
                        <input
                            id="repayment"
                            name="option"
                            type="radio"
                            value="Repayment"
                            className="ml-[10px] accent-booger-green  cursor-pointer"
                            defaultChecked
                            onChange={() => setIsRepayment(true)}
                        />
                        <label
                            htmlFor="repayment"
                            className="w-[350px] h-[30px] pl-[15px] pt-[3px] font-medium cursor-pointer ">
                            Repayment
                        </label>
                    </div>
                    <div className={!isRepaymentChecked ? "flex flex-row items-center mt-[10px] w-[400px] h-[40px] border-[2.5px] border-booger-green bg-light-booger-green rounded-[5px] cursor-pointer" : "flex flex-row items-center mt-[10px] w-[400px] h-[40px] border-[2.5px] border-slate-300 rounded-[5px] cursor-pointer"}>
                        <input
                            id="interest-only"
                            name="option"
                            type="radio"
                            value="Interest Only"
                            className="ml-[10px] accent-booger-green cursor-pointer"
                            onChange={() => setIsRepayment(false)}
                        />
                        <label
                            htmlFor="interest-only"
                            className="w-[350px] h-[30px] pl-[15px] pt-[3px] font-medium cursor-pointer">
                            Interest Only
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CheckboxTypes
