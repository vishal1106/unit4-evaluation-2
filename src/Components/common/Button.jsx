import styles from "./Button.module.css";

function Button({ disabled,children,setpage ,handle}) {
 
  return (
    <button disabled={disabled} className={styles.button} data-testid="button" onClick={handle} >
      {children}
    </button>
  );
}

export default Button;
