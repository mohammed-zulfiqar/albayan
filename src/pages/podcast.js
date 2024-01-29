import { PodcastGroup1 } from "@/components/PodcastGroup/group-1";
import { PodcastGroup3 } from "@/components/PodcastGroup/group-3";
import { PodcastDescription } from "@/components/PodcastGroup/description";
import { LatestPodcast } from "@/components/PodcastGroup/latest";
import { MostPlayedPodcasts } from "@/components/PodcastGroup/most-played";
import { PodcastPlayer } from "@/components/PodcastGroup/player";

const PodcastPage = () => {
	return (
		<>
			<PodcastDescription />
			<div className="separator"></div>
			<LatestPodcast />
			<div className="separator"></div>
			<PodcastGroup3 />
			<div className="separator"></div>
			<PodcastGroup3 />
			<div className="separator"></div>
			<PodcastGroup1 />
			<div className="separator"></div>
			<MostPlayedPodcasts showThumbnails isNumberLeft />
		</>
	);
};

export default PodcastPage;
