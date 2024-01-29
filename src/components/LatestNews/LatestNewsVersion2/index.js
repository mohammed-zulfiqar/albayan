import Image from "next/image";
import newsThumbnail from "@/images/author.png";
import { LiveSign } from "@/components/LiveSign";

export function LatestNewsVersion2() {
	return (
		<>
			<div className="widget-latest-news-version2">
				<header>
					<h3>أحدث الأخبار</h3>
					<div className="updated-at">
						<span>محدث</span>
						<span>15:03hrs</span>
					</div>
				</header>
				<div className="latest-news-live">
					<div className="live-top">
						<LiveSign />
						<h4>قضية ترامب كارول</h4>
					</div>
					<div className="live-video">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/KA7OaMhHVSA"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
						<h4>
							عبدالرحمن العور: 4% نمو عدد المنشآت والعمالة المسجلة خلال الربع
							الأول 2023
						</h4>
					</div>
				</div>
				<ul>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">بنمو 56.3%</a>
							</h4>
							<p>
								استقرار أسعار الذهب وسط حالة ترقب قبيل اجتماع المركزي الأمريكي{" "}
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}
