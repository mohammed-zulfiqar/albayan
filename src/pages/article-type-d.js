import { Article } from "@/components/Article";
import { ArticleWithAll } from "@/components/ArticleWithAll";
import { EditorsPicks } from "@/components/EditorsPicks";
import { Event } from "@/components/Event";
import { MostRead } from "@/components/MostRead";
import { ChosenArticles } from "@/components/ChosenArticles";
import { AdBetween } from "@/components/Ads/ad-between";

const ArticlePage = () => {
    return (
        <>
            <div className="articles">
                <Article
                    articleId="article-type-d"
                    hasFeaturedImage
                    hasVerticalAd
                    href="/article-type-c"
                />

                <Article
                    articleId="article-3"
                    hasImageOnHeader
                    href="/article-3"
                    hasLatestNewsVersion3
                />

                <Article
                    articleId="article-type-c"
                    hasFeaturedImage
                    hasVerticalSmallAd
                    href="/article-type-c"
                />

                <Article
                    articleId="article-type-c"
                    hasFeaturedImage
                    hasVerticalSmallAd
                    href="/article-type-c"
                />


            </div>

            <MostRead showThumbnails isNumberLeft={false} />

            <Event />
            <EditorsPicks />

            <ChosenArticles />
        </>
    );
};

export default ArticlePage;
