import React,{useState} from "react";
import { Link } from "react-router-dom";

import image1 from '../assets/images/portfolio/development1.png'
import image2 from '../assets/images/portfolio/development2.png'
import image3 from '../assets/images/portfolio/development3.png'
import image4 from '../assets/images/portfolio/development4.png'
import image5 from '../assets/images/portfolio/photography1.png'
import image6 from '../assets/images/portfolio/photography2.png'
import image7 from '../assets/images/portfolio/branding1.png'
import image8 from '../assets/images/portfolio/branding2.png'
import image9 from '../assets/images/portfolio/branding3.png'
import image10 from '../assets/images/portfolio/branding4.png'
import image11 from '../assets/images/portfolio/designing1.png'
import image12 from '../assets/images/portfolio/designing2.png'
import image13 from '../assets/images/portfolio/designing3.png'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiCamera} from "../assets/icons/vander"

export default function OurProjects({containerFuild}){
    
    const images = [image1, image2, image3,image4, image5, image6, image7, image8, image9, image10, image11,image12,image13]

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = images[currentImageIndex];

    const projectData = [
        {
            id:0,
            image:image1,
            category:"development"
        },
        {
            id:1,
            image:image2,
            category:"development"
        },
        {
            id:2,
            image:image3,
            category:"development"
        },
        {
            id:3,
            image:image4,
            category:"development"
        },
        {
            id:4,
            image:image5,
            category:"photography"
        },
        {
            id:5,
            image:image6,
            category:"photography"
        },
        {
            id:6,
            image:image7,
            category:"branding"
        },
        {
            id:7,
            image:image8,
            category:"branding"
        },
        {
            id:8,
            image:image9,
            category:"branding"
        },
        {
            id:9,
            image:image10,
            category:"branding"
        },
        {
            id:10,
            image:image11,
            category:"designing"
        },
        {
            id:11,
            image:image12,
            category:"designing"
        },
        {
            id:11,
            image:image13,
            category:"designing"
        },
    ]
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };
    const filteredData = selectedCategory
    ? projectData.filter((item) => item.category === selectedCategory)
    : projectData;
    return(
        <>
         <div className="relative md:mt-24 mt-16" id="portfolio">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">My Work</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">A collection of projects that showcase my skills, experience, and the impact I create for clients and businesses.</p>
                </div>

                <div className=" container grid grid-cols-1 items-center mt-6 gap-6">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter filter-options space-x-3">
                                <li className={`${selectedCategory === null ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === "branding" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="branding" onClick={() => matchCategory("branding")}>Branding</li>
                                <li className={`${selectedCategory === "designing" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="designing" onClick={() => matchCategory('designing')} >Designing</li>
                                <li className={`${selectedCategory === "photography" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === "development" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

              {containerFuild ? 
                <div className="container-fluid relative">
                    <div id="grid" className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px] lg:px-6 px-4">
                    {filteredData.map((item,index)=>{
                        return(
                         <div className=" picture-item" data-groups='["designing"]' key={index}>
                         <div className="group relative block overflow-hidden rounded-xl duration-500">
                             <img src={item.image} className="group-hover:origin-center group-hover:scale-125 duration-500" alt=""/>
                             <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>
 
                             <div className="content duration-500">
                                 <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                     <Link to="" onClick={() => handleImageClick(item.id)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl lightbox"><FiCamera className="h-[14px] w-[14px] align-middle"/></Link>
                                 </div>
 
                                 <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                     <Link to="/portfolio-detail-three" className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">Mockup Collection</Link>
                                     <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                        )
                    })}
                        {isOpen && (
                                    <Lightbox
                                        mainSrc={currentImage}
                                        prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                                        nextSrc={images[(currentImageIndex + 1) % images.length]}

                                        onCloseRequest={() => setisOpen(false)}
                                        onMovePrevRequest={handleMovePrev}
                                        onMoveNextRequest={handleMoveNext}
                                    />
                                )}
                    </div>
                </div> :
                <div className="container relative">
                    <div id="grid" className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px]">
                    {filteredData.map((item,index)=>{
                        return(
                        <div className="" data-groups='["branding"]' key={index}>
                            <div className="group relative block rounded-xl duration-700 ease-in-out">
                                <div className="relative overflow-hidden rounded-xl">
                                    <Link to="" onClick={() => handleImageClick(item.id)} className="lightbox" title="">
                                        <img src={item.image} className="rounded-xl" alt=""/>
                                    </Link>
                                </div>
                                <div className="content duration-700 ease-in-out">
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
                                        <Link to="/portfolio-detail-three" className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">Mockup Collection</Link>
                                        <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
                            </div>
                        </div>
                        )
                    })}
                        {isOpen && (
                                    <Lightbox
                                        mainSrc={currentImage}
                                        prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                                        nextSrc={images[(currentImageIndex + 1) % images.length]}

                                        onCloseRequest={() => setisOpen(false)}
                                        onMovePrevRequest={handleMovePrev}
                                        onMoveNextRequest={handleMoveNext}
                                    />
                                )}
                    </div>
                </div>
              }
            </div>
        </>
    )
}