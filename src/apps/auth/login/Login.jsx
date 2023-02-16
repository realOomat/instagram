import React from 'react';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';

import { formsValidate } from '../../../helpers/forms';
import { REQUEST } from '../../../api';
import { Hooks } from '../../../hooks';

import cls from "../../../assets/styles/login/Login.module.scss";
import Logo from "../../../assets/images/logo/insta.png";

export default function Login() {
  const { goToHome } = Hooks.useLocations();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError
  } = useForm();

  const onSubmit = (data) => {
    if(data) {
      const request = REQUEST.LOGIN_USER(data);

      request
        .then(res => {
          const data = res.data;

          localStorage.setItem("access", data.access);
          localStorage.setItem("refresh", data.refresh);
          goToHome();
        })
    }
  };

  return (
    <Components.Container>
      <section className={cls.login_page}>
        <div className={cls.login_page_cart} data-aos="zoom-in-down">
          <Components.Image src={Logo}/>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Username"
                {...register("username", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.usename ? "err" : "success"}/>
            </Components.Forms.Divider>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="password"
                placeholder="Password"
                {...register("password", formsValidate())}
              />
              <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.AuthSubmit location={"Войти"}/>
            </Components.Forms.Divider>
          </form>
        </div>
        <Components.Forms.AuthNavigate location="login"/>
      </section>
    </Components.Container>
  )
}
