import { styled } from "styled-components";

export default function WidgetProfile({ thumbnail, name, age }) {
  return (
    <ProfileWrap>
      <Heading01>Profile</Heading01>
      <div className="profile__desc--1">
        <Thumbnail>
          <img src="https://pbs.twimg.com/profile_images/1343164971681599488/ZV30t8pJ_400x400.jpg" />
        </Thumbnail>
        <Desc1>
          <div className="title">박경수</div>
          <div className="title--sub">
            안녕하세요 만나서 반갑습니다. 박경수입니다.
          </div>
        </Desc1>
      </div>
      <div className="profile__desc--2">
        <ul>
          <li>
            <dl>
              <dt>1994</dt>
              <dd>born in</dd>
            </dl>
            <dl>
              <dt>177</dt>
              <dd>height</dd>
            </dl>
            <dl>
              <dt>80</dt>
              <dd>weight</dd>
            </dl>
          </li>
        </ul>
      </div>
    </ProfileWrap>
  );
}

const ProfileWrap = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  //공통 빼자
  animation-name: showing;
  animation-duration: 0.6s;
  animation-delay: 0.4s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;
  animation-direction: normal;


  .profile__desc--1 {
    display: flex;
    gap: 12px;
    margin-top: 32px;
  }
  .profile__desc--2 {
    margin-top: 32px;
    color: ${(props) => props.theme.textColor};

    ul li {
      display: flex;
      justify-content: center;
      gap: 40px;
    }

    dl dt,
    dl dd {
      text-align: center;
    }
    dl dt {
      font-size: 24px;
      font-weight: 700;
    }
    dl dd {
      font-size: 12px;
      text-transform: uppercase;
      margin-top: 8px;
      color: #999;
    }
  }

  @keyframes showing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Heading01 = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.textColor};
  font-weight: 900;
  text-transform: uppercase;
`;

const Thumbnail = styled.div`
  position: relative;
  display: flex;
  width: 96px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  img {
    overflow: hidden;
    border-radius: 60px;
    width: 100%;
    object-fit: cover;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 16px;
    background : ${props => props.theme.linearGradientColor};
  }
`;

const Desc1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;

  .title {
    font-weight: bold;
    font-size: 24px;
    color: ${(props) => props.theme.textColor};
  }
  .title--sub {
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    word-break: keep-all;
  }
`;
