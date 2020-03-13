import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

function Main() {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        /* fetch API in action */
        fetch('/api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            //Fetched product is stored in the state
            setProducts(products);
        });
    });

    function handleClick(product) {
        //handleClick is used to set the state
        setCurrentProduct(product);
       
      };

    function renderProducts() {
        return products.map(product => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li key={product.id} onClick={() => handleClick(product)}>
                    { product.title } 
                </li>      
            );
        })
      };

    return (
        <div>
            <div>
                <h3>All Products</h3>
                <ul>
                    { renderProducts() }
                </ul> 
            </div>
            <Product product={currentProduct} />
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
