import './FormsControls.scss';

const FormsControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  // <div className={"formControl" + (hasError ? " error" : '')}>
  return (
    <props.tagName {...props} {...input} className={"formControl" + (hasError ? " error" : '')}></props.tagName>
  )
}
{/* {hasError &&
      <span>
        {meta.error}
      </span>
    } */}
// </div>

export const Textarea = (props) => {
  return <FormsControl tagName='textarea' {...props} />
}

export const Input = (props) => {
  return <FormsControl tagName='input' {...props} />
}