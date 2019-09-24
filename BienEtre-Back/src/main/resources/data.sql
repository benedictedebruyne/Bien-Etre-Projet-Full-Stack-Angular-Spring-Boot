insert into Users (username, email, first_name, last_name, password, enabled, lastpasswordresetdate)values ('user1','user1@gmail.com', 'user1', 'user1', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 1, PARSEDATETIME('01-01-2019', 'dd-MM-yyyy'));
insert into Users (username, email, first_name, last_name, password, enabled, lastpasswordresetdate)values ('user2','user2@gmail.com', 'user2', 'user2', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 1, PARSEDATETIME('01-01-2019', 'dd-MM-yyyy'));
insert into Users (username, email, first_name, last_name, password, enabled, lastpasswordresetdate)values ('user3','user3@gmail.com', 'user3', 'user3', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 1, PARSEDATETIME('01-01-2019', 'dd-MM-yyyy'));
insert into Users (username, email, first_name, last_name, password, enabled, lastpasswordresetdate)values ('therapeut','therapeut@gmail.com', 'therapeut', 'therapeut', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 1, PARSEDATETIME('01-01-2019', 'dd-MM-yyyy'));

INSERT INTO AUTHORITY (ID, NAME) VALUES (1, 'ROLE_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (2, 'ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (3, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (4, 2);


insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('K', 'Kinésio', 60, null, '#007FFF', '#FFFFFF');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('KR', 'Kinésio RDV', 60, true, '#A9EAFE', '#000000');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('M', 'Massage', 90, null, '#F0C300','#FFFFFF');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('MR', 'Massage RDV', 90, true, '#FDF1B8','#000000');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('C', 'Chant prénatal (collectif)', 90, null, '#C60800', '#FFFFFF');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('CR', 'Chant prénatal (collectif) RDV', 90, false, '#FE96A0', '#000000');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('I', 'Chant prénatal (individuel)', 60, null, '#096A09', '#FFFFFF');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('IR', 'Chant prénatal (individuel) RDV', 60, true, '#01D758', '#000000');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('S', 'Séminaire', 1439, null, '#663366', '#FFFFFF');
insert into appointment_types (id, name, duration, individual, background_color, text_color) values ('SR', 'Séminaire RDV', 1439, false, '#BF7EBF', '#000000');


insert into appointments (start, end, type_id, user_id) values ('2019-10-08T09:00:00', '2019-10-08T12:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-10-08T09:00:00', '2019-10-08T10:00:00', 'KR', 2, 'user2');
insert into appointments (start, end, type_id, user_id, comment) values ('2019-10-08T10:00:00', '2019-10-08T11:00:00', 'KR', 3, 'user3');
insert into appointments (start, end, type_id, user_id) values ('2019-11-04T09:00:00', '2019-11-04T12:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-11-04T09:00:00', '2019-11-04T10:00:00', 'KR', 3, 'user3');
insert into appointments (start, end, type_id, user_id, comment) values ('2019-11-04T10:30:00', '2019-11-04T11:30:00', 'KR', 1, 'user1');
insert into appointments (start, end, type_id, user_id) values ('2019-11-05T09:00:00', '2019-11-05T10:00:00', 'C', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-11-05T09:00:00', '2019-11-05T10:00:00', 'CR', 2, 'user2');
insert into appointments (start, end, type_id, user_id) values ('2019-09-30T15:00:00', '2019-09-30T16:30:00', 'C', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-09-30T15:00:00', '2019-09-30T16:30:00', 'CR', 2, 'user2');
insert into appointments (start, end, type_id, user_id) values ('2019-09-30T09:00:00', '2019-09-30T12:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id) values ('2019-10-01T09:00:00', '2019-10-01T12:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id) values ('2019-10-01T14:00:00', '2019-10-01T18:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id) values ('2019-10-02T09:00:00', '2019-10-02T12:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-10-02T09:00:00', '2019-10-02T10:00:00', 'KR', 2, 'user2');
insert into appointments (start, end, type_id, user_id) values ('2019-10-02T14:00:00', '2019-10-02T18:00:00', 'M', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-10-02T14:00:00', '2019-10-02T15:30:00', 'MR', 3, 'user3');
insert into appointments (start, end, type_id, user_id, comment) values ('2019-10-02T16:00:00', '2019-10-02T17:30:00', 'MR', 1, 'user1');
insert into appointments (start, end, type_id, user_id) values ('2019-10-03T18:00:00', '2019-10-03T19:30:00', 'C', 4);
insert into appointments (start, end, type_id, user_id, all_day) values ('2019-10-04T00:00:00', '2019-10-04T23:59:59', 'S', 4, true);
insert into appointments (start, end, type_id, user_id, all_day) values ('2019-10-05T00:00:00', '2019-10-04T23:59:59', 'S', 4, true);
insert into appointments (start, end, type_id, user_id, all_day) values ('2019-10-06T00:00:00', '2019-10-04T23:59:59', 'S', 4, true);
insert into appointments (start, end, type_id, user_id) values ('2019-12-09T09:00:00', '2019-12-09T12:00:00', 'K', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-12-09T09:00:00', '2019-12-09T10:00:00', 'KR', 2, 'user2');
insert into appointments (start, end, type_id, user_id, comment) values ('2019-12-09T11:00:00', '2019-12-09T12:00:00', 'KR', 1, 'user1');
insert into appointments (start, end, type_id, user_id) values ('2019-10-03T09:00:00', '2019-10-03T12:00:00', 'I', 4);
insert into appointments (start, end, type_id, user_id, comment) values ('2019-10-03T11:00:00', '2019-10-03T12:00:00', 'IR', 1, 'user1');
