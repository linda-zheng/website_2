import wishImage from "./wish.png"
import shopifyImage from "./shopify.png"

function toDictionary(image, title, position, location, date, blurb, description) {
    return {
        image : image,
        title : title,
        position : position,
        location : location,
        date : date,
        blurb : blurb,
        description : description,
    }
    
}

var workDescriptions = [
    new toDictionary(
        shopifyImage,
        "Shopify",
        "Data Science Intern",
        "Ottawa, ON", 
        "Sept. 2020 – Dec. 2020",
        "Shopify is a platform that allows merchants to set up an online store. I worked on improving the workflow of the help center so that merchants find the information they need to run a successful shop.",
        [
            ["Prototyped a search engine using ","Elasticsearch ","with a Python REST API, projecting a ","10% traffic reduction to live chat"],
            ["Optimized helpdesk workflow by using ","Naïve Bayes ","to classify chats and route users to the appropriate support team"],
            ["Revised Kafka eventing and built a dashboard using SQL and Mode Analytics to monitor search performance"],
            ["Configured JSON-formatted logging for Flask/uWSGI/nginx app with Splunk integration"]
        ]
    ),
    new toDictionary(
        wishImage,
        "Wish",
        "Data and Relevancy Engineering Intern",
        "San Francisco, CA", 
        "Jan. 2020 – Apr. 2020",
        "Wish is one of the most downloaded shopping apps; there are over 300 million products available on the store! During my internship, I studied and applied the GraphSAGE algorithm to related product recommendation.",
        [
            ["Developed and tuned a product embedding model using ","GraphSAGE ","and ","Tensorflow ","for graphs with ","7+ ","million nodes"],
            ["Built a GraphSAGE embedding pipeline for a ","Go ","recommendations microservice, improving click-through rate by 30%"],
            ["Optimized random walk for web-scale graphs using an early stopping algorithm, reducing latency from 32 to 6 ms"],
            ["Designed and implemented an ","Airflow ","pipeline to generate daily click attribution reports"]
        ]
    ),
    new toDictionary(
        wishImage,
        "Wish",
        "Software Engineering Intern",
        "Toronto, ON", 
        "May 2019 - Aug. 2019",
        "ProductBoost is Wish's native advertising platform. I worked on the optimization algorithm and data ingestion pipelines for ProductBoost.",
        [
            ["Developed keyword extraction to simplify user queries using ","word2vec ","techniques, increasing impressions by 5%"],
            ["Tuned recommendations by adding ","Solr ","boosts to product fields stored in MongoDB, increasing GMV by ", "$20k/day"],
            ["Launched A/B tests and analysed the results using ","HiveQL ","and Presto in Treasure Data"],
            ["Built a Python package to cross-check Solr atomic updates with ","S3 ","data and refactored libraries for Solr re-indexing"]
        ]
    ),
]

export default { workDescriptions };