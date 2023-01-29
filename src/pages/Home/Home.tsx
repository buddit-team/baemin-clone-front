import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import Footer from "../../components/Footer";
import HashBanner from "../../components/HashBanner";
import MainHeader from "../../components/Header/MainHeader";
import Search from "../../components/Search/Search";
import SearchPage from "../SearchPage";
import { BoxCategory, IconCategory } from "../../components/uiCommon/BoxCategory";
import ScrollSection from "../../components/uiCommon/ScrollSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons - test pr
import truckIcon from '../../assets/icons/category/ico-truck.png';
import giftIcon from '../../assets/icons/category/ico-gift.png';
import liveIcon from '../../assets/icons/category/ico-live.png';
import bagIcon from '../../assets/icons/category/ico-bag.png';
import cartIcon from '../../assets/icons/category/ico-cart.png';
import mealIcon from '../../assets/icons/category/ico-meal.png';
import storeIcon from '../../assets/icons/category/ico-24.png';
import deliciousIcon from '../../assets/icons/category/ico-delicious.png';
import quickIcon from '../../assets/icons/category/ico-quick.png';
import heartIcon from '../../assets/icons/category/ico-heart.png';
import thumbsIcon from '../../assets/icons/category/ico-thumbs.png';
import discountIcon from '../../assets/icons/category/ico-discount.png';
// data
import { eventCards, giftCards, localCards, recentCards, saleCards, userMenus } from "./data";

