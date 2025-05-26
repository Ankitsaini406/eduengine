"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface JobForm {
  name: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  linkedin: string;
  position: string;
  resume: File | null;
  heardFrom: string;
}

export default function JobApplicationForm() {
  const [form, setForm] = useState<JobForm>({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    linkedin: "",
    position: "",
    resume: null,
    heardFrom: "",
  });

  const jobPositions: string[] = [
    "Cyber Security Expert",
    "Graphic Designer",
    "Digital Marketing",
    "Full Stack Developer",
    "Android Developer",
    "Content Writing",
  ];

  const hearAboutOptions: string[] = [
    "LinkedIn",
    "Job Portal",
    "Friend/Colleague",
    "Company Website",
    "Social Media",
    "Other",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Application Submitted!");
  };

  const renderInput = (name: keyof JobForm, type: string = "text", label: string) => (
    <div className="w-full">
      <label className="block text-white mb-1 text-sm">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name] as string}
        onChange={handleChange}
        required={name !== "linkedin"}
        className="w-full border border-gray-300 bg-transparent py-1.5 px-3 text-base text-white focus:border-gray-400 focus:outline-none transition-all duration-300 rounded-md"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left - Image with Heading */}
      <div
        className="w-1/2 bg-cover bg-black bg-center brightness-50 relative rounded-4xl hidden md:block"
        style={{ backgroundImage: `url('/assets/corporate-meeting.png')` }}
      >
        <div className="absolute inset-0 flex items-start px-8 p-20">
          <h1 className="m-20 text-black text-2xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Join Our Team <br />of Innovators
          </h1>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-2 py-0 bg-gradient-to-br from-black via-gray-950 to-black">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-950 shadow-2xl rounded-2xl border border-white p-10 w-full max-w-xl animate-fade-in"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Job Application Form
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {renderInput("name", "text", "Full Name")}
            {renderInput("email", "email", "Email")}
            {renderInput("mobile", "tel", "Mobile Number")}
            {renderInput("address", "text", "Address")}
            {renderInput("city", "text", "City")}
            {renderInput("state", "text", "State")}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {renderInput("linkedin", "url", "LinkedIn prof. URL")}

            <div className="w-full">
              <label className="block text-white mb-1 text-sm">Applied for</label>
              <select
                name="position"
                onChange={handleChange}
                required
                value={form.position}
                className="w-full border border-white bg-gray-950 py-1.5 px-3 text-sm text-white focus:border-gray-600 focus:outline-none rounded-md transition-all"
              >
                <option value="" disabled hidden>
                  Select Position
                </option>
                {jobPositions.map((pos) => (
                  <option key={pos} value={pos} className="bg-black">
                    {pos}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative mt-6 w-full md:w-1/2">
            <label className="block text-white mb-1 text-sm">Found us via?</label>
            <select
              name="heardFrom"
              value={form.heardFrom}
              onChange={handleChange}
              required
              className="w-full items-center appearance-none border border-white bg-gray-950 py-1.5 px-3 pr-10 text-sm text-white focus:border-gray-900 focus:outline-none rounded-md"
            >
              <option value="" disabled hidden>
                Select
              </option>
              {hearAboutOptions.map((option) => (
                <option key={option} value={option} className="bg-black">
                  {option}
                </option>
              ))}
            </select>

            {/* Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center justify-center text-white">
              <svg
                className="h-8 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 22 4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gray-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:-translate-y-1 active:scale-95 duration-300"
            >
              Submit
            </button>
          </div>

          <style jsx>{`
            @keyframes fade-in {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in {
              animation: fade-in 0.8s ease-out;
            }
          `}</style>
        </form>
      </div>

      
    </div>
  );
}
