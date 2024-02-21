import Producer from "../models/producerModel.js";

const createProducer = async (req, res) => {
  try {
    const producer = await Producer.create(req.body);
    res.status(201).json(producer);
  } catch (error) {
    res.status(400).json(error);
  }
};

const producers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.status(200).json(producers);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findProducer = async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    res.status(200).json(producer);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProducer = async (req, res) => {
  try {
    const producer = await Producer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producer) {
      return res.status(404).json();
    }
    res.json(producer);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteProducer = async (req, res) => {
  try {
    const producer = await Producer.findByIdAndDelete(req.params.id);
    if (!producer) {
      return res.status(404).json();
    }
    res.json(producer);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createProducer, producers, updateProducer, deleteProducer, findProducer };
