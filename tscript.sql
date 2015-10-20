
CREATE TABLE users
(
	uId int PRIMARY KEY,
	username varchar(20)
);

CREATE TABLE adverts
(
	adId int PRIMARY KEY,
	adName varchar(60) NULL
	
);

CREATE TABLE havecvs
(
	cvId int FOREIGN KEY,
	uId int FOREIGN KEY
);

CREATE TABLE haveinfo
(
	uId int FOREIGN KEY,
	infoId FOREIGN KEY
);

CREATE TABLE info
(
	infoId int PRIMARY KEY,
	areaCode smallint,
	phoneNumber smallint,
	cellNumber smallint,
	emailAddress varchar(50)
);

CREATE TABLE catagories
(
	catId int PRIMARY KEY,
	catagory varchar(30)
);

CREATE TABLE haveSubcatagories
(
	catId int FOREIGN KEY,
	subcatId int FOREIGN KEY
);

CREATE TABLE subcatagories
(
	subcatId int PRIMARY KEY,
	subcatagory varchar(30)
);

CREATE TABLE comments
(
	cId int PRIMARY KEY,
	uId int FOREIGN  KEY,
	commentTitle varchar(20),
	comment text(2000)
);

CREATE TABLE leaveComments
(
	cId int FOREIGN KEY,
	userId int FOREIGN KEY
);

CREATE TABLE offer
(
	uId int FOREIGN KEY,
	sId int FOREIGN KEY
);

CREATE TABLE services
(
	sId int PRIMARY KEY,
	serviceTitle varchar(40),  
	service text(2000),
	rate smallint(5)
);

DROP TABLE info;

DROP TABLE cvs;

DROP TABLE users;

-- DROP TABLE 

DROP TABLE is;

DROP TABLE comments;

DROP TABLE services;

DROP TABLE catagories;
