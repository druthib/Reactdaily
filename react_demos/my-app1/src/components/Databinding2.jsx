import react from "react";

const Databinding2=()=>{
    const courseTable=[
        {id:1,name:"py",duration:"2 Months",price:"3333"},
        {id:1,name:"js",duration:"2 Months",price:"9333"},
        {id:1,name:"cloud",duration:"2 Months",price:"8333"},
        
    ];
    return (
        <>
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>duration</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {courseTable.map((course)=>(
                        <tr key ={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.duration}</td>
                            <td>{course.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Databinding2;