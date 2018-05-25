import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = props => {

    return <div className="list-group">
                { props.children }
            </div>

};

ListGroup.propTypes = {

};

export default ListGroup;