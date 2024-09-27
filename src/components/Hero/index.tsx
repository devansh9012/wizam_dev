"use client";

import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Hero = () => {
  // Define carousel items
  const items = [
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-6 lg:px-12"
      key="1"
    >
      {/* Left Side: Text Content */}
      <div>
        <div className="hero-content text-left mb-12">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-[70px] lg:leading-snug">
            The Quality <br /> Questions
          </h1>
          <p className="mb-9 text-base font-medium text-gray-300 sm:text-lg sm:leading-relaxed">
            All Questions and Solutions, designed by top exam experts based on
            the latest pattern and actual exam level.
          </p>
          <Link
            href=""
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-lg  text-white transition duration-300 ease-in-out hover:bg-primary"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full max-w-[400px] mx-auto lg:max-w-full">
        <Image
          src="/images/hero/section-image-1.png"
          alt="hero"
          className="w-full h-auto"
          width={845}
          height={316}
        />
      </div>
    </div>,

    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-6 lg:px-12"
      key="2"
    >
      {/* Left Side: Text Content */}
      <div>
        <div className="hero-content text-left mb-12">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-[70px] lg:leading-snug">
        The Expert <br /> Solutions
          </h1>
          <p className="mb-9 text-base font-medium text-gray-300 sm:text-lg sm:leading-relaxed">
            Crafted solutions from the best industry experts to help you excel
            in exams.
          </p>
          <Link
            href=""
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-lg  text-white transition duration-300 ease-in-out hover:bg-primary"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full max-w-[400px] mx-auto lg:max-w-full">
        <Image
          src="/images/hero/section-image-2.png"
          alt="hero"
          className="w-full h-auto"
          width={845}
          height={316}
        />
      </div>
    </div>,
  ];

  // Custom Arrow Buttons
  const renderPrevButton = () => {
    return (
      <button className="absolute left-0 -translate-x-[120%] top-1/2 transform -translate-y-1/2 text-secondary z-20 hover:text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };

  const renderNextButton = () => {
    return (
      <button className="absolute right-0 translate-x-[120%] top-1/2 transform -translate-y-1/2 text-secondary z-20 hover:text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-[#001d21] py-16 lg:pb-24 lg:pt-16">
        <div className="container mx-auto px-4 relative">
          {/* Alice Carousel with custom arrows */}
          <AliceCarousel
            autoPlay
            autoPlayInterval={5000}
            infinite
            items={items}
            disableDotsControls={true} // Disable dots
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          />
        </div>

        <div className="absolute -bottom-8 w-full z-10">
          <Image
            src="/images/hero/vector.png"
            alt="hero"
            className="mx-auto w-full max-w-full"
            width={1920}
            height={300}
          />
        </div>
      </section>

      {/* Exam Section */}
      <section className="-mt-[120px] md:-mt-[200px] z-20 relative">
        <div className="container mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8">
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Start Exam Preparation from Here
              </h2>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-center">
              {/* Select Course */}
              <div className="w-full">
                <select
                  id="selectCourse"
                  className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary transition text-gray-700"
                >
                  <option value="">Select Course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
              </div>

              {/* Select Exam */}
              <div className="w-full">
                <select
                  id="selectExam"
                  className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary transition text-gray-700"
                >
                  <option value="">Select Exam</option>
                  <option value="exam1">Exam 1</option>
                  <option value="exam2">Exam 2</option>
                  <option value="exam3">Exam 3</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button className="w-full rounded-md bg-secondary py-3 px-4 text-white font-medium transition duration-300 ease-in-out hover:bg-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
