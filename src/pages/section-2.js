import { ArticleGroup10 } from "@/components/ArticleGroup/group-10.js";
import { ArticleGroup9 } from "@/components/ArticleGroup/group-9.js";
import { ArticleGroup11 } from "@/components/ArticleGroup/group-11.js";
import { EditorsPicks } from "@/components/EditorsPicks";
import { MostRead } from "@/components/MostRead/";
import { Slider2 } from "@/components/Slider/slider-2.js";
import { Slider3 } from "@/components/Slider/slider-3.js";
import { ManOfTheMatch } from "@/components/ManOfTheMatch";

const SectionPage = () => {
    return (
        <>
            <ArticleGroup10 />
            <div className="separator"></div>
            <EditorsPicks />
            <div className="separator"></div>
            <Slider2 />
            <div className="separator"></div>
            <ManOfTheMatch />
            <div className="separator"></div>
            <ArticleGroup9 />
            <div className="separator"></div>
            <MostRead 
                showThumbnails
            />
            <div className="separator"></div>
            <Slider3 />
            <div className="separator"></div>
            <ArticleGroup11 />
        </>
    );
};

export default SectionPage;
