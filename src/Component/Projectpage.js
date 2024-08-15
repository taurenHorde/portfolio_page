
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './../Css/Projectpage.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function ProjectPage() {
    const { id } = useParams();
    const componentName = {
        tagword: ProjectPage7(),
        baseball_team: ProjectPage6(),
        baseball_diary: ProjectPage5(),
    }
    const currentPage = componentName[id]
    return (
        <div className="ProjectPageWrap">
            {currentPage}
        </div>
    )
}


function ProjectPage7() {
    let Project7Function = useSelector((state) => state.Project7Function);
    const [fcNum, setFcNum] = useState(4);

    function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
    }
    return (
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
                {/* < div className='projectPageYoutube projectPageSection' >
                        <div className='youtubeHead sectionHead'>
                            <h6>Youtube_</h6>
                        </div>
                        <div className='youtubeBody sectionBody'>
                            <div className='youtubeBox'>

                            </div>
                        </div>
                    </div > */}
                {/* ---------------- */}
                < div className='projectPageLearn projectPageSection' >
                    <div className='learnHead sectionHead'>
                        <h6>What I learned & need to Learn</h6>
                    </div>
                    <div className='learnBody sectionBody'>
                        <ul className='sectionUl'>
                            <li>
                                <p>- 이전까지 항상 fetch를 사용하여 HTTP 요청을 하였는데, 이번엔 axios + react-query를 사용하여 HTTP 요청을 수행함.</p>
                            </li>
                            <li>
                                <p>- react-query 내  mutation를 활용하였으며, 실행 함수에 짧아 가독성이 좋았고, 상태관리가 직관적이라 좋다고 생각.</p>
                            </li>
                            <li>
                                <p>- Typescript 환경 내 redux-toolkit을 처음 사용.</p>
                            </li>
                            <li>
                                <p>- Socket.io 를 통한 실시간 데이터 처리를 처음 사용.</p>
                            </li>
                        </ul>
                        <ul className='sectionUl'>
                            <li>
                                <p>- component의 구조를 기획 단계에서 확실히 해야할 필요성을 느낌.</p>
                            </li>
                            <li>
                                <p>- typescript는 서비스가 클 수록 필수라고 생각이 든 만큼, typescript 공부 필요성을 느낌.</p>
                            </li>
                            <li>
                                <p>- 서버에서 받은 데이터 같이 타입을 알 수 없는 경우, 타입 좁히기 및 타입 가드등 여러 방법을 공부 필요성을 느낌.</p>
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
                                <p>- 실시간 데이터를 진행 할 때, DB 저장과 리턴 데이터를 합리적으로 처리 하기 위한 방법이 뭐가 있을까 생각.</p>
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

    )
}

