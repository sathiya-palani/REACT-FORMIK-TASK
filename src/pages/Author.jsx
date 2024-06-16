
import { useFormik } from "formik";



const validate = values => {

  const errors = {};

  if (!values.author) {
    errors.author = 'Author Name is required';
  }

  if (!values.birth) {
    errors.birth = 'Birth Date is required';
  }

  if (!values.bio) {
    errors.bio = 'Short Biography is required';
  }

  return errors;
}

const Author = () => {
  

  const formik = useFormik({
    initialValues: {
      author: '',
      birth: '',
      bio: ''
    },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  })

  const style = {
    color: 'red', 
    fontWeight: 'italic'
  }
  


  return (
    <>
    <h2>Author Details </h2>
    <form onSubmit={formik.handleSubmit}>
      <div className="form">
        <input 
        type="text"
        placeholder=" Author Name..."
        name="author"
          id="author"
          value={formik.values.author}
          onChange={formik.handleChange}
      />
      </div>
      <div style={style}>{formik.errors.author}</div>
      <div>
        <input 
          type="date"
          placeholder="Birth Date..."
          name="birth"
          id="birth"
          value={formik.values.birth}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.birth}</div>
      <div>
        <input 
          type="text"
          placeholder="Short Biography..."
          name="bio"
          id="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.bio}</div>

      <button  type="submit">Add </button>
    </form>
    </>    
  )

}

export default Author;