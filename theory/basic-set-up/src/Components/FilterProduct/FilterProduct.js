import React from 'react'
import "./FilterProduct.css"
const FilterProduct = (props) => {
    function onFilterValueChange(event){
        // Sending value to parent from child with the help of attribute
        props.selectAttributeContent(event.target.value);
    }
  return (
    <div className='filter-area'>
        <select name='isAvailable' onChange={onFilterValueChange}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Un Available</option>
        </select>
    </div>
  )
}

export default FilterProduct