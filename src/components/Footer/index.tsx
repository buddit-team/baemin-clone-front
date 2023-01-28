import React from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../uiCommon/DropDown';

const policyLinks = [
    {
        name: '사업자 정보 확인',
        path: '/'
    },
    {
        name: '이용약관',
        path: '/'
    },
    {
        name: '전자금융거래 이용약관',
        path: '/'
    },
    {
        name: (
            <strong 
                className="text-gray800"
            >개인정보처리방침</strong>
        ),
        path: '/'
    },
];

const footerTextStyle = 'text-xs text-gray700';

export default function Footer() {

  return (
    <div className="grid grid-rows-none gap-4 px-4 pt-4 pb-2 bg-gray200">
        <ul className='flex flex-row gap-2'>
            {
                policyLinks.map((item, idx) => (
                    <li 
                        key={idx}
                        className="relative"
                    >
                        <Link
                            to={item.path}
                            className="text-xs text-gray700 tracking-tight"
                        >{item.name}</Link>
                    </li>
                ))
            }
        </ul>
        <div className="grid grid-rows-none gap-2">
            <DropDown
                button={
                    <strong>
                        (주)우아한 형제들
                    </strong>
                }
                contents={
                    <div className="grid grid-rows-none gap-2 py-2">
                        <p className={footerTextStyle}>
                            우아한 형제들...
                        </p>
                        <table className="table-auto w-full border-[1px] border-gray400">
                            <colgroup>
                                <col width={"50%"} />
                                <col width={"50%"} />
                            </colgroup>
                            <tbody>
                                <tr className="text-xxs text-gray700">
                                    <td className="p-2 border-r-[1px] border-gray400">
                                        고객센터(대표)
                                        <br />
                                        1660-0987
                                        <br />
                                        24시간 운영, 연중무휴
                                    </td>
                                    <td className="p-2">
                                        고객센터(B마트, 배민스토어)
                                        <br />
                                        1600-0025
                                        <br />
                                        오전 9:00 ~
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                showIcon={true}
            />
            <p className="text-xs text-gray700">
                (주)우아한형제들은 통신판매중개자이며,...
                <br />
                (주)우아한형제들은 상품, 거래정보 및 거래...
            </p>
        </div>
    </div>
  )
}
