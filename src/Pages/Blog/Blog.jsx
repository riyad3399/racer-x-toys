const Blog = () => {
  return (
    <div>
      <h3 className="text-5xl text-center my-10">All Blogs</h3>
      <div className="grid md:grid-cols-1 gap-8">
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none">
          <div className="card-body">
            <h2 className="card-title">1.Qustion</h2>
            <p className="text-xl">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </p>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label htmlFor="my-modal-1" className="btn btn-info btn-outline">
                open Ans
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-1" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-1"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Access Token</h3>
                  <p className="text-lg">
                    An access token is a credential that is issued by an
                    authentication server when a user logs in or authenticates
                    successfully. It is a short-lived token that grants access
                    to protected resources or APIs on behalf of the
                    authenticated user. Access tokens typically have an
                    expiration time, after which they become invalid and require
                    reauthentication. The client includes the access token in
                    each request to the server to access protected resources or
                    APIs.
                  </p>
                  <h3 className="text-lg font-bold">Refresh Token</h3>
                  <p className="text-lg">
                    A refresh token is a long-lived token that is also issued by
                    the authentication server during the initial authentication
                    process. Unlike access tokens, refresh tokens are used to
                    obtain new access tokens when the current one expires.
                    Refresh tokens are securely stored on the client-side,
                    typically in a secure HTTP-only cookie or in local storage.
                    When the access token expires, the client can use the
                    refresh token to request a new access token from the server
                    without requiring the user to reauthenticate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none">
          <div className="card-body">
            <h2 className="card-title"> 2. Qustion</h2>
            <p className="text-xl">Compare SQL and NoSQL databases?</p>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label htmlFor="my-modal-2" className="btn btn-info btn-outline">
                Open Asn
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-2" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">SQL Databases</h3>
                  <p className="py-4 text-lg">
                    Structure: SQL databases are based on a rigid, predefined
                    schema that defines the structure of the data, including
                    tables, columns, and relationships between tables. Data
                    Integrity: SQL databases enforce ACID (Atomicity,
                    Consistency, Isolation, Durability) properties, ensuring
                    data integrity and consistency. Query Language: SQL
                    databases use the SQL language for defining and manipulating
                    data, which provides powerful querying capabilities using
                    structured query statements. Relational Model: SQL databases
                    are based on the relational model, which allows for complex
                    relationships and joins between tables.
                  </p>
                  <h3 className="text-lg font-bold">NoSQL Databases</h3>
                  <p className="text-lg">
                    Structure: NoSQL databases are schema-less or have flexible
                    schemas, allowing for dynamic and unstructured data. Data
                    Model: NoSQL databases use various data models, such as
                    key-value pairs, documents, columnar, or graph structures,
                    to store and organize data. Scalability: NoSQL databases are
                    designed for horizontal scalability (scaling out by adding
                    more servers to distribute the load), making them suitable
                    for handling large-scale data and high traffic. Performance:
                    NoSQL databases can provide high performance for specific
                    use cases, such as real-time applications, big data
                    processing, and high-volume data ingestion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none">
          <div className="card-body">
            <h2 className="card-title">3. Qustion</h2>
            <p className="text-lg">What is express js? What is Nest JS </p>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label htmlFor="my-modal-3" className="btn btn-info btn-outline">
                open ans
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Express.js</h3>
                  <p className="py-4 text-lg">
                    Express.js is a minimalistic and flexible web application
                    framework for Node.js. It provides a simple and
                    unopinionated approach to building web applications and
                    APIs. Express.js focuses on providing core web application
                    functionalities, such as routing, middleware, request
                    handling, and response management. It allows developers to
                    build custom, lightweight, and highly performant server-side
                    applications by leveraging a wide range of middleware and
                    extensions available in the Node.js ecosystem. Express.js is
                    known for its simplicity, flexibility, and extensive
                    community support.
                  </p>
                  <h3 className="text-lg font-bold">Nest.js</h3>
                  <p className="text-lg">
                    Nest.js is a progressive, opinionated framework for building
                    efficient and scalable server-side applications. It is built
                    on top of Express.js and utilizes TypeScript as its primary
                    programming language. Nest.js follows the architectural
                    style of Angular and provides a modular and organized
                    approach to application development. It offers features like
                    dependency injection, module-based structure, decorators,
                    and object-oriented programming principles. Nest.js is
                    designed to simplify the development of complex applications
                    by providing an opinionated structure, consistent coding
                    patterns, and built-in features like authentication,
                    validation, and database integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none">
          <div className="card-body">
            <h2 className="card-title">4. Qustion</h2>
            <p className="text-xl">
              What is MongoDB aggregate and how does it work ?
            </p>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label htmlFor="my-modal-4" className="btn btn-info btn-outline">
                open ans
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-4"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">MongoDB aggregate</h3>
                  <p className="py-4 text-lg">
                    In MongoDB, the aggregate function is used to perform
                    advanced data processing and analysis operations on the data
                    stored in collections. It allows you to perform complex
                    queries, transformations, and aggregations on the documents
                    within a collection. The aggregate function takes an array
                    of stages as input, where each stage represents a specific
                    operation or step in the data processing pipeline.
                  </p>
                  <h3 className="text-lg font-bold">How does work it</h3>
                  <p className="text-lg">
                    Pipeline Stages: The aggregate function accepts an array of
                    pipeline stages. Each stage represents a specific operation
                    and is executed in the order they appear in the array. Data
                    Processing: The documents from the input collection are
                    processed sequentially through the pipeline stages, with the
                    output of one stage serving as the input for the next stage.
                    Transformation and Aggregation: Each pipeline stage can
                    perform a variety of operations, including filtering,
                    sorting, grouping, projecting fields, joining data from
                    multiple collections, performing mathematical calculations,
                    and more. Output: The final result of the aggregate function
                    is the output of the last stage in the pipeline. It can be a
                    modified document, a subset of fields, aggregated values, or
                    a new structure altogether
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
