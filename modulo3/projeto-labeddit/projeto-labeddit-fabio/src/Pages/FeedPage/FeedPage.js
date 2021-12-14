import React from "react";
import { ContainerNewPost, ContainerPrincipal, Form, ListCards, ContainerCount, Img } from "./styled";
import useForm from "../../components/useForm";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import { CreatePost } from "../../components/Requests";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../components/useRequestData";
import { URL_BASE } from "../../components/urlBase";
import Logo from '../../img/addVotoOff.png'


export default function FeedPage() {
    const navigate = useNavigate()
    const { form, changeValues, clear } = useForm({ title: "", body: "" })
    const [data, isLoading, error] = useRequestData(`${URL_BASE}/posts`)


    const sendForm = (event) => {
        event.preventDefault()
        CreatePost(form, navigate)
        clear()
    }

    const getPost = () => {
        const listPost = data && data.map((post) => {
            return (
            <ListCards>
            <p key={post.id}><b>{post.username}</b></p>
            <p>{post.title}</p>
            <p>{post.body}</p>

            <ContainerCount>
                { (post.voteSum > 0)? (
                <span>
                <Img src={Logo} />
                {post.voteSum}
                </span>
                ) : <p>0 votos</p> }
                
                {(post.commentCount > 0)? <p>{post.commentCount} comentários</p> : <p>0 comentários</p>}
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
                        name={"post"}
                        value={form.body}
                        onChange={changeValues}
                        required
                    />

                    <button type={"submit"}>Postar</button>

                </Form>

                {getPost()}


            </ContainerNewPost>

            <Footer />
        </ContainerPrincipal>
    )
}