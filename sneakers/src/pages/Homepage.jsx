import Title from '../components/Title/Title'
import Catalog from '../components/Catalog/Catalog'
import Search from '../components/Search/Search'
import Slider from '../components/Slider/Slider'


export default function HomePage() {
    return (
        <>

            <Slider />

            <div className="search-row">
                <Title>Все кроссовки</Title>
                <Search />
            </div>

            <Catalog />
        </>
    )
}