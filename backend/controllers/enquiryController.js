const Enquiry = require("../models/Enquiry");

exports.submitEnquiry = async (
  req,
  res
) => {
  try {
    const { name, email, phone } =
      req.body;

    const enquiry =
      await Enquiry.create({
        name,
        email,
        phone,
      });

    res.status(201).json({
      success: true,
      message:
        "Registration submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};