import { getEntries } from '@/utils/contentful';
import React from 'react'
import Card from '@/components/Card';

const Blogs = async ({searchParams} : SearchDetailProps) => {
    const blogs = await getEntries();
    
  return (
    <div className='flex'>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

                {/* {blogs?.items?.map((item,index) => {
                    const valueRichText = item.fields.short;
                    const imageProps = {
                        id: item.fields.thumbnail.sys.id,
                        asset: blogs.includes.Asset,
                    }
                    return (
                        <Card
                        title={item.fields.title}
                        category={item.fields.category}
                        author={item.fields.author}
                        imageAsset={imageProps.asset}
                        imageId={imageProps.id}
                        richText={valueRichText}
                        sysId={item.sys.id}
                        />
                    )})} */}

                {blogs?.items?.map((item,index) => {
                    const valueRichText = item.fields.short;
                    const imageProps = {
                        id: item.fields.thumbnail.sys.id,
                        asset: blogs.includes.Asset,
                    }
                    const content = (
                    <Card
                    title={item.fields.title}
                    category={item.fields.category}
                    author={item.fields.author}
                    imageAsset={imageProps.asset}
                    imageId={imageProps.id}
                    richText={valueRichText}
                    sysId={item.sys.id}
                    />
                    );
                    if (searchParams?.search?.length >1) {
                        if (item.fields.title.toLowerCase().includes(searchParams?.search?.toLowerCase())) return content;
                    }
                    else if (searchParams !== undefined) return content;
                })}
            </div>
        </div>
    </div>
  )
}

export default Blogs