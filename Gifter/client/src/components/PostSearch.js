import { useState } from "react"
import { SearchPosts } from "../APIManagers/PostManager"
import {Form, FormGroup, Button, Input} from "reactstrap"
import { Post } from "./Post"


export const PostSearch = () => {

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const searchOnChange = (e) => {
        setSearch(e.target.value)
    }

    const searchOnClick = (e) => {
        e.preventDefault()

        SearchPosts(search)
        .then(res => {
            setSearchResults(res)
        })
    }

    return (
        <div>
            <Form>
                <FormGroup>
                <Input type="text" value={search} onChange={searchOnChange} />
                </FormGroup>
                <Button onClick={searchOnClick}>Search</Button>
            </Form>
            <div>
                Search Results:
                {searchResults.map((post) => (
                    <>
                    <Post key={post.id} post={post}/>
                    </>
                ))}
            </div>
        </div>
    )
}