import React, { Component } from 'react';
import { useRouter } from 'next/router'

const FilterComponent = (props) => {
    const router = useRouter();
    const searchParams = {};
    const { launch_year, launch_success, land_success } = router.query
    if (launch_year) searchParams.launch_year = launch_year;
    if (launch_success) searchParams.launch_success = launch_success;
    if (land_success) searchParams.land_success = land_success;

    const filterClick = () => {
        if (searchParams[props.type] == props.value) {
            delete searchParams[props.type];
        }
        else {
            searchParams[props.type] = props.value
        }
        router.push({
            query: searchParams,
        })
    }

    return (
        <div className={`filter-item ${searchParams[props.type] == props.value? "active" : ""}`} onClick={(e) => { filterClick(e) }}>
            {props.value}
        </div>
    )
}

export default FilterComponent;