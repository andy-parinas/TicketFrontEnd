import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";

const Paginate = props => {

    const totalPage = props.totalPage;
    const currentPage = props.currentPage;
    const nextPage = props.nextPage;
    const prevPage = props.prevPage;

    const disablePrev = prevPage == 0;
    const disableNext = currentPage == totalPage;

    return(
        <div className="paginate">
            <div className="paginate__control">
                <button className="paginate__button" disabled={disablePrev} >
                    Prev
                </button>
                <button className="paginate__button" disabled={disableNext} >
                    Next
                </button>
            </div>
            <div className="paginate__info">
               Page <span>{currentPage}</span> of <span>{totalPage}</span>
            </div>
        </div>
    )


};

Paginate.propTypes = {
    totalPage : PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    nextPage: PropTypes.number.isRequired,
    prevPage: PropTypes.number.isRequired
};


export default Paginate;

