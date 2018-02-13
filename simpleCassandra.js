const cassandra = require("cassandra-driver");
const fs = require("fs");

const ip = "127.0.0.1";
const space = "school";
const path = "companies2.json";

const Client = new cassandra.Client({
  contactPoints: [ip],
  keyspace: space
});

const Content = fs.readFileSync(path,"utf-8");
const Lines = Content.split("\n");

console.log(Lines[0]);
const obj = JSON.parse(Lines[0]);

const query = 'INSERT INTO "COMPANIES"("id", "category_code", "crunchbase_url", "video_embeds", "deadpooled_month", "overview", "updated_at", "funding_rounds", "total_money_raised", "deadpooled_day", "email_address", "twitter_username", "milestones", "ipo", "external_links", "number_of_employees", "founded_year", "founded_month", "acquisitions", "permalink", "tag_list", "name", "created_at", "homepage_url", "products", "blog_url", "deadpooled_url", "investments", "acquisition", "deadpooled_year", "alias_list", "relationships", "partners", "founded_day", "competitions", "blog_feed_url", "providerships", "offices", "phone_number", "description") VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

Client.execute(query, [obj.id,
obj.category_code,
obj.crunchbase_url,
obj.video_embeds,
obj.deadpooled_month,
obj.overview,
obj.updated_at,
obj.funding_rounds,
obj.total_money_raised,
obj.deadpooled_day,
obj.email_address,
obj.twitter_username,
obj.milestones,
obj.ipo,
obj.external_links,
obj.number_of_employees,
obj.founded_year,
obj.founded_month,
obj.acquisitions,
obj.permalink,
obj.tag_list,
obj.name ,
obj.created_at ,
obj.homepage_url ,
obj.products ,
obj.blog_url ,
obj.deadpooled_url ,
obj.investments,
obj.acquisition,
obj.deadpooled_year,
obj.alias_list ,
obj.relationships ,
obj.partners ,
obj.founded_day,
obj.competitions ,
obj.blog_feed_url ,
obj.providerships ,
obj.offices ,
obj.phone_number ,
obj.description], {prepare:true});

Client.shutdown();
