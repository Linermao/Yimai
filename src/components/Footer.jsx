import Text from "./Text";
import logo from "../assets/logo_white.svg";

function Footer(){
    return (
        <footer className="bg-[#009983] p-2">
            <div className="flex justify-between my-5">
                <div className="flex flex-col justify-between items-center flex-wrap gap-4 mx-10">
                    <Text variant="subtitle" className="text-white underline decoration-solid">
                        联系我们
                    </Text>
                    <Text variant="body" className="text-white">
                        地址：浙江省杭州市钱塘区杭州电子科技大学
                    </Text>
                    <Text variant="body" className="text-white">
                        电话：+86-19817111917
                    </Text>
                    <Text variant="body" className="text-white">
                        联系邮箱：673562567@qq.com
                    </Text>
                </div>
                <div className="flex flex-col justify-between items-center flex-wrap gap-6 mx-10">
                    <Text variant="subtitle" className="text-white underline decoration-solid">
                        更多精彩
                    </Text>
                </div>
                <img src={logo} alt="logo" />
            </div>
            <Text variant="body" className="text-white m-10">
                Copyright © 2024 杭州电子科技大学 衣脉相承团队 All rights reserved.
            </Text>
        </footer>
    )
}

export default Footer;