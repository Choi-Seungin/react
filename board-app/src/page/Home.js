import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import apiAxios from '../lib/apiAxios';
import './../css/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [boardList, setBoardList] = useState([]);
  const [pagging, setPagging] = useState({});
  const pageRequest = useCallback((pageNo = 1, pageContentEa = 20) => {
    console.log("pageRequest : ", pageNo);
    apiAxios
    .get(`/board/list?pageNo=${pageNo}&pageContentEa=${pageContentEa}`).then(res => {
      console.log(res.data);
      setBoardList(res.data.boardList);
      setPagging(res.data.pagging);
    })
  }, []);
  useEffect(() => {
    pageRequest();
  }, []);
  if (boardList.length === 0 || !pagging) return null;
  return (
    <div>
      <h2>게시글</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>싫어요</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <tr key={board.bno}>
              <td>{board.bno}</td>
              <td><Link to={"/board/" + board.bno}>{board.title}</Link></td>
              <td>{board.nickName}</td>
              <td>{board.writeDate}</td>
              <td>{board.bcount}</td>
              <td>{board.blike}</td>
              <td>{board.bhate}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7">
              {/* 페이징 정보 출력 */}
              <div className='board_footer'>
                {/* 이전 페이지 그룹 */}
                {
                  pagging.priviousPageGroup ? <a onClick={() => pageRequest(pagging.startPageOfPageGroup - 1)}>◀</a> : null
                }
                {/* 페이징 번호 */}
                {
                  Array.from({ length: pagging.endPageOfPageGroup - pagging.startPageOfPageGroup + 1 }, (_, i) => {
                    const pageNo = i + pagging.startPageOfPageGroup;
                    return <a key={pageNo} onClick={() => pageRequest(pageNo)}>{pageNo}</a>;
                  })
                }
                {/* 다음 페이지 그룹 */}
                {
                  pagging.nextPageGroup ? <a onClick={() => pageRequest(pagging.endPageOfPageGroup + 1)}>▶</a> : null
                }
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
