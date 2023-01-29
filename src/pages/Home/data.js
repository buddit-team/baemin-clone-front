// icons
import { faCirclePlay, faGift, faHeart, faTicket } from "@fortawesome/free-solid-svg-icons";
// card images
import thankImg01 from '../../assets/images/card/img-thank01.png';
import thankImg02 from '../../assets/images/card/img-thank02.png';
import congsImg from '../../assets/images/card/img-congs.png';
import fihtingImg from '../../assets/images/card/img-fighting.png';
import loveImg from '../../assets/images/card/img-love.png';
// food images
import dduckImg from '../../assets/images/food/img-dduk.jpg';
import bibimImg from '../../assets/images/food/img-bibim.jpg';
import iceImg from '../../assets/images/food/img-ice.jpg';
import dessertImg from '../../assets/images/food/img-dessert.jpg';
import kimchiImg from '../../assets/images/food/img-kimchi.jpg';
// event images
import yearImg from '../../assets/images/event/img-2023.png';
import ecoImg from '../../assets/images/event/img-eco.png';
import incomeImg from '../../assets/images/event/img-income.png';
import partyImg from '../../assets/images/event/img-party.png';

export const userMenus = [
    { text: '포인트', path: '/', icon: faCirclePlay},
    { text: '쿠폰함', path: '/', icon: faTicket },
    { text: '선물함', path: '/', icon: faGift },
    { text: '찜', path: '/', icon: faHeart},
];

export const recentCards = [
    {name: '훅트포케 신논현역점', score: '5.0', tips: '1,900원 ~ 2,900원', options: ['신규', '쿠폰'], delivery: '13~23분', img: iceImg},
    {name: '훅트포케 신논현역점', score: '5.0', tips: '1,900원 ~ 2,900원', options: ['신규', '쿠폰'], delivery: '12~15분', img: iceImg},
    {name: '훅트포케 신논현역점', score: '5.0', tips: '1,900원 ~ 2,900원', options: ['신규', '쿠폰'], delivery: '12~15분', img: iceImg},
    {name: '훅트포케 신논현역점', score: '5.0', tips: '1,900원 ~ 2,900원', options: ['신규', '쿠폰'], delivery: '12~15분', img: iceImg},
];

export const saleCards = [
    {sale: 0.2, name: 'food01', price: 15000, bg: dduckImg},
    {sale: 0.3, name: 'food02', price: 16000, bg: dessertImg},
    {sale: 0.4, name: 'food02', price: 17000, bg: kimchiImg},
    {sale: 0.5, name: 'food04', price: 18000, bg: iceImg},
];

export const giftCards = [
    {text: '몸도 마음도 건강하게', bgImg: thankImg01, bgColor: 'rgba(255, 250, 222, 1)'},
    {text: '몸도 마음도 건강하게', bgImg: fihtingImg, bgColor: 'rgb(208, 215, 255)'},
    {text: '몸도 마음도 건강하게', bgImg: congsImg, bgColor: 'rgb(254, 207, 242)'},
    {text: '몸도 마음도 건강하게', bgImg: loveImg, bgColor: 'rgb(255, 167, 150)'},
    {text: '몸도 마음도 건강하게', bgImg: thankImg02, bgColor: 'rgba(255, 250, 222, 1)'},
];

export const localCards = [
    {local: '경남', name: '경남 시장 떡볶이', text: '쫄깃한 가래떡에 40년 전통 떡볶이 양념', bg: dduckImg},
    {local: '부산', name: '부산 시장 한과', text: '쫄깃한 가래떡에 40년 전통 떡볶이 양념', bg: dessertImg},
    {local: '제주', name: '제주도 김치', text: '쫄깃한 가래떡에 40년 전통 떡볶이 양념', bg: kimchiImg},
    {local: '서울', name: '인사동 팥빙수', text: '쫄깃한 가래떡에 40년 전통 떡볶이 양념', bg: iceImg},
    {local: '전주', name: '전주 비빔밥', text: '쫄깃한 가래떡에 40년 전통 떡볶이 양념', bg: bibimImg},
];

export const eventCards = [
    { text: 'event!!! event!!! event!!! event!!!', bgImg: yearImg, bgColor: 'rgba(0,0,0,1)'},
    { text: 'event!!! event!!! event!!! event!!!', bgImg: ecoImg, bgColor: 'rgba(0,0,0,1)' },
    { text: 'event!!! event!!! event!!! event!!!', bgImg: incomeImg, bgColor: 'rgba(0,0,0,1)' },
    { text: 'event!!! event!!! event!!! event!!!', bgImg: partyImg, bgColor: 'rgba(0,0,0,1)' },
];