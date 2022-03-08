const router = require('express').Router();
const Sequalize = require('sequelize');
const Op = Sequalize.Op;
const {Location} = require('../../db');

router.get("/", async (req, res)=>{
	const locations = await Location.findAll({
		attributes:['id','name'],
		where:{
			name: {[Op.like]: '%a%'	}
		}
	});
	res.json(locations);
});

module.exports = router;