import React from 'react'
import FilterLink from "./FilterLink";

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
      </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
      </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
      </FilterLink>
    </div>
)

export default Footer