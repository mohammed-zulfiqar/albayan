import React from 'react';
import { Article } from '@/components/Article';
import { EditorsPicks } from '@/components/EditorsPicks';
import { Event } from '@/components/Event';
import { MostRead } from '@/components/MostRead';
import { ChosenArticles } from '@/components/ChosenArticles';

const ArticlePage = () => {
    return (
        <>
            <Article 
                hasImageOverHeader={true}
            />
            
            <MostRead />
            <Event />
            <EditorsPicks />

            <ChosenArticles />
            
        </>
    )
};

export default ArticlePage;