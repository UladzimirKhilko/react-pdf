import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormPDF = () => {
    const [form, setForm] = useState({
        firstName: '',
        name: '',
        lastName: '',
        txtName: '',
    });

    const submit = (e) => {
        e.preventDefault();
        // console.log(form);
    };

    const update = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const urlToPdf = encodeURI(
        `/pdf-page?firstName=${form.firstName}&name=${form.name}&lastName=${form.lastName}&txtName=${form.txtName}`
    );

    return (
        <div className='row'>
            <form className='col s12'>
                <div className='row'>
                    <div className='input-field col s4'>
                        <input
                            value={form.firstName}
                            name='firstName'
                            id='first_name'
                            type='text'
                            className='validate'
                            placeholder='Фамилия'
                            onChange={update}
                        />
                    </div>
                    <div className='input-field col s4'>
                        <input
                            value={form.name}
                            name='name'
                            id='name'
                            type='text'
                            className='validate'
                            placeholder='Имя'
                            onChange={update}
                        />
                    </div>
                    <div className='input-field col s4'>
                        <input
                            value={form.lastName}
                            name='lastName'
                            id='last_name'
                            type='text'
                            className='validate'
                            placeholder='Отчество'
                            onChange={update}
                        />
                    </div>
                </div>
                <textarea
                    value={form.txtName}
                    name='txtName'
                    rows='100%'
                    cols='500'
                    placeholder='Ведите текст заявления'
                    onChange={update}
                ></textarea>
                <button
                    className='waves-effect waves-light btn indigo lighten-1 '
                    onClick={submit}
                >
                    <Link to={urlToPdf} className='white-text'>
                        Сформировать завление
                    </Link>
                </button>
            </form>
        </div>
    );
};

export { FormPDF };
