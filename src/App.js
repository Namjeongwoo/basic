import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '성비 추천 맛집';
  //JSX class 넣을 땐 className
  //JSX 변수 데이터 사용은 중괄호 -> 데이터 
  //JSX 안에서 style 넣을 땐 style={ { 스타일명 : '값' }}
  
  let [a, b] = useState('먹방 장소 추천');
  // a 위치: state로 담은 데이터, b 위치: state 데이터 변경
  // state 를 쓰는 이유는 html이 자동 재렌더링된다.
  // 자주 변경 될 것 같은 html 부분은 state 로 만들기
  
  let [logo, setLogo] = useState('ReactBlog');
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'}}>{ logo }</h4>
      </div>
      <h4>{ post }</h4>
      <div className='list'>
        <h4>{ a }</h4>
        <p>1월 2일 발행</p>
      </div>

    </div>
  );
}

export default App;
