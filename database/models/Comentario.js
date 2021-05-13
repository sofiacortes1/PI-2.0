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
     timestamps: false
    });
    
return Coment;
}