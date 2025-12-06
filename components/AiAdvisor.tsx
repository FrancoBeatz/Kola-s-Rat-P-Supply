import React, { useState, useRef, useEffect } from 'react';
import { getRatControlAdvice } from '../services/gemini';
import { ChatMessage } from '../types';
import { Send, Bot, X, MessageSquareWarning } from 'lucide-react';

const AiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Kola's. I'm the automated extermination advisor. Ask me how to use our product safely or about our pricing." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await getRatControlAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-toxic-red hover:bg-red-700 text-white p-4 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] hover:scale-110 transition-transform animate-bounce"
        >
          <MessageSquareWarning size={32} />
        </button>
      )}

      {isOpen && (
        <div className="bg-neutral-900 border-2 border-toxic-red rounded-lg w-80 md:w-96 h-[500px] flex flex-col shadow-2xl overflow-hidden relative">
          {/* Header */}
          <div className="bg-toxic-red p-3 flex justify-between items-center">
            <h3 className="font-bold font-sans flex items-center gap-2">
              <Bot size={20} />
              AI RAT ADVISOR
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-black">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/90">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-neutral-800 text-white border border-neutral-600'
                      : 'bg-blood-dark/30 text-red-100 border border-toxic-red'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blood-dark/30 p-3 rounded-lg border border-toxic-red">
                  <span className="animate-pulse text-toxic-red">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-neutral-900 border-t border-red-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about safety..."
              className="flex-1 bg-black border border-red-900 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-toxic-red"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-toxic-red p-2 rounded hover:bg-red-700 disabled:opacity-50 text-white"
            >
              <Send size={18} />
            </button>
          </form>
          
          {/* Glitch Overlay Effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-red-900/10 z-0"></div>
        </div>
      )}
    </div>
  );
};

export default AiAdvisor;