CREATE SCHEMA `TPIntegrador` ;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    age TINYINT UNSIGNED NOT NULL, 
    birth_date DATE NOT NULL, 
    email VARCHAR(55) NOT NULL UNIQUE, 
    contraseña VARCHAR(400) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR (400),
    name_producto VARCHAR(20) NOT NULL, 
    usuarios_id INT UNSIGNED, 
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id) ON DELETE CASCADE, 
    imagen VARCHAR(300),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentarios ( 
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(200) NOT NULL, 
    usuarios_id INT UNSIGNED, 
	productos_id INT UNSIGNED, 
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id) ON DELETE CASCADE, 
    FOREIGN KEY (productos_id) REFERENCES productos(id) ON DELETE CASCADE,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (id, first_name, last_name, age, birth_date, email, contraseña)
VALUES (DEFAULT, 'Lucía', 'Gomez', '26', '1995-04-23', 'luciagomez@gmail.com','abcd');

INSERT INTO usuarios (id, first_name, last_name, age, birth_date, email, contraseña)
VALUES (DEFAULT, 'Micaela', 'Faur','19', '2001-11-14', 'mfaur@udesa.edu.ar','abcd' );

INSERT INTO usuarios (id, first_name, last_name, age, birth_date, email, contraseña)
VALUES (DEFAULT, 'Consuelo', 'Perrone', '18', '2002-05-31', 'cperrone@udesa.edu.ar', 'abcd');

INSERT INTO usuarios (id, first_name, last_name, age, birth_date, email, contraseña)
VALUES (DEFAULT, 'Sofia', 'Cortes', '19', '2001-12-18', 'scortes@udesa.edu.ar', 'abcd');

INSERT INTO usuarios (id, first_name, last_name, age, birth_date, email, contraseña)
VALUES (DEFAULT, 'Ariana', 'Umaschi', '19', '2002-09-24','aumaschi@udesa.edu.ar','abcd');



INSERT INTO productos (id, name_producto, usuarios_id, imagen, descripcion)
VALUES (DEFAULT, 'A1', 1, '/images/products/audi_a1_2010_3859_1.jpg', 'A1 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'Q3', 2,  '/images/products/maxresdefault2.jpg', 'Q3 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'TT', 3, '/images/products/abt_tt_rs-r_8s00_500ps_2016_0013.jpg','TT es un auto muy rapido' );

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'Q7', 4,  '/images/products/audi-q7-2020-soymotor4.jpg', 'Q7 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT, 'Q2', 5,  '/images/products/Audi-Q2-2021-delantera5.jpg', 'Q2 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'Q4', 1,  '/images/products/RT_V_b3c93508b22c40eea8f7dc357b02394e6.jpg', 'Q4 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'A3', 2,  '/images/products/84D649A6-22F4-4F8B-B7CB-F9B0ACFCE454_1_201_a7.jpg', 'A3 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'Q5', 3,  '/images/products/NAZ_a2bcb6114bd44504b30cf497a09dd31d8.jpg', 'Q5 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen, descripcion)
VALUES (DEFAULT,  'A7', 4,  '/images/products/A7 audi.jpeg', 'A7 es un auto muy rapido');

INSERT INTO productos (id,  name_producto, usuarios_id,  imagen,descripcion)
VALUES (DEFAULT,  'A5', 5, '/images/products/A5audi.jpeg', 'A5 es un auto muy rapido');


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 1);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 1);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 1);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 1);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 2);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 2);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 2);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 2);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 3);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 3);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 3);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 3);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 4);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 4);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 4);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 4);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 5);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 5);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 5);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 5);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 6);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 6);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 6);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 6);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 7);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 7);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', 3, 7);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 7);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', 1, 8);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 8);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!',  3, 8);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 8);


INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!',  1, 9);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!',  2, 9);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!',  3, 9);

INSERT INTO comentarios (id, texto, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!',  4, 9);


INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!',  1, 10);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', 2, 10);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!',  3, 10);

INSERT INTO comentarios (id, texto,  usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', 4, 10);