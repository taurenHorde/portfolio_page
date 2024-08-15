import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import CodeBlock from './../Component/Code';



let ProjectBox = createSlice({
  // 메인페이지 프로젝트 박스 - 
  name: 'Projectbox',
  initialState: [
    function ProjectBox8() {
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>길드 일정 공유 앱 _8  (진행예정)</h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>길드 행사 일정 알림 및 참여 여부 확인 앱</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library (예상)</h6>
              <p>React NativeNode.js Express MySQL/MariaDB</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Function(예상)</h6>
              <p>ㆍreact-calender 라이브러리를 통한 달력 구현</p>
              <p>ㆍ일정 생성 및 삭제 기능</p>
              <p>ㆍ참여 신청 및 수락 및 거절 기능</p>
              <p>ㆍ일정 생성 자가 신청인원에게 쪽지 기능 구현 등등</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Goal</h6>
              <p>ㆍreact-calender 라이브러리를 통한 달력 구현이나 신청을 통한 수락 및 거절은 앞선 Baseball Team에서 구현했던 기능이지만 한번도 사용 안해봤던 React-Native와 MySQL/MariaDB를 사용할 예정</p>
              <p>ㆍReact-Native의 기초적인 부분을 습득하고 더 나아가 웹앱 / 네이티브앱 / 하이브리드앱의 각각의 특징를 파악하기.</p>
              <p>ㆍ많은 서비스에서 사용되고 있는 관계형 DB(MySQL/MariaDB)를 배워보고 관계형DB와 문서형DB 등 각 DB의 특징과 차이를 몸소 경험해보기.</p>
            </div>
          </div>
        </>
      )
    },
    function ProjectBox7() {
      const navigate = useNavigate()
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>Tag Word _7 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>주제 안에서 다 같이 작성하는 소설!! 이용자 모두가 한 문장씩 적어서 소설을 완성해보자!</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>React Typescript redux-toolkit Node.js Express MongoDB Socket React-Query styled-component Joi</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍSocket.io를 활용, 같은 소설책 입장 이용자들을 같은 Room으로 분류 후 같은 Room 내 실시간 데이터 처리 기능 구현</p>
              <p>ㆍ문장에 감정표현 구현, Styled-Component를 활용 감정표현의 수에 따라 동적인 글씨 크기 또는 색깔 변화 구현</p>
              <p>ㆍReact-query 라이브러리 내 Mutation와 axios를 통한 HTTP 요청 구현</p>
              <p>ㆍJoi를 통한 사용자 입력 데이터 검증 구현</p>
              <p>ㆍRedux-toolkit 을 통한 데이터 핸들링 구현</p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I learned</h6>
              <p>ㆍSocket의 설치 및 셋팅 방법과 서버와의 연결, emit, on을 통한 실시간 데이터 처리와 join, leave로 사용자 분류 방법을 습득 </p>
              <p>ㆍReact-query의 설치 및 셋팅 방법과 Mutation을 통한 HTTP요청, 서버 응답에 따른 상태관리를 습득</p>
              <p>ㆍTypeScirpt 상태에서의 Redux-toolkit 사용법을 습득 </p>
              <p>ㆍ분류에 따라 보관을 할 때 있어서의 이점을 습득 </p>
              <p>ㆍGit 과 GitHub의 사용법을 습득 </p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I need to learn</h6>
              <p>ㆍ그냥 React-query와 Mutation의 차이를 알아볼 것.</p>
              <p>ㆍSocket을 사용 할 시 발생할 수 있는 여러 문제점들을 고찰하고 그에 대한 해결방법들을 실제 서비스들에서는 어떻게 하고 있는지 알아볼 것.</p>
              <p>ㆍstyled-component vs 일반 css 의 장단점을 확실히 공부할 것, 더 나아가 Tailwind등도 알아볼 것.</p>
              <p>ㆍGit 과 GitHub의 사용법을 더욱 기능에 맞게 사용 할 수 있도록 공부 할 것 / 더 나아가 팀 단위 Git/GitHub 방법도 공부 해 놓을 것 </p>
            </div>
            <div className='projectBoxSection'>
              <h6>Consideration</h6>
              <p>ㆍ서비스가 클 수록 사용 분류에 맞게 폴더/파일를 생성 후 보관 해야하는 습관이 필요하다고 생각 </p>
              <p>ㆍ프로젝트 기획/계획 단계에서의 API / DB / Rounter 의 디자인을 확실히 하고 작업을 시작해야 한다고 생각</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => navigate('/project/tagword')}>자세히보기</button>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/tagword`)}>GitHub</button>
            <button onClick={() => linkBlank(`https://web-tagword-lyr24nghd8a65a2c.sel5.cloudtype.app`)}>사이트</button>
          </div>
        </>
      )
    },
    function ProjectBox6() {
      const navigate = useNavigate()
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>Baseball Team _6 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>야구 팀을 만들어 팀원과 게스트를 구하는 사이트</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>React Typescript Node.js Express MongoDB react-celender Passport.js KakaoMap-Api Moment.js Joi</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍPassport를 활용하여 회원 서비스 구현</p>
              <p>ㆍServer에서 Middlewear를 활용하여 로그인 체크 / 팀원 체크 등 필요한 API에서 활용 </p>
              <p>ㆍ이용자의 잘못된 사용, 예외처리 구현</p>
              <p>ㆍJoi를 통한 사용자 입력 데이터 검증 구현</p>
              <p>ㆍKakaoMap API 를 사용하여 경기장 위치를 안내, 지도 클릭 시 카카오맵 길찾기 연동 구현</p>
              <p>ㆍ인스타그램 알림 시간 처리 구현 (n분전 / n시간전 / n일전 등)</p>
              <p>ㆍTransaction을 활용하여 실행단위를 변경하여 DB 데이터 변경 시 일관성과 원자성을 확보</p>
              <p>ㆍreact-calender 라이브러리를 통한 모든 일정 달력으로 한 눈에 보기 구현</p>

            </div>
            <div className='projectBoxSection'>
              <h6>What I learned</h6>
              <p>ㆍTransaction이라는 정의와 사용법(Callback방식), Transaction 특성(ACID)을 습득 </p>
              <p>ㆍJoi라는 라이브러리와 사용법을 습득 </p>
              <p>ㆍRest API의 중요성에 대해서 몸소 습득 </p>
              <p>ㆍ'좋아요' 같은 간단한 기능은 선 구현 후 서버처리를 해도 된다는 방법?을 습득 </p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I need to learn</h6>
              <p>ㆍTypeScirpt에 대해서 더욱 공부가 필요, 일반적인 타입 지정이 아닌 어떻게 활용할 수 있는 지 알아볼 것.</p>
              <p>ㆍRest API에 대해서 알아볼 것.</p>
              <p>ㆍClassname / Api / DB 의 디자인의 중요성을 파악, 실무에서는 어떤 점을 중점으로 놓고 디자인을 하는지 알아볼 것</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Consideration</h6>
              <p>ㆍ사용자가 입력한 데이터는 프론트와 서버 어디서 검증 절차를 해야 합리적인가.. 에 대해서 생각</p>
              <p>ㆍDB에서 꺼낸 데이터를 사용범위에 맞게 손질은 프론트와 서버 어디서 해야 합리적인가.. 에 대해서 생각 </p>
              <p>ㆍ어떠한 기능이 있다면, 그 기능이 왜 생겼는지 간단하게라도 생각 해볼 것.</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => linkBlank(`https://www.youtube.com/embed/M4-l7xbbEH8`)}>Youtube</button>
            <button onClick={() => navigate('/project/baseball_team')}>자세히보기</button>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/baseball_front`)}>GitHub(front)</button>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/baseball_back`)}>GitHub(back)</button>
            <button onClick={() => linkBlank(`https://web-baseball-front-lyol1hka657e54ef.sel5.cloudtype.app/`)}>사이트</button>
          </div>
        </>
      )
    },
    function ProjectBox5() {
      const navigate = useNavigate()
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>Baseball Diary _5 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>야구 직관기록을 남기는 사이트</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>React Node.js Express MongoDB react-celender Passport.js Moment.js </p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍPassport를 활용하여 회원 서비스 구현</p>
              <p>ㆍ이용자의 잘못된 사용, 예외처리 구현</p>
              <p>ㆍ클라이언트와 서버와의 연결 구현</p>
              <p>ㆍHTTP요청과 응답처리 및 API 구현과 DB데이터 핸들링 구현</p>
              <p>ㆍ데이터의 CRUD 구현</p>
              <p>ㆍ사용자의 입력을 즉각적으로 체크하여 잘못된 데이터 안내 구현</p>
              <p>ㆍ필터에 맞게 데이터를 분류 구현 </p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I learned</h6>
              <p>ㆍNode.js / Express / MongoDB 로 서버 구현 및 DB 데이터 핸들링 방법 습득 </p>
              <p>ㆍPassport를 이용한 회원서비스 구현 방법 습득 </p>
              <p>ㆍ필터를 통해 데이터 분류 방법 습득</p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I need to learn</h6>
              <p>ㆍ클라이언트 HTTP / 서버 API 각각의 위치에서 예외처리 방법을 알아볼 것</p>
              <p>ㆍ한번의 HTTP 요청으로 2개 이상의 DB데이터 변경 시 하나만 처리 되는 경우를 막는 방법을 알아볼 것</p>
              <p>ㆍ어떻게 하면 HTTP요청들과 API들을 합리적이게 사용할 수 있는지, 실무에선 어떻게 하고 있는지 알아볼 것</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Consideration</h6>
              <p>ㆍ구현 한 기능들을 더 합리적이게 바꿀 순 없는지 생각</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => linkBlank(`https://www.youtube.com/embed/zeX2BVDARNs`)}>Youtube</button>
            <button onClick={() => navigate('/project/baseball_diary')}>자세히보기</button>
            <button onClick={() => linkBlank(`https://web-diary-front-lyol1hka657e54ef.sel5.cloudtype.app/login`)}>사이트</button>
          </div>
        </>
      )
    },
    function ProjectBox4() {
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>PokeMon _4 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>포켓몬스터(1세대) 중 6마리를 고르는 사이트</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>React redux-toolkit react-bootstrap </p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍreact-bootstrap를 사용하여 테이블형식의 구조 구현</p>
              <p>ㆍredux-toolkit 내 데이터 핸들링 구현</p>
              <p>ㆍ포켓몬 속성에 따른 필터 기능 구현</p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I learned</h6>
              <p>ㆍReact 설치 및 사용법 그리고 react 내 다양한 기능 습득</p>
              <p>ㆍredux-toolkit 설치 및 사용법 습득</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Consideration</h6>
              <p>ㆍ다양한 프로젝트를 많이 경험을 해서 나의 부족한 점과 내가 필요한 부분을 파악해야겠다.</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => linkBlank(`https://www.youtube.com/embed/okJ1FB7gnCk`)}>Youtube</button>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/pokemon`)}>GitHub(front)</button>
            <button onClick={() => linkBlank(`https://taurenhorde.github.io/pokemon/`)}>사이트</button>
          </div>
        </>
      )
    },
    function ProjectBox3() {
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>Dog _3 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>본인의 강아지 사진을 올리는 사이트</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>Vue </p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍcreateObjectURL를 통한 사진 등록 기능 구현</p>
            </div>
            <div className='projectBoxSection'>
              <h6>What I learned</h6>
              <p>ㆍVue 설치 및 사용법 그리고 vue 내 다양한 기능 습득</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Consideration</h6>
              <p>ㆍ프론트엔드 라이브러리 中 Vue 와 React를 간단히 배워보고 어떤 거를 중점으로 배울 지 선택</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/vue-dog`)}>GitHub(front)</button>
            <button onClick={() => linkBlank(`https://taurenhorde.github.io/vue-dog`)}>사이트</button>
          </div>
        </>
      )
    },
    function ProjectBox2() {
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>Emotion _2 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>명언을 보여주는 사이트</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>HTML CSS Javascript jQuery</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍ이용자의 클릭에 따른 div 변화</p>
              <p>ㆍscroll-Y값을 바탕으로 div의 Transform 변화 (z값)</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/emotion`)}>GitHub(front)</button>
            <button onClick={() => linkBlank(`https://taurenhorde.github.io/emotion`)}>사이트</button>
          </div>
        </>
      )
    },
    function ProjectBox1() {
      function linkBlank(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
      }
      return (
        <>
          <div className='projectBoxHead'>
            <div className='projectBoxTitle'>
              <h6>멈뭄미 _1 </h6>
            </div>
          </div>
          <div className='projectBoxBody'>
            <div className='projectBoxSection'>
              <h6>Description</h6>
              <p>강아지 관련 페이지</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Language / Library</h6>
              <p>HTML CSS Javascript</p>
            </div>
            <div className='projectBoxSection'>
              <h6>Main Function</h6>
              <p>ㆍ일반적인 사이트의 메인 페이지 구조 구현</p>
              <p>ㆍscroll-Y시 nav 메뉴 fix 구현</p>
              <p>ㆍJavascript를 활용한 메뉴판 확장 구현</p>
            </div>
          </div>
          <div className='projectBoxButton'>
            <button onClick={() => linkBlank(`https://github.com/taurenHorde/mummumi`)}>GitHub(front)</button>
            <button onClick={() => linkBlank(`https://taurenhorde.github.io/mummumi/`)}>사이트</button>
          </div>
        </>
      )
    }
  ]
})

