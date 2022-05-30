const rewardsModel = require("../model/rewards");

exports.save = async (req, res) => {
  //   upload(req, res, async (err) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //Exact moment that the file is saved!
  console.log("body", req.body);
  const userId = req.payload.userId;

  const rewards = await rewardsModel.findOneAndUpdate(
    { userId },
    { userId, ...req.body },
    { new: true, upsert: true }
  );

  console.log("rewards", rewards);

  if (rewards) {
    res.send(`Your rewards saved successfully!`);
  } else {
    res.send(`There's an error please try again!`);
  }
};

exports.getRewards = async (req, res) => {
  const userId = req.payload.userId;
  const rewards = await rewardsModel.findOne({ userId });
  if (rewards) {
    res.status(200).json({
      status: "success",
      msg: "The rewards data is ready!",
      data: rewards,
    });
  } else {
    res.status(401).json({
      status: "fail",
      msg: "User is not found!",
    });
  }
};
