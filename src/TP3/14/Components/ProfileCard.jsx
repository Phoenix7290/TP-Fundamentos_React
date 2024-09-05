import PropTypes from 'prop-types';

export default function ProfileCard({ name, age}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{age ? `Idade ${age}` : `Idade não disponível`}</p>
        </div>
    )
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
