import Link from 'next/link'
import React from 'react'
import { imageRender, richTextRender } from './ContentfulRender'

const Card = ({sysId , imageId , imageAsset , richText , author , title , category } :Card) => {
  return (
    <Link key={sysId} href={"blogs/"+sysId}>
        <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden sm:w-56 w-full h-64">
                <img 
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" 
                src={imageRender( imageId , imageAsset )}
                alt="Image Description"/>
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    {title}
                </h3>
                <h5 className="text-xs font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    {`Genre: ${category}`}
                </h5>
                <h5 className="text-xs font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    {`Author: ${author}`}
                </h5>
                
                <div className="w-full mt-3 text-gray-600 dark:text-gray-400">
                    {richText}
                </div>

                <p className="mt-4 inline-flex items-center self-end gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                    Read more
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
            </div>
        </div>
    </Link>     
  )
}

export default Card