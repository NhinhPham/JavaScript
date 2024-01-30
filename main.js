import "./style.css";
import { render, router } from "./src/utils";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import DetailPage from "./src/pages/DetailPage";
import handleProductList from "./src/components/handleProductList";
import handleProductDetail from "./src/components/handleProductDetail";

// import axios from "./src/components/axios.js";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
  },
});
router.on("/home", () => router.navigate("/"));
// router.on("/detail/:id", (data) => render(app, () => DetailPage(data)));
router.on("/about", () => render(app, AboutPage));
// router.on("/detail/:id",(prarams) => render(()=>DetailPage(prarams.data.id),app))
//http:localhost:5173/about
router.on("/detail/:id", () => render(app, DetailPage), {
  after({ data }) {
    handleProductDetail(data);
  },
});

router.resolve();
