import React,{useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value)
  }
  const routing = (e) => {
    if (e.code === "Enter" && e.target.value != "") {
      navigate("/")
    } else {
      if (e.type === "click") {
        navigate("/")
      }
    }
  }
  return <Wrapper>
    <div className="content">
      <div className="info-thumbnail__wrap">
        <img src="https://pbs.twimg.com/profile_images/1343164971681599488/ZV30t8pJ_400x400.jpg" />
      </div>
      <div className="info-desc__wrap">
        <div className="id-field">박경수</div>
        <div className="text-field">
          <div className="input-field">
            <div className="inner-wrapper">
              <input type="password" placeholder="암호 입력" onChange={(e) => onChange(e)} onKeyDown={(e) => routing(e)} value={input} security="true" />
              {input.length <= 0 ? "" : <button type="button" onClick={(e) => routing(e)} className="enter">&#62;</button> } 
            </div>
            <div className="icon">?<span>원하는 암호를 작성 해주세요.</span></div>
          </div>
          <div className="hint-field">
            <span>Touch ID를 활성화하려면 사용자<br />암호가 필요합니다.</span>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>;
}

export default Login;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width : 100%;
  height: 100%;
  background : url("images/wallbapper.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width : 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.16);
  }

  .content {
    z-index : 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: center;
    justify-content: center;
  }

  .info-thumbnail__wrap {
    overflow: hidden;
    width: 180px;
    height: 180px;
    border-radius: 100px;

    img {
      width: 100%;
    }
  }

  .info-desc__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .id-field {
    font-size: 24px;
    color: #fff;
    text-shadow: 0 8px 16px rgba(31, 38, 135, 0.5);

  }
  .input-field {
    display: flex;
    align-items: center;
    gap: 8px;

    .icon, .enter {
      cursor: pointer;
        padding: 2px;
        border: 1px solid #fff;
        border-radius: 20px;
        width: 14px;
        height: 14px;
        text-align: center;
        font-size : 14px;
        box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.28);
      }
    .icon {
      position: relative;
      span {
        opacity : 0;
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        width: max-content;
      }

      &:hover span{
        animation-name : login;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
      }
    }
    .inner-wrapper {
      position: relative;
      
      .enter {
        margin: 0;
        padding: 0;
        opacity : 0;
        position: absolute;
        top: 50%;
        right: 9px;
        transform: translateY(-50%);
        background-color: transparent;
        color : #fff;
        animation-name : login;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
      }
    }

    
  }

  @keyframes login {
    0% {
      opacity : 0;
    }
    100% {
      opacity : 1;
    }
  }
  

  .text-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color : #fff;

    input {
      padding: 12px 20px;
      border-radius: 20px;
      background: ${(props) => props.theme.backgroundColor};
      transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.28);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: ${(props) => props.theme.borderColor};
      outline: none;
      color : #fff;
      letter-spacing: 4px;


      &::placeholder {
        color: #eee;
        font-weight: 400;
        letter-spacing:0px;

      }
    }


    .hint-field {
      text-align: center;
      
      span {
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 18px;
        text-shadow: 0 8px 16px rgba(31, 38, 135, 0.6);
      }
    }
   
  }

`

