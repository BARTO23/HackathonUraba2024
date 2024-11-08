
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

insert into tbl_rol (descripcion)
values('admin'),('cliente');


CREATE TABLE tbl_usuarios (
    id_usuario int auto_increment,
    usuario varchar(50) not null unique,
    contrasenha varchar(20) not null,
    fk_id_tbl_clientes int not null,
    fk_id_tbl_rol tinyint unsigned not null,
    primary key(id_usuario),
    foreign key (fk_id_tbl_rol) references tbl_rol(id_rol),
    foreign key (fk_id_tbl_clientes) references tbl_clientes(id_cliente)
);

delimiter //
create trigger cliente_usuario after insert on tbl_clientes
for each row
begin
	declare usuario_new varchar(50);
    declare usuario_old varchar(50);
    set usuario_new = concat(new.primer_nombre, '.', new.primer_apellido);
    set usuario_old = (select usuario from tbl_usuarios where usuario = usuario_new);

	if usuario_new = usuario_old then
		insert into tbl_usuarios(usuario, contrasenha, fk_id_tbl_clientes, fk_id_tbl_rol) 
		values (concat(usuario_new,'', new.documento), new.documento, new.id_cliente, 2);
	else
		insert into tbl_usuarios(usuario, contrasenha, fk_id_tbl_clientes, fk_id_tbl_rol) 
		values (usuario_new, new.documento, new.id_cliente, 2);
	end if;
end//
delimiter ;

create table tbl_servicios(
	id_servicio tinyint unsigned auto_increment,
	nombre varchar(255) not null,
	descripcion text,
	valor decimal(10,2) not null,
	fecha_inicio date not null,
	fecha_fin date,
    primary key(id_servicio)
);

