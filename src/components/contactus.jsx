import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contactus() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
          
    <div className='p-6 md:p-10 flex flex-col md:flex-row h-full bg-[]'>
    <div className='flex-1/2 md:m-10 w-[80vw] md:w-[50vw]'>
        <h1 className='text-5xl mb-5 font-bold'>CONTACT US</h1>
        <p className="text-sm text-gray-700 mb-2">
               <h3>Email</h3>
               <p className='text-xl my-3 w-[90%]'>if you have any questions or concerns about the terms & conditions please contact us :</p>
          
               <h3 className='text-xl my-3 w-[90%] text-yellow-700'>kalam_leomuthuawards@sairam.edu.in</h3>
            </p>
            <p className="text-sm text-gray-700 mb-2">
            <h3>Phone</h3>
            <ul className='text-xl my-3 w-[90%] list-disc' >
                <li>Mrs. T. Mangayarkarasi - 87545 02226 </li>
                <li>Dr. V. Brindha Devi - 87545 82225 </li>
                <li>Dr. G. Prakash - 87545 82221</li>
                <li>Dr. K. Renganathan - 87545 02228</li>
            </ul>
            </p>
    </div>
    
    <div className='flex-1/2 md:m-10 w-[80vw] md:w-[50vw] '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 rounded-xl">
              <label className="block text-gray-700 text-sm font-bold mb-2 rounded-" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md"
                {...register("Name", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 rounded-xl" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md"
                {...register("Email", { required: true })}
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2 rounded-xl" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                {...register("Message", {})}
                className="w-full px-4 py-3 border rounded-md"
              />
            </div>

            <input
              
              type="submit"
              value="Send"
              className="bg-[#7D582D] text-white  pt-2 pd-2 px-2 py-2 rounded-full cursor-pointer w-full"
            />
          </form>
        </div>
      </div>
    
  );
}
