import Image from "next/image";
import Link from "next/link";
import authorImage from "@/images/author.png";
import featuredImage from "@/images/featured-image.jpg";
import articleimage from "@/images/article-img.png";
import articleOpinionImage from "@/images/article-opinion-image.jpg";
import authorArticle from "@/images/author-article.jpg";
import articleNewsImage from "@/images/articleNewsImage.jpg";
import articleWriter1 from "@/images/article-writer1.jpg";
import articleWriter2 from "@/images/article-writer2.jpg";
import articleWriter3 from "@/images/article-writer3.jpg";
import articleWriter4 from "@/images/article-writer4.jpg";
import image27 from "@/images/image-27.jpg";

import { ImageWithCaption } from "@/components/ImageWithCaption";

export function ArticleOpinion({
	hasImageOverHeader,
	isLive,
	hasAuthor,
	isNotSectionPage,
}) {
	return (
		<>
			<article className="article-opinion">
				<div className="container">
					<h1>الرأي والتحليل</h1>
					{hasAuthor && (
						<div className="author">
							<h3>حبر أبيض</h3>
							<Image src={authorArticle} alt="" />
						</div>
					)}
					{isNotSectionPage ? (
						<h3 className="article-title">
							<span>إلى الوراء</span>
							<br></br>
							لا تلتفت إلى الوراء
						</h3>
					) : (
						<h3 className="article-title section-page">
							<span> رأي البيان</span>
							<br></br>
							مبادرات محمد بن راشد.. إلهام للإنسانية{" "}
						</h3>
					)}

					<header className="article-header">
						<>
							{hasImageOverHeader !== undefined &&
								hasImageOverHeader !== null && (
									<>
										<div className="image-over-header">
											<ImageWithCaption
												width={1400}
												height={700}
												src={image27}
												copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												caption="هدد رئيس الاتحاد الدولي لكرة القدم (فيفا) السويسري جاني إنفانتينو، بالتعتيم التلفزيوني على كأس العالم للسيدات الصيف المقبل في الدول الأوروبية الكبرى، ما لم تعدل القنوات الناقلة عروضها للحصول على."
											/>
										</div>
									</>
								)}
						</>
					</header>
				</div>
				{isNotSectionPage && (
					<div className="container">
						<div className="article-body">
							<div className="article-content">
								<p>
									<strong>
										في تراث الإمارات ثمة حكاية تسمى (بِعير بلا راس)، أو جمل
										مقطوع الرأس، الذي بقيت روحه في جسده، وعاد إلى الحياة بلا رأس
										يجوب الشوارع والأزقة، والدماء تسيل من رقبته المبتورة، وأصبح
										يرعب المسافرين عند منتصف الظهيرة، أو السائرين في الليالي
										المظلمة، يدنو من الطرقات الخالية، وكان عليهم توخي الحذر، قد
										يسمعون وقع أقدامه خلف ظهورهم، فإياهم إن التفتوا.
									</strong>
								</p>
								<p>
									جملٌ بلا رأس، ليس كغيره من الجمال، قد ذُبح منذ سنوات طويلة،
									ولم يمت، وها هو يجوب الطرقات ناقماً على كل من يراه، يتتبعهم
									بهدف الانتقام، فإن سمعتَ صوتاً أو أنيناً، فلا تلتفت كيلا تثير
									مشاعره، لا تلتفت إلى الوراء وامضِ في طريقك، أو فر هارباً إلى
									الأمام. لطالما لفتت نظري عبارة (لا تلتفت إلى الوراء)، وهي عظة
									موجودة في معظم ثقافات العالم،
								</p>
								<p>
									{" "}
									متذكرةً جداتنا الراحلات في قصهن وسردهن القصص الشفهية، كهذه
									الخروفة التراجيدية «جمل بلا رأس» أو حسب اللهجة «بِعِير بلا
									راس»، والتي تثير الذعر في القلوب، لكن عَلِمْنَا بعدها أن خيال
									فكرتها المأساوية عظة وحكمة، ودرس يأتي مع تقاليد الحكاية،
									ليلامس أطفال الأزقة مع الغرباء بشكل قَصيّ، أمّا الكبار بأنهم
									لن يغيروا الماضي، ولا يمكنهم الإقامة فيه، وبالإمكان فقط قبوله،
									لتأتي الآداب الشفهية بنصائحها غير المباشرة، تماماً كما هو
									الإبداع المكتوب اليوم، فالإبداع
								</p>
								<p>
									{" "}
									الحقيقي بفنياته السردية والشعرية غير مباشرة للمتلقي. وتستمر
									إلى اليوم عبارة (لا تلتفت إلى الوراء) بدلالاتها المتشعبة، سواء
									أثناء مشيك، أو في خططك التي ترسمها، وتجارتك التي تمارسها، أو
									بحثك ودرسك... لا تنظر إلى الخلف، فلن تتغير النتيجة مهما كانت
									مآلها، إلا بالنظر إلى الأمام والاستمرار في الحياة بنوعيتها،
									وتصحيح منهجك، أو حتى تغييره إن لم يَرُق لك، ولعل من ينظر إلى
									الخلف هم المتأخرون، حيث تتحدث العقول العظيمة عن الأفكار، كيف
									من الممكن إكمالها، لا عن الأحداث السالفة، بما فيها من أمجاد
									وخيبات، فلا تلتفت.
								</p>
							</div>
							<aside className="sidebar">
								<div className="widget-small-article">
									<h4>الدكتور سيف الجابري</h4>
									<p>نشر الأربعاء، 03 مايو / أيار 2023 أبو ظبي</p>
								</div>
							</aside>
						</div>
					</div>
				)}
			</article>
		</>
	);
}
