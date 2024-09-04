import './../Css/Profile.css';


function Profile() {

    return (
        <div className="ProfileWrap">
            <div className='profileHead'>
                <h4>Profile _</h4>
            </div>
            <div className='profileBody'>

                <div className='profileContent'>
                    <div className='profileContentTitle'>
                        <p>Introduce</p>
                    </div>
                    <div className='profileContentText'>
                        <p>
                            안녕하세요. 새로운 직무 커리어의 시작점에 서 있는 도유현입니다.
                        </p>
                        <p>
                            적지 않은 나이고 비전공자라 이 직무에 내 딛는 첫 걸음이 어려울 수 있다는 점을 알고 있습니다.
                        </p>
                        <p>
                            하지만 포기하지 않고 결승점 까지 도달 한다는 마음가짐을 가지고 배우고 노력하여 조직에 기여 할 수 있도록 하겠습니다.
                        </p>
                    </div>
                </div>

                <div className='profileContent'>
                    <div className='profileContentTitle'>
                        <p>Language Skill</p>
                    </div>
                    <div className='profileContentTextBox'>
                        {[
                            "HTML/CSS",
                            "Javascript",
                            "jQuery",
                            "Typescript",
                            "Vue",
                            "React",
                            "Node.js(Express) / MonogoDB",
                            "React-Native(공부중 / 제작중)"
                        ].map((val, idx) => <div
                            className='profileContentTextSection'
                            key={idx}
                        >
                            <h6>{idx + 1}.{val}</h6>
                        </div>)}
                    </div>
                    <div className='profileContentTextPlus'>
                        <h6>+ Studying</h6>
                        <p>Next.js, 관계형 DB 그리고 CS지식등 공부하고 있습니다.</p>
                    </div>
                </div>

                <div className='profileContent'>
                    <div className='profileContentTitle'>
                        <p>I will</p>
                    </div>
                    <div className='profileContentText'>
                        <p>
                            - 프론트엔드 개발자 희망하며 더 나아가 풀스택 개발자가 될 수 있도록 노력하겠습니다.
                        </p>
                        <p>
                            - 급변하는 개발 시장에 맞쳐 항상 대비, 공부하여 기여 할 수 있는 개발자가 되겠습니다.
                        </p>
                        <p>
                            - 제가 부족한 부분을 알고 있고, 그 부분을 인정하고 있는 만큼 부단히 노력하고 있는 만큼 열심히 하겠습니다.
                        </p>
                    </div>
                </div>
                <div className='profileContent'>
                    <div className='profileContentTitle'>
                        <p>My strength</p>
                    </div>
                    <div className='profileContentText'>
                        <p>
                            - 백엔드(Node.js, Express)를 사용해 서버 생성, API 구축, CRUD 구현, 트랜잭션 설정, 미들웨어 활용, 라우터 분리 등 기본적인 백엔드 기능을 구현할 수 있습니다.
                        </p>
                        <p>
                            - 문서형 DB인 MongoDB를 사용해 데이터 모델링, 데이터 처리 및 관리 작업을 수행할 수 있습니다.
                        </p>
                        <p>
                            - 비록 협업 경험은 없지만, 다양한 직무에서 여러 사람들과 함께 목표를 달성한 경험이 있어, 개발 작업에서도 빠르게 적응할 수 있다고 생각합니다.
                        </p>
                        <p>
                            - 현재 React, Node.js, ES6 등 JavaScript 계열 기술에 집중하고 있으며, 장단점을 깊이 이해하고자 노력하고 있습니다. 다양한 다른 언어를 배워서 JS의 강점과 단점을 파악하여 더 넓은 시각을 가지고 JavaScript 기술을 더욱 잘 활용하고자 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Profile