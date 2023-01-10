import React from "react";
import { useRef } from "react";
import { TiDelete } from "react-icons/ti";


function New(props) {
  const data = useRef();
  


  const handleClick = () => {

    if (localStorage.getItem("location") == null) {
      localStorage.setItem("location", "[]");
    }
    let oldData = JSON.parse(localStorage.getItem("location"));
    oldData.push(data.current.value);

    localStorage.setItem("location", JSON.stringify(oldData));
    props.toggleElement()
    data.current.value = ""    
  };

  return (
    <div className="w-full h-5/6 flex justify-center items-center absolute botton-0 left-0 new">
      <div className="sm:w-5/6 md:w-4/6 w-4/5 h-1/2 bg-black/[0.2] relative ">
        <TiDelete
          size={"2.8rem"}
          color={"#fff"}
          className="absolute top-8 right-8"
          onClick={props.toggleElement}
        />

        <div className="border-2 border-white w-full h-full flex flex-col items-center justify-center ">
          <input
            className="p-4 w-4/5 sm:w-72 lg:w-2/5"
            type="text"
            placeholder="input"
            ref={data}

          />
          <button
            className="text-black mt-5 bg-white px-6 py-3 rounded-lg uppercase "
            onClick={handleClick}
          >
            add
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default New;
