import react,{useState} from "react";

const Assignment=()=>{
    const [search, setSearch] = useState("");
    const details=[
        {id:1,productname:"iphone",price:"3,03,333",customername:"Damon",customerage:"25"},
        {id:2,productname:"Samsung",price:"2,27,345",customername:"Stephan",customerage:"21"},
        {id:3,productname:"Jbl head phones",price:"46,000",customername:"Harry",customerage:"26"},
        {id:4,productname:"Dress",price:"3999",customername:"Elena",customerage:"28"},
        {id:5,productname:"SmartWatch",price:"54577",customername:"Caroline",customerage:"30"},
        {id:6,productname:"Tshirt",price:"1200",customername:"Tobi",customerage:"31"},
        {id:7,productname:"Sneakers",price:"14000",customername:"Scott",customerage:"32"},
        {id:8,productname:"Merch",price:"700",customername:"Ethan",customerage:"34"},
        {id:9,productname:"iphone",price:"98000",customername:"Josh",customerage:"33"},

        
    ];
    const filteredDetails = details.filter((info) =>
        info.productname.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <div>
        <input
                    type="text"
                    placeholder="Search by product name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            <table border="1px">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>product name</th>
                        <th>price</th>
                        <th>customer name</th>
                        <th>customer age</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredDetails.map((info)=>(
                        <tr key ={info.id}>
                            <td>{info.id}</td>
                            <td>{info.productname}</td>
                            <td>{info.price}</td>
                            <td>{info.customername}</td>
                            <td>{info.customerage}</td>
                            
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Assignment;