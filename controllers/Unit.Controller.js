import Model from "../model/Unit.Model.js";

export const create = async (req, res) => {
  try {
    const newData = new Model(req.body);

    const datas = await Model.create(newData);
    res.status(201).json(datas);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all datas numbers
export const gets = async (req, res) => {
  try {

    const data = await Model.find();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update datas number all details 
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = new Model(req.body);
    const datas = await Model.findByIdAndUpdate(
      id,
      newData,
      { new: true }
    );
    if (!datas) {
      res.status(404).json({
        success: false,
        message: "Serial not found",
      });
    }
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete datas
export const deletes = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Model.findByIdAndDelete(id);
    if (!datas) {
      res.status(404).json({
        success: false,
        message: "Serial not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Serial deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};