import React from 'react'
import './pagination.css';

function Pagination() {
  return (
    <div className="pagination">
        <div className="pagination-button">&larr;</div>
        <div className="pagination-button">1</div>
        <div className="pagination-button">2</div>
        <div className="pagination-button">3</div>
        <div className="pagination-button">4</div>
        <div className="pagination-button">5</div>
        <div className="pagination-button">6</div>
        <div className="pagination-button">7</div>
        <div className="pagination-button">8</div>
        <div className="pagination-button">9</div>
        <div className="pagination-button">10</div>
        <div className="pagination-button">&rarr;</div>
    </div>
  )
}

export default Pagination