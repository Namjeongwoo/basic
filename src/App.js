// warning message 제거
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*
  JSX class 넣을 땐 className ,JSX 변수 데이터 사용은 중괄호 -> 데이터 ,JSX 안에서 style 넣을 땐 style={ { 스타일명 : '값' }}
  
  --useState--
  Ex) let [a, b] = useState('Example');
  사용 시: HTML 자동 재렌더링
  변경 시: 변경함수를 사용, 변경 시 기존 state == 신규 state 의 경우 변경되지 않음(자원절약)
  Tip : 자주 변경되는 내용 State 사용, 대입연산자로 변경되지 않음 

  --onClick--
  함수 사용
  ()=>{} : 함수만들기

  --spread 연산자--
  :...
*/

function App() {
  //블로그 상단바 변수 선언
  let [logo, setLogo] = useState('ReactBlog');
  
  //블로그 내용 변수 선언
  let [글제목, 글제목변경] = useState(['먹방 장소', '데이트 장소', '소개팅 장소']);

  //좋아요 변수 선언
  let [따봉갯수, 따봉갯수변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'}}>{ logo }</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉갯수변경(따봉갯수 + 1) } }>👍</span> { 따봉갯수 } </h4>
        <p>1월 2일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>1월 3일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>1월 4일 발행</p>
      </div>
      <Modal></Modal>
      <div className='list'>
        <button onClick={ ()=>{ 
          let copy = [...글제목]; //참조 변경: ... <- 배열을 가르키는 화살표가 새로 바뀐다.
          copy[1] = '사진찍기 좋은 장소';
          글제목변경(copy); } }>글제목변경
        </button>
        <button onClick={ ()=>{ 
          let copy2 = [...글제목].sort(); //참조 변경: ... <- 배열을 가르키는 화살표가 새로 바뀐다.
          글제목변경(copy2); } }>가나다순정렬
        </button>
      </div>
    </div>
  );
}

/*
  --컴포넌트--
  Make fuction => return( html )
  한세트: <div></div>
  여러세트: <></>

  장점: 반복적인 html 축약, 큰 페이지, 자주 변경되는 것들
  단점: state 사용 시 다른 함수에서 마음대로 가져다 쓸 수 없음
*/
function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
