import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import Login from "./components/Login";
import Crud from "./components/Crud";

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <div className="text-center  font-mono">
      {!signed && <Login setSigned={setSigned} />}
      {signed && <Crud />}
      <footer className="p-3 mt-3 text-white bg-blue">
        <p className="font-bold text-2xl">
          Coded With Love By <br /> ahmedTaha
          <AiFillHeart className="ml-1 inline-block align-middle text-3xl " />
        </p>
      </footer>
    </div>
  );
}

export default App;
