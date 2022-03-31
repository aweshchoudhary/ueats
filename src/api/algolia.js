import algoliasearch from "algoliasearch";
import products from "../json/food.json";
const app_id = "GGKFXIBVQ7";
const search_key = "61361e970edc6944a7e5fca79b740d21";

const client = algoliasearch(app_id, search_key);
const index = client.initIndex("food");
const save = async () => {
  await index.saveObjects(products);
};
save();

export default index;
