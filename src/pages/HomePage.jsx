import Button from "../components/common/Button.jsx";
import Input from "../components/common/Input.jsx";
import {useState} from "react";
import Householdspage from "../components/households/householdspage.jsx";
import {createHousehold} from "../api/households.js";

function HomePage() {
    const [name, setName] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const handleSubmit = async (e) => {
        setSubmitting(true);
        setSubmitError(null);
        try {
            const newHousehold = await createHousehold({name});
            setName('')
            alert('New House hold created'+newHousehold.name);
        } catch (err) {
            setSubmitError(err.message);
        } finally {
            setSubmitting(false);
        }


    }

    return (<form onSubmit={handleSubmit}>
            <div>
                <h1>Meal Planner</h1>
                <p>Plan Meal, recipes and generate grocery lists</p>

                <Input label='Name' onChange={setName} value={name} placeholder='Enter Household name'></Input>
                <Button type="submit"  label={submitting ? 'Creating...' : 'Create Household'} disabled={submitting}></Button>
                <Householdspage></Householdspage>
                {submitError && <p className="error">{submitError}</p>}
            </div>
        </form>
    )
}

export default HomePage;