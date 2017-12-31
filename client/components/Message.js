import React from 'react';
import {emojify} from 'react-emojione';

export default function Message (props) {

  const message = props.message;

  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={message.author.image} alt="image" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{ message.author.name }</h4>
        { emojify(message.content) }
      </div>
    </li>
  );
}
