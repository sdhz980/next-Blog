import { appConfig } from '@/utils/config';
import { getEntries } from '@/utils/contentful';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const findAsset = (id:any , assets:any) => {
    return assets.find((asset:any) => asset.sys.id === id).fields.file.url;
}

const boldFont = (input:string) => {
    return (
        <>
           
        <strong>{input}</strong>
        <br/>

        </>
    )
}

const Blogs = async () => {
    const blogs = await getEntries();

    // const asset = findAsset(
    //     blogs.items[0].fields.thumbnail.sys.id,
    //     blogs.includes.Asset
    // ).fields.file.url;

    // console.log(blogs.items[0].fields.content.content[2]);
    // console.log(blogs.includes.Asset[0].fields.file.url);
    // console.log(asset);
    // console.log(blogs.items[0].fields.content);
    
    

  return (
    <div className='flex'>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
           

                        {

                            blogs?.items?.map((item,index) => {
                                
                                return (

                                    <Link key={index} href={"blogs/"+item.sys.id}>

                        {/* <a key={index} className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={item.sys.id}> */}
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-52">
                            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={
                                findAsset(item.fields.thumbnail.sys.id,blogs.includes.Asset)
                            } alt="Image Description"/>
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                {item.fields.title}
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                {   item?.fields.content.content.map((itemSection,indexChild) => {
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
                            </p>
                            {/* <Link href={"blogs/"+item.sys.id}> */}
                                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </p>
                            {/* </Link> */}
                            </div>
                        </div>
                        {/* </a>         */}

                                    </Link>       
                                
                                )
                            })

                        }

                
                    </div>
            </div>
    </div>
  )
}

export default Blogs