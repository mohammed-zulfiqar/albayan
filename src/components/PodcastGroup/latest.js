import { ImageWithCaption } from "../ImageWithCaption";
import Link from "next/link";
import Image from "next/image";
import { Author } from "@/components/Author";
import { SocialShares } from "@/components/SocialShares";
import image32 from "@/images/image-32.jpg";

export function LatestPodcast(hasEpisodeNumber) {
	return (
		<>
			<section className="section-latest-podcast">
				<div className="container">
					{/* <div className="episode-number-author-wrapper">
						{hasEpisodeNumber !== undefined && hasEpisodeNumber !== null && (
							<div className="episode-number">7</div>
						)} */}
					<Author authorName="الدكتور سيف الجابري" />
					{/* </div> */}
					<div className="flex-container">
						<div className="image-column">
							<ImageWithCaption src={image32} isLive />
							<div className="time">05:50</div>
						</div>
						<div className="content-column">
							<div className="meta">الموسم 2 / الفصل 7</div>
							<h3>
								زمن الأولين<span> رمضان جانا</span>
							</h3>
							<p>
								كشفت دراسة استقصائية عن أبيكورب أن القيادات النسائية عنصر أساسي
								في معركة الشرق الأوسط ضد تغير المناخ
							</p>
						</div>
					</div>
					<SocialShares />
				</div>
			</section>
		</>
	);
}
