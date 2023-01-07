import { useLoaderData } from "react-router-dom"

function Index(props){
    const people = useLoaderData()

    return people.map(person => (
        <div>
            <h1>
                {person.name}
            </h1>
        </div>
    ))
}

export default Index