let Project7Function = createSlice({
  name: 'Project7Function',
  initialState:
    [
      function ProjectFc7_1() {
        const codeStore = {
          code1:
            `
    // Story.tsx 내 StorySentence 컴포넌트
    
    <StorySentenceStyled
        $expresstion={sentenceData.expression}
        onClick={() => sentenceClick(sentenceData)}>
            {sentenceData.content}
    </StorySentenceStyled>
            `
          ,
          code2:
            `
    // styled.ts
    
    export const StorySentenceStyled = styled.span<StorySentenceStyledType>'
        color : {$props => colorExtractor(props.$expresstion)};
        font-size: {$props => FontSizeExtractor(props.$expresstion)};
        other things ~
        '
    
    // TypeStyled.ts
    
    export interface StorySentenceStyledType {
        $expresstion: [number, number, number, number]
    }
    export type ColorExtractorFcType = (expresstion: [number, number, number, number]) => string
    export type FontSizeExtractorFcType = (expresstion: [number, number, number, number]) => string
           `
          ,
          code3:
            `
    // styled.ts
    
        const colorExtractor: ColorExtractorFcType = (expresstion) => {
            let returnValue = [0, 0, 0] // 기본 리턴 값 (검정색)
            const idxColorArrayRGB = [[225, 223, 0], [70, 130, 180], [220, 20, 60], [50, 205, 50]]
            // 감정에 따른 색을 미리 지정 (순서대로- 기쁨,슬픔,최고,긍정)
            const maxValue = 150; // 맥시멈 값 지정
            const minValue = 30;  // 미니멈 값 지정
            const maxExpresstionNumber = Math.max(...expresstion); // 가장 많은 감정표현의 수 추출
            const maxExpresstionIndex = expresstion.indexOf(maxExpresstionNumber); // 위 값을 가지고 감정을 추출
    
            if (maxExpresstionNumber > minValue && maxExpresstionNumber < maxValue) { // 31 ~ 149 이면
                const percentageOfMaxValue 
                    = ((maxExpresstionNumber - minValue) / (maxValue - minValue)); // 30(0%) ~ 150(100%) 퍼센테이지 작업 후
                const conversionStyleRGB = idxColorArrayRGB[maxExpresstionIndex].map((val) => val * percentageOfMaxValue)
                returnValue = conversionStyleRGB // 미리 지정한 감정 색에 적용 ex - 50%일 경우 해당 감정의 색에서 50% 계산한 값 리턴
            } else if (maxExpresstionNumber >= maxValue) { // 150 이상이면
                returnValue = idxColorArrayRGB[maxExpresstionIndex] // 미리 지정한 감정 색 그대로 리턴
            }
            return 'rgb(\${returnValue[0]}, \${returnValue[1]}, \${returnValue[2]})'
        }
        `
          ,
          code4:
            `
    // styled.ts
    
    const FontSizeExtractor: FontSizeExtractorFcType = (expresstion) => {
        let returnValue = 1 // 기본 값은 1rem
        const maxValue = 1000; // 맥시멈 값 지정
        const minValue = 100; // 미니멈 값 지정
        const totalExpression = expresstion.reduce((pre, cur) => pre + cur) // 모든 감정의 수를 합
        if (totalExpression > minValue && totalExpression < maxValue) { // 위의 값이 101 ~ 999 이면
            const percentageOfMaxValue // 101(0%) ~ 999(100%) 퍼센테이지 작업 후
                = parseFloat(((totalExpression - minValue) / (maxValue - minValue)).toFixed(2));  // 기본 값에 더해서 리턴
            returnValue = returnValue + percentageOfMaxValue
        } else if (totalExpression >= maxValue) { // 1000 이상일 경우 2rem 리턴
            returnValue = 2
        }
        return '\${returnValue}rem'
    }
        `
        }

        return (
          <>
            <div className='functionName'>
              <h6>데이터에 따른 스타일변화(Styled-Component)</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                이용자들은 감정 표현(웃음,슬픔,최고,긍정) 기능을 통하여 문장을 평가할 수 있습니다.
                좋은 평가를 받기 위해 이용자들은 신중히 문장을 작성 할 것입니다.
              </p>
              <p>
                -
                많은 감정 표현(이하 평가)을 받은 문장은 평가의 종류 및 수에 따라 스타일의 변화를 주어 경쟁심리를 자극, 더욱 참신하고 재밌는 문장을 유도해보고자 하였습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. 문장 내 감정표현은 [number,number,number,number] 타입으로 저장되어 있으며 문장은 Styled-Component로 구현.</p>
              <p>2. [$expression]에 감정표현 데이터를 담아 Props로 전송.</p>
              <CodeBlock code={codeStore.code1} />
              <p>3. [$expression]의 데이터를 함수에 넣어 color,fontSize값을 추출 하도록 설정.</p>
              <p>4. Styled 와 각 함수들엔 type을 지정.</p>
              <CodeBlock code={codeStore.code2} />
              <p>5. Color --------------</p>
              <CodeBlock code={codeStore.code3} />
              <p>6. fontSize --------------</p>
              <CodeBlock code={codeStore.code4} />
            </div>
            <div className='functionThinking'>
              <h6>최대값과 최소값 ?</h6>
              <p>진짜 서비스가 되는 중이고 이용자가 많으면, Style이 변하는 감정표현의 최소 값과 최대 값을 어떻게 하면 좋을지 생각을 해봤다.</p>
              <p>- 모든 문장이 가지고 있는 감정표현의 값을 통계 내어 그 값을 가지고 기준 제시, 기준에 알맞게 최소/최대 값을 지정.</p>
              <p>- 그 기준의 값은 문장들을 가지고 있는 소설DB에 저장하여 사용, 통계를 내는 시기는 사용자가 소설책에 접속을 했을 때</p>
            </div>
            <div className='functionThinking'>
              <h6>코드 응용 (재활용) ?</h6>
              <p>신고 기능을 만들고, 신고를 많이 받은 문장은 가리거나, 클릭해야 볼 수 있는 등 다양한 안전 시스템에 대한 고려.</p>
            </div>
          </>
        )
      }
      ,
      function ProjectFc7_2() {
        const codeStore = {
          code1:
            `
// Main.tsx 내 FcSocketIoFirstGet 컴포넌트 내 useEffect
// 해당 컴포넌트는 오직 소설책 입장/퇴장시 Socket 호출을 위한 역할만 함.

  useEffect(() => {
        if (!id) return
        joinRoomSocket(dispatch, id, navigate)
        const leaveRoomFc = () => {
            leaveRoomSocket(dispatch, id,)
        }
        window.addEventListener('beforeunload', leaveRoomFc)
        return () => {
            leaveRoomFc();
            window.removeEventListener('beforeunload', leaveRoomFc)
        }
    }, [])

// SocketAction.ts 

// 입장 시
 export const joinRoomSocket = (dispatch: AppDispatch, id: string, navigate: NavigateFunction) => {
    dispatch(socketGetLoadingFalse())
    //  데이터 전송
    socket.emit('joinRoom', id)
    // 응답처리
    // 성공
    socket.on('joinRoomResultData', (resData) => {
        const { sentenceConnectData, counterConnectData } = resData
        dispatch(serverToCounter(counterConnectData))
        dispatch(serverToSentence(sentenceConnectData))
        dispatch(socketGetLoadingTrue())
    })
    //실패 
    socket.on('joinRoomErrorData', (message: string) => {
        console.log('\${ message }') // 접속 막아야함~
        alert('잘못 된 접근입니다. 메인페이지로 이동됩니다.)')
        navigate('/')
    })
}
  
// 퇴장 시
 export const leaveRoomSocket = (dispatch: AppDispatch, id: string) => {
    socket.emit('leaveRoom', id)
 }
            `
        }

        return (
          <>
            <div className='functionName'>
              <h6>Socket join / leave 처리</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                실시간 데이터 처리가 이루어 지지 않는 다면, 이용자는 앞 선 문장을 확인 하지 못할 것이고 그 결과는 전후내용이 맞지 않는 삼류 소설이 만들어 질 수 있습니다.
              </p>
              <p>
                -
                소설의 퀄리티를 위하여 실시간 채팅서비스에서 많이 이용되는 Socket을 활용하여 실시간으로 문장을 주고 받을 수 있도록 구현했습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. 이용자가 해당 소설책에 접속 하여 component가 마운드 될 때 해당 소설 데이터를 Socket으로 전송하여 join 처리와 함께 해당 소설 데이터들을 받아옴.  </p>
              <p>2. 이용자가 문장을 입력하면 해당 소설책 내 이용자들 대상으로 실시간으로 데이터 처리.  </p>
              <p>3. 이용자가 해당 소설책에서 나가 component가 언마운드 될 때 leave 처리</p>
              <CodeBlock code={codeStore.code1} />
            </div>
          </>
        )
      }
      ,
      function ProjectFc7_3() {
        const codeStore = {
          code1:
            `
// Input.tsx 

const sentenceSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setInputAble(false)
        const userInputData: SentenceUserInputDataTotal = await { // 사용자 입력 데이터
            content: inputSentence,  // 문장 내용
            footnote: inputFootNote,  // 메모 내용 (뒷 이용자에게 전달 할 내용)
            nickname: inputNickname,  // 사용자 닉네임
            password: inputPassword,  // 사용자 비밀번호
            footNoteCheckBox: footNoteCheckBox,  // 메모 남김 여부
            changeParagraph: changeParagraph,  // 문단 변경 여부
        }
        // ★검증절차 시작 (validation.ts) 
        const validationResult: ValidationInputSentenceFucRetrunType = await validationInputSentence(userInputData) 
        if (validationResult.error) { // 에러 리턴 시 
            alert(validationResult.error)  // 에러 알림
        } else { // 검증 문제 없을 시
            const thisBookMode = sentenceCounterSlice.mode; // 끝말잇기 모드냐? / 자유 모드냐
            const afterValidationDate: SentenceUserInputType = validationResult.value // 검증이 끝난 데이터를 변수에 담기
            if (!thisBookMode) { // 끝말 잇기 모드 일 경우 앞 문장 글자 중 마지막 3개의 글자 중 하나와 현재 문장에 첫 글자가 같은지 확인
                const { lastWords } = sentenceCounterSlice;
                const inputFirstWord: string = inputSentence[0]
                if (!lastWords.includes(inputFirstWord) && !sentenceCounterSlice.newStart) { // 첫 글자 틀렸을 때
                    return alert('반드시 \${lastWords} 중 한 글자로 시작하셔야합니다.')
                }
            }
            const sentenceData: addSentencePostSocketInputType = await { // Socket 으로 보낼 데이터 정리 후
                ...afterValidationDate,
                no: sentenceCounterSlice.sentenceCount + 1,
                expression: [0, 0, 0, 0],
                comments: 0,
                writeDate: currentDate,
                paragraph: sentenceCounterSlice.paragraphCount,
                changeParagraph: changeParagraph,
                params: id
            }
            addSentenceSocket(dispatch, sentenceData) // 소켓 처리
            setInputSentece("") // 입력 창 리셋 처리들
            setInputFootNote("")
            setFootNoteCheckBox(false)
            setChangeParagraph(false)
            setInputAble(true)
        }

    }

`
          ,
          code2:
            `
// validation.ts (사용자 입력데이터가 있는 모든 기능은 validation.ts를 통하여 검증이 이루어짐.)

// 문장 검증 함수.

export async function validationInputSentence(validationData: SentenceUserInputDataTotal): Promise<ValidationInputSentenceFucRetrunType> {
    // validationFucNum - 필요 Joi 검증 번호 / validationData - Joi 검증 대상 데이터
    const { footNoteCheckBox, changeParagraph, ...needValidate } = await validationData // 데이터 중 검증이 필요한 데이터를 추출.
    if (!footNoteCheckBox) await delete needValidate.footnote // 이 메모 설정이 꺼져 있다면, 메모 데이터는 없기에 삭제 처리.
    const { error, value } = await inputSentenceValidation.validate(needValidate) // 검증 실행
    return { error, value } // 값 리턴
}


// 검증 (Joi)

const customValidation: CustomValidationType = (value, helpers) => {
    const regex = /[가-힣]+/g
    const afterMatch = value.match(regex);
    const afterJoin = afterMatch ? afterMatch.join('') : '';
    if (afterJoin.length < 4) {
        return helpers.error('string.custom', { massage: '완성형 한글이 최소 5글자 이상 있어야 합니다.' })
    }
    return value;
}
const inputCheckKoreanPattern = /^[^\0-\x1F\x7F-\x9F]*$/;

const inputSentenceValidation = Joi.object({
    content: Joi.string().pattern(inputCheckKoreanPattern).min(5).custom(customValidation, '한글 5글자 이상 여부').required()
        .messages({
            // 'string.pattern.base': '한글 및 숫자 특수기호 (!,.,?) 만 사용가능하며 첫 글자는 한글이여야만 합니다.',
            'string.empty': '입력 값이 비어있습니다. 입력바랍니다.',
            'string.min': '최소 5글자 이상 입력바랍니다.',
            'string.custom': '완성형 한글이 최소 5글자 이상 있어야 합니다.'
        })
    ,
    footnote: Joi.string().pattern(inputCheckKoreanPattern).min(5).optional()
        .messages({
            // 'string.pattern.base': '한글 및 숫자 특수기호 (!,.,?) 만 사용가능하며 첫 글자는 한글이여야만 합니다.',
            'string.empty': '입력 값이 비어있습니다. 입력바랍니다.',
            'string.min': '최소 5글자 이상 입력바랍니다.'
        }),
    nickname: Joi.string().min(2).max(8).required()
        .messages({
            'string.empty': '닉네임은 2글자 ~ 8글자 사이로 입력바랍니다.',
            'string.min': '닉네임은 2글자 ~ 8글자 사이로 입력바랍니다.',
            'string.max': '닉네임은 2글자 ~ 8글자 사이로 입력바랍니다.'
        })
    ,
    password: Joi.string().min(4).max(8).required()
        .messages({
            'string.empty': '비밀번호는 2글자 ~ 8글자 사이로 입력바랍니다.',
            'string.min': '비밀번호는 4글자 ~ 8글자 사이로 입력바랍니다.',
            'string.max': '비밀번호는 4글자 ~ 8글자 사이로 입력바랍니다.'
        })
})
`
          ,
          code3:
            `
// SocketAction.ts 

export const addSentenceSocket = (dispatch: AppDispatch, sentenceData: addSentencePostSocketInputType) => {
    //  데이터 전송
    socket.emit('addSentence', {
    ...sentenceData
    })
    // 응답처리
    // 성공
    socket.on('addSentenceResult', (resData) => {
        const { sentenceResData, counterResData } = resData
        dispatch(serverToCounter(counterResData))
        dispatch(serverToSentence(sentenceResData))
    })
    // 실패
    socket.on('addSentenceError', (message) => {
        console.log(message)
    })
    socket.on('addSentenceServerErorr', (message) => {
        console.log(message)
    })
}
`
        }

        return (
          <>
            <div className='functionName'>
              <h6>문장 입력시 검증과 Socket</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                사용자가 입력 한 데이터는 클라이언트 단계에서 검증 절차를 거친 후, 이상이 없으면 Socket을 통하여 데이터를 등록하도록 하였습니다.
              </p>
              <p>
                -
                검증은 Joi 라이브러리를 통하여 구현하였습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. 이용자가 문장을 입력을 다 하면 등록을 누르면 다음과 같은 절차가 실행.</p>
              <CodeBlock code={codeStore.code1} />
              <p>2. 검증 절차는 다음과 같이 실행.</p>
              <CodeBlock code={codeStore.code2} />
              <p>3. 검증이 끝나면 Socket을 통하여 서버로 전송 실행.</p>
              <CodeBlock code={codeStore.code3} />
            </div>
            <div className='functionThinking'>
              <h6>데이터 검증 어디서 ?</h6>
              <p>서버와 DB를 배우고 난 시점부터 지금까지 고민중인 사항. "클라이언트와 서버 어디서 검증절차를 해야 합리적일까?"</p>
              <p>- 이 프로젝트는 클라이언트에서만 검증 절차 실행.</p>
              <p>- 양 쪽에서 모두 검증 절차를 하는 것이 맞다고 생각은 하나, 그와 같이 굳이 라는 생각이 들기도 함.</p>
              <p>- 한 쪽에서만 한다면 서버에서 하는게 맞다고 생각은 하지만 누군가 왜 그렇게 생각하는지 근거를 바탕으로 설명을 하라고 하면 어려울 것 같음.</p>
              <p>- 검증 관련하여 어떠한 문제들이 발생 할 수 있는지 공부가 필요.</p>
            </div>

          </>
        )
      }
      ,
      function ProjectFc7_4() {
        const codeStore = {
          code1:
            `
// Story.tsx 

 <div className="StoryPageWrap" >
            <div className='storyBox flex row'>
                {sentenceStoreSlice.length === 0 ? <EmptyPage pageNumber={1} /> : <> // 문장이 하나도 없다면 EmptyPage 보여주기
                    {new Array(sentenceCounterSlice.paragraphCount).fill("").map((_, idxPara) => // number 타입으로 저장된 문단을 배열로 만들기.
                        <p className='storyParagraph' // 문단은 P 태그로 구성 / 문장은 문단 내 span 태그로 구성
                            key={idxPara}>
                            {sentenceStoreSlice.map((val: SentenceType, idx: number) => {
                                if (val.paragraph !== idxPara + 1) return null; // 현재 문단과 맞는앉는 문장들을 제외
                                return <StorySentence  // 현재 문단과 맞는 문장에 대한 데이터를 하위 component로 전송
                                    key={idx}
                                    sentenceClickFc={sentenceClickFc}
                                    sentenceData={val}
                                    sentenceIndex={idx}
                                />
                            }
                            )}
                        </p>
                    )}
                </>}
            </div>
        </div>
`
        }

        return (
          <>
            <div className='functionName'>
              <h6>문단 구분</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                최고의 소설들은 내용도 내용이지만 단어, 문장, 문단의 구성 또한 좋아야합니다.
              </p>
              <p>
                -
                시공간이 변하거나, 서술 대상이 바뀌거나, 사건이 달라지거나등 소설의 내용에 따라 문단의 변경이 필요하기에 기능을 구현해봤습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. DB에 저장 된 소설책 데이터엔 현재 몇번 째 문단인지 저장. :number </p>
              <p>2. DB에 저장 된 문장 데이터엔 이 문장이 몇번 째 문단에 속해 있는지 저장. :number </p>
              <p>위 두개의 데이터를 가지고 문단 분리.</p>
              <CodeBlock code={codeStore.code1} />
            </div>
          </>
        )
      }
      ,
      function ProjectFc7_5() {
        return (
          <>
            <div className='functionName'>
              <h6>그 외</h6>
            </div>
            <div className='functionThinking'>
              <h6>문장 검색 및 필터 구현</h6>
              <p>소설을 두가지 형태로 볼 수 있도록 구현. "이야기로 보기","기록으로 보기", 기록페이지 내 검색 및 필터 기능 구현</p>
              <p>- 닉네임, 문장, 메모에 대한 검색 기능 구현</p>
              <p>- 10개씩 보기 / 25개씩 보기 / 50개씩 보기 기능 구현</p>
              <p>- 전체문단 보기 / n문단 보기 등 문단 필터 기능 구현</p>
              <p>- 페이지 기능 구현 </p>
            </div>
            <div className='functionThinking'>
              <h6>감정표현 기능 구현</h6>
              <p>"이야기로 보기" 페이지에서 문장을 클릭할 시 / "기록으로 보기" 페이지에서 감정표현 기능 가능</p>
              <p>- 불특정다수가 빠르게 감정표현 할 수 있다고 예상, 이용자가 감정표현시 Slice에 저장된 값을 선 처리</p>
              <p>- 이후 서버처리를 구현, 만약 서버에서 에러가 뜰 경우, Slice 값을 다시 마이너스 처리</p>
            </div>
            <div className='functionThinking'>
              <h6>끝말잇기 기능 구현</h6>
              <p>앞 선 이용자가 남긴 문장 중 뒤에서 3글자(완성형 한글)로 시작해야하는 기능을 구현</p>
              <p>- 문단의 첫 문장을 작성하는 이용자는 자유롭게 가능, 그 외엔 끝말잇기 형식을 구현</p>
              <p>- 종결어미로 끝나는 경우가 많아, 끝말잇기모드와 자유모드.. 2가지의 모드 구현</p>
            </div>
          </>
        )
      }
    ]
})