create table tbl_factura(
	id_factura int unsigned auto_increment,
	fecha_factura timestamp default current_timestamp(),
	fk_id_tbl_cliente int not null, 
    fk_id_tbl_usuario int not null,
	total decimal(10,2) not null,
    primary key(id_factura),
    foreign key(fk_id_tbl_cliente) references tbl_clientes(id_cliente),
    foreign key(fk_id_tbl_usuario) references tbl_usuarios(id_usuario)
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

create table tbl_area(
	id_area tinyint unsigned auto_increment,
    descripcion varchar(255) not null,
    fk_id_tbl_servicio tinyint unsigned not null,
    primary key(id_area),
    foreign key(fk_id_tbl_servicio) references tbl_servicios(id_servicio)
);

create table tbl_tickets(
	id_ticket int auto_increment,
	fk_id_tbl_cliente int not null,
	fk_id_tbl_area tinyint unsigned not null,
	detalles text,
	fecha timestamp default current_timestamp(),
	primary key(id_ticket),
    foreign key(fk_id_tbl_cliente) references tbl_clientes(id_cliente),
    foreign key(fk_id_tbl_area) references tbl_area(id_area)
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
    fk_id_tbl_rol tinyint unsigned not null,
    fk_id_tbl_area tinyint unsigned not null,
	detalle_cuenta TEXT,
    primary key(id_tecnico),
	foreign key (fk_id_tbl_rol) references tbl_rol(id_rol),
    foreign key (fk_id_tbl_area) references tbl_area(id_area)
);

INSERT INTO tbl_clientes (documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, contacto, detalle_cuenta)
VALUES
('12345678901', 'Carlos', NULL, 'Gomez', 'Perez', 'Calle 10 #45-67', '3216549870', 'Cuenta activa'),
('23456789012', 'Ana', 'Maria', 'Lopez', NULL, 'Carrera 5 #10-20', '3004561238', 'Cuenta inactiva'),
('34567890123', 'Juan', NULL, 'Martinez', 'Rodriguez', 'Av. Siempre Viva #123', '3176543210', 'Cuenta activa'),
('45678901234', 'Maria', NULL, 'Garcia', NULL, 'Calle 15 #30-50', '3151237894', 'Cuenta pendiente'),
('56789012345', 'Luis', NULL, 'Hernandez', 'Cruz', 'Carrera 9 #40-32', '3102348765', 'Cuenta activa'),
('67890123456', 'Elena', 'Sofia', 'Torres', NULL, 'Calle 22 #58-12', '3207896541', 'Cuenta suspendida'),
('78901234567', 'Pedro', NULL, 'Ramos', 'Vargas', 'Carrera 7 #25-98', '3112564789', 'Cuenta activa'),
('89012345678', 'Laura', NULL, 'Mendoza', 'Jimenez', 'Av. Central #9-56', '3137894562', 'Cuenta inactiva'),
('90123456789', 'Sofia', 'Andrea', 'Ruiz', NULL, 'Calle 20 #35-60', '3181234576', 'Cuenta pendiente'),
('12345678012', 'Miguel', NULL, 'Ortiz', 'Rios', 'Carrera 12 #40-22', '3147891235', 'Cuenta suspendida'),
('23456789013', 'Andres', NULL, 'Gonzalez', 'Diaz', 'Av. San Juan #25-67', '3104567891', 'Cuenta activa'),
('34567890124', 'Isabel', NULL, 'Morales', NULL, 'Calle 18 #15-43', '3198527410', 'Cuenta pendiente'),
('45678901235', 'Natalia', NULL, 'Sanchez', 'Gutierrez', 'Carrera 8 #12-34', '3214781236', 'Cuenta inactiva'),
('56789012346', 'Daniel', NULL, 'Castro', NULL, 'Calle 30 #45-76', '3007854123', 'Cuenta activa'),
('67890123457', 'Carolina', 'Fernanda', 'Romero', NULL, 'Carrera 6 #78-90', '3129876541', 'Cuenta suspendida'),
('78901234568', 'Ricardo', NULL, 'Pineda', 'Martinez', 'Calle 25 #14-29', '3114561237', 'Cuenta activa'),
('89012345679', 'Sandra', 'Beatriz', 'Rojas', NULL, 'Av. Libertador #12-34', '3206547891', 'Cuenta inactiva'),
('90123456780', 'Jorge', NULL, 'Villanueva', 'Perez', 'Carrera 10 #22-47', '3173214568', 'Cuenta activa'),
('12345678902', 'Paola', NULL, 'Lara', NULL, 'Calle 45 #23-78', '3139874561', 'Cuenta pendiente'),
('23456789003', 'Raul', 'Ignacio', 'Salazar', 'Castillo', 'Av. Bolivar #90-12', '3194567893', 'Cuenta suspendida'),
('34567890125', 'Lucia', NULL, 'Medina', NULL, 'Carrera 3 #65-89', '3181245786', 'Cuenta activa'),
('45678901236', 'Jose', NULL, 'Acosta', 'Garcia', 'Calle 29 #13-56', '3154782145', 'Cuenta pendiente'),
('56789012347', 'Beatriz', NULL, 'Peña', 'Mendez', 'Carrera 1 #98-76', '3104569872', 'Cuenta activa'),
('67890123458', 'Felipe', 'Alberto', 'Cortes', NULL, 'Calle 60 #12-34', '3117894563', 'Cuenta inactiva'),
('78901234569', 'Camila', NULL, 'Valencia', 'Luna', 'Av. 68 #34-56', '3204567893', 'Cuenta suspendida'),
('89012345670', 'Emilio', NULL, 'Bermudez', NULL, 'Carrera 4 #78-90', '3126549870', 'Cuenta activa'),
('90123456781', 'Luisa', 'Patricia', 'Herrera', 'Garzon', 'Calle 13 #23-34', '3167893214', 'Cuenta pendiente'),
('12345678903', 'Julian', NULL, 'Nieto', NULL, 'Carrera 7 #20-34', '3194567890', 'Cuenta activa'),
('23456789004', 'Veronica', 'Juliana', 'Moreno', 'Santos', 'Calle 55 #12-34', '3157896541', 'Cuenta suspendida'),
('34567890126', 'Ivan', NULL, 'Ramirez', 'Quintero', 'Av. Los Andes #90-45', '3141237896', 'Cuenta activa');