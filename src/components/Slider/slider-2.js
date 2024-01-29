import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import sliderimg from "@/images/slider-img.jpg";
import { ImageWithCaption } from "../ImageWithCaption";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

export function Slider2() {
	useEffect(() => {
		const paginationItems = document.querySelectorAll(
			".slider-pagination .swiper-pagination-bullet"
		);
		paginationItems.forEach((item, index) => {
			item.addEventListener("click", () => {
				swiper.slideTo(index); // Navigate to the clicked slide
			});
		});
	}, []);

	let swiper;

	return (
		<>
			<section className="section-slider-2">
				<div className="container">
					<div className="slider-top">
						<h2> السبت 13 مايو 2023</h2>
						<p>الصور والفيديو والتسجيلات الصوتية</p>
					</div>
					<div className="slider-2">
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							slidesPerView={1}
							pagination={{
								el: ".slider-pagination",
								clickable: true,
							}}
							navigation={{
								nextEl: ".next-arrow",
								prevEl: ".prev-arrow",
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
											copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
											isLive
										/>
									</div>
									<div className="slide-content">
										<div className="slider-numbers">4 / 1</div>
										<div className="article-category">
											<Link href="/"> باريس سان جرمان</Link>
										</div>
										<h3>
											<Link href="/">
												ينظم فريق COP28 تحالف صناعة النفط والغاز قبل قمة المناخ
												بهدف معالجة الانبعاثات الأكثر ضررًا
											</Link>
										</h3>
										<p>
											أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد
											السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد
											المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات
											الرئاسية
										</p>
										<p className="small-paragraph">
											هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني
											إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات
											الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات
											الناقلة عروضها للحصول على.
										</p>
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
											copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
											isLive
										/>
									</div>
									<div className="slide-content">
										<div className="slider-numbers">4 / 2</div>
										<div className="article-category">
											<Link href="/"> باريس سان جرمان</Link>
										</div>
										<h3>
											<Link href="/">
												ينظم فريق COP28 تحالف صناعة النفط والغاز قبل قمة المناخ
												بهدف معالجة الانبعاثات الأكثر ضررًا
											</Link>
										</h3>
										<p>
											أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد
											السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد
											المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات
											الرئاسية
										</p>
										<p className="small-paragraph">
											هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني
											إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات
											الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات
											الناقلة عروضها للحصول على.
										</p>
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
											copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
											isLive
										/>
									</div>
									<div className="slide-content">
										<div className="slider-numbers">4 / 3</div>
										<div className="article-category">
											<Link href="/"> باريس سان جرمان</Link>
										</div>
										<h3>
											<Link href="/">
												ينظم فريق COP28 تحالف صناعة النفط والغاز قبل قمة المناخ
												بهدف معالجة الانبعاثات الأكثر ضررًا
											</Link>
										</h3>
										<p>
											أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد
											السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد
											المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات
											الرئاسية
										</p>
										<p className="small-paragraph">
											هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني
											إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات
											الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات
											الناقلة عروضها للحصول على.
										</p>
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
											copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
											isLive
										/>
									</div>
									<div className="slide-content">
										<div className="slider-numbers">4 / 4</div>
										<div className="article-category">
											<Link href="/"> باريس سان جرمان</Link>
										</div>
										<h3>
											<Link href="/">
												ينظم فريق COP28 تحالف صناعة النفط والغاز قبل قمة المناخ
												بهدف معالجة الانبعاثات الأكثر ضررًا
											</Link>
										</h3>
										<p>
											أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد
											السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد
											المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات
											الرئاسية
										</p>
										<p className="small-paragraph">
											هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني
											إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات
											الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات
											الناقلة عروضها للحصول على.
										</p>
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
				</div>
			</section>
		</>
	);
}
