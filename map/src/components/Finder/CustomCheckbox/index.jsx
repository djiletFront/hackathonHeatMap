import "./index.css"


const CustomCheckbox = ({register, name, title, checked}) => {
    return (
        <div className="CustomCheckbox">
            <input className="inp-cbx" type="checkbox" {...register(name)} checked={checked}/>
            <p>{title}</p>
        </div>
    );
};

export default CustomCheckbox;

