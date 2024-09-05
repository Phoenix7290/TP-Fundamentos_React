import { PropTypes } from 'prop-types';

export default function DisplayCount({ count }) {
    return (
        <div>
            <span>Contador: {count}</span>
        </div>
    )
}

DisplayCount.propTypes = {
    count: PropTypes.number.isRequired
}