import { findAllNews } from 'api';
import { NetworkError } from 'models/errors.model';
import { News } from 'models/news.model';
import { Page } from 'models/page.model';
import { useState } from 'react';
import { mapError } from 'utils';


export const useNews = () => {
    const [data, setData] = useState<News[]>()
    const [error, setError] = useState<NetworkError>()

    const findNews = async (skip: number, limit: number = 10) => {
        setError(null);
        try {
            const pageResult: Page<News> = await findAllNews(skip, limit);
            setData(pageResult.news)
        } catch (error) {
            setError(mapError(error));
        }
    }
    return {
        data,
        findNews,
        error
    }
}

