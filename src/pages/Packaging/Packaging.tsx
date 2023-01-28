import React, { useEffect } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import SubHeader from "../../components/Header/SubHeader/indext";
import MarketList from "./MarketList";
import MarketMap from "./MarketMap";

/* ==============================
  [dummy] 포장 목록 dummy data
============================== */
export interface Market {
  id: number;
	name: string;
	imgs: string[];
	category: "한식" | "양식" | "중식" | "일식";
	score?: string;
	pickup: string;
	distance: string;
	walk: string;
	options?: string[];
	new: boolean;
	coupon: boolean;
	latlng: [number, number];
}

const dummy = JSON.stringify([
	{
    id: 0,
		imgs: ["none.png"],
		name: "명랑 반점",
		category: "중식",
		score: "5.0",
		pickup: "6~16분",
		distance: "781m",
		walk: "11분",
		options: ["포장 가능", "예약 가능"],
		discount: "500원",
		new: true,
		coupon: false,
		latlng: [37.54, 126.971389],
	},
	{
    id: 1,
		imgs: ["none.png", "none1.png", "none2.png"],
		name: "명랑 백반",
		category: "한식",
		score: "5.0",
		pickup: "6~16분",
		distance: "781m",
		walk: "11분",
		options: [],
		discount: null,
		new: true,
		coupon: false,
		latlng: [37.559889, 126.9635],
	},
	{
    id: 2,
		imgs: ["none.png", "none1.png"],
		name: "명랑 파스타",
		category: "양식",
		score: "5.0",
		pickup: "6~16분",
		distance: "781m",
		walk: "11분",
		options: ["포장 가능", "예약 가능"],
		discount: "1000원",
		new: true,
		coupon: false,
		latlng: [37.557411, 126.956158],
	},
]);

/* ==============================
  [component] badge
============================== */
type Badge = {
	text: string;
	bg?: string;
	color?: string;
	onClick?: (event: React.MouseEvent) => void;
};
type Badges = {
	gap?: string;
	badges: Badge[];
};
const Badges = (props: Badges) => (
	<ul className={`flex flex-row gap-${props.gap || "3"}`}>
		{props.badges.map((item, idx) => (
			<li
				{...(item.onClick && { onClick: item.onClick })}
				key={idx}
				className={`text-${item.color || "bg-gray900"} bg-${item.bg ||
					"bg-gray200"}`}
			>
				{item.text}
			</li>
		))}
	</ul>
);

/* ==============================
  [component] coupon
============================== */

/* ==============================
  [dummy] map 
============================== */
const Packaging = () => {
	const [listMode, setListMode] = React.useState<boolean>(true);
	const [slideMode, setSlideMode] = React.useState<boolean>(false);
	const [data, setData] = React.useState<Array<Market>>([]);

  // map 위치 변경
  const handleMapCenterChange = (values:any) => {
	console.log('vaues', values);
  };

	// marker 클릭
	const onMarkerClick = () => {

  };

	// card 클릭
	const onCardClick = (marketId: number| string) => {
    // navigate market
    alert('market 으로 이동');
  };

	React.useEffect(() => {
		setData(JSON.parse(dummy));
	}, []);

	return (
		<div>
			<SubHeader category="포장" />
			{/* 맵 */}
			<MarketMap
				data={data.map(item => ({
				...item,
				onClick: (e => {
					e.preventDefault();
					onCardClick(item.id);
				})
				}))} 
				center={[37.553760, 126.969655]}
				handleCenterChange={handleMapCenterChange}
			/>
			{/* 슬라이드 목록 */}
			{slideMode && <div></div>}
			{/* 전체 목록 */}
			{listMode && (
				<div className="flex flex-col gap-3">
					{/* 광고 배너 */}
					<div>ads banner</div>
					{/* 포장 매장 목록 */}
						{
              data.length > 0 
              ? <MarketList 
                  data={data.map(item => ({
                    ...item,
                    onClick: (e => {
                      e.preventDefault();
                      onCardClick(item.id);
                    })
                  }))} 
                />
              : (
                <div>none</div>
              )
            }
				</div>
			)}
			{/* 지도보기|목록보기 바로가기 */}
			<div></div>
			<BottomNav />
		</div>
	);
};

export default Packaging;
