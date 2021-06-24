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
            type: dataTypes.INTEGER  
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
            as: 'comentario',
            foreignKey: 'productos_id'

        }) 
        Product.belongsTo(db.Usuario, {
            as: 'usuario',
            foreignKey: 'usuarios_id'
        })
    } 
 return Product;
};