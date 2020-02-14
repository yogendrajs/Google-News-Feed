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
            .headerContainer {
                border: 2px solid rgb(235, 237, 240);
                position: sticky;
                width: 100%;
                top: 0;
                z-index: 1;
                background: white;
                display: flex;
                justify-content: center;
                height: 70px;
            }

            .headingFlex {
                display: flex;
            }

            .headingNews {
                color: green;
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
