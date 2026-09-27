import Watch from '../models/watch.model.js';

export const postWatch = async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      price,
      brand,
      bestSeller,
      inStock
    } = req.body;

    const images = req.files.map((file) => {
      const base64 = file.buffer.toString('base64');

      return `data:${file.mimetype};base64,${base64}`;
    });

    const newWatch = new Watch({
      id,
      name,
      description,
      images,
      price,
      brand,
      bestSeller: bestSeller === 'true',
      inStock: inStock === 'true'
    });

    const watch = await newWatch.save();

    res.status(201).json(watch);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

export const getAllWatches = (req, res) => {
  Watch.find()
    .then((watches) => {
      res.status(200).json(watches);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

export const getWatchById = (req, res) => {
  const { id } = req.params;

  Watch.findById(id)
    .then((watch) => {
      if (!watch) {
        return res.status(404).json({ error: 'Watch not found' });
      }
      res.status(200).json(watch);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

export const updateWatch = (req, res) => {
  const { id } = req.params;
  const { name, description, /* image, */ price, brand, bestSeller, inStock } = req.body;

  Watch.findByIdAndUpdate(id, { name, description, /* image, */ price, brand, bestSeller, inStock }, { new: true })
    .then((watch) => {
      if (!watch) {
        return res.status(404).json({ error: 'Watch not found' });
      }
      res.status(200).json(watch);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

export const deleteWatch = (req, res) => {
  const { id } = req.params;

  Watch.findByIdAndDelete(id)
    .then((watch) => {
      if (!watch) {
        return res.status(404).json({ error: 'Watch not found' });
      }
      res.status(200).json({ message: 'Watch deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
