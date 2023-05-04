import React from 'react'
import { useNavigate } from 'react-router-dom'

function ClearRecipes() {
    const navigate = useNavigate();

    const handleClear = () => {
        const confirmed = window.confirm('Are you sure you want to delete your recipes?');
        
        if(confirmed) {
            localStorage.clear();
            if(window.location.pathname === '/') {
                window.location.reload();
            } else {
                navigate('/');
            }
        }
    }

    return (
        <div className="clearRecipes">
            <button onClick={handleClear}>
                Clear Recipes
            </button>
        </div>
    );
}

export default ClearRecipes