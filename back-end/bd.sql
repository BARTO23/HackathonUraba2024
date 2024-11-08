
create schema dbs_hackathon;
use dbs_hackathon;
CREATE TABLE tbl_clientes (
    id_cliente int auto_increment,
    documento varchar(11) not null unique,
    primer_nombre varchar(50) not null,
    segundo_nombre varchar(50),
	primer_apellido varchar(50) not null,
    segundo_apellido varchar(50),
    direccion varchar(255) not null,
    contacto varchar(10) not null,
    correo varchar(255) not null,
    detalle_cuenta TEXT,
    primary key(id_cliente)
);

create table tbl_rol(
	id_rol tinyint unsigned auto_increment,
    descripcion varchar(20) not null,
    primary key(id_rol)
);

CREATE TABLE tbl_usuarios (
    id_usuario int auto_increment,
    usuario varchar(50) not null unique,
    contrasenha varchar(20) not null,
    primary key(id_usuario)
);

create table tbl_usuario_cliente(
    fk_id_tbl_cliente int not null,
    fk_id_tbl_usuario int not null,
    fk_id_tbl_rol tinyint unsigned not null,
    primary key(fk_id_tbl_cliente, fk_id_tbl_usuario),
    foreign key (fk_id_tbl_cliente) references tbl_clientes(id_cliente),
    foreign key (fk_id_tbl_rol) references tbl_rol(id_rol),
    foreign key (fk_id_tbl_usuario) references tbl_usuarios(id_usuario)
);

delimiter //
create trigger cliente_usuario after insert on tbl_clientes
for each row
begin
    declare usuario_new varchar(50);
    declare usuario_existente int;

    set usuario_new = CONCAT(new.primer_nombre, '.', new.primer_apellido);
    
    select COUNT(*) into usuario_existente
    from tbl_usuarios
    where usuario = usuario_new;

    if usuario_existente > 0 then
        set usuario_new = CONCAT(usuario_new, '.', new.documento);
    end if;

    insert into tbl_usuarios(usuario, contrasenha)
    values (usuario_new, new.documento);

    insert into tbl_usuario_cliente(fk_id_tbl_cliente, fk_id_tbl_usuario, fk_id_tbl_rol)
    values (new.id_cliente, LAST_INSERT_ID(), 2);
end//
delimiter ;


create table tbl_area(
	id_area tinyint unsigned auto_increment,
    descripcion varchar(255) not null,
    primary key(id_area)
);

create table tbl_servicios(
	id_servicio tinyint unsigned auto_increment,
	nombre varchar(255) not null,
	descripcion text,
	valor decimal(10,2) not null,
	fecha_inicio date not null,
	fecha_fin date,
    fk_id_tbl_area tinyint unsigned not null,
    primary key(id_servicio),
    foreign key (fk_id_tbl_area) references tbl_area(id_area)
);

create table tbl_estado_factura(
	id_estado tinyint unsigned auto_increment,
    descripcion varchar(50) not null,
    primary key(id_estado)
);

create table tbl_factura(
	id_factura int unsigned auto_increment,
	fecha_factura timestamp default current_timestamp(),
	fk_id_tbl_cliente int not null, 
    fk_id_tbl_usuario int not null,
	total decimal(10,2) not null,
    fk_id_tbl_estado tinyint unsigned not null,
    primary key(id_factura),
    foreign key(fk_id_tbl_cliente) references tbl_clientes(id_cliente),
    foreign key(fk_id_tbl_usuario) references tbl_usuarios(id_usuario),
    foreign key(fk_id_tbl_estado) references tbl_estado_factura(id_estado)
);

create table tbl_det_factura(
	id_detalle int unsigned auto_increment,
	fk_id_tbl_factura int unsigned not null,
	fk_id_tbl_servicio tinyint unsigned not null,
	cantidad tinyint not null,
	valor_unitario decimal(10,2) not null,
	iva decimal(10,2) not null,
	descuentos decimal(10,2) not null,
	subtotal decimal(10,2) not null,
	primary key(id_detalle),
    foreign key(fk_id_tbl_factura) references tbl_factura(id_factura),
    foreign key(fk_id_tbl_servicio) references tbl_servicios(id_servicio)
);

create table tbl_estado_tickets(
	id_estado tinyint unsigned auto_increment,
    descripcion varchar(50) not null,
    primary key(id_estado)
);

