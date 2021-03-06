import NewsCard from 'components/newsCard/newsCard.component';
import { useNews } from 'hooks';
import { NetworkError } from 'models/errors.model';
import { News } from 'models/news.model';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';

interface NewsListProps {
    news: News[];
    dataLength: number;
    currentPage: number
}

const NewsList: React.FC<NewsListProps> = ({ news, currentPage }) => {

    const page = React.useRef(currentPage);
    const { data, findNews, error } = useNews();
    const [allNews, setAllNews] = useState(news || []);

    useEffect(() => {
        if (data) {
            setAllNews([...allNews, ...data]);
        }
    }, [data]);

    useEffect(() => {
        if (error instanceof NetworkError) {
            toast.error("Check Your Internet!");
        }
    }, [error]);

    const handleNextPage = () => {
        ++page.current;
        findNews(page.current * 10)
    }

    return (
        <InfiniteScroll
            dataLength={allNews.length}
            next={handleNextPage}
            hasMore={true}
            height={900}
            loader={
                <svg className="animate-bounce w-6 h-6 text-green-800 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            }
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }

        >   
            {allNews.map(n => (
                <NewsCard key={n._id} news={n} />
            ))}
        </InfiniteScroll>
    );
}

export default NewsList;