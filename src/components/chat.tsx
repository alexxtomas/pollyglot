'use client';

import { useChat } from 'ai/react';
import { UserInput } from './user-input';
import { useEffect, useRef } from 'react';

export function Chat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({});

  useEffect(() => {
    if (isLoading) {
      containerRef.current?.scrollTo(0, containerRef.current?.scrollHeight);
    }
  }, [isLoading]);

  return (
    <>
      <div ref={containerRef} className="h-[350px] py-4 overflow-y-scroll ">
        {messages.map((message) => {
          const isUser = message.role === 'user';

          if (!isUser) {
            return (
              <div className="chat chat-start" key={message.id}>
                <div className="chat-bubble bg-green-600 text-white">{message.content}</div>
              </div>
            );
          }
          return (
            <div className="chat chat-end" key={message.id}>
              <div className="chat-bubble bg-blue-600 text-white">{message.content}</div>
            </div>
          );
        })}

        {isLoading && (
          <div>
            <span className="loading loading-dots loading-lg"></span>
            {/* <button type="button" onClick={() => stop()}>
            Stop
          </button> */}
          </div>
        )}
      </div>

      <UserInput
        containerRef={containerRef}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
        isLoading={isLoading}
      />
    </>
  );
}
