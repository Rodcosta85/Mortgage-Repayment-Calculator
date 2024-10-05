import React from "react";

const ResultsDiv = ({ value, total, isRepaymentChecked }) => {
    return (
        <>
            <div className="flex flex-col p-[20px] pl-[30px] mt-[40px] w-[420px] h-[280px] bg-puma-blue border-t-[4px] border-booger-green rounded-[7px]">
                <div className="mt-[8px] w-[360px] h-[130px] border-b-[2px] border-slate-700">
                    <p className="text-slate-400 text-[16px] font-medium">
                        {isRepaymentChecked ? "Your monthly repayments" : "Total you'll repay over the term"}
                    </p>
                    <h1 className="text-booger-green text-[55px] font-semibold">
                        {isRepaymentChecked ? value : total}
                    </h1>
                </div>
                {isRepaymentChecked && (
                    <div className="mt-[18px]">
                        <p className="text-slate-400 text-[16px] font-medium">Total you'll repay over the term</p>
                        <p className="text-slate-200 text-[25px] font-medium mt-[6px]">
                            {total}
                        </p>
                    </div>
                )}

            </div>
        </>
    )
}

export default ResultsDiv