import { useSelector } from 'react-redux'
import './../Css/Project.css';


function Project() {
    let projectData = useSelector((state) => state.ProjectBox);

    return (
        <div className="ProjectWrap">
            <div className='projectHead'>
                <h4>Project _</h4>
            </div>
            {/* <div className='projectOption'>
                <p>Filter -</p>
                {[
                    "Javascript",
                    "jQuery",
                    "TypeScript",
                    "Vue",
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "React-native",
                    "MySQL",
                    "MariaDB",
                    "Moment",
                    "React-calender",
                    "Passport",
                    "KakaoMap",
                    "Bootstrap"
                ].map((val, idx) =>
                    <span key={idx}>{val}</span>
                )}
            </div> */}
            <div className='projectContent'>
                {projectData.map((val, idx) => {
                    return (<div
                        className='projectBoxWrap'
                        key={idx}
                        style={{ background: idx === 1 ? 'rgba(255,0,0,0.1)' : 'white' }}
                    >
                        {val()}
                    </div>)
                }
                )}
            </div>
        </div>
    )
}


export default Project


