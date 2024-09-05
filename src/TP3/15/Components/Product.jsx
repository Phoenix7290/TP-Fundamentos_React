import { PropTypes } from 'prop-types';

export default function Product({ name, price, description }) {

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  };

 return (
    <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h3>{description ? `${description}` : `Descrição não disponível`}</h3>
    </div>
 )
}
