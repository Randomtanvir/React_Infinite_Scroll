import ProductBoard from "./components/ProductBoard";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="bg-zinc-300 text-gray-700 text-center text-2xl p-4 mb-4">
          React infinity scroll
        </h1>
      </div>
      <ProductBoard />
    </div>
  );
};

export default App;
