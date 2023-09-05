import React, { Fragment } from 'react'
import FoodsSummary from './FoodsSummary/FoodsSummary'
import AvailableFoods from './AvailableFoods/AvailableFoods'

const Foods = () => {
    return (
        <Fragment>
            <FoodsSummary />
            <AvailableFoods />
        </Fragment>
    )
}

export default Foods