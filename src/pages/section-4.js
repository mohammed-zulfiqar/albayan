import { SmallStoriesFeed } from "@/components/StoriesFeed/small";
import { MainStoriesFeed } from "@/components/StoriesFeed/main";
import { Event } from "@/components/Event";

const SectionPage = () => {
	return (
		<>
            <SmallStoriesFeed />
            <div className="separator"></div>
            <div className="container">
                <h1 className="page-title">الأسبوعي</h1>
            </div>
            <div className="separator"></div>
            <MainStoriesFeed />
            <div className="separator"></div>
            <Event /> 
		</>
	);
};

export default SectionPage;
