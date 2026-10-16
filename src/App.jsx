import { Avaliacao } from "./components/Avaliacao";

const App = () => {
  return ( 
    <main className="min-h-screen flex justify-center items-center">
       <div className="border-2 border-black w-100">
        <Avaliacao />
       </div>
    </main>
   );
}
 
export { App };