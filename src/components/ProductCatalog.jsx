import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; 
import { Container } from 'react-bootstrap';



const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchProductsAndCategories = async () => {
        try {
          const productResponse = await fetch('https://fakestoreapi.com/products');
          const productData = await productResponse.json();
          setProducts(productData);
  
          const categoryResponse = await fetch('https://fakestoreapi.com/products/categories');
          const categoryData = await categoryResponse.json();
          setCategories(categoryData);
        } catch (err) {
          setError('Failed to fetch data. Please try again later.');
        }
      };
  
      fetchProductsAndCategories();
    }, []);
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
  
    const filteredProducts = products.filter(product => {
      const inTitle = product.title.toLowerCase().includes(search.toLowerCase());
      const inPrice = product.price >= (minPrice || 0) && product.price <= (maxPrice || Infinity);
      const inCategory = !selectedCategory || product.category === selectedCategory;
      return inTitle && inPrice && inCategory;
    });
  
    return (
      <Container>
        <h2>Product Catalog</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </Container>
    );
  };
  
  export default ProductCatalog;
