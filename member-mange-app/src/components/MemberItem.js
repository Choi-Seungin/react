function gradeName(grade) {
  switch (grade) {
    case 0:
      return 'Bronze';
    case 1:
      return 'Silver';
    case 2:
      return 'Gold';
    case 3:
      return 'VIP';
    case 4:
      return 'VVIP';
    case 5:
      return 'Admin';
    default:
      return '-';
  }
}
export default function MemberItem({ id, username, nickname, grade }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{nickname}</td>
      <td>{gradeName(grade)}</td>
      <td>
        <button className="btn btn-primary">수정</button>
        <button className="btn btn-danger">삭제</button>
      </td>
    </tr>
  );
}