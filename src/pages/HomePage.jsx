import Button from "../components/common/Button.jsx";

function HomePage() {
    const handleClick = () => {
        alert('You clicked');
    }

    return (<div>
        <h1>Meal Planner</h1>
        <p>Plan Meal, recipes and generate grocery lists</p>
        <button label='Get Started' onClick={handleClick}></button>
    </div>)
}

export default HomePage;