create table tbl_tickets(
	id_ticket int auto_increment,
	fk_id_tbl_cliente int not null,
	fk_id_tbl_servicios tinyint unsigned not null,
    fk_id_tbl_estado_tickets tinyint unsigned not null,
	detalles text,
	fecha timestamp default current_timestamp(),
	primary key(id_ticket),
    foreign key(fk_id_tbl_cliente) references tbl_clientes(id_cliente),
    foreign key(fk_id_tbl_servicios) references tbl_servicios(id_servicio),
    foreign key(fk_id_tbl_estado_tickets) references tbl_estado_tickets(id_estado)
);

create table tbl_tecnicos(
	id_tecnico int auto_increment,
	documento varchar(11) not null unique,
	primer_nombre varchar(50) not null,
	segundo_nombre varchar(50),
	primer_apellido varchar(50) not null,
	segundo_apellido varchar(50),
	direccion varchar(255) not null,
	contacto varchar(10) not null,
    fk_id_tbl_area tinyint unsigned not null,
    correo varchar(255) not null,
	detalle_cuenta TEXT,
    primary key(id_tecnico),
    foreign key (fk_id_tbl_area) references tbl_area(id_area)
);

create table tbl_usuario_tecnicos(
    fk_id_tbl_tecnicos int not null,
    fk_id_tbl_usuario int not null,
    fk_id_tbl_rol tinyint unsigned not null,
    primary key(fk_id_tbl_tecnicos, fk_id_tbl_usuario),
    foreign key (fk_id_tbl_tecnicos) references tbl_tecnicos(id_tecnico),
    foreign key (fk_id_tbl_rol) references tbl_rol(id_rol),
    foreign key (fk_id_tbl_usuario) references tbl_usuarios(id_usuario)
);

-- rol
insert into tbl_rol (descripcion)
values('admin'),('cliente');

