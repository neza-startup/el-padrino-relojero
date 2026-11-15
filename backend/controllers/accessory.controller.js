import Accessory from '../models/accessory.model.js';

export const postAccessory = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      brand,
      bestSeller,
      inStock,
      isForWoman
    } = req.body;

    const images = req.files.map((file) => {
      const base64 = file.buffer.toString('base64');

      return `data:${file.mimetype};base64,${base64}`;
    });

    const newAccessory = new Accessory({
      id: `${brand}-${name}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-'),
      name,
      description,
      images,
      price,
      brand,
      bestSeller: bestSeller === 'true',
      inStock: inStock === 'true',
      isForWoman: isForWoman === 'true'
    });

    const accessory = await newAccessory.save();

    res.status(201).json(accessory);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

export const getAllAccessories = (req, res) => {
  Accessory.find()
    .then((accessories) => {
      res.status(200).json(accessories);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

export const getAccessoryById = (req, res) => {
  const { id } = req.params;

  Accessory.findById(id)
    .then((accessory) => {
      if (!accessory) {
        return res.status(404).json({ error: 'Accessory not found' });
      }
      res.status(200).json(accessory);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

export const updateAccessory = (req, res) => {
  const { id } = req.params;
  const { name, description, /* image, */ price, brand, bestSeller, inStock, isForWoman } = req.body;

  Accessory.findByIdAndUpdate(id, { name, description, /* image, */ price, brand, bestSeller, inStock, isForWoman }, { new: true })
    .then((accessory) => {
      if (!accessory) {
        return res.status(404).json({ error: 'Accessory not found' });
      }
      res.status(200).json(accessory);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

export const deleteAccessory = (req, res) => {
  const { id } = req.params;

  Accessory.findByIdAndDelete(id)
    .then((accessory) => {
      if (!accessory) {
        return res.status(404).json({ error: 'Accessory not found' });
      }
      res.status(200).json({ message: 'Accessory deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
