interface PostDetailProps {
    params: {
        id: string;
    };
}
interface SearchDetailProps {
    params: {
        id: string;
    };
    searchParams: {
        search: string;
    }
}

interface Card {
    sysId: string;
    title: string;
    author: string;
    imageId: string;
    category: string;
    imageAsset: any;
    richText: any;
}

interface ContentPage {
    title: string;
    category: string;
    createdAt: string;
    author: string;
    imageUrl: string;
    content: any;
}