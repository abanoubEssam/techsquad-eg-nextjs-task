export interface News {
    _id: string,
    type: string,
    keywords: Keyword[],
    clicks: number,
    title: string,
    link: string,
    description: string,
    source: Source,
    created_at: string
}


interface Keyword {
    name: string,
    _id: string,
    type: string,
    imagePath: string
}

interface Source {
    title: string,
    url: string,
    link: string,
    notNew: boolean
}