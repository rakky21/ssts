import Layout from "../Layout";

export default function DisplayedItem() {
  return (
    <Layout>
      <Link
        to="/"
        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
      >
        Back
      </Link>

      <div>This will be the displayed page</div>
      <Outlet />
    </Layout>
  );
}
