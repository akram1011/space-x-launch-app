import SpaceXProgramCard from './SpaceXProgramCard'

function SpaceXproducts({ items }) {
    return (
        <>
            {items.length === 0 ?
                <h1>  No launch programs found.</h1>
                :
                <>
                    {items.map((item,key) => (
                        <SpaceXProgramCard key={key} item={item}></SpaceXProgramCard>
                    ))}
                </>
            }
        </>
    )
}


export default SpaceXproducts
