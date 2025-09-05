import { useFormikContext } from "formik";
import Button from "../../atoms/customButton/Button";
function EmailButton({ setWarning }) {
    const { isValid, submitForm } = useFormikContext()

    const clickHandler = () => {
        if (!isValid) {
            setWarning(true);
        } else {
            setWarning(false);
            submitForm();
        }
    };
    return (
        <Button
            type='button'
            onClick={clickHandler}
            className="w-[530px] h-[50px] text-white bg-[#4763E4] rounded-[12px]"
        >
            Se connecter
        </Button>
    );
}

export default EmailButton;