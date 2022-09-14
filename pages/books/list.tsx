// import { Head } from "next/head";
import { FunctionComponent, useEffect, useState } from "react"
import Layout from "../../shared/layout";

interface Book {
    title: string;
    authorName: string;
    pageCount: number;
}

const Book: FunctionComponent = () => {

    const [currentBook, setCurrentBook] = useState<Book>({
        title: "Introduction to Feature Flag",
        authorName: "Jack Sparrow",
        pageCount: 1001
    });


    return (
        <Layout>
            <article>
                <h1>Title: {currentBook.title}</h1>
                <div>
                    <ul>
                        <li><span>Author: {currentBook.title}</span></li>
                        <li><span>Number of Page: {currentBook.pageCount}</span></li>
                    </ul>

                </div>

            </article>
        </Layout>
    )
}

export default Book;