import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider' ;

// https://developers.google.com/custom-search/v1/using_rest
function SearchPage() {

    const [{term}, dispatch] = useStateValue();

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage_results">

            </div>
        </div>
    )
}

export default SearchPage;