
import { findAllNews } from 'api';
import NewsList from 'components/newsList/newsList.component';
import { News } from 'models/news.model';
import { Page } from 'models/page.model';
import React from 'react';
import { ToastContainer } from 'react-toastify';

interface NewsProps {
  newsPageResponse: Page<News>;
  currentPage: number
}

const Home: React.FC<NewsProps> = ({ newsPageResponse, currentPage }) => {

  return (
    <div>
      <div className="flex space-x-6 justify-around overflow-hidden	">
        <div className="flex-none bg-white lg:w-1/6	 md:w-0 mt-10"></div>
        <div className="flex-8">
          <NewsList news={newsPageResponse.news} dataLength={newsPageResponse.totalNews} currentPage={currentPage} />
        </div>
        <div className="flex-none bg-white lg:w-1/6	 md:w-0 mt-10"></div>
      </div>
      <ToastContainer />
    </div>
  )
}


export async function getServerSideProps({ query }) {
  const skip = query.page ? parseInt(query.page) : 0;

  const page: Page<News> = await findAllNews(skip * 10)
  return { props: { newsPageResponse: page, currentPage: skip } }
}

export default Home;