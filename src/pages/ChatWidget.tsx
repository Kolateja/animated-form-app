import React, { useState, useEffect, FormEvent } from 'react';
import { Input, Button, Typography, Badge, Card } from 'antd';
import { CloseOutlined, SendOutlined, MessageOutlined } from '@ant-design/icons'

import './ChatWidget.css';
const { Text, Title, Paragraph } = Typography;

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'system';
    time: string;
};

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [showNotification, setShowNotification] = useState<boolean>(false);

    // Simulate receiving a message after 20 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) {
                const systemMessage: Message = {
                    id: Date.now(),
                    text: "Hello! Need any help with our tracking devices?",
                    sender: 'system',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                };
                setMessages((prev) => [...prev, systemMessage]);
                setShowNotification(true);
            }
        }, 20000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setShowNotification(false);
    };

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const userMessage: Message = {
            id: Date.now(),
            text: newMessage,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, userMessage]);
        setNewMessage('');

        setTimeout(() => {
            const responses = [
                "Thank you for your message! Our team will get back to you shortly.",
                "I'd be happy to tell you more about our tracking devices. What specifically are you interested in?",
                "Great question! Our bike trackers have a battery life of up to 2 weeks on a single charge.",
                "Our tracking devices are compatible with both iOS and Android phones.",
                "We offer a 30-day money-back guarantee on all our products.",
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const systemMessage: Message = {
                id: Date.now() + 1,
                text: randomResponse,
                sender: 'system',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, systemMessage]);
        }, 1000);
    };

    return (
        <>
            <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
                <Card
                    className="chat-header"
                    size="small"
                    title={
                        <div className="chat-title">
                            <span className="status-indicator" /> Live Support
                        </div>
                    }
                    extra={
                        <Button type="text" icon={<CloseOutlined />} onClick={toggleChat} />
                    }
                />

                <div className="chat-body">
                    <div className="welcome-message">
                        <Title level={5}>Welcome to TrackerTech Support</Title>
                        <Paragraph>How can we help you today?</Paragraph>
                    </div>

                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`message ${msg.sender === 'user' ? 'user-message' : 'system-message'}`}
                        >
                            <div className="message-content">{msg.text}</div>
                            <div className="message-time">{msg.time}</div>
                        </div>
                    ))}
                </div>

                <form className="chat-footer" onSubmit={handleSendMessage}>
                    <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        style={{ flex: 1, marginRight: 8 }}
                    />
                    <Button type="primary" htmlType="submit" icon={<SendOutlined />} />
                </form>
            </div>

            <Badge dot={showNotification} offset={[-4, 4]}>
                <Button
                    shape="circle"
                    className="chat-toggle"
                    icon={<MessageOutlined />}
                    onClick={toggleChat}
                />
            </Badge>
        </>
    );
};

export default ChatWidget;
