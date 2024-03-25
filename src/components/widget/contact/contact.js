import React, { useState } from 'react';
import { LabelTextField } from "../w_label"
import styled from "styled-components"
import axios from "axios"

export default function Contact() {
    const POST_URL = process.env.REACT_APP_DEV_SERVER_IP;
    const [titleState, setTitleState] = useState('');
    const [descState, setDescState] = useState('');

    const [mailRequest, setMailRequest] = useState(false);

    const titleOnChange = (data) => {
        setTitleState(data)
    }
    const descOnChange = (data) => {
        setDescState(data)
    }

    const sendMail = async () => {
        setMailRequest(true);
        await axios.post(POST_URL, {
            mail: {
                title: titleState,
                desc : descState
            }
        }).then(res => {
            console.log("get res =>", res.data)
            if (res.data == "done") {
                setTitleState("");
                setDescState("");
                alert("정상적으로 전송되었습니다.");
                setMailRequest(false);
            }
        }).catch(error => console.log("error", error))
    }
    return <Wrap>
        <LabelTextField labelName="Email" id="email" onChange={titleOnChange} value={titleState} />
        <LabelTextField labelName="Description" id="desc" onChange={descOnChange} value={descState} />
        <Submit onClick={sendMail}>{mailRequest ? "보내는중..." : "보내기" }</Submit>

    </Wrap>
}

const Wrap = styled.div`
    position: relative;
    display: flex;
    flex-direction : column;
    gap: 12px;
    width : 100%;

    &:after {
        content: '';
        position: absolute;
        bottom : -20px;
        left : 50%;
        width : 60%;
        height: 2px;
        border-radius: 20px;
        transform: translateX(-50%);
        background-color: #bbb;

    }
`

const Submit = styled.button`
    cursor: pointer;
    width : 100%;
    padding: 24px;
    border-radius : 8px;
    border: none;
`