import React from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {

    const { t } = useTranslation();

    const SERVICE_ID = "service_fddizqd";
    const TEMPLATE_ID = "template_kjhhcmh";
    const USER_ID = "6IvRmXwrdvAQ55kMg";

    const onSubmit = (e) => {

        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Fyrirspurn send',
              text: 'Við verðum í bandi um leið og við getum!',
              confirmButtonColor: '#D1B02C'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Eitthvað fór úrskeiðis, prófaðu aftur',
              confirmButtonColor: '#D1B02C'
            })
          });
        e.target.reset()
    }
    
    return (
        <div id="hafdu-samband" className="flex flex-col md:flex-row justify-start max-w-none mt-8 md:mt-20">
            <div className="md:w-1/2 flex flex-col items-start md:items-center">
                <h2 className="text-start md:w-10/12 lg:w-8/12">{t('contact-title')}</h2>
                <p className="pt-5 italic md:w-10/12 lg:w-8/12">{t('contact-text')}</p>
                <h3 className="text-start md:w-10/12 lg:w-8/12 mt-10">{t('contact-group-title')}</h3>
                <p className="pt-5 italic md:w-10/12 lg:w-8/12">{t('contact-group-text')}</p>
            </div>
            <div className="flex flex-col justify-start items-start md:w-1/2 mt-4 md:pt-0">
                <form className='w-full md:w-10/12' onSubmit={onSubmit}>
                    <div className="md:mb-6 flex flex-col items-center justify-between space-y-4">
                        <div className='w-full'>
                            <label className="label md:mb-2" for="name">
                                {t('contact-name')}
                            </label>
                            <input 
                                className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 w-full mb-3 md:mb-0 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-maingold" 
                                id="form-input-control-last-name" 
                                name='user_name'
                                type="text"
                                required
                                />
                        </div>
                        <div className='w-full'>
                            <label className="label md:mb-2" for="form-input-control-email">
                                {t('contact-email')}
                            </label>
                            <input 
                                className="appearance-none border bg-gray-50 border border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-maingold" 
                                id="form-input-control-email" 
                                name='user_email'
                                type="email"
                                required
                                />
                        </div>
                        <div className='w-full'>
                            <label className="label md:mb-2" for="form-input-control-phone">
                                {t('contact-phone')}
                            </label>
                            <input 
                                className="appearance-none border bg-gray-50 border border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-maingold" 
                                id="form-input-control-phone" 
                                name='user_phone'
                                type="tel"
                                />
                        </div>
                        <div className='w-full'>
                            <label className="label md:mb-2" for="form-input-control-help">
                                {t('contact-help')} 
                            </label>
                            <select className="appearance-none border bg-gray-50 border border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-maingold"
                                id="form-input-control-help" name="user_help">
                                <option selected></option>
                                <option value="Appointment">{t('contact-help-option2')}</option>
                                <option value="Group booking">{t('contact-help-option5')}</option>
                                <option value="Accessories">{t('contact-help-option1')}</option>
                                <option value="Fabrics">{t('contact-help-option3')}</option>
                                <option value="Other">{t('contact-help-option4')}</option>
                            </select>
                        </div>
                        <div className='w-full h-24'>
                            <label className="label md:mb-2" for="message">
                                {t('contact-message')}
                            </label>
                            <textarea 
                                className="block appearance-none h-full border bg-gray-50 border border-gray-300 text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-maingold" 
                                id='form-textarea-control-opinion'
                                name='user_message'
                                type="text"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-10 flex items-start">
                        <button
                            className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                            type="submit"
                            >{t('contact-submit')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;