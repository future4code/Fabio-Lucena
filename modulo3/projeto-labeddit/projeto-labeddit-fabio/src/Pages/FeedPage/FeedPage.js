import React, { useEffect } from "react";
import { useState } from "react";
import { ContainerNewPost, ContainerPrincipal, Form, ListCards, ContainerCount, Img, Img2 } from "./styled";
import useForm from "../../components/useForm";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import { CreatePost, CreatePostVote, DeletePostVote } from "../../components/Requests";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../components/useRequestData";
import { URL_BASE } from "../../components/urlBase";
import Logo from '../../img/addVotoOff.png'
import Logo2 from '../../img/delVotoOff.png'
import Logo3 from '../../img/addVotoOn.png'
import Logo4 from '../../img/delVotoOn.png'
import Logo5 from '../../img/mais.png'
import { GoToPostPage } from "../../Routes/RouteFunctions";
import PostPage from "../PostPage/PostPage";

// export const savePost = (username, body) =>{
//     const user = username
//     const postBody = body

//     return [user, postBody]
// }

export default function FeedPage() {
    const navigate = useNavigate()
    const { form, changeValues, clear } = useForm({ title: "", body: "" })
    let [page, setPage] = useState(10)
    const [isLoading, setIsLoading] = useState(true);
    const [posts, GetPosts] = useRequestData([], setIsLoading, `${URL_BASE}/posts?size=${page}`)
    const posts1 = posts

    let voteImage = Logo 

   

    useEffect(() => {


        GetPosts()

    }, [form, posts])

    const sendForm = (event) => {
        event.preventDefault()
        CreatePost(form, navigate)
        clear()
    }

    const votePost = (id, userVote, dir) => {
        const body = {
            direction: dir
        }

        if (userVote === null) {
            
            CreatePostVote(id, body, getPost, navigate)
            voteImage = Logo3
            GetPosts()
            console.log("oi")
        } else if (userVote !== null) {
            DeletePostVote(id, getPost, navigate)
            GetPosts()
        }
    }

    const funcaoAux = (id, username, body) =>{
        GoToPostPage(navigate, id)
        // savePost(username, body)    
    }

    

    const morePosts = () => {
        setPage(page + 10)
        GetPosts()
    }


    const getPost = () => {

        const listPost = posts1.map((post) => {
            const vote = post.userVote
            return (
                <ListCards onClick={()=> funcaoAux(post.id, post.username, post.body)}>

                    <h4 key={post.id}><b>{post.username}</b></h4>
                    <h3>{post.title}</h3>

                    <p>{post.body}</p>

                    <ContainerCount>
                        
                        {(post.voteSum) ? (
                            <div>
                                <Img src={( post.userVote !== null && post.userVote > 0 )? Logo3 : Logo} onClick={() => votePost(post.id, post.userVote, 1)} />
                                {console.log(vote)}
                                <span> {post.voteSum} </span>
                                <Img src={( post.userVote !== null && post.userVote < 0 )? Logo4 : Logo2} onClick={() => votePost(post.id, post.userVote, -1)} />
                            </div>
                        ) : (
                            <div>
                                <Img src={( post.userVote !== null && post.userVote > 0 )? Logo3 : Logo} onClick={() => votePost(post.id, post.userVote, 1)} />
                                <span> 0 </span>
                                <Img src={( post.userVote !== null && post.userVote < 0 )? Logo4 : Logo2} onClick={() => votePost(post.id, post.userVote, -1)} />
                            </div>
                        )
                        }

                        {(post.commentCount > 0) ? <p>{post.commentCount} comentários</p> : <p>0 comentários</p>}
                    </ContainerCount>

                </ListCards>
            )
        })

        return listPost
    }

   

    return (
        <ContainerPrincipal>

            <Header />

            <ContainerNewPost>
                <Form onSubmit={sendForm}>
                    <input
                        placeholder={"Titulo"}
                        type={"text"}
                        name={"title"}
                        value={form.title}
                        onChange={changeValues}
                        required
                    />

                    <input
                        placeholder={"Post"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={changeValues}
                        required
                    />

                    <button type={"submit"}>Postar</button>

                </Form>

                {/* <img src={voteImage}/> */}

                {isLoading ? <p>Loading...</p> : getPost()}

                <Img2 src={Logo5} onClick={() => morePosts()} />
            </ContainerNewPost>



            <Footer />
        </ContainerPrincipal>
    )
}