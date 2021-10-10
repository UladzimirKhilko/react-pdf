import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/logo.png';

export const Home = () => {
    return (
        <div>
            <div>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                laborum iste voluptatem ad fugit quibusdam quaerat at sunt ab
                magni ex aliquid alias incidunt recusandae, eos unde beatae
                ducimus provident. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Odio molestiae ratione labore hic assumenda
                necessitatibus repudiandae numquam quis minus earum vero quo
                iusto voluptatibus exercitationem quaerat inventore, tenetur
                cumque maxime! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Repellendus quis, eos at culpa officia vel
                quos! Eos porro accusamus animi error assumenda necessitatibus
                accusantium, sunt ipsam perferendis iste itaque hic.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Repellendus quis,
                eos at culpa officia vel quos! Eos porro accusamus animi error
                assumenda necessitatibus accusantium, sunt ipsam perferendis
                iste itaque hic.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Repellendus quis, eos at culpa officia vel
                quos! Eos porro accusamus animi error assumenda necessitatibus
                accusantium, sunt ipsam perferendis iste itaque hic.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Repellendus quis,
                eos at culpa officia vel quos! Eos porro accusamus animi error
                assumenda necessitatibus accusantium, sunt ipsam perferendis
                iste itaque hic.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                laborum iste voluptatem ad fugit quibusdam quaerat at sunt ab
                magni ex aliquid alias incidunt recusandae, eos unde beatae
                ducimus provident. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Odio molestiae ratione labore hic assumenda
                necessitatibus repudiandae numquam quis minus earum vero quo
                iusto voluptatibus exercitationem quaerat inventore, tenetur
                cumque maxime! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Repellendus quis, eos at culpa officia vel
                quos! Eos porro accusamus animi error assumenda necessitatibus
                accusantium, sunt ipsam perferendis iste itaque hic.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Repellendus quis,
                eos at culpa officia vel quos! Eos porro accusamus animi error
                assumenda necessitatibus accusantium, sunt ipsam perferendis
                iste itaque hic.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Repellendus quis, eos at culpa officia vel
                quos! Eos porro accusamus animi error assumenda necessitatibus
                accusantium, sunt ipsam perferendis iste itaque hic.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Repellendus quis,
                eos at culpa officia vel quos! Eos porro accusamus animi error
                assumenda necessitatibus accusantium, sunt ipsam perferendis
                iste itaque hic.
            </p>
            <h6>
                <Link to='/form-pdf'>Заполнить завление</Link>
            </h6>
        </div>
    );
};
