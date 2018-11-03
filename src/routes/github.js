import { Router } from 'express';
import fs from 'fs'
import path from 'path'
import sharp from 'sharp';
import os from 'os';
import multer from 'multer'
const mkdirp = require('mkdirp')
const homedir = os.homedir();

export default () => {
	let github = Router();

	github.get('/data', (req, res) => {
		res.send({data: 'useless data'})
	});

	return github;
}