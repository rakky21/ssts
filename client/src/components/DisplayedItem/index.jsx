import Layout from "../Layout";
import List from "./Display";

export default function DisplayedItem() {
  return (
    <Layout>
      <List items={displayedData} category="items" />
      <Outlet />
    </Layout>
  );
}
