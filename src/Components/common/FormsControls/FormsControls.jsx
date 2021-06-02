import styles from './FormsControls.module.css';

const FormsControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : null)}>
      <props.tagName {...props} {...input}></props.tagName>
      {hasError &&
        <span>
          {meta.error}
        </span>
      }
    </div>
  )
}

export const Textarea = (props) => {
  return <FormsControl tagName='textarea' {...props} />
}

export const Input = (props) => {
  return <FormsControl tagName='input' {...props} />
}