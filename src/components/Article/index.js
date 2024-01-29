import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import authorImage from "@/images/author.png";
import featuredImage from "@/images/featured-image.jpg";
import articleimage from "@/images/article-img.png";
import imageads from "@/images/rolex.jpg";
import smallad from "@/images/small-ad.jpg";
import bigFeaturedImage from "@/images/big-featured-image.jpg";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { ReadingTime } from "@/components/ReadingTime";
import { LatestNews } from "@/components/LatestNews";
import { LatestNewsVersion2 } from "@/components/LatestNews/LatestNewsVersion2/index";
import { LatestNewsVersion3 } from "@/components/LatestNews/LatestNewsVersion3/index";
import { LatestNewsVersion4 } from "@/components/LatestNews/LatestNewsVersion4/index";
import { LatestNewsVersion5 } from "@/components/LatestNews/LatestNewsVersion5/index";
import { LatestNewsVersion6 } from "@/components/LatestNews/LatestNewsVersion6/index";

import { MatchResult } from "@/components/MatchResult";
import { SocialShares } from "@/components/SocialShares";
import { HorizontalArticleAd } from "@/components/Ads/horizontal-article-ad.js";

export function Article({
	hasLatestNews,
	hasImageOnHeader,
	hasImageOverHeader,
	hasFeaturedImage,
	isSport,
	hasVerticalAd,
	hasVerticalSmallAd,
	hasHorizontalAd,
	href,
	articleId,
	hasLatestNewsVersion2,
	hasLatestNewsVersion3,
	hasLatestNewsVersion4,
	hasLatestNewsVersion5,
	hasLatestNewsVersion6,
}) {
	useEffect(() => {
		const articleElement = document.getElementById(articleId);

		if (!articleElement) {
			console.error(`Article element with ID ${articleId} not found.`);
			return;
		}

		let timeoutId; // Store the timeout ID

		const observerOptions = {
			rootMargin: "-50px 0px -50px 0px", // Adjust the rootMargin as needed
		};

		const articleObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					clearTimeout(timeoutId); // Clear previous timeout
					timeoutId = setTimeout(() => {
						// Update the browser URL using the History API
						history.pushState(null, null, href);
					}, 300); // Delay the URL change by 300 milliseconds
				} else {
					clearTimeout(timeoutId); // Clear the timeout if not intersecting
				}
			});
		}, observerOptions);

		articleObserver.observe(articleElement);

		return () => {
			clearTimeout(timeoutId); // Clear the timeout when component unmounts
			articleObserver.disconnect();
		};
	}, [href, articleId]);

	const [isSpeaking, setIsSpeaking] = useState(false);
	const content =
	"وتسعى المبادرة، التي تندرج ضمن أعمال اللجنة العليا للتنمية وشؤون المواطنين، إلى تطوير منظومة صحية متكاملة للارتقاء بجودة حياة كبار المواطنين وأصحاب الهمم، وذلك من خلال تخصيص الخط الساخن ، للرد على مكالماتهم بما يضمن حصولهم على خدمات طبية شاملة ومتطورة تتناسب مع احتياجاتهم الصحية وتراعي متطلباتهم المختلفة بسهولة ويسر.";

	const handleTextToSpeech = () => {
		const synth = window.speechSynthesis;
		const utterance = new SpeechSynthesisUtterance(content);

		synth.speak(utterance);
		setIsSpeaking(true);

		utterance.onend = () => {
			setIsSpeaking(false);
		};
	};

	return (
		<>
			<article id={articleId} className="article">
				<div className="container">
					<header className="article-header">
						<SocialShares />
						{hasImageOverHeader !== undefined &&
							hasImageOverHeader !== null && (
								<>
									<div className="image-over-header">
										<ImageWithCaption
											src={bigFeaturedImage}
											width={1400}
											height={700}
											copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
											caption="هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات الناقلة عروضها للحصول على."
										/>
									</div>
								</>
							)}

						{hasImageOnHeader !== undefined && hasImageOnHeader !== null ? (
							<div className="article-with-image-on-header">
								<div className="title-category-wrapper">
									<div className="article-category">
										<Link href="#">تكنولوجيا</Link>
									</div>
									<h1>
										الرئيس التنفيذي لشركة OpenAI يلقي نظرة عالمية على لوائح
										منظمة العفو الدولية في الولايات المتحدة ويوصي بالتسجيل
										للنماذج
									</h1>
								</div>
								<div className="article-image">
									<ImageWithCaption
										src={articleimage}
										width={420}
										height={250}
										copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
									/>
								</div>
							</div>
						) : (
							<>
								<div className="article-category">
									<Link href="#">تكنولوجيا</Link>
								</div>
								<h1>
									الرئيس التنفيذي لشركة OpenAI يلقي نظرة عالمية على لوائح منظمة
									العفو الدولية في الولايات المتحدة ويوصي بالتسجيل للنماذج
								</h1>
							</>
						)}

						<div className="article-meta">
							<div className="article-excerpt">
								<p>
									من دبي إلى نهر المسيسيبي أو نهر ميكونغ ، يجد المزارعون
									والباحثون حلولاً مبتكرة لتهديدات الاحتباس الحراري والأمطار
									الشديدة وارتفاع مستوى سطح البحر
								</p>
							</div>
							<div className="article-author">
								<Image src={authorImage} width={40} height={40} alt="" />
								<div className="author-text">
									<h4>
										<Link href="#">الدكتور سيف الجابري</Link>
									</h4>
									<time className="post-time">
										نشر الأربعاء، 03 مايو / أيار 2023{" "}
									</time>
									<div className="post-from">أبو ظبي</div>
								</div>
							</div>
						</div>
					</header>
				</div>
				{hasFeaturedImage !== undefined && hasFeaturedImage !== null && (
					<div className="container">
						<div className="article-featurd-image-section">
							<div className="article-featured-image">
								<ImageWithCaption
									src={featuredImage}
									width={900}
									height={500}
									copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
									caption="هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات الناقلة عروضها للحصول على."
								/>
							</div>
							<div className="article-similar">
								<ul>
									<li>
										<a href="#">
											سام التمان ، المدير التنفيذي للذكاء الاصطناعي في دائرة
											الضوء والذي يحاول التوفيق بين الترقية والقلق
										</a>
									</li>
									<li>
										<a href="#">
											سام التمان ، المدير التنفيذي للذكاء الاصطناعي في دائرة
											الضوء والذي يحاول التوفيق بين الترقية والقلق
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}

				<div className="container">
					<div className="article-body">
						<div className="article-content">
							<div className="mobile-social-shares">
								<div
									className={`text-to-speech-icon ${isSpeaking ? "active" : ""
										}`}
									onClick={handleTextToSpeech}
									disabled={isSpeaking}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="46"
										height="45"
										viewBox="0 0 46 45"
										fill="none"
										className="hover-svg"
									>
										<rect
											x="-0.125"
											y="0.125"
											width="44.75"
											height="44.75"
											rx="14.875"
										/>
										<path
											d="M20.4062 26.375V18.625"
											stroke="#FF1B02"
											stroke-width="2"
										/>
										<path
											d="M25.2656 30V15"
											stroke="#FF1B02"
											stroke-width="2"
										/>
										<path d="M30.125 25V20" stroke="#FF1B02" stroke-width="2" />
										<path
											d="M15.5469 28.75V16.25"
											stroke="#FF1B02"
											stroke-width="2"
										/>
									</svg>
									<ReadingTime 
										content={content}
									/>
								</div>
								<SocialShares />
							</div>

							<div
								className={`text-to-speech-icon ${isSpeaking ? "active" : ""}`}
								onClick={handleTextToSpeech}
								disabled={isSpeaking}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="46"
									height="45"
									viewBox="0 0 46 45"
									fill="none"
									className="hover-svg"
								>
									<rect
										x="-0.125"
										y="0.125"
										width="44.75"
										height="44.75"
										rx="14.875"
									/>
									<path
										d="M20.4062 26.375V18.625"
										stroke="#FF1B02"
										stroke-width="2"
									/>
									<path d="M25.2656 30V15" stroke="#FF1B02" stroke-width="2" />
									<path d="M30.125 25V20" stroke="#FF1B02" stroke-width="2" />
									<path
										d="M15.5469 28.75V16.25"
										stroke="#FF1B02"
										stroke-width="2"
									/>
								</svg>
							</div>

							<p>
								<strong>
									ومنذ اندلعت المعارك في 15 أبريل بين الجيش السوداني وقوات الدعم
									السريع، شهد دارفور، الإقليم الشاسع الواقع غربي البلاد، إلى
									جانب العاصمة الخرطوم، أعمال عنف تعدّ الأسوأ
								</strong>
							</p>
							<p>ونوّه شاهد آخر في الفولة إلى «عمليات سلب ونهب للمحال التجارية في سوق المدينة»، مؤكداً «سقوط عدد من القتلى من الطرفين لم يتم حصرهم بسبب استمرار القتال». إلى ذلك، أعربت الأمم المتحدة عن قلقها حيال مصير النساء والفتيات في ظل «انتشار صادم لأعمال عنف جنسي تشمل الاغتصاب». وقالت ليلى بكر، من صندوق الأمم المتحدة للسكان «شهدنا 900 % ازدياداً في العنف القائم على النوع الاجتماعي في مناطق النزاع». وأضافت: «تواجه النساء خطراً كبيراً جداً».</p>
							<p>
								ومنذ اندلعت المعارك في 15 أبريل بين الجيش السوداني وقوات الدعم
								السريع، شهد دارفور، الإقليم الشاسع الواقع غربي البلاد، إلى جانب
								العاصمة الخرطوم، أعمال عنف تعدّ الأسوأ.
							</p>
							<p>
								وليل أمس، استؤنفت المعارك في الفاشر عاصمة ولاية شمال دارفور،
								بحسب الشهود، لتنهي هدوءاً استمرّ شهرين في المدينة المكتظة
								بالسكّان التي كانت ملاذاً لهم من القصف وأعمال التي شهدتها أجزاء
								أخرى من دارفور.
							</p>
							<p>ونوّه شاهد آخر في الفولة إلى «عمليات سلب ونهب للمحال التجارية في سوق المدينة»، مؤكداً «سقوط عدد من القتلى من الطرفين لم يتم حصرهم بسبب استمرار القتال». إلى ذلك، أعربت الأمم المتحدة عن قلقها حيال مصير النساء والفتيات في ظل «انتشار صادم لأعمال عنف جنسي تشمل الاغتصاب». وقالت ليلى بكر، من صندوق الأمم المتحدة للسكان «شهدنا 900 % ازدياداً في العنف القائم على النوع الاجتماعي في مناطق النزاع». وأضافت: «تواجه النساء خطراً كبيراً جداً».</p>
							<p>
								وقال مدير مختبر الأبحاث الإنسانية في جامعة يال الأمريكية،
								ناتانيال ريموند: «إنّه أكبر تجمّع لمدنيين نزحوا في دارفور مع
								لجوء 600 ألف شخص إلى الفاشر»
							</p>
							<p>
								من جهتهم، أفاد سكّان أن أعمال العنف اندلعت مجدّداً في الفاشر في
								وقت متأخّر من ليل أمس، وأكد أحدهم سماع أصوات معارك بالأسلحة
								الثقيلة شرقي المدينة.
							</p>
							<p>
								كما أفاد شهود بأعمال قتالية في الفولة، عاصمة ولاية غرب كردفان
								المحاذية لدارفور.
							</p>
							<p>
								وامتدّ النزاع بالفعل إلى ولاية شمال كردفان التي تعدّ مركزاً
								للتجارة والنقل بين الخرطوم وأجزاء من جنوب السودان وغربه.
							</p>
						</div>

						<aside className="sidebar">
							{isSport !== undefined && isSport !== null && <MatchResult />}

							{hasVerticalAd !== undefined && hasVerticalAd !== null && (
								<div className="widget-sidebar-ad">
									<Link href="#">
										<Image src={imageads} alt="" />
									</Link>
								</div>
							)}

							{hasVerticalSmallAd !== undefined &&
								hasVerticalSmallAd !== null && (
									<div className="widget-sidebar-ad">
										<Link href="#">
											<Image src={smallad} alt="" />
										</Link>
									</div>
								)}

							{hasLatestNews !== undefined && hasLatestNews !== null && (
								<LatestNews />
							)}
							{hasLatestNewsVersion2 !== undefined &&
								hasLatestNewsVersion2 !== null && <LatestNewsVersion2 />}
							{hasLatestNewsVersion3 !== undefined &&
								hasLatestNewsVersion3 !== null && <LatestNewsVersion3 />}
							{hasLatestNewsVersion4 !== undefined &&
								hasLatestNewsVersion4 !== null && <LatestNewsVersion4 />}
							{hasLatestNewsVersion5 !== undefined &&
								hasLatestNewsVersion5 !== null && <LatestNewsVersion5 />}
							{hasLatestNewsVersion6 !== undefined &&
								hasLatestNewsVersion6 !== null && <LatestNewsVersion6 />}
						</aside>
					</div>

					{hasHorizontalAd !== undefined && hasHorizontalAd !== null && (
						<HorizontalArticleAd />
					)}
				</div>
			</article>
		</>
	);
}
