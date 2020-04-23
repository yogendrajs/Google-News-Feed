import { PageHeader } from 'antd';
import GoogleLogo from '../public/googlelogo.png';

const Header = () => (
    <div className="headerContainer">
        <PageHeader
            title={
                <div className="headingFlex">
                    <img src={ GoogleLogo } /> <h2 className="headingNews">News</h2>
                </div>
            }
        />
        <style jsx>{`
            body {
                margin: 0;
            }

            .headerContainer {
                position: sticky;
                width: 100%;
                top: 0;
                z-index: 1;
                display: flex;
                justify-content: center;
                height: 70px;
                background-color: white;
                box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
            }

            .headingFlex {
                display: flex;
            }

            .headingNews {
                color: black;
                font-weight: 20px;
                font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
            }

            img {
                height: 35px;
                margin-right: 10px;
            }
        `}</style>
    </div>
)

export default Header;
