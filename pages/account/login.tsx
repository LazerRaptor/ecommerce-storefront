import { useState } from 'react';
import Link from "next/link";
import { Form, Field, useForm } from "../../components/core/Form";
import styles from "./Login.module.scss";

const RegLink = () => (
    <p className={styles.link}>
      <Link href="/account/register">
        <a>Don't have an account? Sign up!</a>
      </Link>
    </p>
);

const VisibilityToggler = ({ hidden, toggle }) => (
  <span onClick={() => toggle(!hidden)} className={styles['visibility-toggler']}>
    {hidden ? "Show" : "Hide"}
  </span>
)

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { formState, handleOnChange, handleOnSubmit } = useForm(initialValues);
  const [hidden, setHidden] = useState(true);

  return (
    <div className={styles["form-container"]}>
      <Form
        handleOnSubmit={(e) => handleOnSubmit(e)}
        legend="Sign In To Your Account"
      >
        <Field
          value={formState.email}
          name="email"
          type="email"
          label="Email"
          onChange={handleOnChange}
        />
        <Field
          value={formState.password}
          name="password"
          type={hidden ? "password" : "text"}
          label="Password"
          onChange={handleOnChange}
        >
          <VisibilityToggler hidden={hidden} toggle={setHidden} />
        </Field>
        <RegLink />
      </Form>
    </div>
  );
};

export default Login;