import Logo from 'components/logo';
import './global-loading.scss';

export default
function GlobalLoading() {
    

    return (
        <main className="global-loading">
            <div>
                <h1>Welcome to </h1>
                <Logo />
            </div>
        </main>
    )
}