import React from 'react'
import { Market } from './Packaging';

/* ==============================
  [component] card
============================== */
interface MarketCardProps extends Market {
	onClick: (event: React.MouseEvent) => void;
}
const MarketCard = (props: MarketCardProps) => {
	const imgsStyleH = 160;
	const subImgs = props.imgs.length > 1 ? props.imgs.slice(1, 3) : [];
	const subImgStyleH =
		subImgs.length < 1 ? 0 : Math.round(imgsStyleH / subImgs.length);

	const wrapStyleClass = `w-full h-[${imgsStyleH}px] flex flex-row flex-wrap gap-1`;

	return (
		<article onClick={props.onClick} className="w-full bg-white">
			<div className={wrapStyleClass}>
				<div
					className="grow h-full bg-gray05"
					style={{ background: `url(${props.imgs[0]}) cover no-repeat` }}
				/>
				{subImgs.length > 0 && (
					<div 
						className="w-full flex flex-row flex-wrap gap-1"
						style={{height: `${imgsStyleH}px`}}
					>
						{subImgs.map((img, idx) => (
							<div
								key={idx}
								className='bg-gray05'
								style={{ 
									background: `url(${img}) cover no-repeat`,
									width: `${subImgStyleH}px`,
									height: `${subImgStyleH}px`
								}}
							/>
						))}
					</div>
				)}
			</div>
			<div>
				<div>
					<h2>
						<span>{props.name}</span>
						<span>{props.score}</span>
					</h2>
					<span>{props.pickup}</span>
				</div>
				<span>
					{props.distance} {props.walk}
				</span>
				<ul>
					{props.new && <li>신규</li>}
					{props.coupon && <li>쿠폰</li>}
					{props.options &&
						props.options.map((option, idx) => <li key={idx}>{option}</li>)}
				</ul>
			</div>
		</article>
	);
};

type MarketListProps = {
	data: Array<MarketCardProps>
};

export const MarketList = (props: MarketListProps) => {

  return (
    <section>
		{
			props.data.map((itemData, idx) => (
				<MarketCard
					{...itemData}
					key={idx}
				/>
			))
		}
	</section>
  )
};

export default MarketList;
