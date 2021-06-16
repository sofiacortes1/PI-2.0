module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define('Producto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        color: {
            type: dataTypes.STRING
        },
        name_producto: {
            type: dataTypes.STRING
        },
        usuarios_id: {
            type: dataTypes.INTEGER  // chequear foring key
        },
        fecha: {
            type: dataTypes.DATE 
        },
        imagen: {
            type: dataTypes.STRING
        },
        descrpicion: {
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