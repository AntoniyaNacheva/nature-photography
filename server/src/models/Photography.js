import mongoose from 'mongoose';

const PhotographySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	destination: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: true
	},
	style: {
		type: String,
		required: true
	},
	typeOfCamera: {
		type: String,
		required: true
	},
	userOwner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	}
});

export const PhotographyModel = mongoose.model("photographs", PhotographySchema);
