const {
  getAllProductsController,
  getProductByNameController,
  getProductByIDController,
  postProductController,
  getProductByCodeController,
  updateProductController,
  updatePricesProductsController,
} = require('../controllers/productosController.js');

// ---- IMAGEKIT ----
const imagekit = require('../utils/imageKitConfig.js');
// ------------------

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
  try {
    const productData = req.body;
    const file = req.file;

    if (!productData.codigo || !productData.name || !productData.price) {
      return res.status(400).json({ message: 'Código, nombre y precio son obligatorios' });
    }

    let image;
    if (file) {
      // OBTENEMOS EL NOMBRE DEL PRODUCTO PARA EL ARCHIVO
      const product_name_file = productData?.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
      // OBTENEMOS LA EXTENSIÓN DEL ARCHIVO
      const extension_file = file.originalname.split('.').pop();
      // NOMBRE QUE QUEDARIA DEL ARCHIVO
      const file_name = `product-${product_name_file}.${extension_file}`;

      const uploadResult = await imagekit.upload({
        file: file.buffer, // usamos buffer
        fileName: file_name,
        folder: 'quimar', // opcional
      });

      image = {
        url: uploadResult.url,
        id: uploadResult.fileId
      };
    }

    await postProductController(productData, image);
    res.status(201).json({ message: 'Producto creado exitosamente!' });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const handlerPutProduct = async (req, res) => {
  try {
    const productData = req.body;
    const file = req.file;

    console.log(file);

    if (!productData.id) {
      return res.status(400).json({ message: 'ID del producto es requerido' });
    }

    let newImage;

    if (file) {
      // OBTENEMOS EL NOMBRE DEL PRODUCTO PARA EL ARCHIVO
      const product_name_file = productData?.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
      // OBTENEMOS LA EXTENSIÓN DEL ARCHIVO
      const extension_file = file.originalname.split('.').pop();
      // NOMBRE QUE QUEDARIA DEL ARCHIVO
      const file_name = `product-${product_name_file}.${extension_file}`;

      const uploadResult = await imagekit.upload({
        file: file.buffer,
        fileName: file_name,
        folder: 'quimar',
      });

      newImage = {
        url: uploadResult.url,
        id: uploadResult.fileId,
      };
    }

    const updatedProduct = await updateProductController(productData, newImage);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado o no se pudo actualizar' });
    }

    res.status(200).json({ message: 'Producto actualizado exitosamente!', product: updatedProduct });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const handlerPutPriceProduct = async (req, res) => {
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