import './userhyouka.css';
import Grid from "@mui/material/Grid";
import React,{} from 'react';
import ReactStars from "react-rating-stars-component";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  // 値を変更した時にvalueに一時保存
  const [values, setValues] = React.useState({
    // uid : crrentUserID,
    uid : 'ダミー',
    nickname : 'ダミー',
    star : '',
    evalute_comment : ''
  })

  const ratingChanged = newValue => {
    values.star = String(newValue)
    console.log(values.star)
  };

  //nicknameの値を更新
  const evalute_commentChanged = evalute_comment => event => {
    setValues({ ...values, [evalute_comment]: event.target.value });
  };



  //送信ボタンで評価を送信
  const onClickgetAPI = async() => {
    console.log("test")
    console.log(values)
    alert("送信しました")
    // try{
    //   const response = await axios.post(URL,values,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'x-api-key': apigatewayConf.API_KEY
    //       }
    //     });
    //     console.log("評価しました")
    test
    // }
    // catch(error){
    //   console.error(error)
    //   alert("リクエスト処理に失敗しました")
    // }
  }
  return (
    <div className="formContainer">
      <form onSubmit>
        <h1>usernameさんの評価</h1>
        <div className="uiForm">
        <Grid>
        <h2>5段階評価（必須）</h2>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
           />
        <br />
        評価コメント（任意）
        <Box>
        <div>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={8}
            onChange={evalute_commentChanged('evalute_comment')}
            />
        </div>
      </Box>
      <br></br>
      {/* 評価を送信 */}
      <Button
        variant="contained"
        color="warning"
        onClick={onClickgetAPI}
        >
        送信
      </Button>
      
      </Grid>
          <div className="formField">
          </div>
          <p className="errorMsg"></p>
          <div className="formField">
            
          </div>
          </div>
        </form>
        </div>
  );
  }

export default App;
