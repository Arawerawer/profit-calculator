import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const ProfitCounter = () => {
  const location = useLocation();
  const percentage = location.state?.percentage ?? 0;

  const [inputPrice, setInputPrice] = useState<string>("");
  const [outputPrice, setOutputPrice] = useState<number>(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const price = parseFloat(inputPrice);
    if (!isNaN(price)) {
      const result = price * (1 + percentage / 100);
      setOutputPrice(result);
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
      <header
        className="h-16 bg-white dark:bg-gray-700 rounded-2xl
                       flex items-center px-4 gap-4"
      ></header>

      <div className="h-full bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 flex items-center justify-center overflow-auto">
        <form
          onSubmit={handleCalculate}
          className="w-full max-w-5xl px-6 py-4 bg-gray-500/20 rounded-lg flex flex-col gap-6"
        >
          <h2 className="text-center text-[#00FF00] text-5xl">{percentage}%</h2>

          <div>
            <label
              htmlFor="InputPrice"
              className="block mb-2 text-2xl font-medium text-white text-center"
            >
              輸入價格
            </label>

            <input
              type="number"
              id="InputPrice"
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
              className="w-full p-2 text-2xl text-center rounded-lg bg-gray-700
                        border-gray-600
                        text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          <label
            htmlFor="OutputPrice"
            className="block text-2xl font-medium text-white text-center"
          >
            輸出價格
          </label>

          <h1
            className="w-full p-2 text-3xl text-center rounded-xl bg-gray-700 border-gray-600
                     text-white placeholder-gray-400 ring-5 ring-blue-500"
          >
            {outputPrice.toFixed(2)}
          </h1>

          <button
            type="submit"
            className="w-full py-4 text-2xl font-semibold bg-[#00FF00] rounded-2xl
                       hover:bg-[#00DD00] transition-colors"
          >
            計算
          </button>

          <Link
            to="/"
            className="py-4 px-6 bg-yellow-300 rounded-2xl
                       font-extrabold text-2xl text-red-500
                       hover:bg-yellow-400 transition-colors
                       flex items-center justify-center cursor-pointer"
          >
            返回控制台
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProfitCounter;
