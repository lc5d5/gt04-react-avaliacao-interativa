import { useState } from "react";

const Aprendendo = () => {

    const [avaliou, setAvaliou] = useState(false);

    return (
        <>
        {
            avaliou ? (
                <p>You selected ${} out of 5</p>
                <p>Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            ) : (
                <div>
                    <p>How did we do? Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>

                <ul class="flex justify-center gap-1">
                    <li><button type="button" aria-label="1 estrela" className="text-2xl">1</button></li>
                    <li><button type="button" aria-label="2 estrelas" className="text-2xl">2</button></li>
                    <li><button type="button" aria-label="3 estrelas" className="text-2xl">3</button></li>
                    <li><button type="button" aria-label="4 estrelas" className="text-2xl">4</button></li>
                    <li><button type="button" aria-label="5 estrelas" className="text-2xl">5</button></li>
                </ul>
                <div className="flex justify-center">
                    <button type="submit">Submit</button>
                </div>
                )
        }
        </>
     );
}

export default Aprendendo;