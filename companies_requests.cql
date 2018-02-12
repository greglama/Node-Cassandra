use school;
DROP TABLE IF EXISTS COMPANIES;
CREATE TABLE COMPANIES (
	id INT, 
	category_code VARCHAR, 
	crunchbase_url VARCHAR, 
	video_embeds MAP<text, text>, 
	deadpooled_month INT, 
	overview VARCHAR, 
	updated_at VARCHAR, 
	funding_rounds MAP<text, text>, 
	total_money_raised INT, 
	deadpooled_day INT, 
	email_address VARCHAR,
	twitter_username VARCHAR ,
	milestones MAP<TEXT,TEXT> ,
	ipo MAP<TEXT,TEXT> ,
	external_links MAP<TEXT,TEXT> , 
	number_of_employees INT, 
	founded_year INT ,
	founded_month INT ,
	acquisitions MAP<TEXT, TEXT> , 
	permalink VARCHAR, 
	tag_list VARCHAR , 
	name VARCHAR , 
	created_at VARCHAR , 
	homepage_url VARCHAR, 
	products MAP<TEXT, TEXT> , 
	blog_url VARCHAR, 
	deadpooled_url VARCHAR, 
	investments MAP<TEXT,TEXT>, 
	acquisition MAP<TEXT, TEXT>,
	deadpooled_year INT,
	alias_list VARCHAR,
	relationships map<text,text>,
	partners map<text,text>,
	founded_day INT,
	competitions map<text,text>,
	blog_feed_url VARCHAR,
	providerships map<text,text>,
	offices map<text,text>,
	phone_number VARCHAR,
	description VARCHAR,
		
	PRIMARY KEY (id)

);

SELECT * FROM school.COMPANIES;

//COPY COMPANIES(id,category_code,crunchbase_url,video_embeds,deadpooled_month,overview,updated_at,funding_rounds,total_money_raised,deadpooled_day,email_address,alias_list,relationships,partners,founded_day,competitions,blog_feed_url,providerships,offices,phone_number,description,deadpooled_year,twitter_username,milestones,ipo,external_links,number_of_employees,founded_year,founded_month,acquisitions,permalink,tag_list,name,created_at,homepage_url,products,blog_url,deadpooled_url,investments,acquisition)
//FROM  'EmployData.csv';

// 1 -  Get companies which have more or less than N products

// 2 - Get companies with a given number of employees
//SELECT name FROM COMPANIES WHERE number_of_employees = 10;

// 3 - Get companies with a given category code
//SELECT name FROM COMPANIES WHERE category_code = "web";

// 4 - Get companies which have offices in a given city 

// 5 - Get companies which were created before DATE and have more or less than N providers
