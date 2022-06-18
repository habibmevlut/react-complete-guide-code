import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <dir className={classes}>
            {props.children}
        </dir>
    )
}

export default Card;
