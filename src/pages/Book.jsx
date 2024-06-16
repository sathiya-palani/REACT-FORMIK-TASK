import React from 'react'
import { Link } from "react-router-dom";

import { useFormik } from "formik";

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  }

  if (!values.author) {
    errors.author = 'Author is required';
  }

  if (!values.isbn) {
    errors.isbn = 'ISBN Number is required';
  }

  if (!values.publication) {
    errors.publication = 'Publication Date is required';
  }

  return errors;
}

const Book = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publication:''
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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input 
        type="text"
        placeholder="Title..."
        name="title"
          id="title"
          value={formik.values.title}
          onChange={formik.handleChange}
      />
      </div>
      <div style={style}>{formik.errors.title}</div>
      <div>
        <input 
          type="text"
          placeholder="Author..."
          name="author"
          id="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.author}</div>
      <div>
        <input 
          type="number"
          placeholder="ISBN Number..."
          name="isbn"
          id="isbn"
          value={formik.values.isbn}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.isbn}</div>
      <div>
        <input 
          type="date"
          placeholder="Publication date..."
          name="publication"
          id="publication"
          value={formik.values.publication}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.publication}</div>


      <button type="submit">Add</button>
    </form>
    // 
  )
}

export default Book;