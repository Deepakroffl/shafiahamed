import React,{useState} from "react";
import { Link } from "react-router-dom";
import about2 from "../assets/images/about2.png"
import about from "../assets/images/about.png"
import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function About(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="container relative md:pb-24 pb-16" id="about">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <img src={about} className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700" alt=""/>
                                <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                                    <Link to="#!" onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="S_CGed6E610"
                                    onClose={() => setOpen(false)} 
                                />
                            </div>
                            <div className="absolute md:-start-5 start-0 -bottom-16">
                                <img src={about2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-6 md:mt-0" >
                        <div className="lg:ms-5">
                            <h6 className="text-orange-500 text-sm font-medium uppercase mb-2">About Shafi Ahamed</h6>
                            <h3 className="mb-4 md:text-2xl text-xl font-medium">Performance Marketing <br/> As Specilization</h3>

                            <p className="text-slate-400 dark:text-white/60 max-w-xl">My primary focus is delivering comprehensive digital design solutions that enhance brand presence and user engagement. We understand that in the digital arena, successful design must seamlessly blend aesthetics with functionality. This understanding guides our approach to every project, whether we're designing an intuitive user interface or creating compelling e-commerce content.</p>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Paid</span>
                                    <span className="text-slate-400 dark:text-white/60">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{width:"84%"}}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Organic</span>
                                    <span className="text-slate-400 dark:text-white/60">79%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{width:"79%"}}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Branding</span>
                                    <span className="text-slate-400 dark:text-white/60">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{width:"95%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}