-- insert clientes
INSERT INTO tbl_clientes (documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, contacto, correo, detalle_cuenta)
VALUES
('12345678901', 'Carlos', NULL, 'Gomez', 'Perez', 'Calle 10 #45-67', '3216549870', 'correo','Cuenta activa'),
('23456789012', 'Ana', 'Maria', 'Lopez', NULL, 'Carrera 5 #10-20', '3004561238', 'correo','Cuenta inactiva'),
('34567890123', 'Juan', NULL, 'Martinez', 'Rodriguez', 'Av. Siempre Viva #123', '3176543210', 'correo','Cuenta activa'),
('45678901234', 'Maria', NULL, 'Garcia', NULL, 'Calle 15 #30-50', '3151237894', 'correo','Cuenta pendiente'),
('56789012345', 'Luis', NULL, 'Hernandez', 'Cruz', 'Carrera 9 #40-32', '3102348765', 'correo','Cuenta activa'),
('67890123456', 'Elena', 'Sofia', 'Torres', NULL, 'Calle 22 #58-12', '3207896541', 'correo','Cuenta suspendida'),
('78901234567', 'Pedro', NULL, 'Ramos', 'Vargas', 'Carrera 7 #25-98', '3112564789', 'correo','Cuenta activa'),
('89012345678', 'Laura', NULL, 'Mendoza', 'Jimenez', 'Av. Central #9-56', '3137894562', 'correo','Cuenta inactiva'),
('90123456789', 'Sofia', 'Andrea', 'Ruiz', NULL, 'Calle 20 #35-60', '3181234576', 'correo','Cuenta pendiente'),
('12345678012', 'Miguel', NULL, 'Ortiz', 'Rios', 'Carrera 12 #40-22', '3147891235', 'correo','Cuenta suspendida'),
('23456789013', 'Andres', NULL, 'Gonzalez', 'Diaz', 'Av. San Juan #25-67', '3104567891', 'correo','Cuenta activa'),
('34567890124', 'Isabel', NULL, 'Morales', NULL, 'Calle 18 #15-43', '3198527410', 'correo','Cuenta pendiente'),
('45678901235', 'Natalia', NULL, 'Sanchez', 'Gutierrez', 'Carrera 8 #12-34', '3214781236', 'correo','Cuenta inactiva'),
('56789012346', 'Daniel', NULL, 'Castro', NULL, 'Calle 30 #45-76', '3007854123', 'correo','Cuenta activa'),
('67890123457', 'Carolina', 'Fernanda', 'Romero', NULL, 'Carrera 6 #78-90', '3129876541', 'correo','Cuenta suspendida'),
('78901234568', 'Ricardo', NULL, 'Pineda', 'Martinez', 'Calle 25 #14-29', '3114561237', 'correo','Cuenta activa'),
('89012345679', 'Sandra', 'Beatriz', 'Rojas', NULL, 'Av. Libertador #12-34', '3206547891', 'correo','Cuenta inactiva'),
('90123456780', 'Jorge', NULL, 'Villanueva', 'Perez', 'Carrera 10 #22-47', '3173214568', 'correo','Cuenta activa'),
('12345678902', 'Paola', NULL, 'Lara', NULL, 'Calle 45 #23-78', '3139874561', 'correo','Cuenta pendiente'),
('23456789003', 'Raul', 'Ignacio', 'Salazar', 'Castillo', 'Av. Bolivar #90-12', '3194567893', 'correo','Cuenta suspendida'),
('34567890125', 'Lucia', NULL, 'Medina', NULL, 'Carrera 3 #65-89', '3181245786', 'correo','Cuenta activa'),
('45678901236', 'Jose', NULL, 'Acosta', 'Garcia', 'Calle 29 #13-56', '3154782145', 'correo','Cuenta pendiente'),
('56789012347', 'Beatriz', NULL, 'Peña', 'Mendez', 'Carrera 1 #98-76', '3104569872', 'correo','Cuenta activa'),
('67890123458', 'Felipe', 'Alberto', 'Cortes', NULL, 'Calle 60 #12-34', '3117894563', 'correo','Cuenta inactiva'),
('78901234569', 'Camila', NULL, 'Valencia', 'Luna', 'Av. 68 #34-56', '3204567893', 'correo','Cuenta suspendida'),
('89012345670', 'Emilio', NULL, 'Bermudez', NULL, 'Carrera 4 #78-90', '3126549870', 'correo','Cuenta activa'),
('90123456781', 'Luisa', 'Patricia', 'Herrera', 'Garzon', 'Calle 13 #23-34', '3167893214', 'correo','Cuenta pendiente'),
('12345678903', 'Julian', NULL, 'Nieto', NULL, 'Carrera 7 #20-34', '3194567890', 'correo','Cuenta activa'),
('23456789004', 'Veronica', 'Juliana', 'Moreno', 'Santos', 'Calle 55 #12-34', '3157896541', 'correo','Cuenta suspendida'),
('34567890126', 'Ivan', NULL, 'Ramirez', 'Quintero', 'Av. Los Andes #90-45', '3141237896', 'correo','Cuenta activa');

-- usuarios
insert into tbl_usuarios(usuario, contrasenha) values ('tec1', 'admin'),('tec2', 'admin'),('tec3', 'admin');

-- Areas
insert into tbl_area(descripcion) values('Software'),('Hardware'),('Soporte técnico');

-- Servicios
insert into tbl_servicios (nombre, descripcion, valor, fecha_inicio, fecha_fin, fk_id_tbl_area) VALUES
('Actualización de Sistemas', 'Servicio de actualización y optimización de sistemas para mantener el rendimiento y la seguridad.', 30000.00, '2024-01-01', '2024-01-05', 1),
('Instalación', 'Instalación completa de sistemas, aplicaciones y configuraciones personalizadas.', 50000.00, '2024-01-10', '2024-01-15', 1),
('Reparación', 'Servicio de diagnóstico y reparación de problemas en equipos y sistemas.', 10000.00, '2024-02-01', '2024-02-05', 2),
('Mantenimiento', 'Mantenimiento preventivo y correctivo para asegurar el funcionamiento óptimo de los equipos.', 60000.00, '2024-02-10', '2024-02-12', 2),
('Consultoría', 'Asesoría especializada para optimizar la infraestructura tecnológica.', 30000.00, '2024-03-01', NULL, 3),
('Soporte técnico', 'Soporte técnico para resolver problemas y dudas sobre el uso de sistemas.', 30000.00, '2024-03-10', NULL, 3);

-- Estado factura
insert into tbl_estado_factura(descripcion) values('pagada'),('pago pendiente'),('cancelado');


