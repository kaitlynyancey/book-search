import React, { Component } from 'react';
import './resultsSummary.css';
import ResultsList from '../resultsList/resultsList';

class ResultsSummary extends Component {

    render() {

        const resultsList = this.props.results.map((item, i) => {
            return (
                <li key={i}>
                    <ResultsList item={item} />
                </li>
            )
        })

        return (
            <div className="results-summary">
                <ul>
                    {resultsList}
                </ul>
            </div>
        )
    }
}

export default ResultsSummary;