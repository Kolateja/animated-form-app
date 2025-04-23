import React from 'react';
import { Tooltip } from 'antd';
import './WhatsAppCallButton.css'; // Optional: custom styling

const WhatsAppCallButton: React.FC = () => {
    return (
        <section>
            <div className="whatsapp-call-button">
                <Tooltip title="Chat on WhatsApp">
                    <a
                        href="https://wa.me/+61494311801"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        <img
                            src="/assets/img/socialmedialogos/Digital_Stacked_Green.png"
                            alt="WhatsApp"
                            width="50px"
                        />
                    </a>
                </Tooltip>
            </div>
        </section>
    );
};

export default WhatsAppCallButton;
