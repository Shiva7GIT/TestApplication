import express, { Request, Response,Router } from 'express';
import {getAllProducts,addProduct,deleteProduct,updateProduct}from '../service/service';
const app = express();
const router = express.Router();

  router.get('/products', async (req: Request, res: Response) => {
    try {
      const products = await getAllProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

  router.post('/addProduct', async (req: Request, res: Response) => {
    try {
      const newProduct = req.body;
      const addedProduct = await addProduct(newProduct);
      res.status(201).json(addedProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

 router.delete('/deleteProduct/:id', async (req: Request, res: Response) => {
    try {
      const id = (req.params.id);
      await deleteProduct(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

  router.put('/updateProduct/:id', async (req: Request, res: Response) => {
    try {
      const id = (req.params.id);
      const updatedProductData = req.body;
      const updatedProduct = await updateProduct(id, updatedProductData);
      res.json(updatedProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

  export{ router};
  
