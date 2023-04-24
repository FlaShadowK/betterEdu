import styles from './Modal.module.css';

const ModalCheckboxItem = (props) => {
    const checked = props.checked;
    return (
        <div className={`rounded-4 pt-3 ${checked ? styles.checked : ''}`}>
            <button
                value={props.id}
                onClick={props.clickHandler}
                type="button"
                className={'list-group-item list-group-item-action d-flex justify-content-between py-3'}
            >
                <span className="text">{props.title}</span>
                <div className="d-flex align-items-center mt-1">
                    <input
                        onChange={()=>{}}
                        type="checkbox"
                        checked={checked}
                    />
                </div>
            </button>
        </div>
    );
}

export default ModalCheckboxItem;