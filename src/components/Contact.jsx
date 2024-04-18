import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#19376D] text-[#F5EFE7] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/paygegra" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6B17A] text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nome' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensagem'></textarea>
            <button className='text-white border-2 hover:border-[#F6B17A] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact