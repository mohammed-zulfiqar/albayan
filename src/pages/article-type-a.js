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
                    articleId="article-type-a"
                    hasFeaturedImage
                    hasLatestNews
                    href="/article-type-a"
                />
                <AdBetween />
                <Article articleId="article-3" hasImageOnHeader href="/article-3" />
                <Article
                    articleId="article-type-a"
                    hasFeaturedImage
                    href="/article-type-a"
                />
                <AdBetween />
                <Article
                    articleId="article-type-a"
                    hasFeaturedImage
                    href="/article-type-a"
                />
                <Article articleId="article-4" hasImageOnHeader href="/article-4" />
                <Article
                    articleId="article-5"
                    hasImageOnHeader
                    hasHorizontalAd
                    href="/article-5"
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
