import React from 'react'
import { Market } from './Packaging'
import HanSikIcon from '../../assets/maps/bibimbap.png';
import YangSikIcon from '../../assets/maps/pizza.png';
import BunSikIcon from '../../assets/maps/kimchi-jjiage.png';
import IlSikIcon from '../../assets/maps/sashimi.png';
import JoongSikIcon from '../../assets/maps/buns.png';
import DessertIcon from '../../assets/maps/cupcake.png';
import VeganIcon from '../../assets/maps/vegan.png';
import restaurantIcon from '../../assets/maps/restaurant.png';

const CategoryIconMatch = (ctg: string) => {
	switch(ctg) {
		case '한식': return HanSikIcon;
		case '중식': return JoongSikIcon;
		case '일식': return IlSikIcon;
		case '양식': return YangSikIcon;
		case '분식': return BunSikIcon;
		case '디저트': return DessertIcon;
		case '비건': return VeganIcon;
		default: return restaurantIcon;
	}
}

const kakaoAppKey = '9d4d065b2b4d615b4b36325e1892a063';

type LatLng = [number, number];

interface MarketMarkerProps extends Market {
	latlng: LatLng
	onClick: (event: React.MouseEvent) => void
}

type MarketMapProps = {
	data: Array<MarketMarkerProps>
	center: LatLng
	handleCenterChange: (values: any) => void
}

const MarketMap = (props: MarketMapProps) => {
	
	const { kakao } = window;
	const mapRef = React.useRef<HTMLDivElement>(null);
	const [map, setMap] = React.useState(null);
	const [markers, setMarkers] = React.useState<any[]|null>(null);

	const kakaoMap = (
		div: HTMLDivElement, 
		center: MarketMapProps['center'], 
		handleCenterChange: MarketMapProps['handleCenterChange']
	) => {
		const map = new kakao.maps.Map(div, {
			center: new kakao.maps.LatLng(center[0], center[1]),
			level: 6,
		});

		kakao.maps.event.addListener(map, 'idle', async function() {
			try {
				const addr = await kakaoAddrFromCoord(map.getCenter());
				handleCenterChange(addr);
				if(typeof addr === 'string' && addr.length > 0) {
					handleCenterChange(addr);
				}
			} catch(err) {
				console.log('kakao coord2address error: ', err);
				handleCenterChange('');
			}
		});

		return map;
	};

	const kakaoMarkers = (data: MarketMapProps['data']) => {
		return data.map(item => (
			new kakao.maps.Marker({
				position: kakaoLatlng(item.latlng),
				image: KaKaoMarkerImage(item.category)
			})
		));
	};

	const kakaoLatlng = (latlng: LatLng) => {
		return new kakao.maps.LatLng(latlng[0], latlng[1]);
	};

	const KaKaoMarkerImage = (category: string) => {
		return new kakao.maps.MarkerImage(
			CategoryIconMatch(category), 
			new kakao.maps.Size(24, 24),
			{offset: new kakao.maps.Point(12, 12)}
		);
	};

	//법정동 주소
	const kakaoAddrFromCoord = (coords: any) => {
		const geocoder = new kakao.maps.services.Geocoder();

		return new Promise((resolve, reject) => {
			geocoder.coord2Address(coords.getLng(), coords.getLat(), ((result: any[], status: string) => {
				if (status === kakao.maps.services.Status.OK) {
					resolve(result[0].address.address_name);
				} else {
					reject(status);
				}
			}));
		});
	};

	const removeMarkers = () => {
		if(markers) {
			markers.forEach(item => item.setMap(null));
			setMarkers(null);
		}
	};

	const addMarkers = (newMarkers: any[]) => {
		newMarkers.forEach(item => {item.setMap(map)});
		setMarkers(newMarkers);
	};
	
	React.useEffect(() => {
		if(mapRef.current) {
			setMap(kakaoMap(mapRef.current, props.center, props.handleCenterChange));
		}
	}, []);

	React.useLayoutEffect(() => {
		if(map) {
			removeMarkers();
			addMarkers(kakaoMarkers(props.data));
		}

	}, [map, props.data]);


  return (
	<div 
		ref={mapRef} 
		className="w-full h-screen overflow-hidden" 
	/>
  )
}

export default MarketMap;