function ProjectPage6() {
    let Project6Function = useSelector((state) => state.Project6Function);
    const [fcNum, setFcNum] = useState(5);

    function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
    }
    return (
        <div className='projectContain'>

            {/* -------- Head -------- */}
            <div className='projectPageHead'>
                <div className='projectPageTitle'>
                    <h6>Baseball Team _6</h6>
                    <p>야구 팀을 만들고, 팀원을 모집! 급한 경우엔 용병을 모집해보자!</p>
                </div>
                <div className='projectPageNavi'>
                    <button onClick={() => linkBlank(`https://web-baseball-front-lyol1hka657e54ef.sel5.cloudtype.app/`)}>사이트가기</button>
                    <button onClick={() => linkBlank(`https://github.com/taurenHorde/baseball_front`)}>Github(front)</button>
                    <button onClick={() => linkBlank(`https://github.com/taurenHorde/baseball_back`)}>Github(back)</button>
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
                                <p>: 야구 팀을 만들어 팀원을 모아 팀을 만들고, 급한 경우 용병을 모집! 그리고 야구에 관한 게시판 까지!</p>
                            </li>
                            <li>
                                <h6>- Language & Library</h6>
                                <p>: React Typescript Node.js Express MongoDB react-celender Passport.js KakaoMap-Api Moment.js Joi</p>
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
                                'Transaction',
                                'Kakao Map ApI',
                                'react-calender',
                                'Middlewear',
                                '그 외1',
                                '그 외2',
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
                        {Project6Function.map((val, idx) => {
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
                            <iframe
                                className='iframeTube'
                                src="https://www.youtube.com/embed/M4-l7xbbEH8"
                                title="포트폴리오6"
                                // frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowfullScreen>
                            </iframe>
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
                                <p>- HTTP 요청 시 발생 할 수 있는 예외사항들을 배웠으며, 그에 대한 처리 방법도 배움.</p>
                            </li>
                            <li>
                                <p>- 로그인, 팀 가입인원 등 이용자의 권한 체킹이 필요 한 경우 미들웨어를 활용하여 코드 가독성을 확보.</p>
                            </li>
                            <li>
                                <p>- 클라이언트에서 즉각적인 처리가 필요한 경우, 서버 처리 이전에 일단 실행해도 된다는 생각을 함</p>
                            </li>
                        </ul>
                        <ul className='sectionUl'>
                            <li>
                                <p>- typescript에 대한 공부가 필요.</p>
                            </li>
                            <li>
                                <p>- Component / API / DB 디자인은 기획 단계부터 확실히 해야한다고 생각, 좋은 디자인은 어떤거인지 공부 필요성을 느낌</p>
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
                                <p>- 실시간 데이터를 진행 할 때, DB 저장과 리턴 데이터를 합리적으로 처리 하기 위한 방법이 뭐가 있을까 생각.</p>
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

    )
}

function ProjectPage5() {
    let Project5Function = useSelector((state) => state.Project5Function);
    const [fcNum, setFcNum] = useState(1);

    function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
    }
    return (
        <div className='projectContain'>

            {/* -------- Head -------- */}
            <div className='projectPageHead'>
                <div className='projectPageTitle'>
                    <h6>Baseball Diary _5</h6>
                    <p>야구 직관기록을 남기는 사이트</p>
                </div>
                <div className='projectPageNavi'>
                    <button onClick={() => linkBlank(`https://web-diary-front-lyol1hka657e54ef.sel5.cloudtype.app/login`)}>사이트가기</button>
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
                                <p>: 야구 직관기록을 남기는 사이트</p>
                            </li>
                            <li>
                                <h6>- Language & Library</h6>
                                <p>: React Node.js Express MongoDB react-celender Passport.js Moment.js</p>
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
                                '즉각적인 데이터 검증',
                                '약관 승낙 체크',
                                '그 외',
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
                        {Project5Function.map((val, idx) => {
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
                            <iframe
                                src="https://www.youtube.com/embed/zeX2BVDARNs"
                                title="포트폴리오5"
                                // frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowfullScreen>
                            </iframe>
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
                                <p>- Node.js / Express / MongoDB 로 서버 구현 및 DB 데이터 핸들링 방법 습득.</p>
                            </li>
                            <li>
                                <p>-Passport를 이용한 회원서비스 구현 방법 습득.</p>
                            </li>
                            <li>
                                <p>- 필터를 통해 데이터 분류 방법 습득.</p>
                            </li>
                        </ul>
                        <ul className='sectionUl'>
                            <li>
                                <p>- 클라이언트 HTTP / 서버 API 각각의 위치에서 예외처리 방법을 알아볼 것.</p>
                            </li>
                            <li>
                                <p>- 한번의 HTTP 요청으로 2개 이상의 DB데이터 변경 시 하나만 처리 되는 경우를 막는 방법을 알아볼 것.</p>
                            </li>
                            <li>
                                <p>- 어떻게 하면 HTTP요청들과 API들을 합리적이게 사용할 수 있는지, 실무에선 어떻게 하고 있는지 알아볼 것.</p>
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
                                <p>- 실시간 데이터를 진행 할 때, DB 저장과 리턴 데이터를 합리적으로 처리 하기 위한 방법이 뭐가 있을까 생각.</p>
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

    )
}



export default ProjectPage


