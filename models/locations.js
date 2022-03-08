module.exports = (sequelize, type) => {
	return sequelize.define('location', {
		id:{
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		code: type.STRING,
		name: type.STRING,
		created_at: type.DATE
	},{
		updatedAt: 'updated_at',
		createdAt: 'created_at'
	})
};