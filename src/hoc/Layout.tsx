import React from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
interface ILoader{
    isLoad: boolean
}

const Layout = <P extends object>(Component: React.ComponentType<P>) =>
    class Leayout extends React.Component<P & ILoader>{
        render(): JSX.Element{
            const {isLoad, ...props} = this.props;

            if (!isLoad) {
                return <Loader />
            }

            return (<>
                <Navbar {...props} />
                <Component {...(props as P)} />
            </>)
        }
    };

export default Layout;