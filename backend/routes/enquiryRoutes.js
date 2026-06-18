const express = require("express");

const {
  body,
  validationResult,
} = require("express-validator");

const {
  submitEnquiry,
} = require("../controllers/enquiryController");

const router = express.Router();

router.post(
  "/enquiry",

  [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("phone")
      .isLength({
        min: 10,
        max: 10,
      })
      .withMessage(
        "Phone must be 10 digits"
      ),
  ],

  (req, res, next) => {
    const errors =
      validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },

  submitEnquiry
);

module.exports = router;