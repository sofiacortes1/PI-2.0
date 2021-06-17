module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define('Producto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name_producto: {
            type: dataTypes.STRING
        },
        usuarios_id: {
            type: dataTypes.INTEGER  // chequear foring key
        },
        imagen: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
       
    }, {
        tableName: "productos",
        timestamps: true
    });
    Product.associate = (db) => {
        Product.hasMany(db.Comentario, {
            as: 'pcomentarios',
            foreignKey: 'productos_id'

        }) 
        Product.belongsTo(db.Usuario, {
            as: 'pusuario',
            foreignKey: 'usuarios_id'
        })
    } 
 return Product;
};