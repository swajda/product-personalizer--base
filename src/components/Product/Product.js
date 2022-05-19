import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0])
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)   

  

  const getPrice = useMemo(() => {
    const price = props.sizes.find( ({ name }) => name === currentSize);
    return props.basePrice + price.additionalPrice
  }, [currentSize, props.sizes, props.basePrice]);

  const addToCart = event => {
    event.preventDefault();

    console.log('Summary');
    console.log('============');
    console.log('Name:', props.name);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  } 

  return (
    <article className={styles.product}>
      <ProductImage 
        name={props.name}
        color={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          sizes={props.sizes}
          onSubmit={addToCart}
        />
      </div>
    </article>
  )
};

export default Product;