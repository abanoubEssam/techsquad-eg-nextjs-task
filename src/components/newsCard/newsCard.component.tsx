import dayjs from 'dayjs';
import { News } from 'models/news.model';
import React from 'react'
const advancedFormat = require('dayjs/plugin/advancedFormat')

dayjs.extend(advancedFormat)
interface NewsCardProps {
    news: News
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    return (
        <div className="container my-12 px-4 mx-auto md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full">
                    <article className="bg-white lg:max-w-screen-lg overflow-hidden rounded-lg shadow-lg">
                        <header className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="image" className="block object-cover w-16 h-16 mr-2 rounded-full" src={news.source.url} />
                                <p className="text-grey-darker font-black text-sm">
                                    {news.source.title}
                                </p>
                            </a>
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                        </header>

                        <div className="max-w-full ml-6 mb-8">
                            <p className="text-xl font-normal ">
                                {news.title}
                            </p>
                        </div>


                        <div className="ml-6 mb-4">
                            <p className="font-extralight">
                                {dayjs(news.created_at).format('dddd , DD MMMM YYYY kk:mm:ss').toUpperCase()}
                            </p>
                        </div>
                        <hr className="border-gray-400 text-center text-2xl ml-2 mr-2" />
                        <div className='mb-6 mt-2'>
                            {
                                news.keywords.map(keyword => (
                                    <p key={keyword.name}
                                        className='
                                            mt-5 mr-2 ml-2
                                            text-green-600
                                            inline-block border-2
                                            border-green-600
                                            rounded-full
                                            py-1 px-4 '>
                                        {keyword.name}
                                    </p>
                                ))
                            }
                        </div>
                    </article>

                </div>
            </div>
        </div>
    );
}

export default NewsCard;