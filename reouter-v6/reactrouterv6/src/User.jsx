import { Link, useParams, useSearchParams } from "react-router-dom"

export default function User(){
    const param = useParams(); // url/rishi
    // console.log(param);
    // console.log(param.name);
    const { name }= useParams();
    const [searchParam, setSearchParam] = useSearchParams(); // url?age=20&name=Raj
    const age = searchParam.get('age');
    const name2 = searchParam.get('name');
    console.log(age);
    console.log(name2);

    return (
        <div>
            <Link to="/about">Go to About us page</Link>
            This is User page... {name} and {param.name}
            <button onClick={()=>{ setSearchParam({filter:"name",code:'4250', name:"Raj",age:25})}}> Set value</button>
        </div>
    )
}