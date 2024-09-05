import PropTypes from 'prop-types';

export default function Greeting({name}) {
    return (
        <h1>Olá, {name}!</h1>
    )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
};