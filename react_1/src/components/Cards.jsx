import React from 'react'

const Cards = (props) => {
   
  return (
    <div className='w-full flex p-3 bg-[#333]
    justify-between rounded-xl
    '>
        
        <h6 className='text-amber-50 text-2xl uppercase'>{props.name}</h6>
        <p className='text-amber-50 text-xl'>{props.email}</p>
        <span className='text-amber-50 p-1 bg-red-400 rounded cursor-pointer active:scale-95'
         onClick={() => props.onDelete(props.idx)}
        >Delete</span>
        <span className='text-amber-50 p-1 bg-emerald-500 rounded cursor-pointer active:scale-95'>Call</span>
    </div>
  )
}

export default Cards