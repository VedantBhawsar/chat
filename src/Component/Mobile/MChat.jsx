import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { ChatContext } from '../../Context/ChatContext'
import Input from '../Input'
import Arrow from '../../img/arrow.png'
import Massages from '../Massages'
import { useNavigate } from 'react-router'
const MChat = () => {
    const { data } = useContext(ChatContext);
    const { DeviceInfo } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div className='home'>
            <div className="container">
                <div className='chat'>
                    <div className='chatInfo'>
                        <img src={Arrow} onClick={
                            () => {
                                navigate('/')
                            }
                        } alt="backarrow" srcset="" width={'40em'} />
                        <div className='userinfo'>
                            <img src={data.user?.photoURL} width={"45vh"} height={"45vh"} alt="" />
                            <div>
                                <span>{data.user?.displayName}</span>
                                <div className='status'></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Massages />
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MChat