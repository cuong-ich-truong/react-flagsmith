
import { FunctionComponent, useEffect, useState } from "react"
import { useFlags, useFlagsmith } from 'flagsmith/react';
import Layout from "../../shared/layout";
import OnSale from "../../shared/onSale";
import { FlagOptions, TraitOptions } from "../../types/flagsmith.td";
import { IFlagsmithFeature } from "flagsmith/types";

interface Book {
    title: string;
    authorName: string;
    pageCount: number;
}

const Book: FunctionComponent = () => {

    const [userName, setUserName] = useState("");
    const flags = useFlags<FlagOptions, TraitOptions>(["sale_book"]) // only causes re-render if specified flag values / traits change
    const flagsmith = useFlagsmith();

    const [currentBook, setCurrentBook] = useState<Book>({
        title: "Introduction to Feature Flag",
        authorName: "Jack Sparrow",
        pageCount: 1001
    });

    const handleChange = (name: string) => {
        setUserName(name);
    }

    const login = () => {

        flagsmith.identify(userName);
    };

    const getDiscountAmount = (feature: IFlagsmithFeature): number => {
        if (feature.value) {
            return +feature.value;
        }
        return 0;
    }

    return (
        <Layout>
            <form>
                <label>
                    Name:
                    <input type="text" value={userName} onChange={(e) => handleChange(e.target.value)} />
                </label>
                <input type="button" value="login" onClick={login} />
            </form>
            <br />

            <article>
                <h3>Hello, {userName}</h3>
                {flags.sale_book?.enabled && <OnSale amount={getDiscountAmount(flags.sale_book)} />}
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