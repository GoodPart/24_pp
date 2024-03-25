const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');
const nodemailer = require('nodemailer');
dotEnv.config({
    path: '.env'
})
const app = express();
const port = process.env.REACT_APP_PORT_NO;

const testEnv = {
    id: process.env.REACT_APP_NODEMAILER_GOOGLE_ID,
    pwd: process.env.REACT_APP_NODEMAILER_GOOGLE_PWD_2
}
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
app.use(cors({
    origin: process.env.REACT_APP_DEV_CORS_SERVER_IP,
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('hi too')
})

app.post('/api/requestmail', async (req, res) => {

    const data = req.body;

    // let code = '222111333';  // 랜덤 코드가 담길 변수 선언

    // 메일 보내는 함수
    const sendGmail = (_userEmail) => {

        // 보내는 메일 설정
        let transporter = nodemailer.createTransport({
            service: 'gmail',   // gmail로 메일을 보낼 것이기 때문에 gmail로 설정
            prot: 587,
            host: 'smtp.gmlail.com',
            secure: false,
            requireTLS: true,
            auth: {
                user: testEnv.id,  // 보내는 메일의 주소
                pass: testEnv.pwd   // 보내는 메일의 2차 비밀번호
            }
        });

        // 메일 옵션 설정
        let mailOptions = {
            // from : 보여질 메일 앞 이름과 보내는 메일의 주소
            from: `24_pp`,
            // to: _userEmail, // 수신할 이메일
            to: process.env.REACT_APP_SEND_TO,
            subject: "24_pp에서 온 메일입니다.", // 메일 제목
            // text: `인증번호 [${code}]를 인증 창에 입력하세요.`, // 메일 내용
            html: `<h1>송신 정보</h1>
          <div>
            title : ${_userEmail.title}
            <br />
            desc : ${_userEmail.desc}
          </div>`,
        };

        // 메일 발송    
        return  transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send("error")

            } else {
                console.log('Email sent: ' + info.response);
                res.send("done")

            }
        });
    }

    sendGmail(data.mail)
    

})
app.listen(port, () => {
    console.log(`backend server listening on port ${port}`)
})