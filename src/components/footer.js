import React from "react";


export default function Footer(){
    return(
        <footer className="relative bg-gray-900 overflow-hidden">
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">

                    <div className="lg:col-span-12 text-center mt-6 md:mt-0">
                        <p className="mb-0 text-gray-400">© {new Date().getFullYear()} Shafi Ahamed. All Rights Reserved</p>
                    </div>

                    
                </div>
            </div>
        </div>
    </footer>
    )
}