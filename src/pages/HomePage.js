import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
  ${Header()}
  <div class="container m-auto">
    <div class= "font-my-custom-font font-bold text-2xl p-[30px] ">Sản phẩm bán chạy</div>
    <div class= "grid grid-cols-4 gap-4" id="productList"></div>
  </div>
  `;
};

export default HomePage;