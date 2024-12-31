const profile = [
    { name: 'Alex', age: 20, job: 'developer' },
    { name: 'Bob', age: 17, job: 'student' },
    { name: 'Charlie', age: 25, job: 'designer' },
    { name: 'David', age: 30, job: 'developer' },
    { name: 'Ethan', age: 15, job: 'student' },
];

export default function ItemList() {
    const tag = profile.map((item,idx) => (
        <li key={idx}>
            {item.name} - {item.age} - {item.job}
        </li>
    ));
    console.log(tag);
    //profile 내용을 화면에 출력
    return <ul>{tag}</ul>
}