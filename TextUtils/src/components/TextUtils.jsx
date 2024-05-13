import  { useState } from 'react'

export const TextUtils = () => {
    const [changeText, setChangeText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

  
    // toUpperCase
    const textChangeFun = () =>{
        let UpperCase = changeText.toUpperCase().trim();
        setChangeText(UpperCase)
    }

    // toLowerCase
    const textLowerCaseFun = () =>{
        let LowerCase = changeText.toLowerCase().trim();
        setChangeText(LowerCase);
    }

    // capitalize First Letter
    const  capitalizeFirstLetter= () =>{
        let capitalize = changeText.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        setChangeText(capitalize);
    }

    // readText
    const readText = () => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(changeText);
        utterance.addEventListener('start', () => setIsSpeaking(true));
        utterance.addEventListener('end', () => setIsSpeaking(false));
        window.speechSynthesis.speak(utterance);
      } else {
        console.log('Speech synthesis is not supported in this browser.');
      }
    };

  return (
    <div className=' container'>
    <div className="text d-flex justify-content-around mb-3 pt-4">
  <h2 className='text-center '>Text Utils</h2>




    </div>
         <div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" cols={4} rows={5} defaultValue={""} value={changeText} onChange={(e)=>setChangeText(e.target.value)} placeholder='Enter Your Text Here...' />
</div>

  <div className="buttons d-flex gap-4">
  <button onClick={textChangeFun} className='btn btn-success ' >Text Upper Letter</button>
  <button onClick={textLowerCaseFun} className='btn btn-danger' >Text Small letter</button>

  <button onClick={capitalizeFirstLetter} className='btn btn-danger' >Capitalize first letter</button>

  <button
          onClick={readText}
          className="btn btn-primary"
          disabled={isSpeaking}
        >
          {isSpeaking ? 'Speaking...' : 'Read Text'}
        </button>

  </div>


<h3 className='mt-4'>Preview</h3>
  <p>{changeText}</p>


<h3 className='mt-4'>Word and character count</h3>
  <p>Total Characters :  <span className=' text-danger fw-bold'>{changeText.length}</span> and total words : <span className='text-danger fw-bolder'>{changeText.split(' ').length}</span> </p>
    </div>
  )
}
