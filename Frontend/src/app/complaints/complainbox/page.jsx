"use client";
import React, { useState } from 'react';
import complain from "@/assets/complain.jpg";
import { TbCloudUpload } from "react-icons/tb";
import { GoHistory } from "react-icons/go";

const ComplainBox = () => {
  const [formData, setFormData] = useState({
    date: '',
    firstName: '',
    lastName: '',
    location: '',
    department: '',
    contact: '',
    email: '',
    complaintType: '',
    problem: '',
    urgency: 'Medium',
    file: null,
  });

  const fileInputRef = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleDropAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6"
      style={{
        backgroundImage: `url(${complain.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
      {/* History Icon */}
      <div className="absolute top-20 right-12">
        <a href="/complaints/history" className="text-white hover:text-gray-400 transition duration-300">
          <GoHistory className="text-3xl" />
        </a>
      </div>


      <form className="bg-transparent bg-opacity-100 bg-gray-800 p-6 rounded-lg shadow-lg w-dvw px-40 py-20" onSubmit={handleSubmit}>
        <h2 className=" metro-heading">Metro Issue Report Form</h2>

        {/* Date Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Date</label>
        <input type="date" name="date" className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />

        {/* Name Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Full Name</label>
        <div className="flex space-x-2">
          <input type="text" name="firstName" placeholder="First Name" className="w-full p-3 rounded-full bg-black  bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />
        </div>


        {/* Location Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Location</label>
        <input type="text" name="location" className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />


        {/* Department Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Department</label>
        <input type="text" name="department" className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />


        {/* Contact Number Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Contact Number</label>
        <input type="text" name="contact" className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />


        {/* Email Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Email</label>
        <input type="email" name="email" className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300" onChange={handleChange} />


        {/*Complaint Type*/}
        <label className="block mt-6 mb-3 text-cyan-50">Complaint Type</label>
        <select
          name="complaintType"
          className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 
  hover:border-gray-400 hover:ring-1 hover:ring-gray-400 outline-none text-white 
  placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out
  focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:bg-opacity-80 
  hover:bg-opacity-70 cursor-pointer appearance-none"
          onChange={handleChange}
        >
          <option value="" className="bg-black text-gray-300 ">Select Type</option>
          <option value="Service Issue" className="bg-black text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out">Service Issue</option>
          <option value="Safety Concern" className="bg-black text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out">Safety Concern</option>
          <option value="Billing Problem" className="bg-black text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out">Billing Problem</option>
        </select>


        {/* Description*/}
        <label className="block mt-6 mb-3 text-cyan-50">Please specify problem/access needed</label>
        <textarea name="problem" className="w-full p-3 rounded-lg bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300 py-10 px-10" onChange={handleChange}></textarea>



        {/* Urgency level Section */}
        <label className="block mt-6 mb-3 text-cyan-50">Urgency Level</label>
        <select
          name="complaintType"
          className="w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 
  hover:border-gray-400 hover:ring-1 hover:ring-gray-400 outline-none text-white 
  placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out
  focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:bg-opacity-80 
  hover:bg-opacity-70 cursor-pointer appearance-none"
          onChange={handleChange}
        >
          <option value="" className="bg-black text-gray-300">Enter Level</option>
          <option value="High" className="bg-black text-red-600 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out">High</option>
          <option value="Medium" className="bg-black text-yellow-600 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out">Medium</option>
          <option value="Low" className="bg-black text-green-600 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out">Low</option>
        </select>




        {/* File Attachment Section */}
        <label className="block mt-6 mb-3 text-cyan-50">File attachment</label>
        <div
          className="w-full p-6 border-dashed border-2 border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-white transition duration-300"
          onClick={handleDropAreaClick}>
          <TbCloudUpload className="text-4xl text-white" />
          <p className="text-white mt-2">Drop files here or click to upload</p>
          <input
            type="file"
            name="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
        {formData.file && (
          <p className="text-white mt-2 text-center">Selected file: {formData.file.name}</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button type="submit" className="form_btn">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default ComplainBox;
