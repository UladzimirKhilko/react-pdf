export const Header = () => {
    return (
        <nav className='indigo darken-1'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    React PDF
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/UladzimirKhilko/test-pdf'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
