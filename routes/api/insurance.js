const router = require("express").Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middlewares/auth");
const Insurance = require("../../models/Insurance");

// @route    GET api/insurances
// @desc     Get all insurances
// @access   Public
router.get("/", async (req, res) => {
  try {
    const insurances = await Insurance.find().sort({ date: -1 });
    return res.json(insurances);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// @route    POST api/insurances
// @desc     Create an insurances
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("insuranceType", "Insurance type is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newInsurance = new Insurance({
        title: req.body.title,
        description: req.body.description,
        insuranceType: req.body.insuranceType,
        addedBy: user.name,
        user: req.user.id,
      });

      const insurance = await newInsurance.save();

      return res.json(insurance);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/insurances/:id
// @desc     Get insurance by ID
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    const insurance = await Insurance.findById(req.params.id);

    if (!insurance) return res.status(404).json({ msg: "Insurance not found" });

    return res.json(insurance);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "Insurance not found" });

    return res.status(500).send("Server Error");
  }
});

// @route    DELETE api/insurances/:id
// @desc     Delete insurance
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const insurance = await Insurance.findById(req.params.id);

    if (!insurance) return res.status(404).json({ msg: "Insurance not found" });

    if (insurance.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Insurance not authorized" });
    }

    await insurance.remove();
    return res.json({ msg: "Insurance removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "Insurance not found" });

    return res.status(500).send("Server Error");
  }
});

// @route    PUT api/insurances
// @desc     Create an insurances
// @access   Private
router.put("/:id", auth, async (req, res) => {
  try {
    const insurance = await Insurance.findById(req.params.id);

    if (!insurance) return res.status(404).json({ msg: "Insurance not found" });

    if (insurance.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Insurance not authorized" });
    }

    insurance.title = req.body.title ?? insurance.title;
    insurance.description = req.body.description ?? insurance.description;
    insurance.insuranceType = req.body.insuranceType ?? insurance.insuranceType;

    await insurance.save();

    return res.json(insurance);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
