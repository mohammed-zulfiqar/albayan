import Image from "next/image";
import Link from "next/link";
import { ImageWithCaption } from "../ImageWithCaption";
import { LiveSign } from "@/components/LiveSign";
import demoImage from "@/images/image-2.jpg";
import newslive1 from "@/images/news-live1.jpg";
import newslive2 from "@/images/news-live2.jpg";

export function ArticleGroup9() {
	return (
		<>
			<section className="section-article-group-9">
				<div className="container">
					<h2> أهم الأخبار</h2>
					<div className="article-grid">
						<div className="article-item">
							<div className="article-category live-top">
								<LiveSign />
								تغير المناخ
							</div>
							<h3>
								<Link href="/">ينظم فريق COP28 تحالف صناعة النفط والغاز قبل قمة المناخ بهدف معالجة الانبعاثات الأكثر ضررًا
								</Link>
							</h3>
							<ImageWithCaption
								src={newslive1}
								width={420}
								height={250}
								copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
							/>
						</div>
						<div className="article-item">
							<div className="article-category">مستقبل البيع بالتجزئة</div>
							<h3>
								<Link href="/">
									قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام
									2023 ، وبلغت المبيعات 9.2 مليار
								</Link>
							</h3>
							<ImageWithCaption
								src={demoImage}
								width={420}
								height={250}
								copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
							/>
						</div>
						<div className="article-item">
							<div className="article-category">تمويل شخصي</div>
							<h3>
								<Link href="/">
									وتباع لاند روفر التابعة لدوق إدنبرة بمبلغ 123.750 جنيهًا
									إسترلينيًا ، أي أكثر من ضعف المبلغ الذي دفعوه في العام الماضي
								</Link>
							</h3>
							<p>
								أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد
								السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف
								بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية
							</p>
						</div>
						<div className="article-item">
							<div className="article-category live-top">
								<LiveSign />
								قضية ترامب كارول
							</div>
							<h3>
								<Link href="/">
									جان كارول يسعى للحصول على أضرار جديدة من ترامب بسبب تعليقات
									على سي إن إن
								</Link>
							</h3>
							<ImageWithCaption
								src={newslive2}
								width={420}
								height={250}
								copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
							/>
						</div>
						<div className="article-item">
							<div className="article-category">
								التوترات النووية في كوريا الشمالية
							</div>
							<h3>
								<Link href="/">
									كوريا الجنوبية تتراجع عن أمر إخلاء إنذار كاذب بعد فشل إطلاق
									قمر صناعي كوري شمالي
								</Link>
							</h3>
							<ImageWithCaption
								src={demoImage}
								width={420}
								height={250}
								copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
							/>
						</div>
						<div className="article-item">
							<div className="article-category">توظيف</div>
							<h3>
								<Link href="/">
									قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام
									2023 ، وبلغت المبيعات 9.2 مليار
								</Link>
							</h3>
							<p>
								أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد
								السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف
								بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
