import React from "react";
import { Link } from "react-router-dom";

import team1 from '../assets/images/team/sathishkumar.png'
import team2 from '../assets/images/team/proyalakshmi.png'
import team3 from '../assets/images/team/arunkumar.png'
export default function Clients(){

    const teamData = [
        {
            image:team1,
            name:'Arun kumar',
            title:'Founder – Chennai Retail',
            desc:"Our business in Chennai struggled to reach customers online. After working with this digital marketing team, our Google visibility and social media engagement improved a lot. We are now getting consistent inquiries every week.",
           
        },
        {
            image:team2,
            name:'Priya Lakshmi',
            title:'Boutique Owner – Coimbatore',
            desc:"Running a boutique in Coimbatore, I needed more local customers to find my store online. Their Instagram marketing and local SEO strategies helped us attract many new customers from nearby areas.",
           
        },
        {
            image:team3,
            name:'Sathish Kumar',
            title:'Restaurant Manager – Madurai',
            desc:"Our restaurant in Madurai saw a big improvement in online orders after their marketing campaigns. Their social media ads and Google promotions helped us reach more people in the city.",
        
        },
    ]
    return(
        <>
        <div className="container relative lg:mt-24 mt-16" id="client">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">Client's Review</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">Hear from the brands and businesses I’ve worked with. Their feedback reflects the results, growth, and value delivered through strategic performance marketing campaigns.</p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {teamData.map((item,index) =>{
                        return(
                            <ul className="space-y-6" key={index}>
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <img src={item.image} className="h-14 w-14 rounded-full shadow dark:shadow-gray-800" alt=""/>
    
                                    <div className="ps-3">
                                        <Link to="" className="text-[16px] font-medium hover:text-orange-500 duration-500">{item.name}</Link>
                                        <p className="text-slate-400 dark:text-white/60">{item.title}</p>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">{item.desc}</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </li>
    
                            {/* <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <img src={item.image2} className="h-14 w-14 rounded-full shadow dark:shadow-gray-800" alt=""/>
    
                                    <div className="ps-3">
                                        <Link to="" className="text-[16px] font-medium hover:text-orange-500 duration-500">{item.name2}</Link>
                                        <p className="text-slate-400 dark:text-white/60">{item.title2}</p>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">{item.desc2}</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>
                        )
                    })}
                </div>
            </div> 
        </>
    )
}