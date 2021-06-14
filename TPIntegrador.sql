CREATE SCHEMA `TPIntegrador` ;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    age TINYINT UNSIGNED NOT NULL, 
    birth_date DATE NOT NULL, 
    email VARCHAR(55) NOT NULL, 
    contraseña VARCHAR(55) NOT NULL
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(22) NOT NULL, 
    name_producto VARCHAR(20) NOT NULL, 
    usuarios_id INT UNSIGNED, 
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id), 
    fecha DATE NOT NULL,
    imagen VARCHAR(300)
);

CREATE TABLE comentarios ( 
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(200) NOT NULL, 
    fecha DATE NOT NULL, 
    usuarios_id INT UNSIGNED, 
	productos_id INT UNSIGNED, 
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id), 
    FOREIGN KEY (productos_id) REFERENCES productos(id)
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



INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Blanco', 'A1', 1, '2005-06-21', '/images/products/audi_a1_2010_3859_1.jpg', 'A1 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Verde', 'Q3', 2, '2007-03-04', '/images/products/maxresdefault2.jpg', 'Q3 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Blanco', 'TT', 3, '2003-05-13', '/images/products/abt_tt_rs-r_8s00_500ps_2016_0013.jpg','TT es un auto muy rapido' );

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Negro', 'Q7', 4, '2004-07-12', '/images/products/audi-q7-2020-soymotor4.jpg', 'Q7 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Gris', 'Q2', 5, '2006-01-11', '/images/products/Audi-Q2-2021-delantera5.jpg', 'Q2 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Negro', 'Q4', 1, '2005-05-15', '/images/products/RT_V_b3c93508b22c40eea8f7dc357b02394e6.jpg', 'Q4 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Negro', 'A3', 2, '2006-06-16', '/images/products/84D649A6-22F4-4F8B-B7CB-F9B0ACFCE454_1_201_a7.jpg', 'A3 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Negro', 'Q5', 3, '2007-07-17', '/images/products/NAZ_a2bcb6114bd44504b30cf497a09dd31d8.jpg', 'Q5 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen, descrpicion)
VALUES (DEFAULT, 'Gris', 'A7', 4, '2008-08-18', '/images/products/A7 audi.jpeg', 'A7 es un auto muy rapido');

INSERT INTO productos (id, color, name_producto, usuarios_id, fecha, imagen,descrpicion)
VALUES (DEFAULT, 'Gris', 'A5', 5, '2007-07-17', '/images/products/A5audi.jpeg', 'A5 es un auto muy rapido');


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-11-15', 1, 1);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-11-15', 2, 1);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-11-15', 3, 1);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-11-15', 4, 1);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2020-12-15', 1, 2);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-12-13', 2, 2);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2020-12-15', 3, 2);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-12-13', 4, 2);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-09-15', 1, 3);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-09-15', 2, 3);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-09-15', 3, 3);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-09-15', 4, 3);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-10-15', 1, 4);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-10-15', 2, 4);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-10-15', 3, 4);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-10-15', 4, 4);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-08-15', 1, 5);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-08-15', 2, 5);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-08-15', 3, 5);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-08-15', 4, 5);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-06-15', 1, 6);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-06-15', 2, 6);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-06-15', 3, 6);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-06-15', 4, 6);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-07-15', 1, 7);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-07-15', 2, 7);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-07-15', 3, 7);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-07-15', 4, 7);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-05-15', 1, 8);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-05-15', 2, 8);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-05-15', 3, 8);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-05-15', 4, 8);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-11-10', 1, 9);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-11-10', 2, 9);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-11-10', 3, 9);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-11-12', 4, 9);


INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'que buen auto!', '2021-11-14', 1, 10);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'tremendo!', '2021-12-13', 2, 10);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'lindo auto!', '2021-11-12', 3, 10);

INSERT INTO comentarios (id, texto, fecha, usuarios_id, productos_id )
VALUES (DEFAULT, 'estupendo!', '2021-10-15', 4, 10);

ALTER TABLE usuarios
MODIFY contraseña VARCHAR(400);

ALTER TABLE productos
ADD descrpicion VARCHAR(400);

ALTER TABLE comentarios 
ADD createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
ADD updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP; 

ALTER TABLE usuarios 
ADD createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
ADD updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP; 

ALTER TABLE productos 
ADD createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
ADD updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP; 