-- Insert para tbl_factura
INSERT INTO tbl_factura (fk_id_tbl_cliente, fk_id_tbl_usuario, total, fk_id_tbl_estado) VALUES
(1, 1, 150000.00, 1),
(2, 2, 250000.00, 2),
(3, 3, 100000.00, 3),
(4, 1, 300000.00, 1),
(5, 2, 450000.00, 2),
(6, 3, 600000.00, 1),
(7, 1, 70000.00, 2),
(8, 2, 80000.00, 3),
(9, 3, 120000.00, 1),
(10, 1, 220000.00, 2),
(11, 2, 140000.00, 3),
(12, 3, 360000.00, 1),
(13, 1, 420000.00, 2),
(14, 2, 180000.00, 1),
(15, 3, 50000.00, 2);

-- Insert para tbl_det_factura
INSERT INTO tbl_det_factura (fk_id_tbl_factura, fk_id_tbl_servicio, cantidad, valor_unitario, iva, descuentos, subtotal) VALUES
(1, 1, 2, 30000.00, 5700.00, 0.00, 65700.00),
(2, 2, 1, 50000.00, 9500.00, 0.00, 59500.00),
(3, 3, 3, 10000.00, 5700.00, 0.00, 35700.00),
(4, 4, 4, 60000.00, 11400.00, 0.00, 71400.00),
(5, 5, 2, 30000.00, 5700.00, 0.00, 65700.00),
(6, 6, 1, 30000.00, 5700.00, 0.00, 35700.00),
(7, 1, 5, 30000.00, 5700.00, 0.00, 157700.00),
(8, 2, 2, 50000.00, 9500.00, 0.00, 109500.00),
(9, 3, 3, 10000.00, 5700.00, 0.00, 35700.00),
(10, 4, 1, 60000.00, 11400.00, 0.00, 71400.00),
(11, 5, 1, 30000.00, 5700.00, 0.00, 35700.00),
(12, 6, 2, 30000.00, 5700.00, 0.00, 65700.00),
(13, 1, 1, 30000.00, 5700.00, 0.00, 35700.00),
(14, 2, 3, 50000.00, 9500.00, 0.00, 159500.00),
(15, 3, 4, 10000.00, 5700.00, 0.00, 45700.00);

-- Estado tickets
insert into tbl_estado_tickets(descripcion) values('abierto'),('en proceso'),('cerrado');

-- Insert para tbl_tickets
INSERT INTO tbl_tickets (fk_id_tbl_cliente, fk_id_tbl_servicios, detalles, fk_id_tbl_estado_tickets) VALUES
(1, 1, 'Actualización completa del sistema operativo.',1),
(2, 2, 'Instalación de software de gestión contable.',2),
(3, 3, 'Reparación de equipo con problemas de arranque.',3),
(4, 4, 'Mantenimiento preventivo de servidor central.',2),
(5, 5, 'Consultoría para optimización de infraestructura.',1),
(6, 6, 'Soporte técnico remoto por fallo en software.',1),
(7, 1, 'Actualización de sistema y parches de seguridad.',1),
(8, 2, 'Instalación de paquete de herramientas ofimáticas.',2),
(9, 3, 'Reparación de disco duro dañado.',2),
(10, 4, 'Mantenimiento de hardware en equipos de trabajo.',3),
(11, 5, 'Consultoría sobre seguridad informática.',1),
(12, 6, 'Soporte técnico para usuarios con problemas de acceso.',2),
(13, 1, 'Actualización de drivers y software en equipos.',3),
(14, 2, 'Instalación de servidor de base de datos.',3),
(15, 3, 'Reparación de pantalla en equipo portátil.',2);

-- tecnicos
insert into tbl_tecnicos(documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, contacto, correo, fk_id_tbl_area, detalle_cuenta) values
('12345678903', 'Julian', NULL, 'Nieto', NULL, 'Carrera 7 #20-34', '3194567890', 'correo1', 3,'Cuenta activa'),
('23456789004', 'Veronica', 'Juliana', 'Moreno', 'Santos', 'Calle 55 #12-34', '3157896541', 'correo2', 2,'Cuenta suspendida'),
('34567890126', 'Ivan', NULL, 'Ramirez', 'Quintero', 'Av. Los Andes #90-45', '3141237896', 'correo3', 1, 'Cuenta activa');

-- usuario_tecnicos
insert into tbl_usuario_tecnicos(fk_id_tbl_tecnicos, fk_id_tbl_usuario, fk_id_tbl_rol) values(1, 31, 1), (2, 32, 1), (3, 33, 1);
