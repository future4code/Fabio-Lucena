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


export default function FeedPage() {
    const navigate = useNavigate()
    const { form, changeValues, clear } = useForm({ title: "", body: "" })
    let [ page, setPage ] = useState(10) 
    const [isLoading, setIsLoading] = useState(true);
    const [posts, GetPosts] = useRequestData([], setIsLoading, `${URL_BASE}/posts?size=${page}`)
    const { imageVote, setImageVote } = useState(Logo) 
    const posts1 = posts
    
    useEffect(() => {
        
    
        GetPosts()
        
    }, [form, posts])
    
    const sendForm = (event) => {
        event.preventDefault()
        CreatePost(form, navigate)
        clear()
    }

    const votePost = (id) => {
        const body = {
            direction: 1
        }
        CreatePostVote(id, body, getPost, navigate)
        GetPosts()
    }

    const delVotePost = (id) => {
        DeletePostVote(id, getPost, navigate)
        GetPosts()
    }

    const morePosts = () =>{
        setPage(page + 10)
        GetPosts()
    }

    const getPost = () => {

        const listPost = posts1.map((post) => {
            return (
                <ListCards>

                    <h4 key={post.id}><b>{post.username}</b></h4>
                    <h3>{post.title}</h3>
                    
                        <p>{post.body}</p>
                    

                    <ContainerCount>
                        {(post.voteSum) ? (
                            <div>
                                <Img src={Logo} onClick={() => votePost(post.id)} />
                                <span> {post.voteSum} </span>
                                <Img src={Logo2} onClick={() => delVotePost(post.id)} />
                            </div>
                        ) : (
                            <div>
                                <Img src={Logo} onClick={() => votePost(post.id)} />
                                <span> 0 </span>
                                <Img src={Logo2} onClick={() => delVotePost(post.id)} />
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

                {/* {isLoading && <p>Carregando...</p>} */}
                {/* {!isLoading && error && <p>Ocorreu um erro</p>} */}
                {/* {posts && getPost()} */}
                    {/* {getPost()} */}

                    {isLoading ? <p>Loading...</p> : getPost()}

                <Img2 src={Logo5} onClick={()=> morePosts()}/>
            </ContainerNewPost>

                

            <Footer />
        </ContainerPrincipal>
    )
}