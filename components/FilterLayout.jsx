import React, { Component } from 'react';
const FilterLayout = (props) => {
    return (
        <div className="filter-items-wrapper">
            {props.children}
        </div>
    )
}

export default FilterLayout;