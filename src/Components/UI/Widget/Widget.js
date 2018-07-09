import React from 'react';
import PropTypes from 'prop-types';

const Widget = props => {

    const children = props.children;

    return(
        <div className="widget widget--default">
            <div className="widget__header">
                { children }
                <div className="widget__text">
                    {props.text}
                </div>
            </div>
            <div className="widget__subtext">
                {props.subtext}
            </div>
        </div>
    )

};

Widget.propTypes = {
    children: PropTypes.element.isRequired,
    text: PropTypes.number.isRequired,
    subText: PropTypes.string
};

export default Widget;