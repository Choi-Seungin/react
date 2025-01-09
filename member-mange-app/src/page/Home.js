import axios from "axios";
import { useEffect, useState } from "react";
import MemberItem from "../components/MemberItem";
export default function Home() {
  const [memberList, setMemberList] = useState([]);
  const refreshMemberList = (list) => {
    setMemberList(list);
  }

  useEffect(() => {
    axios.get("http://localhost:9999/member/list").then(res => {
        setMemberList(res.data);
      }).catch(err => console.log(err));
  }, []);
  console.log(memberList);

  
  
  return (
    <div className="container mt-5">
      <h2 className="mb-4">회원 리스트</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>등급</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
         {
          memberList.map(item => <MemberItem key={item.id} id={item.id} username={item.userName} nickname={item.nickName} grade={item.grade} refreshMemberList={refreshMemberList} />)
         }
        </tbody>
      </table>
    </div>
  );
}