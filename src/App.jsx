import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const App = () => {

  const [nota, setNota] = useState(null);
  const [avaliou, setAvaliou] = useState(false);

  return ( 
    <div className="bg-[#121417] h-screen flex justify-center items-center">
      <div className="w-80 bg-linear-to-b from-[#252d37] to-[#121417] p-6 rounded-4xl">
        {
          avaliou ? (
            <>
              <div className="flex flex-col justify-center items-center gap-5 mb-4">
                <img src="./src/assets/illustration-thank-you.svg" alt="" />
                <h3 className="bg-white/10 text-xs text-center text-[#fb7413] mb-6 rounded-full inline-block px-3 m-auto">You selected {nota} out of 5</h3>
              </div>
              <h2 className="text-white text-xl font-semibold text-center mb-2">Thank you!</h2> 
              <p className="text-xs text-white/50 mb-4 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center mb-5">
              <BiSolidStar className="text-[#fb7413]"/>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">How did we do?</h3>
              <p className="text-xs text-white/50 mb-4">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              <div className="flex justify-between *:w-10 *:h-10 *:bg-white/10 *:rounded-full *:flex *:justify-center *:items-center *:text-white *:[&.active]:bg-white *:[&.active]:text-[#121417] *:hover:bg-[#fb7413] *:duration-200 *:cursor-pointer">
                <button onClick={() => setNota(1)} className={nota == 1 && "active"}>1</button>
                <button onClick={() => setNota(2)} className={nota == 2 && "active"}>2</button>
                <button onClick={() => setNota(3)} className={nota == 3 && "active"}>3</button>
                <button onClick={() => setNota(4)} className={nota == 4 && "active"}>4</button>
                <button onClick={() => setNota(5)} className={nota == 5 && "active"}>5</button>
              </div>
              <button 
              onClick = {() => setAvaliou(true)}
              disabled={nota == null}
              className="w-full h-10 bg-white/10 rounded-full flex justify-center items-center text-white not-disabled:hover:bg-orange-500 duration-200 cursor-pointer mt-4 mb-4">Submit</button>
          </>
          )
        }
        </div>
      </div>
   );
}
 
export default App;