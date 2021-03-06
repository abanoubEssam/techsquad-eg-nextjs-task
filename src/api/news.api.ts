import axios from 'axios';
import { News } from 'models/news.model';
import { Page } from 'models/page.model';

export const findAllNews = async (skip?: number, limit?: number): Promise<Page<News>> => {
    const res = await axios.get("http://80.240.21.204:1337/news", {
        params: {
            skip: skip || 0,
            limit: limit || 10
        }
    });
    const result: Page<News> = res.data;
    return result;
}