let Project6Function = createSlice({
  name: 'Project6Function',
  initialState:
    [
      function ProjectFc6_1() {
        const codeStore = {
          code1:
            `
    // 프론트
    // Team_admin.tsx 내 Teampostadminmember_div 컴포넌트
    // 사용자가 거절 버튼을 클릭 했을 때 HTTP 요청부터 설명
    
async function submit_join_management_adminM(decision: boolean) {
        // decision = true 가입수락  / false 가입 거절
        fetch('/api/post/teamamin/member/decision/join/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                decision: decision,
                user_id: memberdata?.user_id,
                member_id: memberdata?._id
            })
        }).then((res) => {
            if (res.ok) {  // 응답이 200번대 일 때
                return res.json()
            } else {
                return res.json().then((err) => { // 에러가 발생 했을 때
                    const error = new Error(err.message);
                    err.status = res.status;
                    throw error
                })
            }
        }).then(async (res) => {
            if (res.success) { // 잘 처리 됬을 때
                await changeCheck()
                await setModal_adminM(false)
                return;
            } else { // ★★ 에러는 발생하지 않았지만 무언가 문제가 있을 때
                console.log(res)
                return;
            }
        }).catch((err) => {
            console.error('오류코드 \${err.status} = ' + err);
        })
    }
            `
          ,
          code2:
            `

          // 서버
          // post.js 내 teamadmin 관련 API 내
          
router.post('/teamamin/member/decision/join/:id', myrating_onteam, async (req, res) => {
    try {
        // 미들웨어 myrating_onteam으로 현재 접속자가 팀 내 등급을 확인 후 myrating에 담았고, 현재 유저가 이 팀의 관리자가 맞는지 확인 (아래 1줄)
        if (req.myrating !== 1) return res.status(200).send({ success: false, false_code: 5, message: '권한없음 -> false_code : 5' })  
        const { decision, user_id, member_id } = await req.body  // 클라이언트에서 보낸 데이터 변수 명으로 구조 할당
        const req_params = req.params.id // params.id 는 팀 DB 내 고유 데이터인 _id 입니다.
        const join_user_data = await db.collection('user').findOne({ _id: new ObjectId(user_id) }) // 신청 유저 데이터 변수 할당
        const join_team_data = await db.collection('team').findOne({ url: req_params }) // 팀 데이터 변수 할당
        // 클라이언트가 보낸 데이터와 맞는 유저/ 팀데이터가 없으면 예외 처리. (200번대로 성공 보낸 후, 데이터 내 success로 성공여부 구분) (아래 2줄)
        if (!join_user_data) return res.status(200).send({ success: false, false_code: 4, message: '신청자 id가 user db에 없음 -> false_code : 5' })
        if (!join_team_data) return res.status(200).send({ success: false, false_code: 4, message: 'params id가 team db에 없음 -> false_code : 5' })
        const join_member_data = await db.collection('member').findOne({ // 유저가 신청한 데이터가 있는지
            _id: new ObjectId(member_id),
            team_id: new ObjectId(join_team_data._id),
            user_id: new ObjectId(join_user_data._id)
        })
        // 유저가 신청한 데이터가 없으면 예외처리 (아래 1줄)
        if (!join_member_data) return res.status(200).send({ success: false, false_code: 4, message: 'user/team/member 데이터가 일치 되는 게 없음. -> false_code : 5' })
        let user_team = await join_user_data.team // 유저 데이터 내 현재 팀 데이터가 있는지 (유저는 2개의 팀만 가입가능/ 팀 신청 상태도 일단 데이터가 입력되어 있음)
        if (join_user_data && user_team) {
            for (const key in user_team) {
                if (JSON.stringify(user_team[key]) === JSON.stringify(join_team_data._id)) {
                    user_team[key] = null
                    break;
                }
            }
        }
        var notificationText_summary;  // 알림 내용 (요약) 변수 생성
        var notificationText; // 알림 내용 변수 생성
        if (decision) { // 승낙 시 알림 내용
            notificationText_summary = await '[팀] 가입 신청이 수락되었습니다.'
            notificationText = await '[ 팀 \${join_team_data.name}] 가입 신청이 수락되었습니다.'
        } else if (!decision) { // 거절 시 알림 내용
            notificationText_summary = await '[팀] 가입 신청이 거절되었습니다.'
            notificationText = await '[ 팀 \${join_team_data.name}] 가입 신청이 거절되었습니다.'
        }

        const session = await forTransaction.startSession() // 트랜잭션을 위한 섹션 
        const work_for_db = decision ? // 승낙 / 거절에 맞게 트랜잭션 실행
            await join_accept_transaction(join_member_data, [notificationText_summary, notificationText], session) :
            await join_reject_transaction(join_member_data, user_team, [notificationText_summary, notificationText], session);

        if (work_for_db && decision) { // 트랜잭션 완료시 (승낙)
            return res.status(200).send({ success: true, message: '수락완료' })
        } else if (work_for_db && !decision) { // 트랜잭션 완료시 (거절)
            return res.status(200).send({ success: true, message: '거절완료' })
        }
        return res.status(200).send({ success: false, message: '뭔가이상' }) // 트랙잭션이 작동 안했고, 그대로 코드가 마지막 줄 까지 실행 될 경우
    } catch (err) {
        console.log('Router [/teamamin/member/decision/join] catch')
        console.log(err)
    }
})
          `
          ,
          code3:
            `
          // 서버
          // post.js 내 teamadmin 관련 API 내
          // 트랜잭션 Callback,Core 두 가지 방식 중 콜백방식으로 구현

async function join_reject_transaction(join_member_data, user_team, notificationText, session) {
    try {
        const transaction_result = await session.withTransaction(async () => {
            const work1 = await db.collection('team').updateOne(  // 작업 1 - team 콜렉션 내 해당 팀 정보 수정
                { _id: new ObjectId(join_member_data.team_id) },
                {
                    $inc: {
                        member_count: -1
                    }
                }, { session })
            if (await work1.modifiedCount !== 1) {  // 작업 1 실행 여부 체크 (문제 있으면 에러생성)
                throw new Error('work1')
            }
            const work2 = await db.collection('user').updateOne( // 작업 2 - user 콜렉션 내 해당 유저 정보 수정
                { _id: new ObjectId(join_member_data.user_id) },
                {
                    $set: { team: user_team }
                }, { session })
            if (await work2.modifiedCount !== 1) {  // 작업 2 실행 여부 체크 (문제 있으면 에러생성)
                throw new Error('work2')
            }
            const work3 = await db.collection('member')  // 작업 3 - member 콜렉션 내 해당 팀-유저 정보 수정
                .updateOne({ _id: new ObjectId(join_member_data._id) },
                    {
                        $set: {
                            withdrawal: true,
                            withdrawal_reason: 1,
                        },
                        $unset: {
                            application_date: "",
                            join_date: "",
                            member_rating: "",
                            confirm: ""
                        }
                    }, { session })
            if (await work3.modifiedCount !== 1) {   // 작업 3 실행 여부 체크 (문제 있으면 에러생성)
                throw new Error('work3')
            }
            const work4 = await db.collection('notification_user')  // 작업 4 - 유저에게 보낼 알림 데이터 생성
                .insertOne({
                    recevie_id: new ObjectId(join_member_data.user_id),
                    send_id: new ObjectId(join_member_data.team_id),
                    major_category: 1,
                    sub_category: 3,
                    note: notificationText,
                    Notification_date: moment().format('YYYY-MM-DD HH:mm'),
                    confirm: false,
                    type: 'user'
                }, { session })
            if (await !work4.acknowledged) {   // 작업 4 실행 여부 체크 (문제 있으면 에러생성)
                throw new Error('work4')
            }
        })
        return transaction_result;
    } catch (err) {
        console.log('function [join_reject_transaction] catch')
        throw err
    }
}
        `
        }

        return (
          <>
            <div className='functionName'>
              <h6>Transaction</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                한번의 HTTP 요청으로 인하여 2개 이상의 DB데이터가 변경 시, 잘못된 데이터 저장을 막고자 Transaction을 사용 (MongoDB 내 Sesstion)
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>*** 총 12개의 Transaction 작업 중 한 개의 코드를 가지고 설명.</p>
              <p>*** ex) 팀 가입을 신청 하였으나, 팀 관리자가 거절 할 경우 </p>
              <p>1. [프론트] 다음과 같은 HTTP요청이 실행. 사용자 정보와 함께 수락/거절 여부를 같이 전송</p>
              <p>* 에러가 발생하진 않았지만 설정된 데이터에서 벗어난 예외 상황이 생겼을 때, 응답은 200으로 하고, 데이터 내 'success' 라는 value로 예외를 처리.</p>
              <CodeBlock code={codeStore.code1} />
              <p>2. [서버] 다음과 같은 HTTP요청이 실행. 사용자 정보와 함께 수락/거절 여부를 같이 전송</p>
              <CodeBlock code={codeStore.code2} />
              <p>3. [서버] 거절 트랜잭션 작동 </p>
              <CodeBlock code={codeStore.code3} />
            </div>
            <div className='functionThinking'>
              <h6>트랜잭션의 방식 ?</h6>
              <p>MongoDB 의 트랜잭션의 방식은 Callback과 Core 방식이 있다. </p>
              <p>- 각 방식의 특징과 장단점은 아직 잘 파악하지 못했지만 콜백방식은 오래된 만큼 잘 쓰이지 않고 Core(async/await)방식이 주로 사용된다고 함.</p>
              <p>- Core방식으로 구현을 하기 위해 약 2일정도 노력을 했지만 알수 없는 오류로 인하여 결국 Callback 방식으로 구현 함</p>
              <p>- 프로젝트7번 tagword 에서는 Core방식의 트랙잭션을 사용 함</p>
            </div>
            <div className='functionThinking'>
              <h6>에러처리의 방법 ?</h6>
              <p>- 데이터가 이상 할 경우, 에러 생성으로 예외 처리를 하지 않고. 200번대 응답과 데이터를 보낼 때 success 안에 성공여부를 담아서 보냈음</p>
              <p>- 위와 같이 처리를 한 이유는, 데이터 관련 예외사항은 에러발생과 / 데이터로 예외체크랑 크게 다르지 않다고 생각하기 때문</p>
              <p>- 실무에서는 어떻게 하는지, 공부가 필요 하다고 생각</p>
            </div>
          </>
        )
      }
      ,
      function ProjectFc6_2() {
        const codeStore = {
          code1:
            `
// Post.tsx 내 Kakao component

function Kakao(props: KakaoProps) {
    type stadiummapType = {
        name: string; // 경기장 지도
        lat: number;  // 경기장 위도
        lon: number;  // 경기장 경도
        id: number;  // 카카오 맵상 해당 위치 ID 
    };
    let stadiumMap: stadiummapType[] = [  // 10가지 경기장을 지정 해놨음. 
        { name: '위즈파크', lat: 37.29967438659638, lon: 127.00980136384605, id: 17577962 },
        { name: '잠실야구장', lat: 37.51205948260811, lon: 127.07190263259021, id: 20740490 },
        { name: "랜더스필드", lat: 37.436899633771745, lon: 126.69329912761006, id: 8053130 },
        { name: '사직야구장', lat: 35.19397929487557, lon: 129.06167478845023, id: 8396881 },
        { name: '고척스카이돔', lat: 37.49823485357189, lon: 126.86719636030573, id: 7890664 },
        { name: '엔씨파크', lat: 35.22274249291124, lon: 128.5821497207587, id: 26542435 },
        { name: '챔피언스필드', lat: 35.1681393644369, lon: 126.88910941215897, id: 21755436 },
        { name: '이글스파크', lat: 36.31706721430381, lon: 127.42908737853345, id: 8131581 },
        { name: '라이온즈파크', lat: 35.84102725825763, lon: 128.6815209789601, id: 12864272 }
    ]
    let stadium = stadiumMap.filter((a) => a.name === props.stadium)
    let [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
    }, [])
    useEffect(() => {
        if (loading) {
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(stadium[0]?.lat, stadium[0]?.lon),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
        }
    }, [loading, stadium])
    return (
        <>
            <div id="map" style={{ width: '100%', aspectRatio: '1/0.8' }} onClick={() => {
                window.open('https://map.kakao.com/link/to/\${stadium[0].id}'); //  클릭시 새창으로 해당 경기장 길찾기
            }}></div >
        </>
    )
};

`
        }

        return (
          <>
            <div className='functionName'>
              <h6>KakaoMap API (외부 API)</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                야구 경기장의 위치를 쉽고 빠르게 알릴 수 있는 방법이 무엇이 있을까 생각을 하다가, KAKAO MAP을 사용하기로 결정했습니다.
              </p>
              <p>
                -
                사용자가 입력 한 경기장을 자유롭게 보여주고 싶었지만, 아직 공부가 부족하여 경기장 10개를 지정하여 구현하였습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. Kakao API 페이지를 통하여 필요한 설치 작업 진행.</p>
              <p>2. 안내에 따라 Kakao Map component 작성</p>
              <CodeBlock code={codeStore.code1} />
            </div>
          </>
        )
      }
      ,
      function ProjectFc6_3() {
        const codeStore = {
          code1:
            `
// Calender.tsx 내

<div className='CalenderMypage-wrap'> // 캘린터 컴포넌트 내 JSX.element 구문 
            <Calendar  // React-calender
                onChange={onChange}
                value={value}
                formatDay={(locale, date) => moment(date).format("D")}
                minDetail="year"
                maxDetail="month"
                tileContent={({ date, view }) => {
                    // calendarType / 1 -> 내가만든 경기 / 2 -> 참여경기 (확정) / 3 -> 참여경기 (미확)등 구분할 수 있는 데이터가 있음.
                    var dailySchedule = schedule?.filter(x => moment(x.date).format() === moment(date).format()) // 월 단위, 데이터(일정)과 date가 일치 하는 게 있는지
                    if (dailySchedule?.length === 0) return; // 없으면 아무것도 리턴하지 않는다.
                    return <div className='calendar-dot-wrap'> // 있다면 분류에 따라 파란색,초록색,빨간색의 작은 원으로 표기한다.
                        {dailySchedule?.map((val, idx) => {
                            return <div
                                key={idx}
                                className='calendar-dot'
                                style={{ background: val.calendartype === 1 ? "blue" : val.calendartype === 2 ? "green" : "red" }} />
                        })}
                    </div>
                }}
                onClickDay={async (value) => { // 달력에서 해당 날짜 클릭 시
                    if (schedule === undefined) return // 클릭한 날짜와 맞는 데이터(일정)이 없다면 리턴;
                    const clickDay = schedule?.filter((x) => moment(x.date).isSame(value)) // 클릭한 날짜와 맞는 데이터가 있다면
                    setScheduleSelect(clickDay)  // State에 담기.
                }}
            />
            <div className='calender-schedule'>
                <div className='schedule-title'>
                    <h5>{selectDate} 일정</h5>
                </div>
                <div className='schedule-body'>  // 사용자가 달력을 통하여 선택한 날짜와 맞는 데이터(일정)에 따라
                    {scheduleSelect.length === 0 ? <> // 일정이 없을 시
                        <div className='schedule-section'>
                            <div className='section-info'>
                                <p>해당 날짜엔 일정이 없습니다.</p> // 없다는 문구를 띄어줌
                            </div>
                        </div>
                    </> : <>
                        {scheduleSelect.map((val, idx) => { // 일정이 있을 시 map을 통하여 모든 일정 정보를 띄어줌
                            return (
                                <div key={idx} className='schedule-section'>
                                    <div className='section-data'>
                                        <div className='dot'
                                            style={{ background: val.calendartype === 1 ? "blue" : val.calendartype === 2 ? "green" : "red" }}
                                        />
                                        <p>{val.date}</p>
                                        <p>{val.time}</p>
                                        <p>{val.stadium}</p>
                                    </div>
                                    <div className='section-link'>
                                        <p 
                                        className='pointer'
                                        onClick={() => {
                                            navigate('/guestpost/' + val._id)
                                        }}>이동</p> // 그 일정과 관련된 페이지로 이동 기능도 구현
                                    </div>
                                </div>
                            )
                        })}
                    </>}
                </div>
            </div>
        </div>

`
        }

        return (
          <>
            <div className='functionName'>
              <h6>React-calender</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                이용자의 일정을 React-calender 를 사용, 달력 형태로 한 눈에 스케쥴을 볼 수 있도록 하였습니다.
              </p>
              <p>
                -
                확정 일정 (내가 모집한 경기 / 신청한 경기) , 미확정 일정 (신청 대기중인 경기)등 분류에 따라 다르게 표기하여 정보확인을 쉽게 할 수 있도록 하였습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. 이용자가 경기를 만들거나, 신청한 경기 데이터를 서버에서 받아 온 후 react-calender를 통해 표기.</p>
              <CodeBlock code={codeStore.code1} />
            </div>

            <div className='functionThinking'>
              <h6>기능을 만드는 것도 좋지만, 이미 있는 라이브러리들을 통해서 기능 구현이 더 합리적이다 ?</h6>
              <p>- 달력 형태에 UI를 직접 만들어, 직접 일정을 배분 하려고 하였으나.. 약간 어려움을 겪어 방법을 찾던 중 라이브러리를 발견.</p>
              <p>- 라이브러리를 가져와서 프로젝트와 맞게 디자인 수정과 기능을 추가하여 사용.</p>
              <p>- 다른 사용자가 만든 많은 기능들을 사용해본 경험도 좋은 경험일 듯.</p>
            </div>

          </>
        )
      }
      ,
      function ProjectFc6_4() {
        const codeStore = {
          code1:
            `
// Middlewear.js (서버) 

 1. 사용자가 로그인 상태인지 확인하는 미들웨어
 async function check_login(req, res, next) { // passport 기능을 활용하여 res 내 user 데이터 여부로 로그인 체크
    if (req.user) { // 로그인이라면
        next() // API 실행
        return
    } else { // 로그인이 아니라면
        res.status(200).send({ success: false, false_code: 1, message: "로그인 안됨" }) // 예외처리
        return
    }
}
  2. 현재 이용자가 클라이언트에서 보내주는 팀 내에서 어떤 등급인지
  // 팀 게시물과 관리자페이지 접속시 uesEffect로 실행 되며, 상황에 맞는 API마다 장착되어 있습니다.
  // 만약 팀 등급에 따라서 예외처리가 필요한 경우는 API 단계에서 처리를 합니다. (이 미들웨어는 단지 현재 이용자가 해당 팀 내 등급이 몇인지만 확인 해주는 용도)
async function myrating_onteam(req, res, next) {
    try {
        const req_params = await req.params.id // 클라이언트에서 Params에 담아서 보낸 팀 데이터 변수 할당
        const team_data = await db.collection('team').findOne({ url: req_params }) // 데이터에 맞는 팀이 있는지 확인
        if (!team_data) return res.status(200).send({ success: false, false_code: 4, message: 'url 해당되는 자료 없음 -> false_code : 4' }) // 팀이 없을 경우 예외처리
        const user = await db.collection('user').findOne({ _id: new ObjectId(req.user?._id) }) // 현재 이용자 데이터를 변수 할당
        if (!user) return next(); // 비로그인일때 예외 처리
        const user_team_check = await Object.values(user.team).some(val => val?.equals(team_data?._id)) // 이용자 데이터 내 팀 정보가 있는지
        if (!user_team_check) return next(); // 이용자 데이터 내 해당 팀 데이터가 없다면 그냥 next 처리   ☆★- 이 과정으로 해당 팀과 관련 없다는 걸 체크
        const member_check = await db.collection('member').findOne({ // member 콜렉션에 혹시 현재이용자-해당팀 데이터가 있는지
            team_id: new ObjectId(team_data._id), // 해당 팀 _id
            user_id: new ObjectId(user._id), // 현재 이용자 _id
            member_rating: { $exists: true } // 등급 데이터 존재 여부
            
         //   ** DB 유저 데이터 내 팀 정보는 {team1 : string , team2: stirng } 구조로 되어있으며, string 값엔 해당 팀의 _id 가 들어갑니다. 
         //   ** 정확한 팀 가입여부를 확인 하려면 member 콜렉션 내 데이터를 확인 해야합니다.
         //   ** 팀에 가입되 있다면 member 콜렉션 내 데이터가 존재
         //   ** 이 과정은 혹시라도 member 콜렉션 내 데이터와 해당 이용자 user 데이터 내 데이터가 서로 맞지 않을 경우를 방지하고자 만들었습니다.

        }) // member 콜렉션과 user 콜렉션 내 해당 이용자 / 해당 팀 정보 일치 여부 확인
        if (!member_check) return log('이 경우에는 user,member DB간 서로 데이터가 안맞는다 큰일이다;;') // 만약 안 맞는 경우 서버에서 일단 체크 할 수 있도록

        // 아무 문제 없다면
        req.myrating = await member_check.member_rating // 팀내 등급 데이터를 담아서 1-팀장 2-매니저 3-일반회원 4-가입대기자
        return next(); // API 실행
    } catch (err) {
        console.log('middleware [myrating_onteam] catch')
        console.log(err)
    }
}
  3. 게스트(용병)모집 게시물 접속 시, 작성자 여부 확인
  //게스트모집 관리자 페이지 접속 시 useEffect로 실행이 되며, 그 안에서 이루어지는 모든 HTTP요청으로 실행되는 API에 장착되어 있습니다.
async function gusetpost_writercheck(req, res, next) {
    try {
        const req_params = await req.params.id; // 게스트모집 게시물에 대한 데이터를 변수 할당
        if (!ObjectId.isValid(req_params)) return res.status(200).send({ success: false, false_code: 4, message: 'id에 맞는 게시물데이터 없음 -> false_code : 5' }) 
        // (윗 줄) 사용자가 임의로 주소를 치고 들어 올 경우를 생각하여 new ObjectId 형식과 다르면 그냥 예외처리를 하였습니다. 
        const guest_post = await db.collection('guest_post').findOne({ _id: new ObjectId(req_params) }) // 게스트모집 게시물 데이터 변수 할당
        const user = await db.collection('user').findOne({ _id: new ObjectId(req.user._id) }) // 현재 이용자 데이터 변수 할당
        const guest_write_id = await guest_post?.writer_id // 게시물 데이터 내 저장된 작성자와 현재 이용자의 데이터가 일치하는지
        if (!user) return res.status(200).send({ success: false, false_code: 1, message: '비로그인 -> false_code : 5' }) // 비로그인 예외처리
        if (!guest_post) return res.status(200).send({ success: false, false_code: 4, message: 'id에 맞는 게시물데이터 없음 -> false_code : 5' }) // 게시물이 없다면 예외처리
        if (!guest_write_id.equals(user._id)) return res.status(200).send({ success: false, false_code: 5, message: '권한없음 -> false_code : 5' }) // 작성자 = 현이용자 다르면 예외처리
        next()
        return
    } catch (err) {
        console.log('middleware [gusetpost_writercheck] catch')
        console.log(err)
    }
}

   4. 자유게시판 접속시 이루어지는 데이터 변경
   // 이 미들웨어는 다른 미들웨어와 다른 용도인 데이터를 체크 후 변경하는 용도인 미들웨어입니다.
   // 자유게시판 내 게시물 접속시 게시물 데이터를 가져오는 API 전에 작동하는 미들웨어
async function bulletin_LikeComment_check(req, res, next) {
    try {
        const req_params = req.params.id // 자유게시판 게시물에 대한 데이터를 변수 할당.
        if (!ObjectId.isValid(req_params)) return res.status(200).send({ success: false, false_code: 4, message: 'id에 맞는 게시물데이터 없음 -> false_code : 4' })
        // (윗 줄) 사용자가 임의로 주소를 치고 들어 올 경우를 생각하여 new ObjectId 형식과 다르면 그냥 예외처리를 하였습니다. 

        const check_post = await db.collection('bulletin_post').findOne({ _id: new ObjectId(req_params) }) // 데이터와 맞는 게시물데이터 변수 할당
        if (!check_post) return res.status(200).send({ success: false, false_code: 4, message: 'id에 맞는 게시물데이터 없음 -> false_code : 4' }) // 게시물 데이터가 없다면 예외처리
        const thisPostLikeCount = await db.collection('bulletin').findOne({ post_id: new ObjectId(req_params) }, { projection: { _id: 0, post_id: 0 } })
        // (윗 줄) bulletin 콜렉션 내 저장 된 좋아요 및 댓글 정보 다 가져오기.  (좋아요를 한 유저 정보와 댓글 관련 정보는 다른 콜렉션에서 관리됨)
        const values = await Object.values(thisPostLikeCount)
        let likeNum = 0;
        for (var i = 0; i < values.length; i++) {
            if (values[i]) likeNum++
        } // 좋아요 수 확인
        const ThisPostCommentToArray = await db.collection('bulletin_comment') // 댓글 수 확인
            .find({ post_id: new ObjectId(req_params) })
            .sort({ writer_time: -1 })
            .toArray() 

        req.comment = await ThisPostCommentToArray.length 댓글 수를 req에 저장
        req.like = await likeNum; 좋아요 수를 req에 저장
        return next() api 넘기기
    } catch (err) {
        console.log('middleware [bulletin_LikeComment_check] catch')
        console.log(err)
    }
}
`
        }

        return (
          <>
            <div className='functionName'>
              <h6>Middlewear</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                API작동시 중복으로 여러번 사용되는 기능은 Middlewear로 묶어서 사용을 하였습니다.
              </p>
              <p>
                -
                총 4가지의 미들웨어가 있으며 간단히 설명해보겠습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>설명</h6>
              <p>** 각각의 코드 옆에 주석으로 설명하겠습니다.</p>
              <CodeBlock code={codeStore.code1} />
            </div>
            <div className='functionThinking'>
              <h6>DB, API 디자인이 좋았다면 ?</h6>
              <p>- 기획 단계에서 DB데이터 , API등의 디자인을 확실히 생각하고 들어갔다면, 맨 아래와 같은 미들웨어는 없어도 될 미들웨어라고 생각.</p>
              <p>- 미들웨어를 완전 소분화 하면 어떨까 고민. component나 기능 function 및 파일 구조등 세분화를 하면 할 수록 관리가 편하다는 거를 느꼈기에 미들웨어는 어떨까 고민</p>
            </div>
          </>
        )
      }
      ,
      function ProjectFc6_5() {
        return (
          <>
            <div className='functionName'>
              <h6>그 외1</h6>
            </div>
            <div className='functionThinking'>
              <h6>회원가입 및 로그인 구현</h6>
              <p>- 사용자 입력 데이터를 클라이언트에서 검증을 한 후 이상이 있으면 useState 변경을 통해 사용자에게 css animation 과 text로 재 입력 요구 기능.</p>
              <p>- 입력 데이터가 이상이 없으면 Post 요청을 통하여 아이디 및 닉네임 중복 확인을 한 후 중복데이터가 있을 시 text 로 재 입력 요구 기능.</p>
              <p>- 서식 및 중복 검증에 이상이 없으면 Post 요청을 통하여 Passport를 통해 가입을 진행, 비밀번호는 bcrypt 라이브러리를 통하여 보안성 증대.</p>
            </div>
            <div className='functionThinking'>
              <h6>게스트(모집 글 작성 시)</h6>
              <p>- 작성 버튼 클릭 시 & 작성 페이지 마운트 시 서버로 로그인 상태인지 확인 후 비 로그인 상태면 로그인 창으로 이동 기능 구현.</p>
              <p>- Input(text) 내 줄이 추가 될때마다 높이가 자동으로 조정 되는 기능 구현 ( 트위터 방식 ).</p>
              <p>- Input(time) 오늘 기준으로 이전 날짜로 경기 일자를 설정하면 막는 기능 구현.</p>
              <p>- select 선택에 따라 다른 select 내 option 조정 기능 구현 (예)모집성별이 여성일 경우 - 모집실력은 최대 2부까지로 제한 등등.</p>
              <p>- 이미 선택한 select가 다른 select에 의하여 선택 할 수 없는 경우엔 value 를 강제적으로 초기화를 하여 잘못된 입력을 막는 기능 구현.</p>
              <p>- 사용자 입력 데이터를 클라이언트에서 검증을 한 후 이상이 있으면 useState 변경을 통해 사용자에게 text로 재 입력 요구 기능.</p>
              <br />
              <h6>게시판 내 필터 기능</h6>
              <p>- 기본 정렬값은 서버에서 find().sort().toArray()를 통해 기본 정렬 구현 (정렬1:모집중/종료 | 정렬2:경기시간).</p>
              <p>- 필터 내 일자는 전체보기와 시작일(오늘) 기준으로 + 2주까지 필터 설정 구현 (state와 Moment 기능내 add기능을 통해 구현).</p>
              <p>- 위치,포지션,레벨등 필터 구현. 2개 항목 이상에서 필터를 실행 할 경우 모두 해당되는 게시물 출력되게 구현.</p>
              <p>- 위치,포지션,레벨등 필터 실행 상태에서 날짜 필터까지 변경을 하더라도 기존 필터가 무너지지 않고 자연스레 적용되어 사용자의 불편을 줄이고자 함.</p>
              <p>- 위와 반대로 필터를 하나씩 종료를 해도 남아 있는 필터는 적용이 되도록 구현.</p>
              <br />
              <h6>게스트 모집 포스트 페이지 내</h6>
              <p>- 비로그인시 지원을 막아 잘못된 데이터가 저장 되는 경우를 막고, 로그인 상태에선 하나 이상의 포지션을 선택 해야지만 지원이 가능 기능 구현.</p>
              <p>- 게스트 신청 시 사용자가 희망하는 포지션을 중복 클릭하여 지원 할 수 있는 기능과 해당 포지션이 이미 구인이 끝난 경우 지원을 막는 기능 구현.</p>
              <p>- 로그인 상태인 유저가 페이지 진입하면 관리자,지원중인유저 인지 확인 후 상황에 맞게 버튼을 바꿔 잘못된 지원을 막는 기능 구현.</p>
              <br />
              <h6>게스트 모집 관리자 페이지 내</h6>
              <p>- 신청현황 과 확정인원으로 구분 짓고 현재 해당되는 인원이 몇 명인지 포지션 별로 몇 건/ 몇 명중에 몇 명이 구인 됬는지 표기.</p>
              <p>- styled-components를 사용하여 현재 유저가 신청 한 포지션에 따라 background-color 를 자동으로 설정 기능 구현.</p>
              <p>- 5명 단위로 끊어서 분할 하여 나눠서 확인 할 수 있도록 기능 구현 (신청 현황 밑 현재페이지와 페이지 번호).</p>
              <p>- 신청현황/확정인원 제목 밑 포지션 클릭 시 해당 포지션 유저만 보이게 필터 기능 구현.</p>
              <p>- 함수를 각각 자식component(신청/확정 인원정보) props로 내려 변동(수락/거절등)이 생길 경우 함수를 통해 확인 후 새로이 데이터를 GET요청을 하여 변동할 수 있도록 함.</p>
              <p>- 한 포지션에서 모집인원만큼 모집을 완료한 경우 해당 포지션은 수락을 막는 기능 구현.</p>
              <p>- 모집 종료시 신청 대기중인원은 자동으로 거절 처리 구현.</p>
            </div>
          </>
        )
      }
      ,
      function ProjectFc6_6() {
        return (
          <>
            <div className='functionName'>
              <h6>그 외2</h6>
            </div>
            <div className='functionThinking'>
              <h6>팀(창단시)</h6>
              <p>- 팀 만들기 버튼 클릭 시 서버로 로그인 상태인지 확인 후 비 로그인 상태면 로그인 창으로 이동 기능 구현.</p>
              <p>- Modal을 통하여 팀 정보를 6단계에 걸쳐서 입력 하도록 함.</p>
              <p>- 팀이름과 URL는 클라이언트에서 서식을 확인 후 서식이 맞다면 서식과 함께 중복여부를 API에서 재 확인을 하여 잘못된 데이터 입력을 방지.</p>
              <p>- 입력 완료시 자동으로 팀 페이지로 이동 기능 구현.</p>
            </div>
            <div className='functionThinking'>
              <h6>팀 페이지 내 </h6>
              <p>- display flex 를 통하여 자연스러운 반응형 페이지 구현.</p>
              <p>- 로그인 상태인 유저가 페이지 진입하면 관리자,지원중인유저 인지 확인 후 상황에 맞게 버튼을 바꿔 잘못된 지원을 막는 기능 구현.</p>
              <br />
              <h6>팀 정보 수정(관리자페이지)</h6>
              <p>- 팀 만들 때 입력했던 모든 데이터를 수정 할 수 있도록 구현.</p>
              <p>- 변경 하고나서 수정 이전에 기존 값으로 되 돌릴 수 있는 원래대로 버튼 구현.</p>
              <p>- 팀 이름과 URL는 팀을 만들 때와 같이 서식 확인 후 중복확인 기능 구현과 모든 부분에서 미 입력된 데이터가 있는지 클라이언트에서 검증 기능 구현.</p>
              <p>- 중복확인 후 바로 update 요청이 이루어지는 방식이 아니기에 중복 체크 이후에는 입력 자체를 막아 잘못된 데이터 저장을 방지 (원래대로/다시변경하기 기능 구현).</p>
              <br />
              <h6>팀원관리 (관리자페이지)</h6>
              <p>- 신청대기 인원이 있을 경우 신청대기 필터 옆에 인원이 보이는 기능 구현.</p>
              <p>- 팀원 데이터 변경 기능 구현(신청대기인원 수락/거절 | 팀원 등급변경/강제탈퇴).</p>
              <p>- 팀원 정렬 기능 구현 (가입일,등급,닉네임).</p>
              <p>- 팀원 검색 기능 구현 (닉네임).</p>
              <br />
              <h6>자유게시판</h6>
              <p>- 게시물 작성 버튼 클릭 시 서버로 로그인 상태인지 확인 후 비 로그인 상태면 로그인 창으로 이동 기능 구현.</p>
              <p>- 자유/후기/질문 말머리를 통해 필터 기능 구현.</p>
              <p>- 페이지 마운드 시 데이터를 가져올 때 조회수+ 기능 구현.</p>
              <p>- 좋아요 기능 구현.</p>
              <p>- 댓글 기능 구현.</p>
              <br />
              <h6>마이페이지</h6>
              <p>- react-calendar 를 통해 나의 일정을 바로 확인 할 수 있는 기능 구현.</p>
              <p>- 알림을 통해 변동사항을 체크 할 수 있도록 하여 사용자의 편의성을 확보.</p>
              <p>- 내가 속한 팀을 메뉴에 배치하여 바로 팀 페이지로 이동 할 수 있도록 편의성을 확보.</p>
              <p>- 신청내역 및 작성 내역을 통해 나의 활동 내역을 확인 가능.</p>
            </div>
          </>
        )
      }
    ]
})

