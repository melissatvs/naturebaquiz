import React from 'react';
import Widget from '../../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        <div Style="display:flex;justify-content:center;align-items:center;width:288px;">
          <div Style="width:288px;">
            <svg
              version="1.1"
              id="L4"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 0 0"
            >
              <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.1"
                />
              </circle>
              <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.2"
                />
              </circle>
              <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.3"
                />
              </circle>
            </svg>
          </div>
        </div>
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
