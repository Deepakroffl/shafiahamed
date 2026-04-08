import React from "react";

import bannerImg from "../assets/images/hero.png";
import amazon from '../assets/images/team/powersoaps.png';
import google from '../assets/images/team/vcare.png';
import lenovo from '../assets/images/team/adl.png';
import paypal from '../assets/images/team/newengland.png';
import shopify from '../assets/images/team/luna.png';
import spotify from '../assets/images/team/sanfrix.png';

import Navbar from "../components/navbar";
import About from "../components/about";
import Features from "../components/features";
import OurProjects from "../components/ourProjexts";
import Clients from "../components/clients";
import Team from "../components/team";
import Blog from "../components/blog";
import GetInTuch from "../components/getInTuch";
import Footer from "../components/footer";

import CountUp from 'react-countup';

export default function Index() {
  const businessPartner = [amazon, google, lenovo, paypal, shopify, spotify];

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden md:flex md:h-screen py-36 items-center bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div>
              <h5 className="font-semibold leading-normal text-[20px] mt-6">
                Hi, I'm Shafi Ahamed
              </h5>
              <h5 className="md:text-5xl md:leading-normal text-3xl leading-normal font-bold mt-3">
                CEO & Co-founder <br /> At Grow Digitally
              </h5>
              <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">
                Since 2010, I help startups & brands grow online with performance marketing that delivers.
              </p>
              <div className="relative mt-6">
                <a
                  href="#portfolio"
                  className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"
                >
                  Explore Work <i className="mdi mdi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>

            <div className="relative lg:ms-6 before:content-[''] before:absolute before:start-1/2 before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[48rem] before:h-[20rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-orange-500 dark:before:bg-orange-500">
              <div className="relative z-1">
                <img src={bannerImg} alt="" />
                <div className="absolute lg:bottom-20 -bottom-5 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                  <span className="text-3xl font-medium mb-0">
                    <CountUp end={125} className="counter-value font-bold" />+
                  </span>
                  <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
                </div>
                <div className="absolute md:top-20 top-32 md:-end-10 -end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                  <h6 className="font-semibold">Performance Marketing</h6>
                  <h6 className="text-sm text-slate-400 mt-1">15+ Years Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden md:py-24 py-16">
        <About />
        <Features />
        <OurProjects containerClass="container relative md:mt-24 mt-16" griedClass="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px]" />
        <Clients />
        <Team />
        <Blog />
        <GetInTuch />
      </section>

      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div className="container relative">
          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {businessPartner.map((item, index) => (
              <div className="mx-auto py-4" key={index}>
                <img src={item} className="" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}