import "@/styles/styles.scss";
import { useRouter } from 'next/router';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopAd } from "@/components/Ads/top-ad.js";
import { PodcastPlayer } from "@/components/PodcastGroup/player";


export default function App({ Component, pageProps }) {

	const router = useRouter();
	const { pathname } = router;
	const pageClassName = pathname.substr(1).replace("/", "-");

	return (
		<>
			<div className={`page-wrapper-${pageClassName || 'home'}`}>
				{/* <TopAd /> */}
				<PodcastPlayer />
				
				<Header />
				<div className="separator"></div>
				<div className="canvas">
					<Component {...pageProps} />
					<Footer />
				</div>
			</div>
		</>
	);
}
