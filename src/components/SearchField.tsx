import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { RiBarChartHorizontalLine } from 'react-icons/ri'

export default function SearchField() {
    return (
        <div className="searchField">
            <div className="icon icon-left">
                <FiSearch />
            </div>
            <input type="text" className="form-control" />
            <div className="icon icon-right">
                <RiBarChartHorizontalLine />
            </div>
        </div>
    )
}
