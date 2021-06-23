module.exports = (sequelize, dataTypes) => {

    const Coment = sequelize.define('Comentario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
    },
    {
     tableName: "comentarios",
     timestamps: true
    });
    Coment.associate = (db) => {
        Coment.belongsTo(db.Producto, {
            as: 'producto',
            foreignKey: 'productos_id'
        })
        Coment.belongsTo(db.Usuario, {
            as: 'usuario',
            foreignKey: 'usuarios_id'
        })
    } 
    
return Coment;
}
