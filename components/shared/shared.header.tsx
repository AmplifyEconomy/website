import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { BiBookOpen } from 'react-icons/bi';
import { FaMapSigns } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { GiMagicGate } from 'react-icons/gi';

export const HeaderContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    z-index: 1111;

    background: hsla(200, 100%, 84%, 1);
    background: linear-gradient(90deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);

    border-bottom: 2px solid white;
    color: white;
    font-family: 'Work Sans', Arial;

    div.wrap {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        height: 100%;
        margin: auto;

        a {
            color: white;
            text-decoration: none;
            cursor: pointer;
        }
        
        a.brand {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 15px;

            img {
                height: 32px;
                margin: 0 10px 0 0;
            }

            h1 {
                font-size: 22px;
                padding: 0 0 2.5px 0;
            }

            transition: background 0.25s cubic-bezier(0.25, 1, 0.5, 1);
            &:hover { background: rgba(255, 255, 255, 0.25); }
        }

        div.menu {
            display: flex;
            height: 100%;

            a.item {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 120px;
                height: 100%;
                font-size: 16px;
                font-weight: bold;

                .icon {
                    margin: 0 10px 0 0;
                }

                transition: background 0.25s cubic-bezier(0.25, 1, 0.5, 1);
                &:hover {
                    background: rgba(255, 255, 255, 0.25);

                    div.sub-items {
                        opacity: 1;
                        pointer-events: inherit;
                    }
                }

                div.sub-items {
                    position: absolute;
                    left: 0;
                    top: 100%;
                    width: calc(100% - 4px);

                    background: hsla(200, 100%, 84%, 1);
                    background: linear-gradient(90deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);

                    border-left: 2px solid white;
                    border-right: 2px solid white;
                    border-bottom: 2px solid white;
                    border-radius: 0 0 5px 5px;

                    opacity: 0;
                    pointer-events: none;

                    transition: opacity 0.25s cubic-bezier(0.25, 1, 0.5, 1);

                    a.sub-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 30px;
                        font-size: 14px;
                        transition: background 0.25s cubic-bezier(0.25, 1, 0.5, 1);
                        &:hover { background: rgba(255, 255, 255, 0.25); }

                        .icon {
                            margin: 0 5px 0 0;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 640px) {
        display: none;
    }
`;

export const Header: FC = () => {
    return(
        <HeaderContainer>
            <div className="wrap">
                <Link href="/">
                    <a className="brand">
                        <img src="/image/amplify.white.png"/>
                        <h1>Amplify</h1>
                    </a>
                </Link>
                
                <div className="menu">
                    <Link href="/roadmap">
                        <a className="item">
                            <FaMapSigns className="icon"/>
                            Roadmap
                        </a>
                    </Link>
                    <Link href="/gateway">
                        <a className="item">
                            <GiMagicGate className="icon"/>
                            Gateway

                            <div className="sub-items">
                                <Link href="/gateway/guide">
                                    <a className="sub-item">
                                        <BiBookOpen className="icon"/>
                                        Guide
                                    </a>
                                </Link>
                            </div>
                        </a>
                    </Link>
                    <Link href="/testnet">
                        <a className="item">
                            <BiNetworkChart className="icon"/>
                            Testnet
                        </a>
                    </Link>
                    <a className="item" href="https://github.com/AmplifyEconomy" target="_blank">
                        <FiGithub className="icon"/>
                        Github
                    </a>
                </div>
            </div>
        </HeaderContainer>
    )
}