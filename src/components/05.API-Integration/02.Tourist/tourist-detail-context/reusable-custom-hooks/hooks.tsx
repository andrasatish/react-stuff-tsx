import { useEffect, useState } from "react"

const useGET = (url?: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();

    useEffect(() => {
        if(url) {
            fetch(url).then((response: any) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            }).then((data: any) => {
                setData(data);
            }).catch((err: any) => {
                setError(err);
            })
        }
    }, [url]);

    return { data, error }
}

interface PostBodyDetails {
    url: string,
    bodyDetails: BodyDetails;
} 

interface BodyDetails {
    headers: any;
    body: any;
}

const usePOST = (postBodyDetails: PostBodyDetails) => {
    const [postData, setPostData] = useState<any>();
    const [postError, setPostError] = useState<any>();

    useEffect(() => {
        if(postBodyDetails.url) {
            fetch(postBodyDetails.url, postBodyDetails.bodyDetails).then((response: any) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            }).then((data: any) => {
                setPostData(data);
            }).catch((err: any) => {
                setPostError(err);
            })
        }
    }, [postBodyDetails.url]);

    return { postData, postError }
}

export default { useGET, usePOST };
