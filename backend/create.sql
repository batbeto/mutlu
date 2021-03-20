create table tb_event (id  bigserial not null, address varchar(255), date timestamp, description varchar(255), image_uri varchar(255), latitude float8, longitude float8, name varchar(255), price float8, tickets int8, primary key (id));
create table tb_order (id  bigserial not null, moment timestamp, price float8, qtd int4, status int4, total float8, primary key (id));
create table tb_order_event (order_id int8 not null, event_id int8 not null, primary key (order_id, event_id));
alter table if exists tb_order_event add constraint FK275vl57ibx7yw5d3rr0ym71hm foreign key (event_id) references tb_event;
alter table if exists tb_order_event add constraint FK67uejshkqrcaqn67gjqmqmm foreign key (order_id) references tb_order;
