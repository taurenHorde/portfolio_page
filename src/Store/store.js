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



export default configureStore({
  reducer: {
    ProjectBox: ProjectBox.reducer,
    Project7Function: Project7Function.reducer
  }
}) 