import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/data";
export default function Blog(){
    return(
        <>
        <div className="container relative md:mt-24 mt-16" id="blog">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">My Latest Blogs</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">Sharing ideas, insights, and experiences about topics I’m passionate about. These articles are meant to educate, inspire, and help others grow.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {blogData.slice(0,3).map((item,index)=>{
                        return(
                        <div className="group" key={index}>
                            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                                <img src={item.image} className="" alt=""/>
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                                    <img src={item.image1} className="h-9 w-9 rounded-xl" alt=""/>
                                    <div className="ms-2">
                                        <Link href="" className="text-white hover:text-orange-500 text-[15px]">{item.athor}</Link>
                                        <p className="text-white/70 text-sm">5 Min Read</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <Link to={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-orange-500 duration-500">{item.title}</Link>
                                <p className="text-slate-400 dark:text-white/60 mt-3">{item.desc}</p>
                                
                                <div className="mt-3">
                                    <Link to={`/blog-detail/${item.id}`} className="hover:text-orange-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}