import React from "react";
import { ArticleOpinion } from "@/components/ArticleOpinion";
import { EditorsPicks } from "@/components/EditorsPicks";
import { Event } from "@/components/Event";
import { MostRead } from "@/components/MostRead";
import { ChosenArticles } from "@/components/ChosenArticles";
import { MostReadList } from "@/components/MostReadList";
import { ArticlesWriters } from "@/components/ArticlesWriters";

const ArticleOpinionPage = () => {
	return (
		<>
			<ArticleOpinion
				hasAuthor={true}
				hasImageOverHeader={true}
				isNotSectionPage={true}
			/>

			<ArticlesWriters isNotSectionPage={true} />

			<MostReadList />

			<MostRead />
		</>
	);
};

export default ArticleOpinionPage;
