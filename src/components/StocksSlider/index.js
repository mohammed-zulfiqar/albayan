import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";


export function StocksSlider() {
    return (
        <>
            <section className="section-stocks-slider">
                <div className="container">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.next-arrow',
                            prevEl: '.prev-arrow',
                        }}
                        breakpoints={{
                            800: {
                                slidesPerView: 7,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-up">
                                    <FiArrowUp />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-up">
                                    <FiArrowUp />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-up">
                                    <FiArrowUp />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-up">
                                    <FiArrowUp />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="stock-item">
                                <div className="details">
                                    <div><strong>FTSE 100</strong></div>
                                    <div>7778.54</div>
                                    <div>0.01%</div>
                                </div>
                                <div className="stock-down">
                                    <FiArrowDown />
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className="arrow next-arrow">
                        <PiCaretLeftBold />
                    </div>
                    <div className="arrow prev-arrow">
                        <PiCaretRightBold />
                    </div>
                </div>
            </section>
        </>
    );
}
