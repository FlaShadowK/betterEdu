const Frame = (props) => {
    return (
        <div style={{padding: props.padding, backgroundColor: props.bgcolor}} className={'d-flex justify-content-center'}>
            {props.children}
        </div>
    )
}

export default Frame;