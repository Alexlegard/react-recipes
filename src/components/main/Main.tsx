import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'

function Main() {
  return (
    <div className="main">
      <RecipeList />
      <Pagination />
    </div>
  )
}

export default Main