let Project5Function = createSlice({
  name: 'Project5Function',
  initialState:
    [
      function ProjectFc5_1() {
        const codeStore = {
          code1:
            `
    // Login.js 내
    
    useEffect(() => {
        let inputTime;
        if (inputTime) { // 사용자가 입력 시 
            clearTimeout(inputTime) // 클리어 실행
        }
        inputTime = setTimeout(() => { // 사용자가 입력 후 300ms 가 지나면
            formDataExamine(0)  // 검증 절차 실행
        }, 300);
        return () => {
            clearTimeout(inputTime)
        }
    }, [myUserName]) // myUserName 은 사용자가 input을 통해 입력 시 onChange 로 데이터가 변경

 async function formDataExamine(N) { // 검증절차 (매개변수에 따라 검사항목이 달라짐)
        const formData = await [myUserName, myPW1, myNickName] 
        const regex = await [regexEnNum, regexPw, regexKo] // 데이터 검증은 정규식을 통하여 진행
        const text = await ['5 ~ 15자 (영문/숫자)', '영문+숫자+특수문자조합으로 8 ~ 15자', '2 ~ 8자(한글만)']
        if (formData[N]?.length > 0 && regex[N].test(formData[N])) { // 입력 데이터가 맞으면
            const case_ = await [...warningCss]  // 이 데이터는 [string,string,string]
            const case__ = await [...warningText] // 이 데이터는 [string,string,string]
            const case___ = await [...inputCheck] // 이 데이터는 [boolean,boolean,boolean]
            // 위 3개의 데이터는 모두 배열로 구성되어 있으며 배열 내  순서대로 아이디/비밀번호/닉네임 순이다. 

            case_[N] = await "rgba(128, 128, 128, 0.062)" // 문제가 없다면 이 색깔로
            case__[N] = await "" // 문제가 없다면 안내 문구는 빈 상태로
            case___[N] = await true // 문제가 없다면 check은 확인 된 걸로

            await setWarningCss(case_) // state에 다시 저장
            await setWarningText(case__) // state에 다시 저장
            await setInputCheck(case___) // state에 다시 저장

        } else if (formData[N]?.length > 0 && !regex[N].test(formData[N])) {
            const case_ = await [...warningCss]
            const case__ = await [...warningText]
            const case___ = await [...inputCheck]

            case_[N] = await await "rgba(185, 85, 85, 0.421)" // 문제가 있다면 빨간색의 스타일을
            case__[N] = text[N] // 문제가 있다면 거기에 맞는 안내 문구를
            case___[N] = await false // 문제가 있다면 check는 false인걸로

            await setWarningCss(case_)
            await setWarningText(case__)
            await setInputCheck(case___)
        }
    }
       `
        }

        return (
          <>
            <div className='functionName'>
              <h6>즉각적인 데이터 검증</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                사용자 회원가입 시 입력 동시에 데이터 검증 기능을 구현해봤습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. 사용자가 입력하면 300ms초 후 알아서 데이터 검증을 실행.</p>
              <p>2. 문제가 있을 시 입력창 css변경과 안내 문구로 사용자에게 알림.</p>
              <p>3. 문제가 없다면 체킹여부가 true가 되며, 최종 회원가입 시 false가 1개라도 있으면 가입 방지.</p>
              <CodeBlock code={codeStore.code1} />
            </div>
          </>
        )
      }
      ,
      function ProjectFc5_2() {
        const codeStore = {
          code1:
            `
// Login.js 내 

        state checkBox type은 기본값은 배열만 존재, 체크 하면 배열 내 checkBox 이름이 들어감 (stirng[] item 4) 

    function checkBoxAll(e) { // 전체 동의 클릭시
        e.target.checked
            ? setCheckBox(["checkBox1", "checkBox2", "checkBox3", "checkBox4"]) // 배열 내 모든 checkbox 이름 넣거나
            : setCheckBox([]) // 배열 비우기
    }

    function changeCheckBox(e) {
        e.target.checked
            ? setCheckBox([...checkBox, e.target.name]) // 배열에 이름 넣기
            : setCheckBox(checkBox.filter((x) => x !== e.target.name)) // 배열내 해당이름 지우기
    }

           <div className='consent' >
                <div>
                    <input type='checkbox' className='checkbox' name="AllCheckBox"
                        onChange={checkBoxAll}
                        checked={checkBox.length === 4 ? true : false}
                    /> <h6>전체 동의 </h6>
                </div>
                <div>
                    <input type='checkbox' className='checkbox' name="checkBox1"
                        onChange={changeCheckBox}
                        checked={checkBox.includes('checkBox1') ? true : false}
                    />
                    <p> 이용약관 동의(필수)</p>
                </div>
                <div>
                    <input type='checkbox' className='checkbox' name="checkBox2"
                        onChange={changeCheckBox}
                        checked={checkBox.includes('checkBox2') ? true : false}
                    />
                    <p> 개인정보 수집 및 이용 동의(필수)</p>
                </div>
                <div>
                    <input type='checkbox' className='checkbox' name="checkBox3"
                        onChange={changeCheckBox}
                        checked={checkBox.includes('checkBox3') ? true : false}
                    />
                    <p> 만 14세 이상(필수)</p>
                </div>
                <div>
                    <input type='checkbox' className='checkbox' name="checkBox4"
                        onChange={changeCheckBox}
                        checked={checkBox.includes('checkBox4') ? true : false}
                    />
                    <p> 이벤트 및 관련 정보 수신(선택)</p>
                </div>
                <div>
                    <p className='x'> 🏷️ 위 동의 사항들은 아무런 의미없는 포트폴리오 구색용입니다.</p>
                </div>
            </div >

`
        }

        return (
          <>
            <div className='functionName'>
              <h6>약관 승낙 체크</h6>
            </div>
            <div className='functionDescription'>
              <p>
                -
                실제 서비스가 되고 있는 대부분의 회원가입을 보면 사이트 약관 동의 여부를 물어봅니다.
              </p>
              <p>
                -
                필수와 선택 / 그리고 전체 동의 버튼을 구현해봤습니다.
              </p>
            </div>
            <div className='functionHow'>
              <h6>구현 방법</h6>
              <p>1. Kakao API 페이지를 통하여 필요한 설치 작업 진행.</p>
              <p>2. 안내에 따라 Kakao Map component 작성</p>
              <CodeBlock code={codeStore.code1} />
            </div>
          </>
        )
      }
      ,
      function ProjectFc5_3() {
        const codeStore = {
          code1:
            `

`
        }

        return (
          <>
            <div className='functionName'>
              <h6>그 외</h6>
            </div>
            <div className='functionThinking'>
              <h6>회원기능 구현</h6>
              <p>- Passport.js 를 통한 회원 기능 구현</p>
            </div>
            <div className='functionThinking'>
              <h6>사용자가 입력한 데이터에 따라 다른 데이터 선택 범위 변경</h6>
              <p>예 ) 응원팀 : A , 상대팀 : B를 골랐을 경우 경기장은 A,B 두 팀의 홈 경기장만 선택 가능 등</p>
            </div>
            <div className='functionThinking'>
              <h6>직관 기록에 따른 통계 페이지 구현</h6>
              <p>승률, 상대전적, 경기장별 승률 등 기능 구현</p>
            </div>
          </>
        )
      }
    ]
})


export default configureStore({
  reducer: {
    ProjectBox: ProjectBox.reducer,
    Project7Function: Project7Function.reducer,
    Project6Function: Project6Function.reducer,
    Project5Function: Project5Function.reducer,
  }
})



