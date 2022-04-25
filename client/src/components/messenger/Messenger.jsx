import './Messenger.scss';
import Conversation from './Conversation';
import Message from './Message';

export default function Messenger() {
  return (
    <div className='messenger'>

      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='Search for friends' className='chatMenuInput' />
          <Conversation />
          <Conversation />
          <Conversation />
          
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own={true}/>
            <Message />
          </div> 
          <div className="chatBoxBottom">
            
          </div>
        </div>
      </div>
      
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          online  
        </div>
      </div> 
    </div>
  )
}