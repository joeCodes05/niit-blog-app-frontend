import React from 'react'

const Button = ({ text, onclick }) => {
  return (
    <>
      <button onClick={onclick} className='py-1.5 px-3 font-semibold rounded-md bg-transparent ring-1 ring-white text-white duration-500 hover:bg-white hover:bg-opacity-10 text-base outline-none'>
        {text}
      </button>
    </>
  )
}

const PrimaryButton = ({text, onClick}) => {
  return (
    <>
      <button onClick={onClick} className='py-1.5 px-3 font-semibold rounded-md bg-primary ring-1 ring-primary text-dark duration-500 text-base outline-none'>
        {text}
      </button>
    </>
  )
}

export {Button, PrimaryButton}