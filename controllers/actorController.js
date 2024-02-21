import Actor from "../models/actorModel.js";

const createActor = async (req, res) => {
  try {
    const { name, gender, dob } = req.body;
    const actor = await Actor.create({ name, gender, dob });
    res.json(actor);
  } catch (error) {
    console.error("Error creating actor:", error);
  }
};
const findActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    console.error("Error finding actors:", error);
  }
};

const findActor = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    res.json(actor);
  } catch (error) {
    console.error("Error finding actors:", error);
  }
};

const updateActor = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actor);
  } catch (error) {
    console.error("Error updating actor:", error);
  }
};

const deleteActor = async (req, res) => {
  try {
    await Actor.findByIdAndDelete(req.params.id);
    res.json({ message: "Actor deleted successfully" });
  } catch (error) {
    console.error("Error deleting actor:", error);
  }
};

export { createActor, findActors, updateActor, deleteActor, findActor };
