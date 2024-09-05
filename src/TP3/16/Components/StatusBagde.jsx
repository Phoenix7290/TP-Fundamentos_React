import PropTypes from 'prop-types';

const StatusBadge = ({ status }) => {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'ativo':
        return { backgroundColor: 'green', color: 'white' };
      case 'inativo':
        return { backgroundColor: 'gray', color: 'white' };
      case 'pendente':
        return { backgroundColor: 'orange', color: 'white' };
      default:
        return { backgroundColor: 'red', color: 'black' };
    }
  };

  return (
    <span style={{ ...getBadgeStyle(status), padding: '5px 10px', borderRadius: '5px' }}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusBadge;
