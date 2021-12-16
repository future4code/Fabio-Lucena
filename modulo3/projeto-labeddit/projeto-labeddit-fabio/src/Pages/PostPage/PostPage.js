import React, { useEffect } from "react";
import { useState } from "react";
import { ContainerNewPost, ContainerPrincipal, Form, ListCards, ContainerCount, Img, Img2 } from "./styled";
import useForm from "../../components/useForm";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import { CreateComment, CreateCommentVote, CreatePostVote, DeleteCommentVote, DeletePostVote } from "../../components/Requests";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../../components/useRequestData";
import { URL_BASE } from "../../components/urlBase";
import Logo from '../../img/addVotoOff.png'
import Logo2 from '../../img/delVotoOff.png'
import Logo3 from '../../img/addVotoOn.png'
import Logo4 from '../../img/delVotoOn.png'

export default function PostPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { form, changeValues, clear } = useForm({ body: "" })
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [post, GetPost] = useRequestData([], setIsLoading2, `${URL_BASE}/posts?size=1000`)
    const [comments, GetComments] = useRequestData([], setIsLoading, `${URL_BASE}/posts/${id}/comments`)
    const comments1 = comments

    // let voteImage = Logo 

    useEffect(() => {

        GetPost()
        GetComments()

    }, [form, comments])

    const sendForm = (event) => {
        event.preventDefault()
        CreateComment(id, form)
        clear()
    }

    const voteComment = (id, userVote, dir) => {
        const body = {
            direction: dir
        }

        if (userVote === null) {

            CreateCommentVote(id, body, getComment)
            GetComments()
            console.log("oi")
        } else if (userVote !== null) {
            DeleteCommentVote(id, getComment)
            GetComments()
        }
    }

    const savePost = () => {

        const listPost = post.filter((post) => {
            return post.id === id
        }).map((post) => {
            return (
                <ListCards>
                    <p>{post.username}</p>
                    <p>{post.body}</p>
                </ListCards>
            )
        })

        return listPost
    }

    const getComment = () => {

        const listComments = comments1.map((post) => {

            return (
                <ListCards>

                    <h4 key={post.id}><b>{post.username}</b></h4>

                    <p>{post.body}</p>

                    <ContainerCount>

                        {(post.voteSum) ? (
                            <div>
                                <Img src={(post.userVote !== null && post.userVote > 0) ? Logo3 : Logo} onClick={() => voteComment(post.id, post.userVote, 1)} />
                                <span> {post.voteSum} </span>
                                <Img src={(post.userVote !== null && post.userVote < 0) ? Logo4 : Logo2} onClick={() => voteComment(post.id, post.userVote, -1)} />
                            </div>
                        ) : (
                            <div>
                                <Img src={(post.userVote !== null && post.userVote > 0) ? Logo3 : Logo} onClick={() => voteComment(post.id, post.userVote, 1)} />
                                <span> 0 </span>
                                <Img src={(post.userVote !== null && post.userVote < 0) ? Logo4 : Logo2} onClick={() => voteComment(post.id, post.userVote, -1)} />
                            </div>
                        )
                        }

                        {(post.commentCount > 0) ? <p>{post.commentCount} comentários</p> : <p>0 comentários</p>}
                    </ContainerCount>

                </ListCards>
            )
        })

        return listComments
    }

    return (
        <ContainerPrincipal>

            <Header />

            <ContainerNewPost>

                {isLoading2 ? <p>Loading</p> : (savePost())}


                <Form onSubmit={sendForm}>
                    <input
                        placeholder={"Comentário"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={changeValues}
                        required
                    />

                    <button type={"submit"}>Postar</button>

                </Form>


                {isLoading && comments.length ===0 && <p>Não há comentários</p>}
                {(isLoading) ? <p>Loading...</p> : (getComment())}
                


            </ContainerNewPost>



            <Footer />
        </ContainerPrincipal>
    )
}