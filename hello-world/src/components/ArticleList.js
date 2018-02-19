import React from 'react'
import Article from './Article'

export default function ArticleList({ articles }) {
    return(
        <ul>
            <li><Article article = {articles[0]}/></li>
            <li><Article article = {articles[2]}/></li>
            <li><Article article = {articles[3]}/></li>
            <li><Article article = {articles[4]}/></li>

        </ul>
    )
}