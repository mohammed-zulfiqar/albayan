import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import sliderimg from "@/images/image-26.jpg";

export function Slider1() {
    return (
        <>
            <section className="section-slider-1">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <ImageWithCaption
                            src={sliderimg}
                            width={400}
                            height={650}
                            alt=""
                            copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            isLive
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageWithCaption
                            src={sliderimg}
                            width={400}
                            height={650}
                            alt=""
                            copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            isLive
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageWithCaption
                            src={sliderimg}
                            width={400}
                            height={650}
                            alt=""
                            copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            isLive
                        />
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
}
