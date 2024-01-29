import Image from "next/image";
import authorImage from "@/images/author.png";
import featuredImage from "@/images/sport-big-image.jpg";
import articleimage from "@/images/sport-big-image.jpg";
import bigFeaturedImage from "@/images/sport-big-image.jpg";
import Link from "next/link";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNews } from "@/components/LatestNews";
import { MatchResult } from "@/components/MatchResult";

export function ArticleSport({
	hasLatestNews,
	hasImageOnHeader,
	hasImageOverHeader,
	hasFeaturedImage,
}) {
	return (
		<>
			<article>
				<div className="container">
					<header className="article-header">
						<div className="article-category">
							<Link href="#">تكنولوجيا</Link>
						</div>

						{hasImageOverHeader !== undefined &&
							hasImageOverHeader !== null && (
								<>
									<div className="image-over-header">
										<ImageWithCaption
											src={bigFeaturedImage}
											width={1400}
											height={700}
											copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
											caption="هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات الناقلة عروضه."
										/>
									</div>
								</>
							)}

						{hasImageOnHeader !== undefined && hasImageOnHeader !== null ? (
							<div className="article-with-image-on-header">
								<div className="title-category-wrapper">
									<div className="article-category">تكنولوجيا</div>
									<h1>
										مانشستر سيتي بعد عرش انجلترا يتجه لتحقيق الثلاثية التاريخية
										ولكن من دون الشارة الأوروبية!
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
								<div className="article-category">تكنولوجيا</div>
								<h1>
									مانشستر سيتي بعد عرش انجلترا يتجه لتحقيق الثلاثية التاريخية
									ولكن من دون الشارة الأوروبية!
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
							<p>
								<strong>
									وتسعى المبادرة، التي تندرج ضمن أعمال اللجنة العليا للتنمية
									وشؤون المواطنين، إلى تطوير منظومة صحية متكاملة للارتقاء بجودة
									حياة كبار المواطنين وأصحاب الهمم، وذلك من خلال تخصيص الخط
									الساخن 800588، للرد على مكالماتهم بما يضمن حصولهم على خدمات
									طبية شاملة ومتطورة تتناسب مع
								</strong>
							</p>
							<p>
								وتسعى المبادرة، التي تندرج ضمن أعمال اللجنة العليا للتنمية وشؤون
								المواطنين، إلى تطوير منظومة صحية متكاملة للارتقاء بجودة حياة
								كبار المواطنين وأصحاب الهمم، وذلك من خلال تخصيص الخط الساخن
								800588، للرد على مكالماتهم بما يضمن حصولهم على خدمات طبية شاملة
								ومتطورة تتناسب مع احتياجاتهم الصحية وتراعي متطلباتهم المختلفة
								بسهولة ويسر. وأكد سمو الشيخ حمدان بن محمد بن راشد آل مكتوم أن
								إطلاق مبادرة رعاية لتقديم خدمات صحية متكاملة مخصصة لكبار
								المواطنين وأصحاب الهم
							</p>
							<p>
								وتسعى المبادرة، التي تندرج ضمن أعمال اللجنة العليا للتنمية وشؤون
								المواطنين، إلى تطوير منظومة صحية متكاملة للارتقاء بجودة حياة
								كبار المواطنين وأصحاب الهمم، وذلك من خلال تخصيص الخط الساخن
								800588، للرد على مكالماتهم بما يضمن حصولهم على خدمات طبية شاملة
								ومتطورة تتناسب مع احتياجاتهم الصحية وتراعي متطلباتهم المختلفة
								بسهولة ويسر. وأكد سمو الشيخ حمدان بن محمد بن راشد آل مكتوم أن
								إطلاق مبادرة رعاية لتقديم خدمات صحية متكاملة مخصصة لكبار
								المواطنين وأصحاب الهم
							</p>
							<p>
								وتسعى المبادرة، التي تندرج ضمن أعمال اللجنة العليا للتنمية وشؤون
								المواطنين، إلى تطوير منظومة صحية متكاملة للارتقاء بجودة حياة
								كبار المواطنين وأصحاب الهمم، وذلك من خلال تخصيص الخط الساخن
								800588، للرد على مكالماتهم بما يضمن حصولهم على خدمات طبية شاملة
								ومتطورة تتناسب مع احتياجاتهم الصحية وتراعي متطلباتهم المختلفة
								بسهولة ويسر. وأكد سمو الشيخ حمدان بن محمد بن راشد آل مكتوم أن
								إطلاق مبادرة رعاية لتقديم خدمات صحية متكاملة مخصصة لكبار
								المواطنين وأصحاب الهم
							</p>
							<p>
								وتسعى المبادرة، التي تندرج ضمن أعمال اللجنة العليا للتنمية وشؤون
								المواطنين، إلى تطوير منظومة صحية متكاملة للارتقاء بجودة حياة
								كبار المواطنين وأصحاب الهمم، وذلك من خلال تخصيص الخط الساخن
								800588، للرد على مكالماتهم بما يضمن حصولهم على خدمات طبية شاملة
								ومتطورة تتناسب مع احتياجاتهم الصحية وتراعي متطلباتهم المختلفة
								بسهولة ويسر. وأكد سمو الشيخ حمدان بن محمد بن راشد آل مكتوم أن
								إطلاق مبادرة رعاية لتقديم خدمات صحية متكاملة مخصصة لكبار
								المواطنين وأصحاب الهم
							</p>
						</div>

						<aside className="sidebar">
							<MatchResult />
							{hasLatestNews !== undefined && hasLatestNews !== null && (
								<LatestNews />
							)}
						</aside>
					</div>
				</div>
			</article>
		</>
	);
}
