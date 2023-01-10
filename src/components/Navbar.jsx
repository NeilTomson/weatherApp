import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import {FiDelete} from "react-icons/fi"

function Navbar(props) {
  function removeAll(){
    localStorage.clear("location");
  }
  
  return (
    <div >
      <div className="flex flex-row  bg-slate-800/[.4] py-2 z-50">
        <div className="w-1/2 text-white text-3xl px-5">Weather<span className="text-teal-900">AT</span>You</div>
        <div className="flex flex-row justify-evenly w-1/2 ">
          <AiFillPlusCircle color="#fff" size={"2.5rem"} onClick={props.toggleElement}/>
          <FiDelete color="#fff" size={"2.5rem"} onClick={removeAll} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
