import ProductItem from './ProductItem';
import classes from './Products.module.css';

 const DUMMY_PRODUCTS = [{
  id:'p1',
  price:7,
  title:'my first book',
  description :'the first book i have ever wrote'

},
{
  id:'p2',
  price:4,
  title:'my second book',
  description :'the second book i have ever wrote'

},
{
  id:'p3',
  price:9,
  title:'my third book',
  description :'the third book i have ever wrote'

}]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>( <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
       
      </ul>
    </section>
  );
};

export default Products;
