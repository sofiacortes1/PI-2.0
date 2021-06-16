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
        fecha: {
            type:dataTypes.DATE
        },

    },
    {
     tableName: "comentarios",
     timestamps: true
    });
    Coment.associate = (db) => {
        Coment.belongsTo(db.Producto, {
            as: 'cproducto',
            foreignKey: 'productos_id'
        })
        Coment.belongsTo(db.Usuario, {
            as: 'cusuario',
            foreignKey: 'usuarios_id'
        })
    } 
    
return Coment;
}
