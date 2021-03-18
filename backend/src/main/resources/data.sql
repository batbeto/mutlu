INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 00', 49.9, 50,'Avenida Paulista, 1500' , -23.561680 , -43.217753, '2011-01-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 02', 59.9, 50,'Avenida Paulista, 1500' , -21.561680 , -40.217753, '2014-08-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 10', 69.9, 50,'Avenida Paulista, 1500' , -22.561680 , -43.217753, '2017-01-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 03', 79.9, 50,'Avenida Paulista, 1500' , -24.561680 , -41.217753, '2018-02-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 05', 89.9, 50,'Avenida Paulista, 1500' , -23.561680 , -43.217753, '2021-01-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 06', 99.9, 50,'Avenida Paulista, 1500' , -23.561680 , -42.217753, '2021-05-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 07', 129.9, 50,'Avenida Paulista, 1500' , -23.761680 , -43.217753, '2021-01-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');
INSERT INTO tb_event (name, price, tickets, address, latitude, longitude, date, description, image_Uri) VALUES ('Festa louca 08', 9.9, 50,'Avenida Paulista, 1500' , -23.561680 , -45.217753, '2021-01-18 00:00:00.0' ,'É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01É uma festa muitxo loquinha meu 01' ,'https://picsum.photos/500/300');


INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 49.9, 2, 599.8, 1);
INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 29.9, 42, 499.8, 1);
INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 39.9, 2, 399.8, 1);
INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 79.9, 21, 299.8, 1);
INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 99.9, 12, 199.8, 1);
INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 19.9, 42, 969.8, 1);
INSERT INTO tb_order (moment, price, qtd, total, status) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 29.9, 22, 929.8, 1);


INSERT INTO tb_order_event (order_id, event_id) VALUES (1 , 1);
INSERT INTO tb_order_event (order_id, event_id) VALUES (1 , 4);
INSERT INTO tb_order_event (order_id, event_id) VALUES (2 , 2);
INSERT INTO tb_order_event (order_id, event_id) VALUES (2 , 5);
INSERT INTO tb_order_event (order_id, event_id) VALUES (2 , 8);
INSERT INTO tb_order_event (order_id, event_id) VALUES (3 , 3);
INSERT INTO tb_order_event (order_id, event_id) VALUES (3 , 4);
INSERT INTO tb_order_event (order_id, event_id) VALUES (4 , 2);
INSERT INTO tb_order_event (order_id, event_id) VALUES (4 , 6);
INSERT INTO tb_order_event (order_id, event_id) VALUES (5 , 4);
INSERT INTO tb_order_event (order_id, event_id) VALUES (5 , 6);
INSERT INTO tb_order_event (order_id, event_id) VALUES (6 , 5);
INSERT INTO tb_order_event (order_id, event_id) VALUES (6 , 1);
INSERT INTO tb_order_event (order_id, event_id) VALUES (7 , 7);
INSERT INTO tb_order_event (order_id, event_id) VALUES (7 , 5);