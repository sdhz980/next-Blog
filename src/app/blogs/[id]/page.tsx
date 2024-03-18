import { getEntries, getSingleEntries } from "@/utils/contentful";
import React from "react";
import { imageRender, richTextRender } from "@/components/ContentfulRender";
import ContentPage from "@/components/ContentPage";

const postDetail = async (params : PostDetailProps) => {

    const assets = await getEntries();
    const blogs = await getSingleEntries(params.params.id);
    const imageProps = {id: blogs.fields.thumbnail.sys.id,
                        asset: assets.includes.Asset
                    };

    return (
        <ContentPage
            author={blogs?.fields.author}
            category={blogs?.fields.category}
            content={richTextRender(blogs.fields.content)}
            createdAt={blogs?.fields.createdAt}
            imageUrl={imageRender(imageProps.id,imageProps.asset)}
            title={blogs?.fields.title}
        />
    )}
    

// const postDetail = async (params : PostDetailProps) => {
//     const assets = await getEntries();
//     const blogs = assets.items.find((item) => item.fields.slug = params.params.id);
//     console.log(blogs);
    
//     const imageProps = {id: 
//         blogs?.fields.thumbnail.sys.id,
//         asset: assets.includes.Asset
//         };

//     return (
//         <ContentPage
//             author={blogs?.fields.author}
//             category={blogs?.fields.category}
//             content={richTextRender(blogs.fields.content)}
//             createdAt={blogs?.fields.createdAt}
//             imageUrl={imageRender(imageProps.id,imageProps.asset)}
//             title={blogs?.fields.title}
//         />
//     )}


export default postDetail;