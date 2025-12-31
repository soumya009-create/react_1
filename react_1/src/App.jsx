import React, { useState } from 'react'
import Cards from './components/Cards';

const App = () => {
    const [prevarr, setprevarr] = useState([])
   const [name, setname] = useState('')
   const [email, setemail] = useState('')
  const submitHandle=(e)=>{
    e.preventDefault();
    setprevarr([...prevarr,{name,email}])
   console.log(prevarr)
   setname('')
   setemail('')
  }
  const changeName=(e)=>{
    setname(e.target.value)
  }
  const changeEmail=(e)=>{
    setemail(e.target.value)
  }

  

  return (
    <div className='h-screen w-screen bg-black flex justify-between py-10 px-25 items-center' >
      <form className=' w-fit h-fit flex flex-col items-center gap-4 p-4  border border-white rounded-2xl'
      onSubmit={(e)=>{
        submitHandle(e)
      }}
        >
        <input type="text" placeholder='Enter Name' className='text-white p-1 border border-white rounded'
        value={name}
        onChange={(e)=>{
          changeName(e)
        }}
        />
        <input type="text" placeholder='Enter Email' className='text-white p-1 border border-white rounded' 
        value={email}
        onChange={(e)=>{
          changeEmail(e)
        }}
        />
        <button type="submit" className='text-white bg-emerald-400 p-2 rounded border-emerald-300 bold'>Add Contact</button>
      </form>
      <div className='contacts h-full min-h-full max-h-full overflow-y-auto no-scrollbar w-[50vw] border border-white rounded-2xl p-3 flex gap-2 flex-col '>
       {prevarr.map((elem,idx)=>{
        return <Cards name={elem.name} email={elem.email} key={idx}/>
       })}
      </div>
    </div>
  )
}

export default App
