import { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "../components/BoardItem";
export default function Board() {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/board").then(res => {
      setBoardList(res.data.list);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>게시판</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
            <th>작성일</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>싫어요</th>
          </tr>
        </thead>
        <tbody>
          {
            boardList.map(item => <BoardItem key={item.bno} bno={item.bno} nickName={item.nickName} title={item.title} writeDate={item.writeDate} bcount={item.bcount} blike={item.blike} bhate={item.bhate}/>)
          }
        </tbody>
        <tfoot>
          
        </tfoot>
      </table>
    </div>
  );
}