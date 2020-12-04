import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import {connect} from 'react-redux'
import {setTextFilter} from '../store/actions/filter'

 function SearchField(props) {
     console.log('set search field',props)
     let {filter,setTextFilter} = props
     let {text} = filter
    return (
        <div className="searchField">
            <div className="icon icon-left">
                <FiSearch />
            </div>
            <input type="text" className="form-control" value={text} onChange={e=>setTextFilter(e.target.value)} />
            <div className="icon icon-right">
                <RiBarChartHorizontalLine />
            </div>
        </div>
    )
}

const mapStateToProps = state=>({
    filter:state.filter
})

export default connect(mapStateToProps,{setTextFilter})(SearchField)
