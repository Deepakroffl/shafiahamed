import React from "react";
import { Link } from "react-router-dom";

import icon1 from "../assets/images/icons/color-swatches.svg"
import icon2 from "../assets/images/icons/decent-work-and-economic-growth.svg"
import icon3 from "../assets/images/icons/flip-horizontal-arrow-1.svg"
import icon4 from "../assets/images/icons/layers-1.svg"
import icon5 from "../assets/images/icons/pictures-folder-memories.svg"
import icon6 from "../assets/images/icons/production-belt-time.svg"

import {FiHexagon} from '../assets/icons/vander'

export default function Features({title}){
    const featuresData =[
        {
            image:icon1,
            title:'Grow Your Business',
            desc:"Helping brands scale with practical strategies that drive sustainable growth."
          },
          {
              image:icon2,
              title:'Drive More Sales',
              desc:"Using data-driven marketing techniques to attract the right customers and increase revenue."
            },
             {
            image:icon3,
            title:'Handled By Expert',
            desc:"Every project is personally managed with professional expertise and attention to detail."
          }, {
              image:icon4,
              title:'Discussion For Idea',
              desc:"Collaborative sessions to turn ideas into clear, actionable strategies."
            },
            {
              image:icon5,
              title:'Increase Conversion',
              desc:"Optimizing websites and funnels to convert visitors into loyal customers."
            },
            {
              image:icon6,
              title:'Sales Growth Idea',
              desc:"Developing focused plans that improve customer acquisition and long-term sales growth."
            },

    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16" id="services">
            {title === false ? "" : 
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">What I do?</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">I help businesses and individuals grow through smart strategy, creative solutions, and modern digital tools. My focus is on building strong brands, improving visibility, and delivering measurable results.</p>
                </div>
            }

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                   {featuresData.map((item, index) =>{
                    return(
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center" key={index}>
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <FiHexagon className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <img src={item.image} className="h-8" alt=""/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link to="/services" className="text-lg font-medium duration-500 hover:text-orange-500">{item.title}</Link>
                            <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">{item.desc}</p>
                        </div>
                    </div>
                    )
                   })}
                    
                   
                </div>
            </div>
        </>
    )
}