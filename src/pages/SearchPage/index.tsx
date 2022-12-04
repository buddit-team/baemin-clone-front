import { faArrowLeft, faCaretDown, faCaretUp, faCross, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RoundButton from '../../components/uiCommon/Button';

// 나중에 공통으로 뽑기
const sectionCssProps = 'flex flex-col w-full p-2';

const getNowMdhm = () => {
    const today = new Date();
    const month = (today.getMonth() > 9 ? '' : '0') + (today.getMonth() + 1);
    const date = (today.getDate() > 10 ? '' : '0') + today.getDate();
    const hour = (today.getHours() > 10 ? '' : '0') + today.getHours();
    const minute = (today.getMinutes() > 10 ? '' : '0') + today.getMinutes();

    return `${month}.${date} ${hour}:${minute}`;
};

/* ==============================
    [PAGE] 전체 검색 페이지
============================== */
export default function SearchPage() {

    return (
        <div className="flex flex-col w-full">
                <section className="flex flex-col w-full p-2 gap-4">
                    <div className="flex flex-row gap-1.5 w-full">
                        <button
                            className="flex-none w-11 h-11"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <div className="flex flex-row flex-1 p-2 items-center gap-1.5 w-full h-11 rounded-md bg-gray100">
                            <FontAwesomeIcon 
                                icon={faMagnifyingGlass} 
                                color="#757575"
                            />
                            <input
                                className="w-full h-full bg-transparent"
                                placeholder="검색어를 입력해주세요" 
                                type="text" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between">
                            <span>최근 검색어</span>
                            <button>전체 삭제</button>
                        </div>
                        {/* ui 컴포넌트로 분리: scroll-list */}
                        <div className="w-full overflow-x-auto whitespace-nowrap">
                            <ul className="flex flex-row flex-nowrap w-auto">
                                <li 
                                    className="flex flex-row gap-1 w-auto py-1 px-3 rounded-full bg-main"
                                    onClick={() => {alert('검색어 클릭!')}}
                                >
                                    <span>파스타</span>
                                    <button className="bg-transparent">
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </li>
                                <RoundButton tag="li">
                                    <>
                                        <span>파스타</span>
                                        <button className="bg-transparent">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </>
                                </RoundButton>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={`${sectionCssProps} gap-2`}>
                    <div className="flex flex-row gap-2">
                        <h3>요즘 우리동네 인기 맛집</h3>
                    </div>
                    {/* ui 컴포넌트로 분리: food-card-list */}
                    <div className="flex w-full overflow-x-auto">
                        <ul className="flex flex-row flex-nowrap w-auto">
                            <li>
                                <div>
                                    food-card
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={`${sectionCssProps} gap-4`}>
                    <div>
                        <h3>
                            가장 많이
                            <br />
                            검색하고 있어요
                        </h3>
                        <span>{getNowMdhm()} 기준</span>
                    </div>
                    {/* 순위 */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="grid grid-rows-5">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <span>1</span>
                                    <span>샐러드</span>
                                </div>
                                <FontAwesomeIcon 
                                    icon={faCaretUp}
                                />
                            </div>
                        </div>
                        <div className="grid grid-rows-5">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <span>5</span>
                                    <span>커피</span>
                                </div>
                                <FontAwesomeIcon 
                                    icon={faCaretDown}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${sectionCssProps} gap-4`}>
                    <h3>B마트 MD 추천 키워드</h3>
                    {/* ui 컴포넌트 분리 */}
                    <div className="w-full overflow-x-auto whitespace-nowrap">
                        <ul className="flex flex-row flex-nowrap w-auto">
                            <li 
                                className="flex flex-row gap-1 w-auto py-1 px-3 rounded-full bg-main"
                                onClick={() => {alert('태그 클릭!')}}
                            >
                                <span>#파스타</span>
                            </li>
                        </ul>
                    </div>
                </section>
        </div>
    )
};