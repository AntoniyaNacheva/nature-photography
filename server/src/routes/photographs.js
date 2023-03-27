import express from 'express';
import mongoose from 'mongoose';
import { PhotographyModel } from "../models/Photography.js";
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const response = await PhotographyModel.find({});
		res.json(response);

	} catch (err) {
		res.json(err);
	}
});

router.post("/", async (req, res) => {
	const photography = new PhotographyModel(req.body);

	try {
		await photography.save();
		res.json(photography);

	} catch (err) {
		res.json(err);
	}
});

router.put("/", async (req, res) => {

	try {
		const photography = await PhotographyModel.findById(req.body.photographyID);
		const user = await UserModel.findById(req.body.userID);
		user.savedPhotographs.push(photography);

		await user.save();
		res.json({ savedPhotographs: user.savedPhotographs });

	} catch (err) {
		res.json(err);
	}
});

router.get("/savedPhotographs/ids/:userID", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.userID);
		res.json({ savedPhotographs: user?.savedPhotographs });

	} catch (err) {
		res.json(err);
	}
});

router.get("/savedPhotographs/:userID", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.userID);
		const savedPhotographs = await PhotographyModel.find({
			_id: { $in: user.savedPhotographs }
		});
		res.json({ savedPhotographs });

	} catch (err) {
		res.json(err);
	}
});

export { router as photographsRouter };


