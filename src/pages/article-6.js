import React from "react";
import { ArticleSport } from "@/components/ArticleSport";
import { ManOfTheMatch } from "@/components/ManOfTheMatch";
import { InDepth } from "@/components/InDepth";
import { ChosenArticles } from "@/components/ChosenArticles";
import { Slider2 } from "@/components/Slider/slider-2.js";
import { MostRead } from "@/components/MostRead";
import { LatestNews } from "@/components/LatestNews";

const ArticleSportPage = () => {
	return (
		<>
			<ArticleSport hasImageOverHeader={true} hasLatestNews={true} />

			<ArticleSport hasFeaturedImage={true} />
			<div className="separator"></div>
			<Slider2 />
			<div className="separator"></div>

			<ManOfTheMatch />

			<InDepth />

			<ChosenArticles />
		</>
	);
};

export default ArticleSportPage;
