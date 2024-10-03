import { BadgeCheck, Heart, MessageCircle, Repeat } from 'lucide-react';

export default function Post() {
    return (
        <div className="post">
          <div className="avatar-column">
            <img src="/avatar.png" alt="avatar" className="avatar" />
          </div>
          <div className="content-column">
            <div className="post-header">
              <div className="user-info">
                <div className="name-container">
                  <span className="name">Codeverge</span>
                  <BadgeCheck className="verified-badge" size={16} />
                  <span className="username">@CodevergeHQ</span>
                </div>
                <span className="post-time">· 21h</span>
              </div>
            </div>
            <div className="post-content">
              There are some really amazing up and coming developers in the making here at Codeverge.
            </div>
            <div className="post-actions">
              <div className="action-item"><MessageCircle strokeWidth={2.5} size={16} />62</div>
              <div className="action-item"><Repeat strokeWidth={2.5} size={16} />5</div>
              <div className="action-item"><Heart strokeWidth={2.5} size={16} />311</div>
            </div>
          </div>
        </div>
      );
  };
  