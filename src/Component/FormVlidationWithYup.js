import { Formik } from "formik";
import * as Yup from "yup";
import { string } from 'yup'
const initialValues = {
    email: "",
    password: ""
  };

  const signInSchema = Yup.object().shape({
    email: initialValues?.email ? string().email().required("Email is required") : string().nullable(),
  
    password:initialValues?.password ? string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum") : string().nullable(),
  });
  const submitForm = (values) => {
    console.log(values);
  };
  const SignInForm = () => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema }
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty
          } = formik;
          return (
              <div className="container">
                <h1>Sign in to continue</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email ? 
                      "input-error" : null}
                    />
                    {errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
  
                  <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password ? 
                       "input-error" : null}
                    />
                    {errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
  
                  <button
                    type="submit"
                    className={dirty && isValid ? "" : "disabled-btn"}
                    disabled={!(dirty && isValid)}>
                    Sign In
                  </button>
                </form>
              </div>
          );
        }}
      </Formik>
    );
  };
export default SignInForm 
