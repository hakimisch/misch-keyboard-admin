import Layout from '@/components/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, {  useState } from 'react'

const NewProduct = () => {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [type,setType] = useState('')
  const [price,setPrice] = useState('');
  const [goToProducts,setGoToProducts] = useState(false);
  const router = useRouter();
  async function createProduct(ev) {
    ev.preventDefault();
    const data = {title,description,type,price};
    await axios.post('/api/products', data);
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push('/products');
  }
  return (
    <Layout>
        <form onSubmit={createProduct}>
        <h1>Add New Product</h1>
        <label>Product Name</label>
        <input 
            type='text' 
            placeholder='product name' 
            value={title} 
            onChange={ev => setTitle(ev.target.value)}/>
        <label>Description</label>
        <textarea 
            placeholder='description'
            value={description}
            onChange={ev => setDescription(ev.target.value)}/>
        <label>Type</label>
        <input 
            type='text' 
            placeholder='type'
            value={type}
            onChange={ev => setType(ev.target.value)}/>
        <label>Price (in MYR)</label>
        <input 
            type="number" 
            placeholder='price'
            value={price}
            onChange={ev => setPrice(ev.target.value)}/>
        <button 
            type='submit' 
            className='button-primary'>Save</button>

        </form>
        
    </Layout>
  )
}

export default NewProduct