import React, { useEffect } from 'react';
import { useState } from 'react';

// Children from the white div + img
import Title from './WHITE DIV/TITLE/Title.jsx';
import AmountInput from './WHITE DIV/AMOUNT/AmountInput.jsx';
import TermInput from './WHITE DIV/TERM/TermInput.jsx';
import RateInput from './WHITE DIV/RATE/RateInput.jsx';
import Checkboxes from './WHITE DIV/TYPE/Checkboxes.jsx';
import Button from './WHITE DIV/BUTTON/Button.jsx';
import CalcImg from './images/icon-calculator.svg';



// Child from the blue div
import Results from './BLUE DIV/RESULT DIV/Results.jsx';


const stripMaskCharacters = (input) => {
  return input.replace(/^[0-9.]/g, '');
};


function App() {
  const amountRegex = /^(\d{1,3})(,\d{3})*(\.\d+)?$/; // regex for the money
  const yearsRegex = /^\d+$/; // regex for the years

  const [amount, setAmount] = useState('');
  const [isAmountValid, setIsAmountValid] = useState(true); // state para validação do campo. Precisa ser NUMBER

  const [rate, setRate] = useState(5.25);

  const [term, setTerm] = useState('');
  const [isTermValid, setIsTermValid] = useState(true);  // state para validação do campo. Precisa ser NUMBER

  const [monthlyPayment, setMonthlyPayment] = useState('');   // valor por mes
  const [total, setTotal] = useState('');   // valor total por ano

  const [isRepayment, setIsRepayment] = useState(true);   // estado que define se está calculando repayment



  const handleAmountInput = (value) => {
    const rawValue = stripMaskCharacters(value);
    setAmount(value);
    setIsAmountValid(amountRegex.test(rawValue));
  }

  const handleRateInput = (value) => {
    setRate(value)
  }


  const handleTermInput = (value) => {
    setTerm(value);
    setIsTermValid(yearsRegex.test(value));
  }
  // these capture the value from the input with the "e.target.value" from inside each child component



  const amountNum = parseFloat(amount);
  const termNum = parseFloat(term);
  // in theory after the function captures the values of the inputs, these would transform them into numbers so the equation can happen




  const mortgageTotal = (monthlyPayment, termNum) => {
    const total = monthlyPayment * (termNum * 12);
    // cálculo de transformar anos em meses

    const result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 3 }).format(total);
    // ferramenta de formatação de numeros (moedas, valores com vírgula, etc), ou seja, consegue arrendondar os números para a quantidade de dígitos desejada
    setTotal(result);
  }
  // equation to calculate the total amount of money you have to pay at the end of the chosen period





  const mortgageEquation = (amountNum, rateNum, termNum) => {
    let monthlyRate = rateNum / 100 / 12;
    let n = termNum * 12;

    let monthlyPayment = (amountNum * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);

    mortgageTotal(monthlyPayment, termNum);

    const result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 3 }).format(monthlyPayment);
    return result;

    // return monthlyPayment.toFixed();
    // to Fixed determina a quantidade casas decimais no nosso resultado
  }
  // Equation to calculate the monthly payments



  const handleCalculate = (e) => {
    e.preventDefault();
    // prevents the page from refreshing when the button is clicked, therefore holding the value in the blue div

    if (!amount || !term) {
      setIsAmountValid(false);
      setIsTermValid(false);
      return;
    }

    const payment = mortgageEquation(amountNum, rate, termNum);
    // separando as etapas do cáculo dentro da função. É chamada da função anterior guardada dentro de uma variável. Fica responsável ...
    setMonthlyPayment(payment);

    setIsAmountValid(isAmountValid);
    setIsTermValid(isTermValid);

    if (isRepayment) {
      mortgageEquation;
    }
  }


  const resetForm = () => {
    setAmount('');
    setTerm('');
    setTotal('');
    setMonthlyPayment('');
  }
  // resets the modifiable form inputs (amount, rate) when the "clear all" button is clicked
  // I still have to figure out the NaN issue in the value display


  useEffect(() => {
    console.log("isRepayment", isRepayment);
  }, [isRepayment]);
  // exibe o valor de isRepayment quando muda


  return (
    <>
      <div className='w-[1440px] h-[1010px] bg-sky-100 flex justify-center items-center'>
        <div className='w-[960px] h-[550px] rounded-[25px] flex bg-white shadow-xl shadow-grey'>
          <form onSubmit={handleCalculate} className='w-[470px] h-[550px] bg-white rounded-tl-[25px] rounded-bl-[25px] p-[40px]'>
            <Title reset={resetForm} />
            <AmountInput value={amount} amountChange={handleAmountInput} isValid={isAmountValid} />
            <div className="flex flex-row space-x-[50px]">
              <TermInput value={term} termChange={handleTermInput} isValid={isTermValid} />
              <RateInput value={rate} rateChange={handleRateInput} />
            </div>
            <Checkboxes isRepaymentChecked={isRepayment} setIsRepayment={setIsRepayment} />
            <Button type="submit" img={CalcImg} value={monthlyPayment} isRepayment={isRepayment} />
          </form>
          <div className='flex flex-col items-center w-[500px] h-[550px] p-[40px] bg-sky-950 rounded-tr-[25px] rounded-br-[25px] rounded-bl-[60px] translate'>
            <div>
              <h1 className='text-white text-[22px] font-semibold'>Your results</h1>
              <p className='text-slate-400 text-[16px] font-medium mt-[10px] w-[420px]'>Your results are shown below based on the information you have provided. To adjust the results, edit the form and click "Calculate Repayments" or "Calculate Interest" again. If you want to just start over, click "Clear all".</p>
            </div>
            <Results value={monthlyPayment} total={total} isRepaymentChecked={isRepayment} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
