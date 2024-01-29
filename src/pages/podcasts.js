import { PodcastGroup1 } from "@/components/PodcastGroup/group-1";
import { PodcastGroup2 } from "@/components/PodcastGroup/group-2";
import { LatestPodcast } from "@/components/PodcastGroup/latest";
import { MostPlayedPodcasts } from "@/components/PodcastGroup/most-played";
import { Slider4 } from "@/components/Slider/slider-4";

const PodcastsPage = () => {
	return (
		<>
			<div className="container">
				<h1 className="page-title">بودكاست</h1>
			</div>
			<LatestPodcast />
			<div className="separator"></div>
			<PodcastGroup1 />
			<div className="separator"></div>
			<PodcastGroup2 />
			<div className="separator"></div>
			<Slider4 />
			<div className="separator"></div>
			<MostPlayedPodcasts showThumbnails isNumberLeft />
		</>
	);
};

export default PodcastsPage;
