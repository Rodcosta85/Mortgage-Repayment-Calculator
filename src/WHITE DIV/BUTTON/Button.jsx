import React from "react";


const GreenButton = ({ img, value, isRepayment }) => {
    return (
        <>
            <div className="w-[300px] h-[50px] mt-[35px]">
                <button
                    value={value}
                    type="submit"
                    className=" flex flex-row items-center justify-center w-[300px] h-[45px] bg-booger-green font-bold text-slate-900 rounded-[25px]">
                    <img
                        src={img}
                        alt="calculator symbol"
                        className="mr-[10px]"
                    />
                    Calculate {isRepayment ? "Repayment" : "Interest"}
                </button>
            </div>
        </>
    )
}

export default GreenButton;