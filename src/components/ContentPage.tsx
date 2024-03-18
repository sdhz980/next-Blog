import React from 'react'

const ContentPage = ({author , content , createdAt , imageUrl , title , category} : ContentPage) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="py-8">
                    <h1 className="text-3xl font-bold mb-2">{title}</h1>
                    <p className="text-gray-500 text-sm">Published on {createdAt}</p>
                    <p className="text-gray-500 text-sm">By : {author}</p>
                    <p className="text-gray-500 text-sm">Genre : {category}</p>
                </div>
                <img src={imageUrl} alt="Featured image" className="w-56 h-56 mb-8"/>
                <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                    {content}
                </div>
            </div>
      </div>
  )
}

export default ContentPage