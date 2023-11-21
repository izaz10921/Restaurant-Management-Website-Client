import PageTitle from "../../SharedComponent/PageTitle";


const Blog = () => {
    return (
        <div className="max-w-[1240px] mx-auto">

            <PageTitle title="TableTrove | Blog"></PageTitle>

            <h3 className="text-4xl font-semibold bg-green-300 my-6"> What is One way data binding?
            </h3>
            <p className="text-lg my-6">One-way data binding is a concept in software development and web development that refers to the synchronization of data between the model (or the source of truth) and the view (the user interface). In one-way data binding, the data flows in only one direction, typically from the model to the view.</p>

            <h3 className="text-4xl font-semibold bg-green-300 my-6"> What is One way data binding?
            </h3>
            <p className="text-lg ">NPM stands for Node Package Manager, and it is the default package manager for Node.js. It is a command-line tool that facilitates the discovery, installation, and management of Node.js packages, which are collections of JavaScript code and associated files that can be easily distributed and reused.</p>
            <h3 className="text-4xl font-semibold bg-green-300 my-6">Different between Mongodb database vs mySQL database</h3>
            <p className="text-lg ">MongoDB and MySQL are both popular database management systems, but they belong to different categories of databases, and they have several key differences.</p>
            <h3 className="text-2xl font-medium  my-2">Database Type:</h3>
            <p className="text-base ">MongoDB: MongoDB is a NoSQL database, specifically a document-oriented database. It stores data in a flexible, JSON-like format called BSON (Binary JSON).</p>
            <p className="text-base ">MySQL: MySQL is a traditional relational database management system (RDBMS) that stores data in structured tables with predefined schemas.</p>

            <h3 className="text-2xl font-medium  my-2">Schema:</h3>
            <p className="text-base ">MongoDB: It is schema-less, which means each document in a collection can have a different structure, and fields can be added or removed without affecting other documents.</p>
            <p className="text-base ">MySQL: It is schema-based, and changes to the schema generally require altering the table structure.</p>

            <h3 className="text-2xl font-medium  my-2">Query Language:</h3>
            <p className="text-base ">MongoDB: MongoDB uses a query language that is based on JSON-like documents. The queries are expressed as documents themselves and use a method similar to JavaScript.</p>
            <p className="text-base ">MySQL: MySQL uses Structured Query Language (SQL) for querying, a standardized language for managing relational databases.</p>


            <h3 className="text-2xl font-medium  my-2">Scalability:</h3>
            <p className="text-base ">MongoDB: MongoDB is known for its horizontal scalability. It can easily scale across multiple servers and handle large amounts of data by sharding.</p>
            <p className="text-base ">MySQL: MySQL traditionally relies on vertical scalability, where you scale up by adding more resources to a single server.</p>

            <h3 className="text-2xl font-medium  my-2">Use Cases:</h3>
            <p className="text-base ">MongoDB: Well-suited for applications with rapidly changing data, hierarchical data, or where a flexible schema is required. Commonly used in web and mobile app development.</p>
            <p className="text-base ">MySQL: Well-suited for applications with structured and relational data, where transactions and complex queries are essential. Commonly used in traditional business applications.</p>

            <h3 className="text-2xl font-medium  my-2">Complexity and Learning Curve:</h3>
            <p className="text-base ">MongoDB: MongoDB is generally considered easier to scale and work with due to its flexible data model. It is often perceived as simpler for developers to learn.</p>
            <p className="text-base mb-24">MySQL: MySQL has a longer history and is well-established. SQL, however, might have a steeper learning curve for some developers, especially those not familiar with relational databases.</p>




        </div>
    );
};

export default Blog;