export default function Home() {

    const [saleIdx, setSaleIdx] = React.useState(0);

	return (
		<div>
			<MainHeader />
            {/* main contents */}
            <div className="grid grid-rows-none bg-gray100">
                {/* ===== hash banner ===== */}
			    <HashBanner items={[]} />
                {/* ===== main categories ===== */}
                <div className="grid grid-rows-none">
                    {/* ===== category menus ===== */}
                    <div className="grid grid-rows-nonem gap-2 p-2">
                        <div className="grid grid-cols-2 gap-2">
                            <BoxCategory
                                category="배민1"
                                text={`한 번에 한 집만\n빠르게 배달해요!`}
                                link="/"
                                size="lg"
                                bg={quickIcon}
                                bgPos="80% 80%"
                                bgSize="auto 60%"
                            />
                            <BoxCategory
                                category="배달"
                                text={`세상은 넓고\n맛집은 많다`}
                                link="/"
                                size="lg"
                                bg={deliciousIcon}
                                bgPos="70% 70%"
                                bgSize="auto 60%"
                            />
                        </div>   
                        <BoxCategory
                            category="포장"
                            text={`가까운 가게는\n직접 가지러 가지요`}
                            link="/"
                            bg={bagIcon}
                            bgPos="96% center"
                            bgSize="auto 80%"
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <BoxCategory
                                category="B마트"
                                text={`장보기도\n더빠르게!`}
                                link="/"
                                bg={cartIcon}
                                bgPos="85% center"
                                bgSize="auto 70%"
                            />
                            <BoxCategory
                                category="밀키트/간편식"
                                text={`뚝딱 만드는\n근사한 한끼`}
                                link="/"
                                bg={mealIcon}
                                bgPos="90% center"
                                bgSize="auto 60%"
                            />
                        </div> 
                        <BoxCategory
                            category="배민스토어"
                            text={"기간한정! 편의점 더블할인 시작"}
                            link="/"
                            bg={storeIcon}
                            bgPos="95% center"
                            bgSize="auto 90%"
                        />
                        <div className="grid grid-cols-3 gap-2">
                            <IconCategory
                                category="쇼핑라이브"
                                link="/"
                                icon={<img width="28px" src={liveIcon} alt="쇼핑라이브"/>}
                            />
                            <IconCategory
                                category="선물하기"
                                link="/"
                                icon={<img width="28px" src={giftIcon} alt="선물"/>}
                            />
                            <IconCategory
                                category="전국별미"
                                link="/"
                                icon={<img width="28px" src={truckIcon} alt="전국별미"/>}
                            />
                        </div> 
                        <div className="block w-full h-24">
                            slider
                        </div>
                    </div>
                     {/* ===== user menus ===== */}
                     <div className="w-full p-2">
                        <nav className="w-full grid grid-cols-4 rounded-lg bg-[white]">
                            {
                                userMenus.map((menu, idx) => (
                                    <Link 
                                        key={idx}
                                        to={menu.path}
                                        className={`grid grid-rows-2 gap-1 justify-items-center p-3 text-s text-gray700 ${
                                                        (idx < userMenus.length-1)
                                                        ? 'border-r-2 border-gray100'
                                                        : ''
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={menu.icon}/>
                                        {menu.text}
                                    </Link>
                                ))
                            }
                        </nav>
                     </div>
                </div>
                {/* scroll sections */}
                <div className="grid grid-rows-none gap-3">
                    <ScrollSection
                        title={<span className="flex items-center gap-2">최근에 주문했어요<img className="h-5" src={thumbsIcon}/></span>}
                        qMark={true}
                        qText="최근 6개월 이내 주문했던 가게를 볼 수 있어요. (최대 30개)"
                        more={true}
                        moreText="주문내역 보기"
                        moreLink=""
                    >
                        <React.Fragment>
                            {
                                recentCards.map((item, idx) => (
                                    <article key={idx} className="w-[150px]">
                                        <a className="grid grid-rows-none w-full h-auto">
                                            <div className="flex items-center justify-center w-full h-[150px] rounded-md overflow-hidden"><img className="h-full w-auto" src={item.img}/></div>
                                            <div className="flex justify-between align-items mt-1">
                                                <h3 className="text-s text-bold">{item.name}</h3>
                                                <span className="text-s">{item.score}</span>
                                            </div>
                                            <div className="flex gap-2 items-center mt-[2px]">
                                                <span className="text-gray400 text-xxs">배달팁</span>
                                                <span className="text-xxs">{item.tips}</span>
                                            </div>
                                            {
                                                item.options.length > 0 &&
                                                <ul className="flex gap-1 mt-[2px]">
                                                    {
                                                        item.options.map((option) => (
                                                            <li className="p-[1px_4px] rounded-sm text-[9px] text-[orchid] text-medium bg-[mistyRose]" key={option}>{option}</li>
                                                        ))
                                                    }
                                                </ul>
                                            }
                                            <span className="w-min mt-[5px] whitespace-nowrap p-[1px_3px] text-[10px] rounded-full border-2 border-main">{item.delivery}</span>
                                        </a>
                                    </article>
                                ))
                            }
                        </React.Fragment>
                    </ScrollSection>
                    <ScrollSection fix={true} title={<span className="flex items-center gap-2">장보기 특가<img className="h-5" src={liveIcon}/></span>}>
                        <div className="grid grid-rows-4 w-full h-[440px] gap-2">
                                <div className="row-span-1 grid grid-cols-4 gap-1">
                                    {
                                        saleCards.map((item, idx) => (
                                            <div 
                                                key={idx} 
                                                className="block col-span-1 h-full rounded-md cursor-pointer" 
                                                style={{background: `url(${item.bg}) center no-repeat`}} 
                                                onClick={() => setSaleIdx(idx)}
                                            />
                                        ))
                                    }
                                </div>  
                                <div className="row-span-3">
                                    <article className="w-full h-full">
                                        <a href="" className="grid grid-rows-5 gap-2 h-full">
                                            <div className="row-span-4 rounded-md p-3" style={{background: `url(${saleCards[saleIdx].bg}) center no-repeat`}}>
                                                <span className="flex items-center justify-center p-1 w-[50px] h-[50px] rounded-md bg-[orange] text-s text-white">{saleCards[saleIdx].sale * 100}%<br />할인</span>
                                            </div>
                                            <div className="row-span-1">
                                                <h3>{saleCards[saleIdx].name}</h3>
                                                <div className="flex flex-row gap-3 items-center">
                                                    <span className="text-bold text-[orange]">{saleCards[saleIdx].sale * 100}%</span>
                                                    <span className="text-s text-gray300 line-through">{saleCards[saleIdx].price}원</span>
                                                    <strong className="text-l text-medium">{saleCards[saleIdx].price - Math.trunc(saleCards[saleIdx].price * saleCards[saleIdx].sale)}원</strong>
                                                </div>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                            </div>
                    </ScrollSection>
                    <ScrollSection title={<span className="flex items-center gap-2">마음을 선물해 보세요<img className="h-5" src={giftIcon}/></span>}>
                        <React.Fragment>
                            {
                                giftCards.map((item, idx) => (
                                    <div key={idx} className="block w-[130px] h-[180px]">
                                        <a href="" className="w-full h-full flex flex-col justify-between">
                                            <div className="w-full h-[150px] rounded-lg" style={{background: `url(${item.bgImg}) center / 70% auto no-repeat ${item.bgColor}`}} />
                                            <span className="w-full h-[20px] text-xxs whitespace-nowrap text-ellipsis overflow-hidden">{item.text}</span>
                                        </a>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    </ScrollSection>
                    <ScrollSection title={<span className="flex items-center gap-2">전국의 별미가 한가득<img className="h-5" src={truckIcon}/></span>}>
                        <React.Fragment>
                            {
                                localCards.map((item) => (
                                    <article key={item.name} className="block w-[200px] h-[200px] rounded-xl overflow-hidden" style={{background: `url(${item.bg}) center /cover no-repeat`}}>
                                        <a href="" className="w-full h-full flex flex-col justify-end p-3">
                                            <span className="inline-block w-max py-1 px-2 mb-2 rounded-sm bg-white text-xxs">{item.local}</span>
                                            <h3 className="text-white text-bold text-l mb-1 whitespace-pre-line">{item.name}</h3>
                                            <p className="text-white text-xs">{item.text}</p>
                                        </a>
                                    </article>
                                ))
                            }
                        </React.Fragment>
                    </ScrollSection>
                    <ScrollSection fix={true} title={<span className="flex items-center gap-2">이런일도 한답니다<img className="h-5" src={heartIcon}/></span>}>
                        <React.Fragment>
                            <div className="grid grid-rows-5 grid-flow-col gap-2 w-full h-[500px]">
                                {
                                    [2,3,3,2].map((num, idx) => {
                                        const articleCss = `col-span-1 row-span-${num}`;
                                        return(
                                            <article key={idx} className={articleCss}>
                                                <a className="grid grid-rows-[1fr_20px] w-full h-full">
                                                    <div className="rounded-md" style={{background: `url(${eventCards[idx].bgImg}) center / 70% auto no-repeat ${eventCards[idx].bgColor}`}}/>
                                                    <p className="text-m text-bold">{eventCards[idx].text}</p>
                                                </a>
                                            </article>
                                        )
                                    })
                                }
                            </div>
                        </React.Fragment>
                    </ScrollSection>
                </div>
            </div>


			{/* <Link to="/delivery">
          <div>배달</div>
        </Link>
        <Link to="/packaging">
          <div>포장</div>
        </Link> */}
			<Footer />
		</div>
	);
}
