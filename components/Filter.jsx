import FilterComponent from '../components/FilterComponent'
import FilterLayout from '../components/FilterLayout'

function Filter({ items }) {
    const years = [];
    for (let i = 2006; i <= 2020; i++) {
        years.push(i)
    }
    const launchOrland = ["true", "false"];
    return (
        <>
            <div className="filter-wrapper">

                <h3 > Filters </h3>
                <h5>Launch Year</h5>
                <FilterLayout>
                    {years.map((item,key) => (
                        <FilterComponent key={key} type="launch_year" value={item}></FilterComponent>
                    ))}
                </FilterLayout>

                <h5>Successful Launch </h5>
                <FilterLayout>
                    {launchOrland.map((item,key) => (
                        <FilterComponent key={key} type="launch_success" value={item}></FilterComponent>
                    ))}
                </FilterLayout>
                <h5>Successful Landing</h5>
                <FilterLayout>
                    {launchOrland.map((item,key) => (
                        <FilterComponent key={key} type="land_success" value={item}></FilterComponent>
                    ))}
                </FilterLayout>

                <br />
            </div>
        </>
    )
}


export default Filter


