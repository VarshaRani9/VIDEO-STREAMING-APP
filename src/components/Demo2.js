import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0); // {current : 0}
  let x = 0;
  // const x = 0; // error(assignment to const)

  // ? Assignments to the 'i' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property.Otherwise, you can move this variable directly inside useEffect- but the it will be local scoped so we can't use it out like handing it on a button click.

  // let i;
  // useEffect(()=>{
  //     i = setInterval(()=>{
  //         console.log("HEy!!"+Math.random()*4);
  //     },2000)
  //   return () => clearInterval(i)
  // },[])

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("HEy!!"+Math.random()*4);
    }, 2000);
    return () => clearInterval(i.current)
  }, []);

  return (
    <div className="m-4 p-2 w-96 h-96 bg-slate-200 border border-black ">
      <div>
        <button
          className="bg-red-300 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("let: " + x); // it increments but not updates UI bcz it doesn't cause the re-rendering of component
          }}
        >
          Increment x
        </button>
        <span className="font-bold text-xl">Let X : {x}</span>
      </div>

      <div>
        <button
          className="bg-red-300 p-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log("state: " + y);
          }}
        >
          Increment y
        </button>
        <span className="font-bold text-xl">State Y: {y}</span>
      </div>

      <div>
        <button
          className="bg-red-300 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref: " + ref.current); // it increments and persists the value, will not re-render the component and updates UI on re-rendering of component
          }}
        >
          Increment ref
        </button>
        <span className="font-bold text-xl">Ref : {ref.current}</span>
      </div>
      <button className="bg-red-700 p-2 m-4" onClick={() => {clearInterval(i.current)}
    // onClick={() => {clearInterval(i)}
    }>
        stop
      </button>
    </div>
  );
};

export default Demo2;
