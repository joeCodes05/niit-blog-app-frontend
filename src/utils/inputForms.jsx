import React from 'react'

const FormControl = ({ placeholder, value, onChange, type }) => {
  return (
    <>
      <input type={type} className='p-2 outline-none rounded-md bg-secondary ring-1 w-full box-border ring-gray-700 text-white' placeholder={placeholder} value={value} onChange={onChange} required />
    </>
  )
}

export default FormControl