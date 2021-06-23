module.exports = (sequelize, dataTypes) => {

    const Usuario = sequelize.define('Usuario',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        age: {
            type: dataTypes.DECIMAL
        },
        birth_date: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        }
    },
    {
        tableName: "usuarios",
        timestamps: true
    });
    Usuario.associate = (db) => {
        Usuario.hasMany(db.Producto, {
            as: 'producto',
            foreignKey: 'usuarios_id'

        })
        Usuario.hasMany(db.Comentario, {
            as: 'comentario',
            foreignKey: 'usuarios_id'
         })
    }

   return Usuario;

}