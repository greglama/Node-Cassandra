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

//console.log(Lines[0]);
const obj = JSON.parse(Lines[0]);

const query = 'INSERT INTO "companies"("id", "category_code", "crunchbase_url", "video_embeds", "deadpooled_month", "overview", "updated_at", "funding_rounds", "total_money_raised", "deadpooled_day", "email_address", "twitter_username", "milestones", "ipo", "external_links", "number_of_employees", "founded_year", "founded_month", "acquisitions", "permalink", "tag_list", "name", "created_at", "homepage_url", "products", "blog_url", "deadpooled_url", "investments", "acquisition", "deadpooled_year", "alias_list", "relationships", "partners", "founded_day", "competitions", "blog_feed_url", "providerships", "offices", "phone_number", "description") VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

Client.execute(query, [obj.id.$oid,
obj.category_code,
obj.crunchbase_url,
{"video_embeds":JSON.stringify(obj.video_embeds)},
obj.deadpooled_month,
obj.overview,
obj.updated_at,
{"funding_rounds":JSON.stringify(obj.funding_rounds)},
obj.total_money_raised,
obj.deadpooled_day,
obj.email_address,
obj.twitter_username,
{"milestones":JSON.stringify(obj.milestones)},
{"ipo":JSON.stringify(obj.ipo)},
{"external_links":JSON.stringify(obj.external_links)},
obj.number_of_employees,
obj.founded_year,
obj.founded_month,
{"acquisitions":JSON.stringify(obj.acquisitions)},
obj.permalink,
obj.tag_list,
obj.name ,
obj.created_at ,
obj.homepage_url ,
{"products":JSON.stringify(obj.products)} ,
obj.blog_url ,
obj.deadpooled_url ,
{"investments":JSON.stringify(obj.investments)},
obj.acquisition,
obj.deadpooled_year,
obj.alias_list ,
{"relationships":JSON.stringify(obj.relationships)} ,
{"partners":JSON.stringify(obj.partners)} ,
obj.founded_day,
{"competitions":JSON.stringify(obj.competitions)} ,
obj.blog_feed_url ,
{"providerships":JSON.stringify(obj.providerships)} ,
{"offices":JSON.stringify(obj.offices)} ,
obj.phone_number ,
obj.description], {prepare:true});

Client.shutdown();
