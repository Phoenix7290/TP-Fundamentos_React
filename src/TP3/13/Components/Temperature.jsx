import PropTypes from 'prop-types';

export default function Temperature({ temperature }) {
    return (
        <>
            {temperature > 25 ? <p>Está quente</p> : <p>Está Frio</p>}
        </>
    );
}

Temperature.propTypes = {
    temperature: PropTypes.number.isRequired,
};

