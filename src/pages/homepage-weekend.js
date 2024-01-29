import React from "react";
import { SmallStoriesFeed } from "@/components/StoriesFeed/small";
import { MainStoriesFeed } from "@/components/StoriesFeed/main";
import { Event } from "@/components/Event";
import { ArticleGroup11 } from "@/components/ArticleGroup/group-11.js";
import { ArticleGroup2 } from "@/components/ArticleGroup/group-2.js";
import { ArticleGroup3 } from "@/components/ArticleGroup/group-3.js";
import { ArticleGroup4 } from "@/components/ArticleGroup/group-4.js";
import { ArticleGroup5 } from "@/components/ArticleGroup/group-5.js";
import { ArticleGroup7 } from "@/components/ArticleGroup/group-7.js";
import { ArticlesWriters } from "@/components/ArticlesWriters";

const HomepageWeekend = () => {
  return (
    <>
      <SmallStoriesFeed />
      <div className="separator"></div>
      <div className="container">
        <h1 className="page-title">الأسبوعي</h1>
      </div>
      <div className="separator"></div>
      <MainStoriesFeed hasLatestNewsVersion2={true} />
      <div className="separator"></div>
      <Event />
      <div className="separator"></div>

      <ArticleGroup2 />
      <div className="separator"></div>
      <ArticleGroup3 />
      <div className="separator"></div>
      <ArticleGroup4 />
      <div className="separator"></div>
      <ArticlesWriters isNotSectionPage={true} />
      <div className="separator"></div>
      <ArticleGroup7 />
      <div className="separator"></div>
      <ArticleGroup5 />
      <div className="separator"></div>
      <Event />
      <div className="separator"></div>
      <ArticleGroup11 />
    </>
  );
};

export default HomepageWeekend;
