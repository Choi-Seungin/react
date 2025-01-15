export default function BoardItem( { bno, nickName, title, writeDate, bcount, blike, bhate }) {

  return (
    <tr>
      <td>{bno}</td>
      <td>{nickName}</td>
      <td>{title}</td>
      <td>{writeDate}</td>
      <td>{bcount}</td>
      <td>{blike}</td>
      <td>{bhate}</td>
    </tr>
  );
}