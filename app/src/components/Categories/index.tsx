import { categories } from '../../mocks/categories'
import { Category } from './styles'

export function Categories() {
    return (
        categories.map((category) => {
            <Category key={category._id}>

            </Category>
        })
    )
}
