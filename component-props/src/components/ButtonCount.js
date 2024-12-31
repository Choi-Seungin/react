export default function ButtonCount(props) {
    return <button onClick={props.addCount}>{props.obj.count}</button>;
}