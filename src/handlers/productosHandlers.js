const { 
    getAllProductsController,
    getProductByNameController, 
    getProductByIDController, 
    postProductController, 
    getProductByCodeController, 
    updateProductController,
    updatePricesProductsController,
  } = require('../controllers/productosController.js');

const handlerGetProducts = async (req, res) => {
    const { name, code } = req.query;

    try {
      let products;

      if (name) {
        products = await getProductByNameController(name);
      } else if (code) {
        products = await getProductByCodeController(code);
      } else {
        products = await getAllProductsController();
      }

      if (!products || (Array.isArray(products) && products.length === 0)) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

      res.status(200).json(products);

    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    };  
};
  
const handlerGetProductByID = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await getProductByIDController(productID);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  };  
};

  const handlerPostProduct = async (req, res) => {
    const { codigo, name, price, category, descripcion, status } = req.body;
    const imagen = req.file ? req.file.filename : null;

    if (!codigo || !name || !price) {
      return res.status(400).json({ message: 'Código, nombre y precio son obligatorios' });
    }

    try {
      await postProductController( codigo, name, price, imagen, category, descripcion, status );
      res.status(201).json({ message:'Producto creado exitosamente!'});
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };

  const handlerPutProduct = async (req, res) => {
    const { id ,codigo, name, price, category, descripcion, status } = req.body;
    const imagen = req.file ? req.file.filename : null; // Obtener el nombre del archivo si se subió uno
    
    if (!id) {
      return res.status(400).json({ message: 'ID del producto es requerido' });
    }

    try {
      const updatedProduct = await updateProductController( id, codigo, name, price, imagen, category, descripcion, status );
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado o no se pudo actualizar' });
      }

      res.status(200).json({ message: 'Producto actualizado exitosamente!', product: updatedProduct });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };

  const handlerPutPriceProduct = async (req,res) => {
    const { form } = req.body;
    if (!form || typeof form !== "object") return res.status(400).json({ message: "Formulario inválido o faltante en la solicitud." });
    if (form.valueType !== 'aumentar' && form.valueType !== 'disminuir') return res.status(400).json({ message: "Datos faltantes: valueType." });
    try {
      const updatePriceProducts = await updatePricesProductsController(form);
      return res.status(201).json({ message: updatePriceProducts });
    } catch (error) {
      return res.status(error.status || 500).json({ message: error.message || "Error interno del servidor." });
    }
  };

  module.exports = { handlerGetProducts, handlerGetProductByID, handlerPostProduct, handlerPutProduct, handlerPutPriceProduct };