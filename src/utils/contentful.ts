import { ContentfulResponse, ContentfulResponseSingleEntry } from "@/types/contentful.type";
import { appConfig } from "./config";
const { accessToken,spaceId,environtmentID,baseUrl} = appConfig;

export const getEntries = async ():Promise<ContentfulResponse> => {
    const response = await fetch(
        baseUrl + `/spaces/${spaceId}/environments/${environtmentID}/entries?access_token=${accessToken}` ,
        {
            cache: "no-store"
        }
    );

    return response.json();
  }

export const getSingleEntries = async (entry:any):Promise<ContentfulResponseSingleEntry> => {
    const response = await fetch(
        baseUrl + `/spaces/${spaceId}/environments/${environtmentID}/entries/${entry}?access_token=${accessToken}`,
        {
            cache: "reload"
        }
    )
    return response.json();
}

    // https://cdn.contentful.com/spaces/b8zn3fnfe226/environments/master/entries/27WaGwPa9Z03ym3aNPX8zw?access_token=V4JIXBiUPVFnr8KoWN7h0S3kY91tHbCVC18R713dmHc