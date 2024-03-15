import { styled } from "styled-components"

export default function WidgetProfile({ thumbnail, name, age }) {
    return <ProfileWrap>
        <Heading01>Profile</Heading01>
        <div className="profile__desc--1">
            <Thumbnail>
                <img src="https://pbs.twimg.com/profile_images/1343164971681599488/ZV30t8pJ_400x400.jpg" />
            </Thumbnail>
            <Desc1>
                <div className="title">박경수</div>
                <div className="title--sub">안녕하세요 만나서 반갑습니다. 박경수입니다.</div>
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
}

const ProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    &:hover .profile__desc--1 > div:first-child {
        transform: translateY(-2px);
        box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.26),1px 1px 4px 0 rgba(0, 0, 0, 0.26);
    }

    .profile__desc--1 {
        display: flex;
        gap: 12px;
        margin-top: 32px;
    }
    .profile__desc--2 {
        margin-top: 32px;
        ul li {
            display: flex;
            justify-content: center;
            gap: 40px;
            /* justify-content: space-between; */
        }

        dl dt,
        dl dd {
            text-align: center;
        }
        dl dt {
            font-size : 24px;
            font-weight: 700;
        }
        dl dd {
            font-size : 12px;
            text-transform: uppercase;
            margin-top : 8px;
            color: #999;
        }
    }
`

const Heading01 = styled.h1`
    font-size : 32px;
    font-weight : 900;
    text-transform: uppercase;
`

const Thumbnail = styled.div`
    display: flex;
    overflow: hidden;
    width : 96px;
    border-radius: 60px;
    background-color: coral;
    transition: all .3s cubic-bezier(0.34, 1.56, 0.64, 1);
    img {
        width : 100%;
        object-fit: cover;
    }

    
`

const Desc1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 8px;

    .title {
        font-weight: bold;
        font-size: 24px;
    }
    .title--sub {
        color : #999;
        font-size: 14px;
        word-break: keep-all;
    }
`