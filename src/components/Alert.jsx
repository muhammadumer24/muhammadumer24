import { useEffect, useState } from "react";

export default function Alert({
    message,
    type = "info", // info | success | error
    duration = 4000,
    setAlertState
}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {

    }, []);

    useEffect(() => {
        if (!message) return
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false)
            setAlertState({ message: "" })
        }, duration);

        return () => clearTimeout(timer);
    }, [message])


    const getBorder = () => {
        switch (type) {
            case "success":
                return "#22c55e";
            case "error":
                return "#ef4444";
            case "info":
                return "#3b82f6";
            default:
                return "#000";
        }
    };
    if (!message) return null;

    return (
        <div id="testing"
            style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 9999,
                minWidth: "320px",
                maxWidth: "90%",
                padding: "14px 18px",
                background: getBorder(),
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                fontSize: "14px",
                fontWeight: 500,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s ease, transform 0.3s ease",
                textAlign: 'center'
            }}
        >
            {message}

        </div>
    );
}