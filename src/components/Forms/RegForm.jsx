import React from 'react';
import { useForm } from 'react-hook-form';


export default function RegForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Kalam Leo-Muthu Educational Awards 2024</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium">Nomination Type</label>
          <select {...register("Nomination Type")} className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option value="Select">Select</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Select Your Organization</label>
          <select {...register("Select Your Organization")} className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option value="Select">Select</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="CBSC">CBSC</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Fullname</label>
          <input type="text" placeholder="Name" {...register("Name", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.Name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select {...register("Gender")} className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Aadhar Number</label>
          <input type="text" placeholder="Aadhar Number" {...register("Aadhar Number")} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">School Name</label>
          <textarea placeholder="School Name" {...register("School Name", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
          {errors["School Name"] && <p className="text-red-500 text-sm">School Name is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input type="date" {...register("Date of Birth", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors["Date of Birth"] && <p className="text-red-500 text-sm">Date of Birth is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">School Registration Number</label>
          <input type="text" placeholder="School Registration Number" {...register("School Registration Number")} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input type="text" placeholder="Location" {...register("Location", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.Location && <p className="text-red-500 text-sm">Location is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">School Contact Number</label>
          <input type="tel" placeholder="School Contact Number" {...register("School Contact Number", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors["School Contact Number"] && <p className="text-red-500 text-sm">School Contact Number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea placeholder="Address" {...register("Address", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
          {errors.Address && <p className="text-red-500 text-sm">Address is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Contact Person Number</label>
          <input type="tel" placeholder="Contact Person Number" {...register("Contact Person Number", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors["Contact Person Number"] && <p className="text-red-500 text-sm">Contact Person Number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">District</label>
          <input type="text" placeholder="District" {...register("District", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors.District && <p className="text-red-500 text-sm">District is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Select Subject</label>
          <select {...register("Subject", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option value="Select">Select Subject</option>
            <option value="Tamil">Tamil</option>
            <option value="English">English</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="Social">Social</option>
            <option value="ComputerScience">Computer Science</option>
          </select>
          {errors.Subject && <p className="text-red-500 text-sm">Subject is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">School Email ID</label>
          <input type="email" placeholder="School Email ID" {...register("School Email ID", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors["School Email ID"] && <p className="text-red-500 text-sm">School Email ID is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email ID</label>
          <input type="email" placeholder="Email ID" {...register("Email ID", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors["Email ID"] && <p className="text-red-500 text-sm">Email ID is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Mobile Number</label>
          <input type="tel" placeholder="Mobile Number" {...register("Mobile Number", { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          {errors["Mobile Number"] && <p className="text-red-500 text-sm">Mobile Number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Landline</label>
          <input type="tel" placeholder="Landline" {...register("Landline")} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div className="flex justify-between mt-6">
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Submit</button>
          <button type="reset" className="bg-gray-300 text-black font-bold py-2 px-4 rounded">Reset</button>
        </div>
      </form>
    </div>
  );
}
