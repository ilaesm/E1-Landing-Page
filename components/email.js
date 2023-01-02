import React from 'react';
import { useState } from 'react';
import { database } from '../firebase.js';
import { ref, update, set } from 'firebase/database';

function Email() {
  // State to store the email value
  const [email, setEmail] = useState('');

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the email to the database
    update(ref(database, 'user'), {
      email: email
    });
  };

  return (
    <div className='flex justify-center w-full items-center -mt-12'>
      <form onSubmit={handleSubmit} className='mb-3 mx-auto xl:w-1/4 md:w-1/2 -mt-11'>
        <input
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='example@email.com'
          className='p-3 rounded-l-md sm:w-2/3 font-[Manrope] border-[1px] !outline-none border-zinc-200'
        />
        <button
          type='submit'
          className='p-3 bg-[#00ADC2] text-white font-semibold rounded-r-md sm:w-1/3 font-[Manrope] border-zinc-200 border-t-[0.3px] border-b-[1px] border-r-[1px]'
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}

export default Email;
