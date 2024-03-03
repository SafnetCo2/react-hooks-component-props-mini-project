import React from "react";

import ArticleList from "./ArticleList"; 




const Article = ({ title, date, preview }) => {
    let defaultDate = "January 1, 1970"
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate}</small>
            <p>{preview}</p>
        </article>
        
    )
}

export default Article;