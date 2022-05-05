import React, { useState, useEffect } from "react";
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { FaGithub } from "react-icons/fa"

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const url = "https://jordan-cortes-admin.herokuapp.com/api/v1/projects"

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProjects(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <section id="projects" className="projects-section observer">
            <div className="container">
                <h1>Proyectos</h1>

                {/* Card carousel */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    effect={"cards"}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,  
                    }}
                    centeredSlides
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            //   width: 640,
                            slidesPerView: 2.2,
                            centeredSlides: false
                        },
                        // when window width is >= 992px
                        992: {
                            slidesPerView: 3,
                            centeredSlides: false
                        }
                    }}
                >

                    {projects.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="project">
                                {/* <div className="image">

                                </div> */}

                                <h3>{item.name}</h3>
                                <p>{item.about}</p>
                                <a href={item.url} className="btn-color link">
                                    GitHub <FaGithub />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}