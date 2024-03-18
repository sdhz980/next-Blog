interface Asset {
    metadata: {
      tags: string[];
    };
    sys: {
      space: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: {
        url: string;
        details: {
          size: number;
          image: {
            width: number;
            height: number;
          };
        };
        fileName: string;
        contentType: string;
      };
    };
  }
  
  interface ContentfulEntry {
    metadata: {
      tags: string[];
    };
    sys: {
      space: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
      revision: number;
      contentType: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      locale: string;
    };
    fields: {
      short: string;
      title: string;
      slug: string;
      category: string;
      thumbnail: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      author: string;
      createdAt: string;
      content: {
        nodeType: string;
        data: Record<string, unknown>;
        content: {
          nodeType: string;
          value: string;
          content : {
            data:{};
            marks: [{
              type: string;
            }];
            value: any;
            nodeType: string;
          }[];
          marks: Record<string, unknown>[];
          data: Record<string, unknown>;
        }[];
      };
    };
  }
  
  export interface ContentfulResponse {
    sys: {
      type: string;
    };
    total: number;
    skip: number;
    limit: number;
    items: ContentfulEntry[];
    includes: {
      Asset: Asset[];
    };
  }

  export interface ContentfulResponseSingleEntry {
    fields: {
      short: string;
      title: string;
      slug: string;
      category: string;
      author: string;
      thumbnail: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        }
      };
      content: {
        nodeType: string;
        data: Record<string, unknown>;
        content: {
          nodeType: string;
          value: string;
          content : {
            data:{};
            marks: [{
              type: string;
            }];
            value: any;
            nodeType: string;
          }[];
          marks: any[];
          data: any;
        }[];
      };
      createdAt: string;
  }}