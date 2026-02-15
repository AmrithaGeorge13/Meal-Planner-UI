import Button from "../components/common/Button.jsx";
import Input from "../components/common/Input.jsx";
import {useState} from "react";

function HomePage() {
    const [name,setName] = useState('');
    const handleClick = () => {
        alert('created '+name+ ' household');
    }

    return (<div>
        <h1>Meal Planner</h1>
        <p>Plan Meal, recipes and generate grocery lists</p>

        <Input label='Name' onChange={setName} value={name} placeholder='Enter Household name'></Input>
        <Button type="submit" label='Create Household' onClick={handleClick}></Button>

    </div>)
}

export default HomePage;