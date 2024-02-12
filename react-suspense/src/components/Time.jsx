
import fetchData from './../api/fetchData';

const resource = fetchData("http://worldtimeapi.org/api/timezone/Asia/Kolkataa");

const Time = () => {
    const data = resource.read();
  return (
    <div>{data.datetime}</div>
  )
}

export default Time