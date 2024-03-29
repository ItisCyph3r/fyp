import React from "react";
import '../../global.util.css'
import '../../globals.util.css'
import MiniCarousel from "../carousel/minicarousel/minicarousel";

interface Props {
  videoData: any
}

const VideoList: React.FC<Props> = ({ videoData }) => {
  const courseMap = new Map<string, any>();

  // group the videoData array by course
  videoData.forEach((data: any) => {
    if (courseMap.has(data.course)) {
      courseMap.get(data.course)?.push(data);
    } else {
      courseMap.set(data.course, [data]);
    }
  });

  // map each course group to a list of videos
  const courseList = Array.from(courseMap).map(([course, data]) => (
    <div key={course}>
        {/* <h2>{course}</h2> */}
        <div>
            {/* {console.log(data)} */}
            <div className="title">
                <span className="text">{course}</span>
                {/* <span className="text">{data.course}</span> */}
            </div>
            {/* <MiniCarousel data={data}/> */}
            {/* <div className='!bg-red-700'> */}
            <MiniCarousel data={data}/>
            {/* </div> */}
        </div>
      
    </div>
  ));

  return <div>{courseList}</div>;
};

export default VideoList;
