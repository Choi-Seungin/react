import CheckTypes, { number } from 'prop-types';

export default function PropsEx(props) {
    const {name, age} = props;
    console.log(props);
    return(
        <>
        <h2>PropsEx</h2>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>number : {props.number}</p>
        </>
    );
}
//현재 19버전에서는 동작을 안함
//props type 체크
PropsEx.propTypes = {
    name : CheckTypes.string.isRequired,
    age : CheckTypes.number
}
//porps default value
PropsEx.defaultProps = {
    number : 100
}