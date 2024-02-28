'use client';
import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  //add the list
  const addtodo = (e: any) => {
    if(!value){
      return console.log('error')
    }
    setList([...list, value]);
    setValue('');
  }

  //delete the list
  const deleteOn = (e:any) =>{
    let deleteone = [...list];
    deleteone.splice(e,1);
    setList([...deleteone])
  }

  //delete all the element
  const deleteall = (e:any) =>{
    let deleteone = [...list];
    deleteone.splice(e);
    setList([...deleteone])
  }

  console.log(value);
  console.log(list);

  return (
    // <div className= "items-center">
    <main className=" items-center text-xl m-10 mt-16">
      <div className="text-center text-xl">
        <h1 className="text-6xl">Todo-Web-App</h1>
        <hr className="border-2 border-white mb-8" />

        <div className="mt-16 gird p-1 grid-rows-2">
          <input className="w-9/12 h-10 border-0 rounded-full text-black text text-2xl p-1 pl-4 pr-4" type="text" value={value} onChange={handleChange} placeholder="Plese type something here..." />
          <button className="mt-1 p-1 rounded-full w-32 h-12 text-2xl ml-3 border-0 hover:text-white hover:bg-blue-600 hover:border-0 sm:mt-5" onClick={addtodo}>Add</button>
          <button className="mt-1 p-1 text-nowrap rounded-full w-40 h-12 text-xl ml-3 border-0 hover:text-white hover:bg-red-600 hover:border-0 sm:mt-5" onClick={deleteall}>Delete All</button>
        </div>

        <div className="m-5 text-left mt-8">
          <ul className=" list-none p-2">
            {list.map((item) => {
              return (<li className="flex p-3 pl-5 m-3 mb-5 text-xl border-solid justify-between border-white rounded-xl  mx-7">{item}
                <button className="bg-blue-600 border-0 text-white rounded-md h-7 text-base hover:bg-red-600" onClick={deleteOn}>Delete</button>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </main>
    // </div>
  );
}
