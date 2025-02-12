import Navbar from "../components/Navbar";
import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";

import product1 from "../assets/Buy/product1.png";
import product2 from "../assets/Buy/product2.png";
import product3 from "../assets/Buy/product3.png";
import product4 from "../assets/Buy/product4.png";

function Buy(){
    return(
        <div>
            <Navbar />
            <div className="w-full h-screen">
                <div className="flex justify-center my-[100px] gap-10 w-full h-[70%]">
                    <div className="flex gap-6">
                        <div className="grid grid-rows-3 gap-6">
                            <img src={product1} alt="product1"  className="shadow-lg w-full h-full object-cover"/>
                            <img src={product2} alt="product2"  className="shadow-lg w-full h-full object-cover" />
                            <img src={product3} alt="product3"  className="shadow-lg w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={product4} alt="product4"  className="shadow-lg w-full h-full object-cover"/>
                            <div className="bg-gray-100/60 shadow-lg w-full flex justify-evenly text-2xl gap-8 p-8 font-bold">
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col">
                            <p className="text-4xl font-bold">烫金徽章</p>
                            <p className="text-xl text-gray-600 font-bold mt-4">融合民族文化的文创产品</p>
                            <div className="w-full border-b border-gray-500 my-4"></div>
                            <div className="flex gap-6 items-end my-4">
                                <p className="text-4xl font-bold text-red-500">¥45</p>
                                <p className="text-3xl font-bold text-gray-500">原价 ¥65</p>
                            </div>
                            <div className="w-full border-b border-gray-500 my-4"></div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold my-4">选择种类：</p>
                                <div className="flex gap-4 mb-4">
                                    <button className="bg-gray-300 rounded-md py-0.5 px-2">畲族系列</button>
                                    <button className="bg-gray-300 rounded-md py-0.5 px-2">仙鹤系列</button>
                                    <button className="bg-gray-300 rounded-md py-0.5 px-2">晨花系列</button>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold my-4">选择数量</p>
                                <div className="flex gap-4 items-center mb-4">
                                    <button className="bg-gray-300 rounded-md py-0.5 px-2">-</button>
                                    <p>1</p>
                                    <button className="bg-gray-300 rounded-md py-0.5 px-2">+</button>
                                </div>
                            </div>
                        </div>

                        <div className="felx flex-col">
                            <div className="w-full border-b-4 border-black"></div>
                            <div className="flex gap-4 my-4">
                                <button className="bg-red-500 rounded-xl shadow-lg text-2xl text-white font-bold py-2 px-5">立刻购买</button>
                                <button className="bg-[#009983] rounded-xl shadow-lg text-2xl text-white font-bold py-2 px-5">加入购物车</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterSlider />
            <Footer />

        </div> 
    )
}

export default Buy;