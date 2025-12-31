import React from 'react'

const Cards = (props) => {
    
  return (
    <div className='w-full flex p-3 bg-[#333]
    justify-between rounded-xl
    ' key={props.key}>
        <h6 className='text-amber-50 text-2xl uppercase'>{props.name}</h6>
        <p className='text-amber-50 text-xl'>{props.email}</p>
        <span className='text-amber-50 p-1 bg-emerald-500 rounded'>Call</span>
    </div>
  )
}

export default Cards