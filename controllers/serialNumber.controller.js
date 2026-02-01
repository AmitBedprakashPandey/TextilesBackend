import SerialNumber from "../model/SerialNumber.js";

// Create serial number
export const createSerialNumber = async (req, res) => {
  try {

    const newData = new SerialNumber(req.body);

    const serial = await SerialNumber.create(newData);

    res.status(201).json(serial);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all serial numbers
export const getSerialNumbers = async (req, res) => {
  try {
    const serials = await SerialNumber.find().sort({ createdAt: -1 });

    res.status(200).json(serials);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update serial number all details 
export const updateSerialNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const { prefix, startNumber, currentNumber } = req.body;
    const serial = await SerialNumber.findByIdAndUpdate(
      id,
      { prefix, startNumber, currentNumber },
      { new: true }
    );
    if (!serial) {
      res.status(404).json({
        success: false,
        message: "Serial not found",
      });
    }
    res.status(200).json(serial);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update current number
export const updateCurrentNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentNumber } = req.body;

    const serial = await SerialNumber.findByIdAndUpdate(
      id,
      { currentNumber },
      { new: true }
    );

    if (!serial) {
      return res.status(404).json({
        success: false,
        message: "Serial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Current number updated",
      data: serial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete serial
export const deleteSerialNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const serial = await SerialNumber.findByIdAndDelete(id);
    if (!serial) {
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