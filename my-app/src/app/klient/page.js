"use client"
import react, { useEffect, useState } from "react"
export default function Page() {
    async function getDtata(params) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        console.log(posts)
        setPost(posts)
    }
    useEffect(() => {
        getDtata()
    }, [])
    const[post, setPost] = useState([])

    return (
        <>
            <div>{
                posts.length>0 ? <h1>posts[3].title</h1>: <h1></h1>
            }</div>
            <div>Page
                <h1>{posts[0].title}</h1>
            </div>
        </>
    );
}