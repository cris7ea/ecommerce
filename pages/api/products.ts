const faunadb = require("faunadb");

const FaunaDBKey = process.env.FAUNADB_READ_ONLY_KEY;
const client = new faunadb.Client({ secret: FaunaDBKey });
const q = faunadb.query;

export default async (req, res) => {
  const page = await client.query(
    q.Paginate(q.Documents(q.Collection("Products")), { size: 6 })
  );
  const products = await client.query(
    page.data.map(({ id }) => q.Get(q.Ref(q.Collection("Products"), id)))
  );

  res.status(200).json(products.map(({ data }) => data));
};
