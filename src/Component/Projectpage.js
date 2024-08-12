
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './../Css/Projectpage.css';
import { useState } from 'react';




function ProjectPage() {
    let Project7Function = useSelector((state) => state.Project7Function);
    const [fcNum, setFcNum] = useState(4);

    function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
    }
    return (
        <div className="ProjectPageWrap">
            <div className='projectContain'>

                {/* -------- Head -------- */}
                <div className='projectPageHead'>
                    <div className='projectPageTitle'>
                        <h6>TagWord_ 7</h6>
                        <p>주제 안에서 다 같이 작성하는 소설!! 이용자 모두가 한 문장씩 적어서 소설을 완성해보자!</p>
                    </div>
                    <div className='projectPageNavi'>
                        <button onClick={() => linkBlank(`https://web-tagword-lyr24nghd8a65a2c.sel5.cloudtype.app`)}>사이트가기</button>
                        <button onClick={() => linkBlank(`https://github.com/taurenHorde/tagword`)}>Github(front)</button>
                    </div >
                </div >

                {/* --------Body------ */}
                < div className='projectPageBody' >

                    {/* ------------------- */}
                    < div className='projectPageOutline projectPageSection' >
                        <div className='outlineHead sectionHead'>
                            <h6>Introduction_</h6>
                        </div>
                        <div className='outlineBody sectionBody'>
                            <ul className='sectionUl'>
                                <li>
                                    <h6>- Description</h6>
                                    <p>: 소설제목, 주제, 방향등을 입력하여 소설책을 생성하면 모든 이용자가 소설 주저&방향과 앞 내용을 보면서 문장 단위로 글을 추가하여 만드는 소설!</p>
                                </li>
                                <li>
                                    <h6>- Language & Library</h6>
                                    <p>: React Typescript redux-toolkit Node.js Express MongoDB Socket React-Query styled-component Joi</p>
                                </li>
                                <li>
                                    <h6 className='tree'>- File Tree ▼</h6>
                                </li>
                            </ul>
                        </div>
                    </div >

                    {/* ---------------- */}
                    < div className='projectPageFunction projectPageSection' >
                        <div className='functionHead sectionHead'>
                            <h6>Function_</h6>
                        </div>
                        <div className='functionBody sectionBody'>
                            <div className='functionOption'>
                                {[
                                    '데이터에 따른 스타일변화(Styled-Component)',
                                    'Socket join / leave 처리',
                                    '문장 입력시 검증과 Socket',
                                    '문단 구분',
                                    '그 외'
                                ].map((val, idx) => <p
                                    key={idx}
                                    onClick={() => setFcNum(idx)}
                                    style={{
                                        background: fcNum === idx ? "skyblue" : 'rgb(212, 212, 212)',
                                        color: fcNum === idx ? "white" : 'black'
                                    }}
                                >
                                    {val}
                                </p>)}
                            </div>
                            {Project7Function.map((val, idx) => {
                                if (fcNum === idx) {
                                    return <div
                                        className='functionContent'
                                        key={idx}>
                                        {val()}
                                    </div>
                                } else {
                                    return <></>
                                }
                            })}
                        </div>
                    </div >

                    {/* ---------------- */}
                    < div className='projectPageYoutube projectPageSection' >
                        <div className='youtubeHead sectionHead'>
                            <h6>Youtube_</h6>
                        </div>
                        <div className='youtubeBody sectionBody'>
                            <div className='youtubeBox'>

                            </div>
                        </div>
                    </div >

                    {/* ---------------- */}
                    < div className='projectPageLearn projectPageSection' >
                        <div className='learnHead sectionHead'>
                            <h6>What I learned & need to Learn</h6>
                        </div>
                        <div className='learnBody sectionBody'>
                            <ul className='sectionUl'>
                                <li>
                                    <p>배운것1 : </p>
                                </li>
                                <li>
                                    <p>배운것2 : </p>
                                </li>
                                <li>
                                    <p>배운것3 : </p>
                                </li>
                                <li>
                                    <p>배운것4 : </p>
                                </li>
                            </ul>
                            <ul className='sectionUl'>
                                <li>
                                    <p>배워야할것1 : </p>
                                </li>
                                <li>
                                    <p>배워야할것2 : </p>
                                </li>
                                <li>
                                    <p>배워야할것3 : </p>
                                </li>
                                <li>
                                    <p>배워야할것4 : </p>
                                </li>
                            </ul>
                        </div>
                    </div >

                    {/* ---------------- */}
                    < div className='projectPageConsideration projectPageSection' >
                        <div className='considerationHead sectionHead'>
                            <h6>Consideration</h6>
                        </div>
                        <div className='considerationBody sectionBody'>
                            <ul className='sectionUl'>
                                <li>
                                    <p>Consid : </p>
                                </li>
                                <li>
                                    <p>Consid : </p>
                                </li>
                                <li>
                                    <p>Consid : </p>
                                </li>
                                <li>
                                    <p>Consid : </p>
                                </li>
                            </ul>
                        </div>
                    </div >
                    {/* ---------------- */}
                </div >
                {/* --------Footer------ */}
                < div className='projectPageFooter' >

                </div >
            </div >
        </div >
    )
}





export default ProjectPage


