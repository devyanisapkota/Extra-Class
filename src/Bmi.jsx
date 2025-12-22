import { useState } from "react";

function Bmi(){
  const[weight,setWeight] = useState('')
  const[height,setHeight] = useState('')
  const[bmi,setBmi] = useState(null)
  const[bmiCategory,setBmiCategory] = useState('')

  function calculateBmi(){
    
    if(weight && height){
        const heightInMeter = height/100
        const bmiValue =(weight/(heightInMeter*heightInMeter)).toFixed(2)
        setBmi(bmiValue)

        if(bmiValue < 18.5){
          setBmiCategory("Underweight")
        }
        else if (bmiValue >=18.5 && bmiValue < 25){
          setBmiCategory("Healthy Weight")
        }
        else if (bmiValue >=25 && bmiValue < 30){
          setBmiCategory("Overweight")
        }
        else{
          setBmiCategory("Obesity")
        }
  }else{
    alert("Please Enter Weight and Height")
  }
}
    return(
    <>
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-screen flex items-center justify-center">
     <div className="bg-white p-8 rounded-lg">
     <h2 className="text-3xl font-bold text-center" >BMI Calculator</h2>
     <div className="mb-6"> 
        <label className="text-lg font-semibold">Weight (Kg)</label>
       <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter Your Weight in Kilogram" className="border border-gray-300 w-full p-3 rounded-lg"></input>
       <div className="mb-6" >
       <label className="text-lg font-semibold">Height (cm)</label>
       <input type="number" value={height}  onChange={(e)=>setHeight(e.target.value)} placeholder="Enter Your Height in Centimeter" className="border border-gray-300 w-full p-3 rounded-lg"></input>
       </div>
       <div className="bg-blue-600 text-white text-center w-full p-3 rounded-lg font-semibold hover:bg-blue-700 ">
        <button onClick={calculateBmi} type="submit" >Calculate BMI</button>
       </div>
        {bmi && (
          <div className="text-center">
            <p className="font-semibold text-lg">Your BMI:{bmi}</p>
            <p className="font-medium">{bmiCategory}</p>
          <p></p>
          </div>
        )}
     </div>
     </div>
    </div>
      
    </>
    );
}
export default Bmi