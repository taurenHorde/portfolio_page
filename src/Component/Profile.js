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
                            "Node.js(Express) / MonogoDB"
                        ].map((val, idx) => <div
                            className='profileContentTextSection'
                            key={idx}
                        >
                            <h6>{idx + 1}.{val}</h6>
                        </div>)}
                    </div>
                    <div className='profileContentTextPlus'>
                        <h6>+ Studying</h6>
                        <p>React-Native ,Next.js, 관계형 DB 그리고 CS지식등 공부하고 있습니다.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Profile