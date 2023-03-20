function Message({ messages, currentMember }) {
    const renderMessage = ({ data, id, member }) => {
      const { name, color } = member.clientData;
      const isCurrentMember = name === currentMember.name;
      const className = `Messages-message ${isCurrentMember ? "currentMember" : ""}`;
    
      return (
        <li key={id} className={className}>
          <span className="avatar" style={{ backgroundColor: color }} />
          <div className="Message-content">
            <div className="username">{name}</div>
            <div className="text">{data}</div>
          </div>
        </li>
      );
    };
    
    return (
      <div className="message-list-wrap">
        <ul className="Messages-list">
          {messages.map((message) => renderMessage(message))}
        </ul>
      </div>
    );
  }
  
  export default Message;