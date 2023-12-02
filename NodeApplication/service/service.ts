import ProductModel, { Product } from '../model/interface';


  const getAllProducts = async () => {
    try {
      const data = await ProductModel.find(); 
        return data
    } catch (error) {
      throw new Error('Error fetching employees');
    }
  };

  const addProduct = async (newProduct: Product) => {
    try {
      const data = new ProductModel(newProduct);
      return await data.save();
    } catch (error) {
      throw new Error('Error adding employee');
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await ProductModel.deleteOne({ id: id });
    } catch (error) {
      throw new Error('Error deleting employee');
    }
  };

  const updateProduct = async (id: string, updatedProductData: Product) => {
    try {
      const result = await ProductModel.updateOne(
        { id: id },
        { $set: updatedProductData }
      );

      if (result.modifiedCount === 0) {
        throw new Error('Product not found or no changes made');
      }

      return await ProductModel.findOne({ id: id });
    } catch (error) {
      throw new Error('Error updating employee');
    }
  };

  


export{
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
}
