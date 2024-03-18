import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export function richTextRender (Asset:any) {
    return documentToReactComponents(Asset);
}

export function imageRender (id:any , assets:any) {
    return assets.find((asset:any) => asset.sys.id === id).fields.file.url;
}