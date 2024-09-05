export default function Product({ name, price, description }) {
 return (
    <div>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <h1>{description ? `${description}` : ``}</h1>
    </div>
 )
}