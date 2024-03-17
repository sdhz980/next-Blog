import { getEntries, getSingleEntries } from "@/utils/contentful";
import React, { useEffect } from "react";
import { appConfig } from "@/utils/config";

const postDetail = async (params : PostDetailProps) => {
    
    const boldFont = (input:string) => {
        return (
            <>
               
            <strong>{input}</strong>
            <br/>
    
            </>
        )
    }
    const findAsset = (id:any , assets:any) => {
        return assets.find((asset:any) => asset.sys.id === id).fields.file.url;
    }
    const { baseUrl } = appConfig;
    const blogs = await getSingleEntries(params.params.id);
    const assets = await getEntries();
    const imageUrl = findAsset(blogs.fields.thumbnail.sys.id,assets.includes.Asset)
    
    return (

        // <p>
        //     {JSON.stringify(blogs)}
        // </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
    
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-2">{blogs.fields.title}</h1>
                <p className="text-gray-500 text-sm">Published on {blogs.fields.createdAt}</p>
                <p className="text-gray-500 text-sm">By : {blogs.fields.author}</p>
            </div>
    
    
            <img src={imageUrl} alt="Featured image" className="w-56 h-56 mb-8"/>
    
    
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            {   blogs?.fields.content.content.map((itemSection,indexChild) => {
                                        let result:any = []; 
                                        console.log(itemSection.nodeType);
                                        itemSection.content.map((itemChild) => {
                                            if (itemSection.nodeType == "heading-2") {
                                                result.push(boldFont(itemChild.value))
                                            } else result.push(itemChild.value);
                                        })
                                        // console.log(result);
                                        
                                    return (
                                        <strong>{result}</strong>
                                    );
                                    
                                })
                                }
            </div>
        </div>
    </div>


)}
    


export default postDetail;