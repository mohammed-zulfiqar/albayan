import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import sliderimg from "@/images/image-33.jpg";
import { ImageWithCaption } from "../ImageWithCaption";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { Author } from "@/components/Author";
import { SocialShares } from "@/components/SocialShares";

export function Slider4() {

    useEffect(() => {
        const paginationItems = document.querySelectorAll('.slider-pagination .swiper-pagination-bullet');
        paginationItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                swiper.slideTo(index); // Navigate to the clicked slide
            });
        });
    }, []);

    let swiper;

    return (
        <>
            <section className="section-slider-4">
                <div className="container">
                    <div className="slider-top">
                        <h2>معظم المستمعين</h2>
                    </div>
                    <Author
                        authorName="الدكتور سيف الجابري"
                    />
                    <div className="slider-4">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={1}
                            pagination={{
                                el: '.slider-pagination',
                                clickable: true
                            }}
                            navigation={{
                                nextEl: '.next-arrow',
                                prevEl: '.prev-arrow',
                            }}
                            onSwiper={(swiperInstance) => (swiper = swiperInstance)}
    
                        >
                            <SwiperSlide>
                                <div className="article-grid">
                                    <div className="slide-image">
                                        <ImageWithCaption
                                            src={sliderimg}
                                            width={900}
                                            height={500}
                                            isLive
                                        />
                                        <div className="time">05:50</div>
                                    </div>
                                    <div className="slide-content">
                                        <div className="meta">الموسم 2 / الفصل 7</div>
                                        <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                        <p>كشفت دراسة استقصائية عن أبيكورب أن القيادات النسائية عنصر أساسي في معركة الشرق الأوسط ضد تغير المناخ</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="article-grid">
                                    <div className="slide-image">
                                        <ImageWithCaption
                                            src={sliderimg}
                                            width={900}
                                            height={500}
                                        />
                                        <div className="time">05:50</div>
                                    </div>
                                    <div className="slide-content">
                                        <div className="meta">الموسم 2 / الفصل 7</div>
                                        <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                        <p>كشفت دراسة استقصائية عن أبيكورب أن القيادات النسائية عنصر أساسي في معركة الشرق الأوسط ضد تغير المناخ</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="article-grid">
                                    <div className="slide-image">
                                        <ImageWithCaption
                                            src={sliderimg}
                                            width={900}
                                            height={500}
                                        />
                                        <div className="time">05:50</div>
                                    </div>
                                    <div className="slide-content">
                                        <div className="meta">الموسم 2 / الفصل 7</div>
                                        <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                        <p>كشفت دراسة استقصائية عن أبيكورب أن القيادات النسائية عنصر أساسي في معركة الشرق الأوسط ضد تغير المناخ</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="article-grid">
                                    <div className="slide-image">
                                        <ImageWithCaption
                                            src={sliderimg}
                                            width={900}
                                            height={500}
                                        />
                                        <div className="time">05:50</div>
                                    </div>
                                    <div className="slide-content">
                                        <div className="meta">الموسم 2 / الفصل 7</div>
                                        <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                        <p>كشفت دراسة استقصائية عن أبيكورب أن القيادات النسائية عنصر أساسي في معركة الشرق الأوسط ضد تغير المناخ</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider-controls">
                        <div className="arrow next-arrow">
                            <BiRightArrowAlt />
                        </div>
                        <div className="slider-pagination"></div>
                        <div className="arrow prev-arrow">
                            <BiLeftArrowAlt />
                        </div>
                    </div>
                    <SocialShares />
                </div>
            </section>
        </>
    );
}
